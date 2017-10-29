'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var definitions = _ref.definitions,
        args = _ref.args,
        baseUrl = _ref.baseUrl,
        path = _ref.path,
        httpMethod = _ref.httpMethod;

    var params, _ref3, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {};

            (0, _keys2.default)(args).forEach(function (key) {
              var _definitions$key = definitions[key],
                  type = _definitions$key.type,
                  location = _definitions$key.location;


              if (location === 'query') params[key] = args[key];
            });

            console.log('make api req', path, baseUrl, params);
            _context.prev = 3;
            _context.next = 6;
            return (0, _axios2.default)({
              url: path,
              method: httpMethod,
              params: params,
              baseURL: baseUrl
            });

          case 6:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt('return', data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](3);

            console.error(_context.t0);
            throw _context.t0.response.data.error.message;

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 11]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = exports['default'];