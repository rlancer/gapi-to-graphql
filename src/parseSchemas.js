import {upperFirst, keyMap} from './utils'

export default (schemas, graphQLModule) => {

  const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLInt, GraphQLList, GraphQLEnumType} = graphQLModule
  const types = {}

  // sometimes arrays have anonymous types and need to make sure they have unique names
  const arrayItemTypesCount = {}

  const parseProperties = ({name, description, properties}) => {


    return new GraphQLObjectType({
      name,
      description,
      fields: () => {

        const rFields = keyMap(properties, (propertyName, propertyDetail) => {


          if (propertyName === 'rows')
            console.log('attribute ', propertyDetail)

          const {type, description, properties, $ref, format, additionalProperties} = propertyDetail

          if (additionalProperties && additionalProperties.$ref) {
            // strange description in YouTube API, ignoring it for now
            return null
          }


          const rType = (() => {

            const handleArray = ({propertyName, propertyDetail}) => {
              const {items} = propertyDetail
              const {enum: enumItems, $ref, type, properties} = items
              if (enumItems) {

                const values = {}
                enumItems.forEach(enumItem => {
                  values[enumItem] = {value: enumItem}
                })

                return new GraphQLEnumType({
                  name: propertyName,
                  values
                })
              }
              else if (type === 'string' || type === 'any') {
                return new GraphQLList(GraphQLString)
              }

              else if (type === 'integer') {
                return new GraphQLList(GraphQLInt)
              }
              else if (type === 'object') {

                const arrayItemTypeName = `${name}${upperFirst(propertyName)}Item`

                return new GraphQLList(parseProperties({
                  name: `${arrayItemTypeName}`,
                  properties
                }))
              }
              else if ($ref) {
                return new GraphQLList(types[$ref])
              }
              else if (type === 'array') {
                return new GraphQLList(handleArray({propertyDetail: propertyDetail.items}))
              }
              else {
                console.log('Unknown response ?', propertyDetail)
              }


            }

            if ($ref) {

              if (!types[$ref])
                console.log('CAN NOT FIND REF OF TYPE ', $ref, name)

              return types[$ref]
            }


            switch (type) {
              case 'any': // Any type? No idea how to handle this so going to treat it as string
              case 'string':
                return GraphQLString
                break
              case 'array': {
                return handleArray({propertyName, propertyDetail})
              }
                break
              case 'object':
                return parseProperties({name: propertyName, description, propertyDetail})
                break
              case 'integer':
              case 'number':
                return GraphQLInt
                break
              case 'boolean':
                return GraphQLBoolean
                break
              default:
                return GraphQLString
            }
          })()

          return {type: rType, description}

        })

        if (!rFields) {

          return {thisTypeHasNoFieldsAndGraphQLDontLikeThat: {type: GraphQLBoolean}}
        }

        return rFields
      }
    })
  }


  const start = () => {


    Object.values(schemas).forEach(schema => {

        // console.dir(schema)
        const {id, type, properties, description} = schema
        if (type === 'object') {
          types [id] = parseProperties({name: id, description, properties})
        }
        else {
          console.log('non object!', schema)
        }

      }
    )

    return types
  }

  return start()
}

