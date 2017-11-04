'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (schemas, graphQLModule) {
  var GraphQLObjectType = graphQLModule.GraphQLObjectType,
      GraphQLString = graphQLModule.GraphQLString,
      GraphQLBoolean = graphQLModule.GraphQLBoolean,
      GraphQLSchema = graphQLModule.GraphQLSchema,
      GraphQLInt = graphQLModule.GraphQLInt,
      GraphQLList = graphQLModule.GraphQLList,
      GraphQLEnumType = graphQLModule.GraphQLEnumType;

  var types = {};

  // sometimes arrays have anonymous types and need to make sure they have unique names
  var arrayItemTypesCount = {};

  var parseProperties = function parseProperties(_ref) {
    var name = _ref.name,
        description = _ref.description,
        properties = _ref.properties;


    return new GraphQLObjectType({
      name: name,
      description: description,
      fields: function fields() {

        var rFields = (0, _utils.keyMap)(properties, function (propertyName, propertyDetail) {

          if (propertyName === 'rows') console.log('attribute ', propertyDetail);

          var type = propertyDetail.type,
              description = propertyDetail.description,
              properties = propertyDetail.properties,
              $ref = propertyDetail.$ref,
              format = propertyDetail.format,
              additionalProperties = propertyDetail.additionalProperties;


          if (additionalProperties && additionalProperties.$ref) {
            // strange description in YouTube API, ignoring it for now
            return null;
          }

          var rType = function () {

            var handleArray = function handleArray(_ref2) {
              var propertyName = _ref2.propertyName,
                  propertyDetail = _ref2.propertyDetail;
              var items = propertyDetail.items;
              var enumItems = items.enum,
                  $ref = items.$ref,
                  type = items.type,
                  properties = items.properties;

              if (enumItems) {

                var values = {};
                enumItems.forEach(function (enumItem) {
                  values[enumItem] = { value: enumItem };
                });

                return new GraphQLEnumType({
                  name: propertyName,
                  values: values
                });
              } else if (type === 'string' || type === 'any') {
                return new GraphQLList(GraphQLString);
              } else if (type === 'integer') {
                return new GraphQLList(GraphQLInt);
              } else if (type === 'object') {

                var arrayItemTypeName = '' + name + (0, _utils.upperFirst)(propertyName) + 'Item';

                return new GraphQLList(parseProperties({
                  name: '' + arrayItemTypeName,
                  properties: properties
                }));
              } else if ($ref) {
                return new GraphQLList(types[$ref]);
              } else if (type === 'array') {
                return new GraphQLList(handleArray({ propertyDetail: propertyDetail.items }));
              } else {
                console.log('Unknown response ?', propertyDetail);
              }
            };

            if ($ref) {

              if (!types[$ref]) console.log('CAN NOT FIND REF OF TYPE ', $ref, name);

              return types[$ref];
            }

            switch (type) {
              case 'any': // Any type? No idea how to handle this so going to treat it as string
              case 'string':
                return GraphQLString;
                break;
              case 'array':
                {
                  return handleArray({ propertyName: propertyName, propertyDetail: propertyDetail });
                }
                break;
              case 'object':
                return parseProperties({ name: propertyName, description: description, propertyDetail: propertyDetail });
                break;
              case 'integer':
              case 'number':
                return GraphQLInt;
                break;
              case 'boolean':
                return GraphQLBoolean;
                break;
              default:
                return GraphQLString;
            }
          }();

          return { type: rType, description: description };
        });

        if (!rFields) {

          return { thisTypeHasNoFieldsAndGraphQLDontLikeThat: { type: GraphQLBoolean } };
        }

        return rFields;
      }
    });
  };

  var start = function start() {

    (0, _values2.default)(schemas).forEach(function (schema) {

      // console.dir(schema)
      var id = schema.id,
          type = schema.type,
          properties = schema.properties,
          description = schema.description;

      if (type === 'object') {
        types[id] = parseProperties({ name: id, description: description, properties: properties });
      } else {
        console.log('non object!', schema);
      }
    });

    return types;
  };

  return start();
};

module.exports = exports['default'];