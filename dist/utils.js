"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upperFirst = function (str) { return "" + str[0].toUpperCase() + str.substring(1); };
exports.upperFirst = upperFirst;
var keyMap = function (literal, valueOperator, keyTransform) {
    if (!literal)
        return null;
    var r = {};
    var index = 0;
    keys(literal).forEach(function (key) {
        var value = valueOperator(key, literal[key], index++);
        if (value !== null)
            r[keyTransform ? keyTransform(key) : key] = value;
    });
    return r;
};
exports.keyMap = keyMap;
var keys = function (obj) {
    return Object.keys(obj || {});
};
exports.keys = keys;
var values = function (obj) {
    return Object.values(obj || {});
};
exports.values = values;
