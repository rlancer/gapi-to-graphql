declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
    "version": string;
    "revision": string;
    "title": string;
    "description": string;
    "ownerDomain": string;
    "ownerName": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "documentationLink": string;
    "protocol": string;
    "baseUrl": string;
    "basePath": string;
    "rootUrl": string;
    "servicePath": string;
    "batchPath": string;
    "parameters": {
        "alt": {
            "type": string;
            "description": string;
            "default": string;
            "enum": string[];
            "enumDescriptions": string[];
            "location": string;
        };
        "fields": {
            "type": string;
            "description": string;
            "location": string;
        };
        "key": {
            "type": string;
            "description": string;
            "location": string;
        };
        "oauth_token": {
            "type": string;
            "description": string;
            "location": string;
        };
        "prettyPrint": {
            "type": string;
            "description": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "type": string;
            "description": string;
            "location": string;
        };
        "userIp": {
            "type": string;
            "description": string;
            "location": string;
        };
    };
    "schemas": {
        "DirectoryList": {
            "id": string;
            "type": string;
            "properties": {
                "discoveryVersion": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "description": {
                                "type": string;
                                "description": string;
                            };
                            "discoveryLink": {
                                "type": string;
                                "description": string;
                            };
                            "discoveryRestUrl": {
                                "type": string;
                                "description": string;
                            };
                            "documentationLink": {
                                "type": string;
                                "description": string;
                            };
                            "icons": {
                                "type": string;
                                "description": string;
                                "properties": {
                                    "x16": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "x32": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "kind": {
                                "type": string;
                                "description": string;
                                "default": string;
                            };
                            "labels": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "preferred": {
                                "type": string;
                                "description": string;
                            };
                            "title": {
                                "type": string;
                                "description": string;
                            };
                            "version": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "JsonSchema": {
            "id": string;
            "type": string;
            "properties": {
                "$ref": {
                    "type": string;
                    "description": string;
                };
                "additionalProperties": {
                    "$ref": string;
                    "description": string;
                };
                "annotations": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "required": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                    };
                };
                "default": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "enum": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "enumDescriptions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "format": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "items": {
                    "$ref": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "maximum": {
                    "type": string;
                    "description": string;
                };
                "minimum": {
                    "type": string;
                    "description": string;
                };
                "pattern": {
                    "type": string;
                    "description": string;
                };
                "properties": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "readOnly": {
                    "type": string;
                    "description": string;
                };
                "repeated": {
                    "type": string;
                    "description": string;
                };
                "required": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "variant": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "discriminant": {
                            "type": string;
                            "description": string;
                        };
                        "map": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "$ref": {
                                        "type": string;
                                    };
                                    "type_value": {
                                        "type": string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        "RestDescription": {
            "id": string;
            "type": string;
            "properties": {
                "auth": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "oauth2": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "scopes": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "description": {
                                                "type": string;
                                                "description": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "basePath": {
                    "type": string;
                    "description": string;
                };
                "baseUrl": {
                    "type": string;
                    "description": string;
                };
                "batchPath": {
                    "type": string;
                    "description": string;
                };
                "canonicalName": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "discoveryVersion": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "documentationLink": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "exponentialBackoffDefault": {
                    "type": string;
                    "description": string;
                };
                "features": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "icons": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "x16": {
                            "type": string;
                            "description": string;
                        };
                        "x32": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "methods": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "ownerDomain": {
                    "type": string;
                    "description": string;
                };
                "ownerName": {
                    "type": string;
                    "description": string;
                };
                "packagePath": {
                    "type": string;
                    "description": string;
                };
                "parameters": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "protocol": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resources": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "revision": {
                    "type": string;
                    "description": string;
                };
                "rootUrl": {
                    "type": string;
                    "description": string;
                };
                "schemas": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "servicePath": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                };
                "version_module": {
                    "type": string;
                };
            };
        };
        "RestMethod": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "etagRequired": {
                    "type": string;
                    "description": string;
                };
                "httpMethod": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "mediaUpload": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "accept": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "maxSize": {
                            "type": string;
                            "description": string;
                        };
                        "protocols": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "resumable": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "multipart": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "path": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                                "simple": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "multipart": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "path": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "parameterOrder": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "parameters": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "request": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "$ref": {
                            "type": string;
                            "description": string;
                        };
                        "parameterName": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "response": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "$ref": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "scopes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "supportsMediaDownload": {
                    "type": string;
                    "description": string;
                };
                "supportsMediaUpload": {
                    "type": string;
                    "description": string;
                };
                "supportsSubscription": {
                    "type": string;
                    "description": string;
                };
                "useMediaDownloadService": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RestResource": {
            "id": string;
            "type": string;
            "properties": {
                "methods": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "resources": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
            };
        };
    };
    "resources": {
        "apis": {
            "methods": {
                "getRest": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "api": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "version": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "name": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "preferred": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=discovery-v1.d.ts.map