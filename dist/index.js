'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _parseSchemas = require('./parseSchemas');

var _parseSchemas2 = _interopRequireDefault(_parseSchemas);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var gapiAsJsonSchema = _ref.gapiAsJsonSchema,
      graphQLModule = _ref.graphQLModule;


  var graphQLTypes = (0, _parseSchemas2.default)(gapiAsJsonSchema.schemas, graphQLModule);

  var GraphQLString = graphQLModule.GraphQLString,
      GraphQLObjectType = graphQLModule.GraphQLObjectType,
      GraphQLNonNull = graphQLModule.GraphQLNonNull,
      GraphQLBoolean = graphQLModule.GraphQLBoolean,
      GraphQLInt = graphQLModule.GraphQLInt,
      GraphQLEnumType = graphQLModule.GraphQLEnumType;

  // todo take parameters and make sure they match up after santizing name

  var mapParametersToArguments = function mapParametersToArguments(parameters, resource) {
    return (0, _utils.keyMap)(parameters, function (parameter, parameterDetail) {
      var description = parameterDetail.description,
          required = parameterDetail.required,
          type = parameterDetail.type,
          enumDetails = parameterDetail.enum,
          enumDescriptions = parameterDetail.enumDescriptions;


      var gqlType = function () {

        if (enumDetails) {

          var enumValues = {};

          enumDetails.forEach(function (enumName, index) {

            var v = { value: enumName };

            if (enumDescriptions) v.description = enumDescriptions[index];

            var enumKeyVal = enumName.replace(/\s/g, '_').replace(/-/g, '_');

            if (!(0, _isNan2.default)(+enumName[0])) {
              enumKeyVal = '_' + enumKeyVal;
            }

            if (enumKeyVal === 'true') enumKeyVal = 'TRUE';

            enumValues[enumKeyVal] = v;
          });

          var enumName = '' + (0, _utils.upperFirst)(parameter.replace("$.", 'dollardot').replace(/-/g, '').replace(/\./g, '')) + (0, _utils.upperFirst)(resource) + 'EnumParam';
          return new GraphQLEnumType({
            name: enumName,
            values: enumValues
          });
        }

        switch (type) {
          case 'string':
            return GraphQLString;
          case 'boolean':
            return GraphQLBoolean;
          case 'integer':
            return GraphQLInt;
        }

        console.log('unknown type', type);

        return GraphQLString;
      }();

      return { type: required ? new GraphQLNonNull(gqlType) : gqlType, description: description };
    }, function (key) {
      return key.replace("$.", 'dollardot').replace(/-/g, '').replace(/\./g, '');
    });
  };

  var mapResources = function mapResources(resources) {

    return (0, _utils.keyMap)(resources, function (resource, resourceDetails) {

      var mapMethod = function mapMethod(methodName, methodValue) {
        var description = methodValue.description,
            parameters = methodValue.parameters,
            httpMethod = methodValue.httpMethod,
            path = methodValue.path,
            request = methodValue.request,
            response = methodValue.response,
            supportsMediaDownload = methodValue.supportsMediaDownload;


        if (httpMethod !== 'GET') return null;

        return {
          type: response ? graphQLTypes[response.$ref] : GraphQLString,
          description: description,
          args: mapParametersToArguments(parameters, resource),
          resolve: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, ctx) {
              var rootArgs, rootDefinitions, baseUrl;
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      rootArgs = parent.rootArgs, rootDefinitions = parent.rootDefinitions, baseUrl = parent.baseUrl;
                      _context.next = 3;
                      return (0, _request2.default)({
                        definitions: (0, _extends3.default)({}, rootDefinitions, parameters),
                        args: (0, _extends3.default)({}, rootArgs, args),
                        baseUrl: baseUrl,
                        path: path,
                        httpMethod: httpMethod
                      });

                    case 3:
                      return _context.abrupt('return', _context.sent);

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            }));

            function resolve(_x, _x2, _x3) {
              return _ref2.apply(this, arguments);
            }

            return resolve;
          }()
        };
      };

      var fields = (0, _utils.keyMap)(resourceDetails.methods, mapMethod);

      if ((0, _utils.keys)(fields || {}).length === 0) return null;

      return {
        type: new GraphQLObjectType({
          name: (0, _utils.upperFirst)(resource) + '_',
          fields: fields
        }),
        resolve: function resolve(parent) {
          return parent;
        }
      };
    });
  };

  var mapApi = function mapApi(apiJson) {
    var name = apiJson.name,
        id = apiJson.id,
        description = apiJson.description,
        parameters = apiJson.parameters,
        version = apiJson.version,
        resources = apiJson.resources,
        baseUrl = apiJson.baseUrl,
        schemas = apiJson.schemas;


    var fields = mapResources(resources);

    if ((0, _utils.keys)(fields).length === 0) {
      throw 'No fields for API ' + id;
    }

    return (0, _defineProperty3.default)({}, '' + (name + (0, _utils.upperFirst)(version)).replace('.', '').replace(':', ''), {
      type: new GraphQLObjectType({
        name: (0, _utils.upperFirst)(name) + 'Api',
        description: description,
        fields: fields
      }),
      args: mapParametersToArguments(parameters, 'Root'),
      resolve: function resolve(_, args) {
        return { rootArgs: args, rootDefinitions: parameters, baseUrl: baseUrl };
      }
    });
  };

  return mapApi(gapiAsJsonSchema);
};

module.exports = exports['default'];