declare const _default: {
    "rootUrl": string;
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
            "resources": {
                "agent": {
                    "resources": {
                        "knowledgeBases": {
                            "methods": {
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
                                "delete": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "force": {
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
                                    "description": string;
                                };
                                "list": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
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
                                "get": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
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
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                            };
                            "resources": {
                                "documents": {
                                    "methods": {
                                        "create": {
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
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "delete": {
                                            "id": string;
                                            "path": string;
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
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "get": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
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
                                            "path": string;
                                            "id": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                        "intents": {
                            "methods": {
                                "delete": {
                                    "description": string;
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "name": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "list": {
                                    "description": string;
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "intentView": {
                                            "enum": string[];
                                            "description": string;
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
                                        "languageCode": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "batchDelete": {
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
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                                "create": {
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
                                        "intentView": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                        "parent": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                };
                                "get": {
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "name": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "intentView": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                        "languageCode": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                };
                                "patch": {
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
                                        "intentView": {
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                            "location": string;
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
                                "batchUpdate": {
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
                            };
                        };
                        "entityTypes": {
                            "resources": {
                                "entities": {
                                    "methods": {
                                        "batchUpdate": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "parent": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
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
                                        "batchDelete": {
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
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "batchCreate": {
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
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "methods": {
                                "get": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "languageCode": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "name": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "patch": {
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
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                    "description": string;
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
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
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
                                };
                                "list": {
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                };
                                "batchDelete": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "parent": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
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
                                "create": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "parent": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
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
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                            };
                        };
                        "environments": {
                            "resources": {
                                "users": {
                                    "resources": {
                                        "sessions": {
                                            "resources": {
                                                "contexts": {
                                                    "methods": {
                                                        "delete": {
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
                                                        "list": {
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
                                                            };
                                                            "flatPath": string;
                                                            "path": string;
                                                            "id": string;
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
                                                                    "pattern": string;
                                                                    "location": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "type": string;
                                                                };
                                                            };
                                                            "scopes": string[];
                                                            "flatPath": string;
                                                            "id": string;
                                                            "path": string;
                                                        };
                                                        "patch": {
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
                                                                "updateMask": {
                                                                    "location": string;
                                                                    "description": string;
                                                                    "format": string;
                                                                    "type": string;
                                                                };
                                                                "name": {
                                                                    "pattern": string;
                                                                    "location": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "type": string;
                                                                };
                                                            };
                                                            "scopes": string[];
                                                            "flatPath": string;
                                                        };
                                                        "create": {
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
                                                    };
                                                };
                                                "entityTypes": {
                                                    "methods": {
                                                        "delete": {
                                                            "id": string;
                                                            "path": string;
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
                                                        };
                                                        "list": {
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
                                                                "parent": {
                                                                    "pattern": string;
                                                                    "location": string;
                                                                    "description": string;
                                                                    "required": boolean;
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
                                                            };
                                                            "flatPath": string;
                                                        };
                                                        "get": {
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
                                                        "patch": {
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
                                                                    "pattern": string;
                                                                    "location": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "type": string;
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
                                                        "create": {
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
                                                            "description": string;
                                                            "request": {
                                                                "$ref": string;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            "methods": {
                                                "deleteContexts": {
                                                    "description": string;
                                                    "response": {
                                                        "$ref": string;
                                                    };
                                                    "parameterOrder": string[];
                                                    "httpMethod": string;
                                                    "parameters": {
                                                        "parent": {
                                                            "pattern": string;
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                        };
                                                    };
                                                    "scopes": string[];
                                                    "flatPath": string;
                                                    "path": string;
                                                    "id": string;
                                                };
                                                "detectIntent": {
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
                                                        "session": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                    };
                                                    "scopes": string[];
                                                    "flatPath": string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        "sessions": {
                            "methods": {
                                "deleteContexts": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "parent": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "detectIntent": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "session": {
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
                                "contexts": {
                                    "methods": {
                                        "create": {
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
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                    "location": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                        };
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
                                                "parent": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
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
                                            };
                                            "flatPath": string;
                                        };
                                        "get": {
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
                                            "description": string;
                                        };
                                        "patch": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "updateMask": {
                                                    "description": string;
                                                    "format": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "name": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
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
                                };
                                "entityTypes": {
                                    "methods": {
                                        "create": {
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
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                        };
                                        "delete": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "name": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                            };
                                            "scopes": string[];
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
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
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
                                                "name": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                            };
                                            "scopes": string[];
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "patch": {
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
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
                                            "description": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    "methods": {
                        "export": {
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
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "restore": {
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
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "import": {
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
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "search": {
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
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                            "flatPath": string;
                        };
                        "train": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "parent": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                    };
                };
                "operations": {
                    "methods": {
                        "get": {
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                };
                "conversations": {
                    "methods": {
                        "deleteContexts": {
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
                        };
                    };
                    "resources": {
                        "contexts": {
                            "methods": {
                                "delete": {
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "name": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                };
                                "list": {
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
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                };
                                "get": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
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
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "patch": {
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
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
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                                "create": {
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
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                };
                            };
                        };
                    };
                };
                "knowledgeBases": {
                    "resources": {
                        "documents": {
                            "methods": {
                                "delete": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
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
                                    "path": string;
                                    "id": string;
                                };
                                "list": {
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
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "parent": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "get": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "name": {
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "create": {
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
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                };
                            };
                        };
                    };
                    "methods": {
                        "delete": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "force": {
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
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "list": {
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "create": {
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
                    };
                };
            };
        };
    };
    "parameters": {
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
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
            "description": string;
            "type": string;
            "location": string;
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
        "GoogleCloudDialogflowV2Context": {
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
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer": {
            "properties": {
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
                "matchConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1ListContextsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1ListIntentsResponse": {
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
        "GoogleCloudDialogflowV2beta1ListEntityTypesResponse": {
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
        "GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest": {
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
        "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction": {
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessage": {
            "description": string;
            "type": string;
            "properties": {
                "suggestions": {
                    "description": string;
                    "$ref": string;
                };
                "platform": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "listSelect": {
                    "$ref": string;
                    "description": string;
                };
                "quickReplies": {
                    "$ref": string;
                    "description": string;
                };
                "card": {
                    "$ref": string;
                    "description": string;
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
                    "$ref": string;
                    "description": string;
                };
                "simpleResponses": {
                    "$ref": string;
                    "description": string;
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
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageBasicCard": {
            "properties": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1Sentiment": {
            "description": string;
            "type": string;
            "properties": {
                "magnitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1Intent": {
            "description": string;
            "type": string;
            "properties": {
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
                        "enum": string[];
                        "type": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
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
                "isFallback": {
                    "description": string;
                    "type": string;
                };
                "mlEnabled": {
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
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageSuggestion": {
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart": {
            "properties": {
                "alias": {
                    "description": string;
                    "type": string;
                };
                "userDefined": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "entityType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1KnowledgeBase": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1EventInput": {
            "properties": {
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
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
                    "description": string;
                    "$ref": string;
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
        "GoogleCloudDialogflowV2IntentTrainingPhrasePart": {
            "description": string;
            "type": string;
            "properties": {
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
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata": {
            "properties": {
                "state": {
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
        "GoogleCloudDialogflowV2beta1IntentMessage": {
            "properties": {
                "carouselSelect": {
                    "$ref": string;
                    "description": string;
                };
                "linkOutSuggestion": {
                    "$ref": string;
                    "description": string;
                };
                "simpleResponses": {
                    "$ref": string;
                    "description": string;
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
                    "description": string;
                    "$ref": string;
                };
                "suggestions": {
                    "description": string;
                    "$ref": string;
                };
                "platform": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "telephonyPlayAudio": {
                    "description": string;
                    "$ref": string;
                };
                "listSelect": {
                    "$ref": string;
                    "description": string;
                };
                "quickReplies": {
                    "$ref": string;
                    "description": string;
                };
                "telephonySynthesizeSpeech": {
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2Intent": {
            "description": string;
            "type": string;
            "properties": {
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
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
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
                "isFallback": {
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
                "uri": {
                    "description": string;
                    "type": string;
                };
                "destinationName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentParameter": {
            "properties": {
                "prompts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "mandatory": {
                    "description": string;
                    "type": string;
                };
                "defaultValue": {
                    "description": string;
                    "type": string;
                };
                "isList": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "entityTypeDisplayName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
            "properties": {
                "prompts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "mandatory": {
                    "description": string;
                    "type": string;
                };
                "defaultValue": {
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
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "entityTypeDisplayName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageListSelect": {
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
        "GoogleCloudDialogflowV2beta1ExportAgentRequest": {
            "properties": {
                "agentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCard": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessageBasicCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "openUriAction": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentBatch": {
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
            "description": string;
            "type": string;
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
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1ListDocumentsResponse": {
            "properties": {
                "documents": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
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
        "GoogleCloudDialogflowV2beta1OutputAudioConfig": {
            "properties": {
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "audioEncoding": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "synthesizeSpeechConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1TextInput": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
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
        "GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest": {
            "properties": {
                "entityValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1EntityTypeBatch": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest": {
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
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCard": {
            "properties": {
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
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
        "GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig": {
            "description": string;
            "type": string;
            "properties": {
                "effectsProfileId": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "volumeGainDb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pitch": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "voice": {
                    "description": string;
                    "$ref": string;
                };
                "speakingRate": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageSuggestion": {
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1InputAudioConfig": {
            "properties": {
                "audioEncoding": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "model": {
                    "description": string;
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentTrainingPhrase": {
            "properties": {
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "parts": {
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
        "GoogleCloudDialogflowV2IntentMessageSimpleResponses": {
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
            "description": string;
            "type": string;
        };
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
        "GoogleCloudDialogflowV2IntentMessageText": {
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
            "description": string;
            "type": string;
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
                "value": {
                    "description": string;
                    "type": string;
                };
                "synonyms": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
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
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentFollowupIntentInfo": {
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
            "description": string;
            "type": string;
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
        "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2EntityType": {
            "properties": {
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
        "GoogleCloudDialogflowV2WebhookRequest": {
            "properties": {
                "responseId": {
                    "description": string;
                    "type": string;
                };
                "session": {
                    "description": string;
                    "type": string;
                };
                "queryResult": {
                    "description": string;
                    "$ref": string;
                };
                "originalDetectIntentRequest": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest": {
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
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1DetectIntentRequest": {
            "properties": {
                "queryInput": {
                    "$ref": string;
                    "description": string;
                };
                "queryParams": {
                    "description": string;
                    "$ref": string;
                };
                "outputAudioConfig": {
                    "$ref": string;
                    "description": string;
                };
                "inputAudio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2ExportAgentResponse": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1ImportAgentRequest": {
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
        "GoogleCloudDialogflowV2beta1VoiceSelectionParams": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "ssmlGender": {
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
        "GoogleCloudDialogflowV2beta1EntityTypeEntity": {
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "synonyms": {
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
        "GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "intentBatchUri": {
                    "description": string;
                    "type": string;
                };
                "intentView": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
        "GoogleCloudDialogflowV2WebhookResponse": {
            "properties": {
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessageCardButton": {
            "description": string;
            "type": string;
            "properties": {
                "postback": {
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
        "GoogleCloudDialogflowV2beta1KnowledgeAnswers": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1SentimentAnalysisResult": {
            "description": string;
            "type": string;
            "properties": {
                "queryTextSentiment": {
                    "$ref": string;
                    "description": string;
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
            "description": string;
            "type": string;
        };
        "GoogleLongrunningOperation": {
            "description": string;
            "type": string;
            "properties": {
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
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
        "GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall": {
            "properties": {
                "phoneNumber": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageImage": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig": {
            "properties": {
                "analyzeQueryTextSentiment": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1SearchAgentsResponse": {
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
        "GoogleCloudDialogflowV2IntentMessageCarouselSelectItem": {
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
        "GoogleCloudDialogflowV2IntentMessageSimpleResponse": {
            "properties": {
                "textToSpeech": {
                    "description": string;
                    "type": string;
                };
                "ssml": {
                    "description": string;
                    "type": string;
                };
                "displayText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1Agent": {
            "properties": {
                "parent": {
                    "description": string;
                    "type": string;
                };
                "matchMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "enableLogging": {
                    "description": string;
                    "type": string;
                };
                "supportedLanguageCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
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
                "timeZone": {
                    "description": string;
                    "type": string;
                };
                "defaultLanguageCode": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1QueryInput": {
            "properties": {
                "audioConfig": {
                    "description": string;
                    "$ref": string;
                };
                "event": {
                    "$ref": string;
                    "description": string;
                };
                "text": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentTrainingPhrase": {
            "description": string;
            "type": string;
            "properties": {
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "parts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest": {
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
        "GoogleCloudDialogflowV2beta1RestoreAgentRequest": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1DetectIntentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "webhookStatus": {
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
                "outputAudioConfig": {
                    "description": string;
                    "$ref": string;
                };
                "outputAudio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "queryResult": {
                    "description": string;
                    "$ref": string;
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
            "properties": {
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
                "queryResult": {
                    "description": string;
                    "$ref": string;
                };
                "originalDetectIntentRequest": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessageListSelect": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageCardButton": {
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
            "description": string;
            "type": string;
        };
        "GoogleProtobufEmpty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudDialogflowV2IntentMessageListSelectItem": {
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
        "GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest": {
            "properties": {
                "version": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1WebhookResponse": {
            "properties": {
                "endInteraction": {
                    "description": string;
                    "type": string;
                };
                "followupEventInput": {
                    "description": string;
                    "$ref": string;
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2IntentMessageSelectItemInfo": {
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
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1Document": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "content": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "knowledgeTypes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "rawContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "contentUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1QueryParameters": {
            "description": string;
            "type": string;
            "properties": {
                "knowledgeBaseNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "contexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sentimentAnalysisRequestConfig": {
                    "description": string;
                    "$ref": string;
                };
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
                "payload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "geoLocation": {
                    "description": string;
                    "$ref": string;
                };
                "resetContexts": {
                    "description": string;
                    "type": string;
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "autoExpansionMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
                "textToSpeech": {
                    "description": string;
                    "type": string;
                };
                "ssml": {
                    "description": string;
                    "type": string;
                };
                "displayText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1SessionEntityType": {
            "properties": {
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
                "entityOverrideMode": {
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
        "GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "knowledgeBases": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1QueryResult": {
            "description": string;
            "type": string;
            "properties": {
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
                "sentimentAnalysisResult": {
                    "$ref": string;
                    "description": string;
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
            };
            "id": string;
        };
        "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech": {
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
            "description": string;
            "type": string;
        };
        "GoogleCloudDialogflowV2beta1TrainAgentRequest": {
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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=dialogflow-v2beta1.d.ts.map