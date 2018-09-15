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
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/tasks": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tasks.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Task": {
            "id": string;
            "type": string;
            "properties": {
                "completed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "due": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "hidden": {
                    "type": string;
                    "description": string;
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
                "links": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "description": {
                                "type": string;
                                "description": string;
                            };
                            "link": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "parent": {
                    "type": string;
                    "description": string;
                };
                "position": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TaskList": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TaskLists": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Tasks": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "tasklists": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tasklist": {
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
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "tasks": {
            "methods": {
                "clear": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "task": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "task": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tasklist": {
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
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "parent": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "previous": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "completedMax": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "completedMin": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "dueMax": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "dueMin": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showCompleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showHidden": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "updatedMin": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "move": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "parent": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "previous": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "task": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tasklist": {
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
                    "scopes": string[];
                };
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "task": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "task": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tasklist": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=tasks-v1.d.ts.map