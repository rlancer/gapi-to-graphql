import { keyMap, upperFirst } from './utils'

import { GraphQLEnumType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLNonNull } from 'graphql'

const mapParametersToArguments = (parameters, resource) => {
  return keyMap(
    parameters,
    (parameter, parameterDetail) => {
      const { description, required, type, enum: enumDetails, enumDescriptions } = parameterDetail

      const gqlType = (() => {
        if (enumDetails) {
          const enumValues = {}

          enumDetails.forEach((enumName, index) => {
            const v = { value: enumName, description: null }

            if (enumDescriptions) v.description = enumDescriptions[index]

            let enumKeyVal = enumName.replace(/\s/g, '_').replace(/-/g, '_')

            if (!Number.isNaN(+enumName[0])) {
              enumKeyVal = `_${enumKeyVal}`
            }

            if (enumKeyVal === 'true') enumKeyVal = 'TRUE'

            enumValues[enumKeyVal] = v
          })

          const uniqueEnumNames = {}

          const getUniqueEnumName = enumName => {
            if (uniqueEnumNames[enumName] === undefined) {
              uniqueEnumNames[enumName] = 0
            } else {
              uniqueEnumNames[enumName]++
            }

            return `${enumName}${uniqueEnumNames[enumName] > 0 ? uniqueEnumNames[enumName] : ''}`
          }

          const enumName = `${upperFirst(
            parameter
              .replace('$.', 'dollardot')
              .replace(/-/g, '')
              .replace(/\./g, '')
          )}${upperFirst(resource)}EnumParam`
          return new GraphQLEnumType({
            name: getUniqueEnumName(enumName),
            values: enumValues
          })
        }

        switch (type) {
          case 'string':
            return GraphQLString
          case 'boolean':
            return GraphQLBoolean
          case 'integer':
            return GraphQLInt
        }

        console.log('Unknown argument type', type)

        return GraphQLString
      })()

      return {
        type: required ? new GraphQLNonNull(gqlType) : gqlType,
        description
      }
    },
    key =>
      key
        .replace('$.', 'dollardot')
        .replace(/-/g, '')
        .replace(/\./g, '')
  )
}

export { mapParametersToArguments }
