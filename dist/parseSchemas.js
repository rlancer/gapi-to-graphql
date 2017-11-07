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
  var getUniqueName = function getUniqueName(_ref) {
    var name = _ref.name,
        parentPath = _ref.parentPath;


    if (existingNames[name]) {
      var incr = ++existingNames[name];
      return name + incr;
    } else {
      existingNames[name] = 1;
      return name;
    }
  };

  // sometimes arrays have anonymous types and need to make sure they have unique names
  var handleArray = function handleArray(_ref2) {
    var typeName = _ref2.typeName,
        propertyName = _ref2.propertyName,
        propertyDetail = _ref2.propertyDetail,
        parentPath = _ref2.parentPath;
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
        name: getUniqueName({ name: propertyName, parentPath: parentPath }),
        values: _values
      });
    } else if (type === 'string' || type === 'any') {
      return new GraphQLList(GraphQLString);
    } else if (type === 'integer') {
      return new GraphQLList(GraphQLInt);
    } else if (type === 'object') {

      var arrayItemTypeName = '' + typeName + (0, _utils.upperFirst)(propertyName) + 'Item';

      return new GraphQLList(parseProperties({
        name: arrayItemTypeName,
        properties: properties,
        parentPath: parentPath,
        fromArray: true
      }));
    } else if ($ref) {
      return new GraphQLList(types[$ref]);
    } else if (type === 'array') {

      return new GraphQLList(handleArray({ typeName: typeName, propertyDetail: propertyDetail.items }));
    } else {
      console.log('Unknown response ?', propertyDetail);
    }
  };

  var parseProperties = function parseProperties(_ref3) {
    var name = _ref3.name,
        description = _ref3.description,
        properties = _ref3.properties,
        _ref3$parentPath = _ref3.parentPath,
        parentPath = _ref3$parentPath === undefined ? [] : _ref3$parentPath,
        _ref3$fromArray = _ref3.fromArray,
        fromArray = _ref3$fromArray === undefined ? false : _ref3$fromArray;


    //if (name === 'ChannelContentDetails')
    // console.dir(properties, {depth: 5})

    parentPath.push({ name: name, properties: properties });

    //    console.log(fromArray ? '[]' : '>>' + parentPath.map(p => p.name).join(' / '))


    return new GraphQLObjectType({
      name: getUniqueName({ name: name, parentPath: parentPath }),
      description: description,
      fields: function fields() {

        var rFields = (0, _utils.keyMap)(properties, function (propertyName, propertyDetail) {
          var type = propertyDetail.type,
              description = propertyDetail.description,
              props = propertyDetail.properties,
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
                  return handleArray({ typeName: name, propertyName: propertyName, propertyDetail: propertyDetail, parentPath: parentPath });
                }
                break;
              case 'object':
                return parseProperties({ name: propertyName, description: description, propertyDetail: propertyDetail, parentPath: parentPath });
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
        }, function (key) {
          return key.replace("@", "at_");
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


      if (types[id]) {
        console.warn('Type', id, schema, 'exists');
      }

      if (type === 'object') {
        types[id] = parseProperties({ name: id, description: description, properties: properties });
      } else if (type === 'array') {

        types[id] = handleArray({ typeName: 'Root', propertyName: id, propertyDetail: schema });
      } else {

        // got one any here
        console.log('non object type \'' + type + '\'!', schema);
      }
    });

    return types;
  };

  return start();
};

module.exports = exports['default'];