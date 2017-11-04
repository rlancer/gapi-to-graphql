'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

exports.default = function (schemas, graphQLModule) {
  var GraphQLObjectType = graphQLModule.GraphQLObjectType,
      GraphQLString = graphQLModule.GraphQLString,
      GraphQLBoolean = graphQLModule.GraphQLBoolean,
      GraphQLSchema = graphQLModule.GraphQLSchema,
      GraphQLInt = graphQLModule.GraphQLInt,
      GraphQLList = graphQLModule.GraphQLList,
      GraphQLEnumType = graphQLModule.GraphQLEnumType;

  var types = {};
  var existingNames = {};

  // renames kind of sloppy can do something where if a root type exists it say's TasksRoot instead of te second being Tasks2
  var getUniqueName = function getUniqueName(name, isRoot) {

    if (existingNames[name]) {
      var incr = ++existingNames[name];
      return name + incr;
    } else {
      existingNames[name] = 1;
      return name;
    }
  };

  // sometimes arrays have anonymous types and need to make sure they have unique names
  var arrayItemTypesCount = {};

  var handleArray = function handleArray(_ref) {
    var typeName = _ref.typeName,
        propertyName = _ref.propertyName,
        propertyDetail = _ref.propertyDetail;
    var items = propertyDetail.items;
    var enumItems = items.enum,
        $ref = items.$ref,
        type = items.type,
        properties = items.properties;

    if (enumItems) {

      var _values = {};
      enumItems.forEach(function (enumItem) {
        _values[enumItem] = { value: enumItem };
      });

      return new GraphQLEnumType({
        name: propertyName,
        values: _values
      });
    } else if (type === 'string' || type === 'any') {
      return new GraphQLList(GraphQLString);
    } else if (type === 'integer') {
      return new GraphQLList(GraphQLInt);
    } else if (type === 'object') {

      var arrayItemTypeName = '' + typeName + (0, _utils.upperFirst)(propertyName) + 'Item';

      return new GraphQLList(parseProperties({
        name: '' + arrayItemTypeName,
        properties: properties
      }));
    } else if ($ref) {
      return new GraphQLList(types[$ref]);
    } else if (type === 'array') {

      return new GraphQLList(handleArray({ typeName: typeName, propertyDetail: propertyDetail.items }));
    } else {
      console.log('Unknown response ?', propertyDetail);
    }
  };

  var parseProperties = function parseProperties(_ref2) {
    var name = _ref2.name,
        description = _ref2.description,
        properties = _ref2.properties;


    return new GraphQLObjectType({
      name: getUniqueName(name),
      description: description,
      fields: function fields() {

        var rFields = (0, _utils.keyMap)(properties, function (propertyName, propertyDetail) {
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
                  return handleArray({ typeName: name, propertyName: propertyName, propertyDetail: propertyDetail });
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

    (0, _utils.values)(schemas).forEach(function (schema) {

      // console.dir(schema)
      var id = schema.id,
          type = schema.type,
          properties = schema.properties,
          description = schema.description;


      var uid = getUniqueName(id, true);

      if (types[uid]) {
        console.warn('Type', id, uid, schema, 'exists');
      }

      if (type === 'object') {
        types[uid] = parseProperties({ name: uid, description: description, properties: properties });
      } else if (type === 'array') {

        types[uid] = handleArray({ typeName: 'Root', propertyName: uid, propertyDetail: schema });
      } else {
        console.log('non object type \'' + type + '\'!', schema);
      }
    });

    return types;
  };

  return start();
};

module.exports = exports['default'];