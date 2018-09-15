"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var gql = __importStar(require("graphql"));
var idToFilename = function (id) { return id.replace(':', '-').replace('.', '~') + ".ts"; };
var GraphQLSchema = gql.GraphQLSchema, GraphQLObjectType = gql.GraphQLObjectType;
var downloadAllAPIs = function () { return __awaiter(_this, void 0, void 0, function () {
    var data_1, sucsesfulApis_1, processApis, wsList, err_1;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, axios_1.default({
                        url: 'https://www.googleapis.com/discovery/v1/apis'
                    })];
            case 1:
                data_1 = (_a.sent()).data;
                sucsesfulApis_1 = [];
                processApis = function () {
                    return new Promise(function (resolve, reject) {
                        var processed = 0;
                        data_1.items.forEach(function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                            var name, id, version, discoveryRestUrl, itemData, ws, err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = item.name, id = item.id, version = item.version, discoveryRestUrl = item.discoveryRestUrl;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, 4, 5]);
                                        return [4 /*yield*/, axios_1.default({
                                                url: discoveryRestUrl
                                            })
                                            // new gql.GraphQLSchema({
                                            //   query: new GraphQLObjectType({
                                            //     name: "RootQueryType",
                                            //     fields: gapiToGraphL({
                                            //       gapiAsJsonSchema: itemData,
                                            //       graphQLModule: gql
                                            //     })
                                            //   })
                                            // });
                                        ];
                                    case 2:
                                        itemData = (_a.sent()).data;
                                        // new gql.GraphQLSchema({
                                        //   query: new GraphQLObjectType({
                                        //     name: "RootQueryType",
                                        //     fields: gapiToGraphL({
                                        //       gapiAsJsonSchema: itemData,
                                        //       graphQLModule: gql
                                        //     })
                                        //   })
                                        // });
                                        sucsesfulApis_1.push(item);
                                        ws = fs_1.default.createWriteStream(path_1.default.resolve(__dirname, idToFilename(id)));
                                        ws.write("export default " + JSON.stringify(itemData) + ";");
                                        ws.end();
                                        if (++processed === data_1.items.length)
                                            resolve();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        err_2 = _a.sent();
                                        console.warn('Error processing ', id, err_2);
                                        if (++processed === data_1.items.length)
                                            resolve();
                                        return [3 /*break*/, 5];
                                    case 4: return [7 /*endfinally*/];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                    });
                };
                console.log('Processing ...');
                return [4 /*yield*/, processApis()];
            case 2:
                _a.sent();
                console.log('Done!');
                wsList = fs_1.default.createWriteStream(path_1.default.resolve(__dirname, "_api_list.ts"));
                wsList.write("export default " + JSON.stringify(sucsesfulApis_1.map(function (_a) {
                    var name = _a.name, id = _a.id, version = _a.version;
                    return ({
                        module: idToFilename(id),
                        name: name,
                        id: id
                    });
                })) + ";");
                wsList.end();
                console.log('Available APIs', sucsesfulApis_1
                    .map(function (_a) {
                    var name = _a.name, id = _a.id, version = _a.version;
                    return "|" + name + " | " + version + " | require('gapi-to-graphql/google_apis/" + idToFilename(id) + "') |";
                })
                    .join('\n'));
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                throw err_1.response.data.error.message;
            case 4: return [2 /*return*/];
        }
    });
}); };
downloadAllAPIs();
//# sourceMappingURL=_download_all_gapis.js.map