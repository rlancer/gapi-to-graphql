declare const _default: {
    "schemas": {
        "AssetImportMessage": {
            "description": string;
            "type": string;
            "properties": {
                "imageError": {
                    "description": string;
                    "$ref": string;
                };
                "objParseError": {
                    "description": string;
                    "$ref": string;
                };
                "filePath": {
                    "description": string;
                    "type": string;
                };
                "code": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListAssetsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "assets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Format": {
            "description": string;
            "type": string;
            "properties": {
                "resources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "formatComplexity": {
                    "$ref": string;
                    "description": string;
                };
                "root": {
                    "$ref": string;
                    "description": string;
                };
                "formatType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Asset": {
            "properties": {
                "authorName": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "remixInfo": {
                    "description": string;
                    "$ref": string;
                };
                "license": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "isCurated": {
                    "description": string;
                    "type": string;
                };
                "formats": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "presentationParams": {
                    "description": string;
                    "$ref": string;
                };
                "thumbnail": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "visibility": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PresentationParams": {
            "properties": {
                "orientingRotation": {
                    "$ref": string;
                    "description": string;
                };
                "colorSpace": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "backgroundColor": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UserAsset": {
            "description": string;
            "type": string;
            "properties": {
                "asset": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListLikedAssetsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "assets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ObjParseError": {
            "properties": {
                "startIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "line": {
                    "description": string;
                    "type": string;
                };
                "filePath": {
                    "description": string;
                    "type": string;
                };
                "lineNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "code": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Quaternion": {
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "z": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "w": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListUserAssetsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userAssets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "FormatComplexity": {
            "description": string;
            "type": string;
            "properties": {
                "lodHint": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "triangleCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ImageError": {
            "description": string;
            "type": string;
            "properties": {
                "filePath": {
                    "description": string;
                    "type": string;
                };
                "code": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "StartAssetImportResponse": {
            "properties": {
                "assetId": {
                    "description": string;
                    "type": string;
                };
                "publishUrl": {
                    "description": string;
                    "type": string;
                };
                "assetImportId": {
                    "description": string;
                    "type": string;
                };
                "assetImportMessages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "RemixInfo": {
            "properties": {
                "sourceAsset": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "File": {
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "contentType": {
                    "description": string;
                    "type": string;
                };
                "relativePath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "canonicalName": string;
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "assets": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                };
                "list": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "keywords": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "orderBy": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "format": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "curated": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "category": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "maxComplexity": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
            };
        };
        "users": {
            "resources": {
                "likedassets": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "orderBy": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "format": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                        };
                    };
                };
                "assets": {
                    "methods": {
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "orderBy": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "format": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "visibility": {
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "id": string;
    "revision": string;
    "documentationLink": string;
    "discoveryVersion": string;
    "version_module": boolean;
};
export default _default;
//# sourceMappingURL=poly-v1.d.ts.map