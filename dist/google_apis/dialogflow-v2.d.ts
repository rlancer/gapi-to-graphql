declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "projects": {
            "methods": {
                "getAgent": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "parent": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "operations": {
                    "methods": {
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                    };
                };
                "agent": {
                    "methods": {
                        "export": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "parent": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                        "restore": {
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "import": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                        };
                        "search": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "train": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                    "resources": {
                        "entityTypes": {
                            "methods": {
                                "list": {
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "pageToken": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "pageSize": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                };
                                "batchDelete": {
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
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                                "create": {
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
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "get": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "languageCode": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "patch": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "languageCode": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "updateMask": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                                "batchUpdate": {
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
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "delete": {
                                    "description": string;
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "name": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                            };
                            "resources": {
                                "entities": {
                                    "methods": {
                                        "batchCreate": {
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
                                                "parent": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "batchUpdate": {
                                            "request": {
                                                "$ref": string;
                                            };
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "parent": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "batchDelete": {
                                            "description": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
                                                "parent": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                        };
                                    };
                                };
                            };
                        };
                        "intents": {
                            "methods": {
                                "get": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                        "intentView": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "patch": {
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "intentView": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                        "languageCode": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "updateMask": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "batchUpdate": {
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
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
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "name": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                                "list": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "languageCode": {
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
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "intentView": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                            "enum": string[];
                                        };
                                        "parent": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "batchDelete": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "parent": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                                "create": {
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
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "intentView": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                        "parent": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                            };
                        };
                        "sessions": {
                            "methods": {
                                "detectIntent": {
                                    "request": {
                                        "$ref": string;
                                    };
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "session": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "deleteContexts": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "parent": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                            };
                            "resources": {
                                "contexts": {
                                    "methods": {
                                        "list": {
                                            "description": string;
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
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
                                                "parent": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                        };
                                        "get": {
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
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                        };
                                        "patch": {
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
                                                "name": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "scopes": string[];
                                        };
                                        "create": {
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                            "description": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
                                                "parent": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                            "scopes": string[];
                                        };
                                        "delete": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "name": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                    };
                                };
                                "entityTypes": {
                                    "methods": {
                                        "delete": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "name": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                            "description": string;
                                        };
                                        "list": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "pageToken": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "pageSize": {
                                                    "location": string;
                                                    "description": string;
                                                    "format": string;
                                                    "type": string;
                                                };
                                                "parent": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "get": {
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "name": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                            };
                                        };
                                        "patch": {
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "updateMask": {
                                                    "location": string;
                                                    "description": string;
                                                    "format": string;
                                                    "type": string;
                                                };
                                                "name": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                        };
                                        "create": {
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                            "description": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
                                                "parent": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                            "scopes": string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "location": string;
            "description": string;
            "type": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
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
            "description": string;
            "type": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
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
    "version_module": boolean;
    "schemas": {
        "GoogleCloudDialogflowV2IntentMessageImage": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
                "accessibilityText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageSimpleResponses": {
            "description": string;
            "type": string;
            "properties": {
                "simpleResponses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchDeleteIntentsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "intents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageText": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion": {
            "description": string;
            "type": string;
            "properties": {
                "destinationName": {
                    "description": string;
                    "type": string;
                };
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2EntityTypeEntity": {
            "description": string;
            "type": string;
            "properties": {
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageText": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2QueryResult": {
            "description": string;
            "type": string;
            "properties": {
                "webhookSource": {
                    "description": string;
                    "type": string;
                };
                "fulfillmentText": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "intentDetectionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "allRequiredParamsPresent": {
                    "description": string;
                    "type": string;
                };
                "speechRecognitionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "queryText": {
                    "description": string;
                    "type": string;
                };
                "diagnosticInfo": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "intent": {
                    "description": string;
                    "$ref": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webhookPayload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "fulfillmentMessages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "action": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCarouselSelect": {
            "description": string;
            "type": string;
            "properties": {
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleTypeLatLng": {
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
        "GoogleCloudDialogflowV2beta1IntentMessageSuggestions": {
            "description": string;
            "type": string;
            "properties": {
                "suggestions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentFollowupIntentInfo": {
            "description": string;
            "type": string;
            "properties": {
                "followupIntentName": {
                    "description": string;
                    "type": string;
                };
                "parentFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies": {
            "description": string;
            "type": string;
            "properties": {
                "quickReplies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2EntityType": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "autoExpansionMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "entities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2WebhookRequest": {
            "description": string;
            "type": string;
            "properties": {
                "queryResult": {
                    "$ref": string;
                    "description": string;
                };
                "originalDetectIntentRequest": {
                    "description": string;
                    "$ref": string;
                };
                "responseId": {
                    "description": string;
                    "type": string;
                };
                "session": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo": {
            "description": string;
            "type": string;
            "properties": {
                "followupIntentName": {
                    "description": string;
                    "type": string;
                };
                "parentFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2TrainAgentRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudDialogflowV2ExportAgentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "agentContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "agentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1EntityTypeEntity": {
            "description": string;
            "type": string;
            "properties": {
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2QueryParameters": {
            "description": string;
            "type": string;
            "properties": {
                "timeZone": {
                    "description": string;
                    "type": string;
                };
                "sessionEntityTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resetContexts": {
                    "description": string;
                    "type": string;
                };
                "payload": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "geoLocation": {
                    "description": string;
                    "$ref": string;
                };
                "contexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "postback": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchCreateEntitiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "entities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2WebhookResponse": {
            "description": string;
            "type": string;
            "properties": {
                "source": {
                    "description": string;
                    "type": string;
                };
                "followupEventInput": {
                    "$ref": string;
                    "description": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fulfillmentText": {
                    "description": string;
                    "type": string;
                };
                "fulfillmentMessages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "payload": {
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
        "GoogleCloudDialogflowV2beta1KnowledgeAnswers": {
            "description": string;
            "type": string;
            "properties": {
                "answers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1SentimentAnalysisResult": {
            "description": string;
            "type": string;
            "properties": {
                "queryTextSentiment": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2ListIntentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "intents": {
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
        "GoogleCloudDialogflowV2beta1ExportAgentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "agentContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "agentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2OriginalDetectIntentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "source": {
                    "description": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "type": string;
                };
                "payload": {
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
        "GoogleLongrunningOperation": {
            "description": string;
            "type": string;
            "properties": {
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "metadata": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall": {
            "description": string;
            "type": string;
            "properties": {
                "phoneNumber": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageImage": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
                "accessibilityText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCarouselSelectItem": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "info": {
                    "description": string;
                    "$ref": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageSimpleResponse": {
            "description": string;
            "type": string;
            "properties": {
                "displayText": {
                    "description": string;
                    "type": string;
                };
                "textToSpeech": {
                    "description": string;
                    "type": string;
                };
                "ssml": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2ListEntityTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "entityTypes": {
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
        "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "openUriAction": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentTrainingPhrase": {
            "description": string;
            "type": string;
            "properties": {
                "timesAddedCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "parts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2SearchAgentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "agents": {
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
        "GoogleCloudDialogflowV2EntityTypeBatch": {
            "description": string;
            "type": string;
            "properties": {
                "entityTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio": {
            "description": string;
            "type": string;
            "properties": {
                "audioUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1WebhookRequest": {
            "description": string;
            "type": string;
            "properties": {
                "queryResult": {
                    "description": string;
                    "$ref": string;
                };
                "originalDetectIntentRequest": {
                    "description": string;
                    "$ref": string;
                };
                "alternativeQueryResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseId": {
                    "description": string;
                    "type": string;
                };
                "session": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageListSelect": {
            "description": string;
            "type": string;
            "properties": {
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "postback": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleProtobufEmpty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudDialogflowV2ImportAgentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "agentUri": {
                    "description": string;
                    "type": string;
                };
                "agentContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageListSelectItem": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "description": string;
                    "$ref": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "info": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "entityTypeNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "payload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "source": {
                    "description": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1WebhookResponse": {
            "description": string;
            "type": string;
            "properties": {
                "source": {
                    "description": string;
                    "type": string;
                };
                "endInteraction": {
                    "description": string;
                    "type": string;
                };
                "followupEventInput": {
                    "$ref": string;
                    "description": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fulfillmentText": {
                    "description": string;
                    "type": string;
                };
                "fulfillmentMessages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "payload": {
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
        "GoogleCloudDialogflowV2IntentMessageSelectItemInfo": {
            "description": string;
            "type": string;
            "properties": {
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "key": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2RestoreAgentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "agentContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "agentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2DetectIntentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responseId": {
                    "description": string;
                    "type": string;
                };
                "queryResult": {
                    "$ref": string;
                    "description": string;
                };
                "webhookStatus": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageQuickReplies": {
            "description": string;
            "type": string;
            "properties": {
                "quickReplies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "entityTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1EntityType": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "autoExpansionMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "entities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse": {
            "description": string;
            "type": string;
            "properties": {
                "displayText": {
                    "description": string;
                    "type": string;
                };
                "textToSpeech": {
                    "description": string;
                    "type": string;
                };
                "ssml": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "entityTypeBatchUri": {
                    "description": string;
                    "type": string;
                };
                "entityTypeBatchInline": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1QueryResult": {
            "description": string;
            "type": string;
            "properties": {
                "sentimentAnalysisResult": {
                    "description": string;
                    "$ref": string;
                };
                "intentDetectionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "allRequiredParamsPresent": {
                    "description": string;
                    "type": string;
                };
                "queryText": {
                    "description": string;
                    "type": string;
                };
                "speechRecognitionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "diagnosticInfo": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "intent": {
                    "$ref": string;
                    "description": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fulfillmentMessages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webhookPayload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "action": {
                    "description": string;
                    "type": string;
                };
                "webhookSource": {
                    "description": string;
                    "type": string;
                };
                "fulfillmentText": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "knowledgeAnswers": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech": {
            "description": string;
            "type": string;
            "properties": {
                "ssml": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2ExportAgentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "agentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2TextInput": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2Context": {
            "description": string;
            "type": string;
            "properties": {
                "lifespanCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
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
        "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "info": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer": {
            "description": string;
            "type": string;
            "properties": {
                "matchConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "source": {
                    "description": string;
                    "type": string;
                };
                "answer": {
                    "description": string;
                    "type": string;
                };
                "faqQuestion": {
                    "description": string;
                    "type": string;
                };
                "matchConfidenceLevel": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchUpdateEntitiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "entities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchUpdateIntentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "intents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2Agent": {
            "description": string;
            "type": string;
            "properties": {
                "defaultLanguageCode": {
                    "description": string;
                    "type": string;
                };
                "timeZone": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "parent": {
                    "description": string;
                    "type": string;
                };
                "matchMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "supportedLanguageCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "enableLogging": {
                    "description": string;
                    "type": string;
                };
                "avatarUri": {
                    "description": string;
                    "type": string;
                };
                "classificationThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessage": {
            "description": string;
            "type": string;
            "properties": {
                "listSelect": {
                    "$ref": string;
                    "description": string;
                };
                "quickReplies": {
                    "description": string;
                    "$ref": string;
                };
                "card": {
                    "description": string;
                    "$ref": string;
                };
                "basicCard": {
                    "$ref": string;
                    "description": string;
                };
                "carouselSelect": {
                    "description": string;
                    "$ref": string;
                };
                "linkOutSuggestion": {
                    "description": string;
                    "$ref": string;
                };
                "simpleResponses": {
                    "description": string;
                    "$ref": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "payload": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "text": {
                    "description": string;
                    "$ref": string;
                };
                "platform": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "suggestions": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageBasicCard": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "description": string;
                    "$ref": string;
                };
                "formattedText": {
                    "description": string;
                    "type": string;
                };
                "buttons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2ListSessionEntityTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "sessionEntityTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1Sentiment": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "magnitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1Intent": {
            "description": string;
            "type": string;
            "properties": {
                "events": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "parentFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
                "priority": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endInteraction": {
                    "description": string;
                    "type": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultResponsePlatforms": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                };
                "action": {
                    "description": string;
                    "type": string;
                };
                "messages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "webhookState": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "inputContextNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "followupIntentInfo": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rootFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "mlDisabled": {
                    "description": string;
                    "type": string;
                };
                "isFallback": {
                    "description": string;
                    "type": string;
                };
                "mlEnabled": {
                    "description": string;
                    "type": string;
                };
                "trainingPhrases": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resetContexts": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "entityTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageSuggestion": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "entityType": {
                    "description": string;
                    "type": string;
                };
                "alias": {
                    "description": string;
                    "type": string;
                };
                "userDefined": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1EventInput": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2InputAudioConfig": {
            "description": string;
            "type": string;
            "properties": {
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "phraseHints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "audioEncoding": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageListSelectItem": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "info": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "state": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchUpdateIntentsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "intentBatchUri": {
                    "description": string;
                    "type": string;
                };
                "intentView": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "intentBatchInline": {
                    "$ref": string;
                    "description": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentTrainingPhrasePart": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "entityType": {
                    "description": string;
                    "type": string;
                };
                "alias": {
                    "description": string;
                    "type": string;
                };
                "userDefined": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessage": {
            "description": string;
            "type": string;
            "properties": {
                "quickReplies": {
                    "description": string;
                    "$ref": string;
                };
                "telephonySynthesizeSpeech": {
                    "description": string;
                    "$ref": string;
                };
                "card": {
                    "$ref": string;
                    "description": string;
                };
                "basicCard": {
                    "description": string;
                    "$ref": string;
                };
                "carouselSelect": {
                    "$ref": string;
                    "description": string;
                };
                "linkOutSuggestion": {
                    "description": string;
                    "$ref": string;
                };
                "simpleResponses": {
                    "description": string;
                    "$ref": string;
                };
                "telephonyTransferCall": {
                    "description": string;
                    "$ref": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "payload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "text": {
                    "$ref": string;
                    "description": string;
                };
                "platform": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "suggestions": {
                    "$ref": string;
                    "description": string;
                };
                "telephonyPlayAudio": {
                    "$ref": string;
                    "description": string;
                };
                "listSelect": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2Intent": {
            "description": string;
            "type": string;
            "properties": {
                "isFallback": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resetContexts": {
                    "description": string;
                    "type": string;
                };
                "trainingPhrases": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "parentFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
                "events": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "priority": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "outputContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultResponsePlatforms": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "action": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "messages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputContextNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "webhookState": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "followupIntentInfo": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "rootFollowupIntentName": {
                    "description": string;
                    "type": string;
                };
                "mlDisabled": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion": {
            "description": string;
            "type": string;
            "properties": {
                "destinationName": {
                    "description": string;
                    "type": string;
                };
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentParameter": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "entityTypeDisplayName": {
                    "description": string;
                    "type": string;
                };
                "prompts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "defaultValue": {
                    "description": string;
                    "type": string;
                };
                "mandatory": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "isList": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleRpcStatus": {
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
        "GoogleCloudDialogflowV2IntentParameter": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "entityTypeDisplayName": {
                    "description": string;
                    "type": string;
                };
                "prompts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "defaultValue": {
                    "description": string;
                    "type": string;
                };
                "mandatory": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "isList": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageBasicCard": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "formattedText": {
                    "description": string;
                    "type": string;
                };
                "buttons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCard": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "buttons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageListSelect": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentBatch": {
            "description": string;
            "type": string;
            "properties": {
                "intents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2DetectIntentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "inputAudio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "queryInput": {
                    "description": string;
                    "$ref": string;
                };
                "queryParams": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageBasicCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "openUriAction": {
                    "description": string;
                    "$ref": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "intents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1Context": {
            "description": string;
            "type": string;
            "properties": {
                "lifespanCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
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
        "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo": {
            "description": string;
            "type": string;
            "properties": {
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "key": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses": {
            "description": string;
            "type": string;
            "properties": {
                "simpleResponses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect": {
            "description": string;
            "type": string;
            "properties": {
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2SessionEntityType": {
            "description": string;
            "type": string;
            "properties": {
                "entityOverrideMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "entities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2BatchDeleteEntitiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "entityValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCard": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "buttons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
                "imageUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2EventInput": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageSuggestion": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentTrainingPhrase": {
            "description": string;
            "type": string;
            "properties": {
                "parts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "timesAddedCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2QueryInput": {
            "description": string;
            "type": string;
            "properties": {
                "event": {
                    "description": string;
                    "$ref": string;
                };
                "text": {
                    "$ref": string;
                    "description": string;
                };
                "audioConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2ListContextsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "contexts": {
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
        "GoogleCloudDialogflowV2IntentMessageSuggestions": {
            "description": string;
            "type": string;
            "properties": {
                "suggestions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
};
export default _default;
//# sourceMappingURL=dialogflow-v2.d.ts.map