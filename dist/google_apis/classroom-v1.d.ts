declare const _default: {
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "courses": {
            "resources": {
                "courseWork": {
                    "methods": {
                        "patch": {
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
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "id": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "courseId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "id": {
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
                        "delete": {
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "id": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "orderBy": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "courseWorkStates": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
                                };
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "create": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                        "modifyAssignees": {
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
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "id": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                    "resources": {
                        "studentSubmissions": {
                            "methods": {
                                "patch": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "courseWorkId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "courseId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "id": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "updateMask": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
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
                                "get": {
                                    "description": string;
                                    "httpMethod": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "parameters": {
                                        "courseWorkId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "id": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "return": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "courseId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "id": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseWorkId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
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
                                "reclaim": {
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
                                        "id": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "courseWorkId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                };
                                "turnIn": {
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
                                        "courseWorkId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "id": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                                "modifyAttachments": {
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
                                        "courseId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "id": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseWorkId": {
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                            "description": string;
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
                                        "late": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                            "enum": string[];
                                        };
                                        "pageToken": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "states": {
                                            "repeated": boolean;
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                        "pageSize": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "userId": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseWorkId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "courseId": {
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
                            };
                        };
                    };
                };
                "teachers": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "userId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "courseId": {
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
                        "get": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "userId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
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
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "courseId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                        };
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
                                "courseId": {
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
                "announcements": {
                    "methods": {
                        "modifyAssignees": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "id": {
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
                            "request": {
                                "$ref": string;
                            };
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "courseId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "id": {
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
                                "courseId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "id": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "updateMask": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "id": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
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
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "announcementStates": {
                                    "type": string;
                                    "repeated": boolean;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                };
                                "orderBy": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "create": {
                            "scopes": string[];
                            "parameters": {
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
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
                        };
                    };
                };
                "aliases": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "alias": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "create": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
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
                "students": {
                    "methods": {
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "userId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                                "courseId": {
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
                                "courseId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "enrollmentCode": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
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
                                "userId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "courseId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
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
            "methods": {
                "update": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "id": {
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
                "delete": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "id": {
                            "description": string;
                            "required": boolean;
                            "type": string;
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "teacherId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "courseStates": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "enum": string[];
                        };
                        "studentId": {
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
                            "type": string;
                            "location": string;
                            "description": string;
                            "format": string;
                        };
                    };
                    "scopes": string[];
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                };
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "id": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
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
                    "scopes": string[];
                    "parameters": {
                        "id": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
        "userProfiles": {
            "methods": {
                "get": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "userId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
            };
            "resources": {
                "guardianInvitations": {
                    "methods": {
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "studentId": {
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
                                "invitedEmailAddress": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "states": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
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
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "invitationId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "studentId": {
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
                                "invitationId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
                                "studentId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
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
                                "studentId": {
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
                    };
                };
                "guardians": {
                    "methods": {
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "studentId": {
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
                                "invitedEmailAddress": {
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
                            "id": string;
                            "path": string;
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "studentId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "guardianId": {
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "studentId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "guardianId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                };
            };
        };
        "registrations": {
            "methods": {
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "registrationId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "create": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
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
        "invitations": {
            "methods": {
                "accept": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "id": {
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
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "id": {
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
                        "id": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "courseId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "create": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
    };
    "parameters": {
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
            "type": string;
            "location": string;
            "description": string;
        };
        "upload_protocol": {
            "type": string;
            "location": string;
            "description": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
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
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
    };
    "schemas": {
        "CourseRosterChangesInfo": {
            "description": string;
            "type": string;
            "properties": {
                "courseId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CourseWork": {
            "description": string;
            "type": string;
            "properties": {
                "workType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "assignment": {
                    "description": string;
                    "$ref": string;
                };
                "multipleChoiceQuestion": {
                    "$ref": string;
                    "description": string;
                };
                "scheduledTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "creatorUserId": {
                    "description": string;
                    "type": string;
                };
                "individualStudentsOptions": {
                    "$ref": string;
                    "description": string;
                };
                "dueDate": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "submissionModificationMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "dueTime": {
                    "description": string;
                    "$ref": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "materials": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "associatedWithDeveloper": {
                    "type": string;
                    "description": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alternateLink": {
                    "type": string;
                    "description": string;
                };
                "assigneeMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "maxPoints": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Guardian": {
            "description": string;
            "type": string;
            "properties": {
                "studentId": {
                    "description": string;
                    "type": string;
                };
                "guardianId": {
                    "description": string;
                    "type": string;
                };
                "invitedEmailAddress": {
                    "description": string;
                    "type": string;
                };
                "guardianProfile": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListStudentsResponse": {
            "properties": {
                "students": {
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
        "UserProfile": {
            "description": string;
            "type": string;
            "properties": {
                "emailAddress": {
                    "description": string;
                    "type": string;
                };
                "photoUrl": {
                    "description": string;
                    "type": string;
                };
                "permissions": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "name": {
                    "description": string;
                    "$ref": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "verifiedTeacher": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Announcement": {
            "description": string;
            "type": string;
            "properties": {
                "individualStudentsOptions": {
                    "$ref": string;
                    "description": string;
                };
                "creatorUserId": {
                    "description": string;
                    "type": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "materials": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "assigneeMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
                "scheduledTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CourseWorkChangesInfo": {
            "type": string;
            "properties": {
                "courseId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ModifyIndividualStudentsOptions": {
            "description": string;
            "type": string;
            "properties": {
                "addStudentIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "removeStudentIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "DriveFolder": {
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "SubmissionHistory": {
            "description": string;
            "type": string;
            "properties": {
                "gradeHistory": {
                    "$ref": string;
                    "description": string;
                };
                "stateHistory": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ShortAnswerSubmission": {
            "description": string;
            "type": string;
            "properties": {
                "answer": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListStudentSubmissionsResponse": {
            "type": string;
            "properties": {
                "studentSubmissions": {
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
        };
        "StudentSubmission": {
            "description": string;
            "type": string;
            "properties": {
                "late": {
                    "description": string;
                    "type": string;
                };
                "draftGrade": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "courseWorkType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "userId": {
                    "description": string;
                    "type": string;
                };
                "courseWorkId": {
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "submissionHistory": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "assignedGrade": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "multipleChoiceSubmission": {
                    "description": string;
                    "$ref": string;
                };
                "assignmentSubmission": {
                    "description": string;
                    "$ref": string;
                };
                "associatedWithDeveloper": {
                    "description": string;
                    "type": string;
                };
                "shortAnswerSubmission": {
                    "description": string;
                    "$ref": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ModifyAttachmentsRequest": {
            "properties": {
                "addAttachments": {
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
        "YouTubeVideo": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
                "thumbnailUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListInvitationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "invitations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CloudPubsubTopic": {
            "properties": {
                "topicName": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GuardianInvitation": {
            "description": string;
            "type": string;
            "properties": {
                "invitationId": {
                    "description": string;
                    "type": string;
                };
                "studentId": {
                    "type": string;
                    "description": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "invitedEmailAddress": {
                    "description": string;
                    "type": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "StateHistory": {
            "description": string;
            "type": string;
            "properties": {
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "stateTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "actorUserId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CourseMaterialSet": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "materials": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListTeachersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "teachers": {
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
        "Link": {
            "description": string;
            "type": string;
            "properties": {
                "thumbnailUrl": {
                    "description": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Date": {
            "description": string;
            "type": string;
            "properties": {
                "year": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "day": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Name": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "givenName": {
                    "description": string;
                    "type": string;
                };
                "familyName": {
                    "description": string;
                    "type": string;
                };
                "fullName": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Assignment": {
            "description": string;
            "type": string;
            "properties": {
                "studentWorkFolder": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "SharedDriveFile": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "driveFile": {
                    "description": string;
                    "$ref": string;
                };
                "shareMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ModifyAnnouncementAssigneesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "assigneeMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "modifyIndividualStudentsOptions": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GlobalPermission": {
            "description": string;
            "type": string;
            "properties": {
                "permission": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "Teacher": {
            "description": string;
            "type": string;
            "properties": {
                "profile": {
                    "description": string;
                    "$ref": string;
                };
                "userId": {
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GradeHistory": {
            "description": string;
            "type": string;
            "properties": {
                "actorUserId": {
                    "description": string;
                    "type": string;
                };
                "gradeTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "gradeChangeType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "maxPoints": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pointsEarned": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AssignmentSubmission": {
            "properties": {
                "attachments": {
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
        "Material": {
            "description": string;
            "type": string;
            "properties": {
                "link": {
                    "description": string;
                    "$ref": string;
                };
                "youtubeVideo": {
                    "$ref": string;
                    "description": string;
                };
                "driveFile": {
                    "$ref": string;
                    "description": string;
                };
                "form": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Feed": {
            "description": string;
            "type": string;
            "properties": {
                "feedType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "courseRosterChangesInfo": {
                    "$ref": string;
                    "description": string;
                };
                "courseWorkChangesInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Student": {
            "description": string;
            "type": string;
            "properties": {
                "profile": {
                    "$ref": string;
                    "description": string;
                };
                "studentWorkFolder": {
                    "$ref": string;
                    "description": string;
                };
                "userId": {
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Invitation": {
            "type": string;
            "properties": {
                "userId": {
                    "description": string;
                    "type": string;
                };
                "courseId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "role": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
        };
        "TurnInStudentSubmissionRequest": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "ListCourseWorkResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "courseWork": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Attachment": {
            "description": string;
            "type": string;
            "properties": {
                "driveFile": {
                    "$ref": string;
                    "description": string;
                };
                "youTubeVideo": {
                    "$ref": string;
                    "description": string;
                };
                "form": {
                    "$ref": string;
                    "description": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListAnnouncementsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "announcements": {
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
        "TimeOfDay": {
            "properties": {
                "minutes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hours": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nanos": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "seconds": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListCoursesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "courses": {
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
        "Form": {
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "thumbnailUrl": {
                    "description": string;
                    "type": string;
                };
                "responseUrl": {
                    "description": string;
                    "type": string;
                };
                "formUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ModifyCourseWorkAssigneesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "modifyIndividualStudentsOptions": {
                    "$ref": string;
                    "description": string;
                };
                "assigneeMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListGuardiansResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "guardians": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "ListGuardianInvitationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "guardianInvitations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListCourseAliasesResponse": {
            "properties": {
                "aliases": {
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
        "CourseAlias": {
            "description": string;
            "type": string;
            "properties": {
                "alias": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IndividualStudentsOptions": {
            "type": string;
            "properties": {
                "studentIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "Registration": {
            "description": string;
            "type": string;
            "properties": {
                "feed": {
                    "description": string;
                    "$ref": string;
                };
                "registrationId": {
                    "description": string;
                    "type": string;
                };
                "cloudPubsubTopic": {
                    "$ref": string;
                    "description": string;
                };
                "expiryTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MultipleChoiceSubmission": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "answer": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "CourseMaterial": {
            "description": string;
            "type": string;
            "properties": {
                "driveFile": {
                    "description": string;
                    "$ref": string;
                };
                "youTubeVideo": {
                    "description": string;
                    "$ref": string;
                };
                "form": {
                    "$ref": string;
                    "description": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "MultipleChoiceQuestion": {
            "description": string;
            "type": string;
            "properties": {
                "choices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "Course": {
            "description": string;
            "type": string;
            "properties": {
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "teacherFolder": {
                    "$ref": string;
                    "description": string;
                };
                "section": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "room": {
                    "description": string;
                    "type": string;
                };
                "courseGroupEmail": {
                    "description": string;
                    "type": string;
                };
                "courseMaterialSets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "enrollmentCode": {
                    "description": string;
                    "type": string;
                };
                "descriptionHeading": {
                    "description": string;
                    "type": string;
                };
                "calendarId": {
                    "description": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
                "guardiansEnabled": {
                    "description": string;
                    "type": string;
                };
                "courseState": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "ownerId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "teacherGroupEmail": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DriveFile": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "alternateLink": {
                    "description": string;
                    "type": string;
                };
                "thumbnailUrl": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ReturnStudentSubmissionRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ReclaimStudentSubmissionRequest": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.courses": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.courses.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.announcements": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.profile.photos": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.rosters.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.guardianlinks.students": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.announcements.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.coursework.students": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.coursework.students.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.coursework.me.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.profile.emails": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.coursework.me": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.push-notifications": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.rosters": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/classroom.student-submissions.students.readonly": {
                    "description": string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=classroom-v1.d.ts.map