'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
      GraphQLObjectType = graphQLModule.GraphQLObjectType;


  var mapParametersToArguments = function mapParametersToArguments(parameters) {
    return (0, _utils.keyMap)(parameters, function (parameter, parameterDetail) {
      var description = parameterDetail.description,
          required = parameterDetail.required,
          type = parameterDetail.type;

      return { type: GraphQLString, description: description };
    }, function (key) {
      return key.replace("$.", 'dollardot').replace(/-/g, '');
    });
  };

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
      args: mapParametersToArguments(parameters),
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

  var mapResources = function mapResources(resources) {

    return (0, _utils.keyMap)(resources, function (resource, resourceDetails) {

      var fields = (0, _utils.keyMap)(resourceDetails.methods, mapMethod);

      if ((0, _keys2.default)(fields || {}).length === 0) return null;

      return {
        type: new GraphQLObjectType({
          name: resource,
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

    if ((0, _keys2.default)(fields).length === 0) {
      throw 'No fields for API ' + id;
    }

    return (0, _defineProperty3.default)({}, '' + (name + (0, _utils.upperFirst)(version)).replace('.', '').replace(':', ''), {
      type: new GraphQLObjectType({
        name: (0, _utils.upperFirst)(name),
        description: description,
        fields: fields
      }),
      args: mapParametersToArguments(parameters),
      resolve: function resolve(_, args) {
        return { rootArgs: args, rootDefinitions: parameters, baseUrl: baseUrl };
      }
    });
  };

  return mapApi(gapiAsJsonSchema);
};

module.exports = exports['default'];