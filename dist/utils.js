"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyMap = exports.upperFirst = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upperFirst = function upperFirst(str) {
  return "" + str[0].toUpperCase() + str.substring(1);
};

var keyMap = function keyMap(literal, valueOperator, keyTransform) {
  if (!literal) return null;

  var r = {};
  (0, _keys2.default)(literal).forEach(function (key) {
    var value = valueOperator(key, literal[key]);

    if (value !== null) r[keyTransform ? keyTransform(key) : key] = valueOperator(key, literal[key]);
  });
  return r;
};

exports.upperFirst = upperFirst;
exports.keyMap = keyMap;