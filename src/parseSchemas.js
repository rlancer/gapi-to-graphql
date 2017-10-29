import {upperFirst, keyMap} from './utils'

export default (schemas, graphQLModule) => {

  const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLInt, GraphQLList, GraphQLEnumType} = graphQLModule
  const types = {}


  const parseProperties = ({name, description, properties}) => {

    return new GraphQLObjectType({
      name,
      description,
      fields: () => {

        const rFields = keyMap(properties, (propertyName, propertyDetail) => {


          const {type, description, properties, $ref, format, additionalProperties} = propertyDetail

          if (additionalProperties && additionalProperties.$ref) {
            console.log('weirdddd')
            return null
          }

          const rType = (() => {
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

                const {items} = propertyDetail
                const {enum: enumItems, $ref, type} = items
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
                else if (type === 'string') {
                  return new GraphQLList(GraphQLString)
                }
                else if ($ref) {

                  return new GraphQLList(types[$ref])
                }

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
      if (type === 'object')
        types [id] = parseProperties({name: id, description, properties})
      else {
        console.log('non object!', schema)
      }

    })

    return types
  }

  return start()
}

