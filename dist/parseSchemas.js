"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var graphql_1 = require("graphql");
exports.default = (function (schemas) {
    var types = {};
    var existingNames = {};
    // renames kind of sloppy can do something where if a root type exists it say's TasksRoot instead of te second being Tasks2
    var getUniqueName = function (_a) {
        var name = _a.name, parentPath = _a.parentPath;
        if (existingNames[name]) {
            var incr = ++existingNames[name];
            return name + incr;
        }
        else {
            existingNames[name] = 1;
            return name;
        }
    };
    // sometimes arrays have anonymous types and need to make sure they have unique names
    var handleArray = function (_a) {
        var typeName = _a.typeName, propertyName = _a.propertyName, propertyDetail = _a.propertyDetail, parentPath = _a.parentPath;
        var items = propertyDetail.items;
        var enumItems = items.enum, $ref = items.$ref, type = items.type, properties = items.properties;
        if (enumItems) {
            var values_1 = {};
            enumItems.forEach(function (enumItem) {
                values_1[enumItem] = { value: enumItem };
            });
            return new graphql_1.GraphQLEnumType({
                name: getUniqueName({ name: propertyName, parentPath: parentPath }),
                values: values_1
            });
        }
        else if (type === "string" || type === "any") {
            return new graphql_1.GraphQLList(graphql_1.GraphQLString);
        }
        else if (type === "integer") {
            return new graphql_1.GraphQLList(graphql_1.GraphQLInt);
        }
        else if (type === "object") {
            var arrayItemTypeName = "" + typeName + utils_1.upperFirst(propertyName) + "Item";
            return new graphql_1.GraphQLList(parseProperties({
                name: arrayItemTypeName,
                properties: properties,
                parentPath: parentPath,
                fromArray: true
            }));
        }
        else if ($ref) {
            return new graphql_1.GraphQLList(types[$ref]);
        }
        else if (type === "array") {
            return new graphql_1.GraphQLList(handleArray({ typeName: typeName, propertyDetail: propertyDetail.items }));
        }
        else {
            console.log("Unknown response ?", propertyDetail);
        }
    };
    var parseProperties = function (_a) {
        //if (name === 'ChannelContentDetails')
        // console.dir(properties, {depth: 5})
        var name = _a.name, description = _a.description, properties = _a.properties, _b = _a.parentPath, parentPath = _b === void 0 ? [] : _b, _c = _a.fromArray, fromArray = _c === void 0 ? false : _c;
        parentPath.push({ name: name, properties: properties });
        //    console.log(fromArray ? '[]' : '>>' + parentPath.map(p => p.name).join(' / '))
        return new graphql_1.GraphQLObjectType({
            name: getUniqueName({ name: name, parentPath: parentPath }),
            description: description,
            fields: function () {
                var rFields = utils_1.keyMap(properties, function (propertyName, propertyDetail) {
                    var type = propertyDetail.type, description = propertyDetail.description, props = propertyDetail.properties, $ref = propertyDetail.$ref, format = propertyDetail.format, additionalProperties = propertyDetail.additionalProperties;
                    if (additionalProperties && additionalProperties.$ref) {
                        // strange description in YouTube API, ignoring it for now
                        return null;
                    }
                    var rType = (function () {
                        if ($ref) {
                            if (!types[$ref])
                                console.log("CAN NOT FIND REF OF TYPE ", $ref, name);
                            return types[$ref];
                        }
                        switch (type) {
                            case "any": // Any type? No idea how to handle this so going to treat it as string
                            case "string":
                                return graphql_1.GraphQLString;
                                break;
                            case "array":
                                {
                                    return handleArray({ typeName: name, propertyName: propertyName, propertyDetail: propertyDetail, parentPath: parentPath });
                                }
                                break;
                            case "object":
                                return parseProperties({ name: propertyName, description: description, propertyDetail: propertyDetail, parentPath: parentPath });
                                break;
                            case "integer":
                            case "number":
                                return graphql_1.GraphQLInt;
                                break;
                            case "boolean":
                                return graphql_1.GraphQLBoolean;
                                break;
                            default:
                                return graphql_1.GraphQLString;
                        }
                    })();
                    return { type: rType, description: description };
                }, (function (key) { return key.replace("@", "at_"); }));
                if (!rFields) {
                    return { thisTypeHasNoFieldsAndGraphQLDontLikeThat: { type: graphql_1.GraphQLBoolean } };
                }
                return rFields;
            }
        });
    };
    var start = function () {
        for (var k in schemas) {
            var schema = schemas[k];
            // console.dir(schema)
            var id = schema.id, type = schema.type, properties = schema.properties, description = schema.description;
            if (types[id]) {
                console.warn("Type", id, schema, "exists");
            }
            if (type === "object") {
                types[id] = parseProperties({ name: id, description: description, properties: properties });
            }
            else if (type === "array") {
                types[id] = handleArray({ typeName: "Root", propertyName: id, propertyDetail: schema });
            }
            else {
                // got one any here
                console.log("non object type '" + type + "'!", schema);
            }
        }
        return types;
    };
    return start();
});
//# sourceMappingURL=parseSchemas.js.map