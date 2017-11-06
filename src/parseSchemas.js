import {upperFirst, keyMap, keys, values} from './utils'

export default (schemas, graphQLModule) => {


  const path = []
  const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLInt, GraphQLList, GraphQLEnumType} = graphQLModule
  const types = {}
  const existingNames = {}


  // renames kind of sloppy can do something where if a root type exists it say's TasksRoot instead of te second being Tasks2
  const getUniqueName = (name, isRoot) => {


    if (existingNames[name]) {
      const incr = ++existingNames[name]
      return name + incr
    }
    else {
      existingNames[name] = 1
      return name
    }

  }

  // sometimes arrays have anonymous types and need to make sure they have unique names
  const arrayItemTypesCount = {}

  const handleArray = ({typeName, propertyName, propertyDetail, parentPath}) => {
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

      const arrayItemTypeName = `${typeName}${upperFirst(propertyName)}Item`

      return new GraphQLList(parseProperties({
        name: `${arrayItemTypeName}`,
        properties,
        parentPath,
        fromArray: true
      }))
    }
    else if ($ref) {
      return new GraphQLList(types[$ref])
    }
    else if (type === 'array') {

      return new GraphQLList(handleArray({typeName, propertyDetail: propertyDetail.items}))
    }
    else {
      console.log('Unknown response ?', propertyDetail)
    }


  }

  const parseProperties = ({name, description, properties, parentPath = [], fromArray = false}) => {


    //if (name === 'ChannelContentDetails')
      // console.dir(properties, {depth: 5})

    parentPath.push({name, properties})

//    console.log(fromArray ? '[]' : '>>' + parentPath.map(p => p.name).join(' / '))

    if (parentPath.length > 1) {
      // console.dir(parentPath,{depth:6})
    }

    let yy = 0;
    const fields = (xx) => {

      if (yy++ > 0) {
        console.log('YYYYYYYYY')
      }


      let xxt = 0
      const rFields = keyMap(properties, (propertyName, propertyDetail) => {


        const {type, description, properties:props, $ref, format, additionalProperties} = propertyDetail

        if (name === 'ChannelContentDetails')
          console.log('propertyName', propertyName, type, xxt++, properties)

        if (additionalProperties && additionalProperties.$ref) {
          // strange description in YouTube API, ignoring it for now
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
              return handleArray({typeName: name, propertyName, propertyDetail, parentPath})
            }
              break
            case 'object':
              return parseProperties({name: propertyName, description, propertyDetail, parentPath})
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

      }, (key => key.replace("@", "at_")))

      if (!rFields) {

        return {thisTypeHasNoFieldsAndGraphQLDontLikeThat: {type: GraphQLBoolean}}
      }

      return rFields
    }


    // console.log(path.join(' / '))
    const rObject = new GraphQLObjectType({
      name: getUniqueName(name),
      description,
      fields: () => fields(rObject)
    })

    return rObject

  }


  const start = () => {


    values(schemas).forEach(schema => {

        // console.dir(schema)
        const {id, type, properties, description} = schema


        if (types [id]) {
          console.warn('Type', id, schema, 'exists')
        }


        if (type === 'object') {
          types [id] = parseProperties({name: id, description, properties})
        }
        else if (type === 'array') {

          types [id] = handleArray({typeName: 'Root', propertyName: id, propertyDetail: schema})


        }
        else {
          console.log(`non object type '${type}'!`, schema,)
        }

      }
    )

    return types
  }

  return start()
}

