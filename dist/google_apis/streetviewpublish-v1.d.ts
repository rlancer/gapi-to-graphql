declare const _default: {
    "version_module": boolean;
    "schemas": {
        "BatchGetPhotosResponse": {
            "description": string;
            "type": string;
            "properties": {
                "results": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Place": {
            "description": string;
            "type": string;
            "properties": {
                "placeId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UploadRef": {
            "description": string;
            "type": string;
            "properties": {
                "uploadUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchDeletePhotosRequest": {
            "description": string;
            "type": string;
            "properties": {
                "photoIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "LatLng": {
            "description": string;
            "type": string;
            "properties": {
                "latitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdatePhotoRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "photo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Pose": {
            "description": string;
            "type": string;
            "properties": {
                "level": {
                    "description": string;
                    "$ref": string;
                };
                "heading": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "altitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pitch": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latLngPair": {
                    "description": string;
                    "$ref": string;
                };
                "roll": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "PhotoId": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchUpdatePhotosRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updatePhotoRequests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListPhotosResponse": {
            "description": string;
            "type": string;
            "properties": {
                "photos": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Photo": {
            "description": string;
            "type": string;
            "properties": {
                "thumbnailUrl": {
                    "description": string;
                    "type": string;
                };
                "captureTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "viewCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "downloadUrl": {
                    "description": string;
                    "type": string;
                };
                "places": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "connections": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pose": {
                    "$ref": string;
                    "description": string;
                };
                "photoId": {
                    "$ref": string;
                    "description": string;
                };
                "uploadReference": {
                    "description": string;
                    "$ref": string;
                };
                "shareLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "PhotoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "status": {
                    "description": string;
                    "$ref": string;
                };
                "photo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Connection": {
            "description": string;
            "type": string;
            "properties": {
                "target": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BatchUpdatePhotosResponse": {
            "description": string;
            "type": string;
            "properties": {
                "results": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                        "type": string;
                    };
                };
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchDeletePhotosResponse": {
            "description": string;
            "type": string;
            "properties": {
                "status": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Level": {
            "description": string;
            "type": string;
            "properties": {
                "number": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/streetviewpublish": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "photos": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "view": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "batchUpdate": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "batchDelete": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {};
                };
                "batchGet": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "view": {
                            "description": string;
                            "type": string;
                            "location": string;
                            "enum": string[];
                        };
                        "photoIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "photo": {
            "methods": {
                "get": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "photoId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "view": {
                            "description": string;
                            "type": string;
                            "location": string;
                            "enum": string[];
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "update": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "id": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "create": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "startUpload": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "photoId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
    };
    "parameters": {
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
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
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
};
export default _default;
//# sourceMappingURL=streetviewpublish-v1.d.ts.map