declare const _default: {
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "variants": {
            "methods": {
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "variantId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
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
                        "variantId": {
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
                };
                "delete": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "variantId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
                "import": {
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
                "merge": {
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
                "search": {
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
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
        "annotationsets": {
            "methods": {
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "annotationSetId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "update": {
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
                        "annotationSetId": {
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
                    "request": {
                        "$ref": string;
                    };
                };
                "create": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
                };
                "delete": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "annotationSetId": {
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
                "search": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
                };
            };
        };
        "references": {
            "methods": {
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
                    "parameters": {
                        "referenceId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
                "search": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
            "resources": {
                "bases": {
                    "methods": {
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "start": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "referenceId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "end": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
            };
        };
        "datasets": {
            "methods": {
                "list": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "projectId": {
                            "type": string;
                            "location": string;
                            "description": string;
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
                "setIamPolicy": {
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
                        "resource": {
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
                "getIamPolicy": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "resource": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
                "undelete": {
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
                        "datasetId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "get": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "datasetId": {
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
                };
                "patch": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "datasetId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "updateMask": {
                            "type": string;
                            "location": string;
                            "description": string;
                            "format": string;
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
                "testIamPermissions": {
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
                        "resource": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                };
                "delete": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "datasetId": {
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
            };
        };
        "annotations": {
            "methods": {
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "annotationId": {
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
                "create": {
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
                "batchCreate": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                };
                "search": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                };
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "annotationId": {
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
                "update": {
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
                        "annotationId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "variantsets": {
            "methods": {
                "create": {
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
                "export": {
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
                        "variantSetId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "search": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
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
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "variantSetId": {
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
                        "variantSetId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
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
                        "variantSetId": {
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
        "operations": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "filter": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "name": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                        "pageToken": {
                            "type": string;
                            "location": string;
                            "description": string;
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
                        "name": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                };
                "cancel": {
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
        "referencesets": {
            "methods": {
                "get": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "referenceSetId": {
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
                "search": {
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
        "readgroupsets": {
            "methods": {
                "export": {
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
                        "readGroupSetId": {
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
                "search": {
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
                        "readGroupSetId": {
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
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "get": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "readGroupSetId": {
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
                };
                "import": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
                };
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "readGroupSetId": {
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
            };
            "resources": {
                "coveragebuckets": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "start": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "readGroupSetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "targetBucketWidth": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
                                "referenceName": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "end": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "reads": {
            "methods": {
                "search": {
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
            };
        };
        "callsets": {
            "methods": {
                "patch": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "callSetId": {
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
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
                        "callSetId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                };
                "create": {
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
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "callSetId": {
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
                };
                "search": {
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
            };
        };
    };
    "parameters": {
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
            "type": string;
            "location": string;
            "description": string;
        };
        "uploadType": {
            "type": string;
            "location": string;
            "description": string;
        };
        "fields": {
            "type": string;
            "location": string;
            "description": string;
        };
        "$.xgafv": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
        "alt": {
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
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
    };
    "schemas": {
        "UnexpectedExitStatusEvent": {
            "type": string;
            "properties": {
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "exitStatus": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Annotation": {
            "type": string;
            "properties": {
                "transcript": {
                    "$ref": string;
                    "description": string;
                };
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "annotationSetId": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "variant": {
                    "$ref": string;
                    "description": string;
                };
                "referenceId": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "reverseStrand": {
                    "description": string;
                    "type": string;
                };
                "referenceName": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "info": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CancelOperationRequest": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "SearchReadsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "referenceName": {
                    "description": string;
                    "type": string;
                };
                "readGroupSetIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "readGroupIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RuntimeMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "computeEngine": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Operation": {
            "type": string;
            "properties": {
                "metadata": {
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                };
                "done": {
                    "type": string;
                    "description": string;
                };
                "response": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ImportReadGroupSetsResponse": {
            "type": string;
            "properties": {
                "readGroupSetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "VariantCall": {
            "description": string;
            "type": string;
            "properties": {
                "phaseset": {
                    "description": string;
                    "type": string;
                };
                "info": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                };
                "callSetName": {
                    "description": string;
                    "type": string;
                };
                "genotypeLikelihood": {
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                };
                "callSetId": {
                    "description": string;
                    "type": string;
                };
                "genotype": {
                    "type": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchVariantsResponse": {
            "type": string;
            "properties": {
                "variants": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ListBasesResponse": {
            "type": string;
            "properties": {
                "sequence": {
                    "type": string;
                    "description": string;
                };
                "offset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
            "type": string;
            "properties": {
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "additionalProperties": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "UndeleteDatasetRequest": {
            "type": string;
            "properties": {};
            "id": string;
        };
        "Binding": {
            "type": string;
            "properties": {
                "condition": {
                    "$ref": string;
                    "description": string;
                };
                "members": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "role": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Range": {
            "description": string;
            "type": string;
            "properties": {
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "end": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "referenceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "VariantSet": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "datasetId": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "referenceSetId": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "referenceBounds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchCreateAnnotationsResponse": {
            "type": string;
            "properties": {
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ReferenceBound": {
            "description": string;
            "type": string;
            "properties": {
                "referenceName": {
                    "type": string;
                    "description": string;
                };
                "upperBound": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "operations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "Variant": {
            "description": string;
            "type": string;
            "properties": {
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "quality": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "variantSetId": {
                    "description": string;
                    "type": string;
                };
                "referenceName": {
                    "type": string;
                    "description": string;
                };
                "info": {
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                    "type": string;
                };
                "referenceBases": {
                    "description": string;
                    "type": string;
                };
                "names": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "alternateBases": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "end": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "filter": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "calls": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "SearchCallSetsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "callSets": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchVariantsRequest": {
            "type": string;
            "properties": {
                "referenceName": {
                    "description": string;
                    "type": string;
                };
                "variantSetIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxCalls": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "callSetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "variantName": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "events": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "request": {
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                };
                "runtimeMetadata": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "labels": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                };
                "createTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                };
                "clientId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SearchReadGroupSetsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "datasetIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "SearchAnnotationsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchReadsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "alignments": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ClinicalCondition": {
            "type": string;
            "properties": {
                "omimId": {
                    "type": string;
                    "description": string;
                };
                "externalIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "conceptId": {
                    "type": string;
                    "description": string;
                };
                "names": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "Program": {
            "type": string;
            "properties": {
                "commandLine": {
                    "type": string;
                    "description": string;
                };
                "prevProgramId": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ContainerStartedEvent": {
            "type": string;
            "properties": {
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "ipAddress": {
                    "type": string;
                    "description": string;
                };
                "portMappings": {
                    "additionalProperties": {
                        "type": string;
                        "format": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CoverageBucket": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "meanCoverage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ComputeEngine": {
            "type": string;
            "properties": {
                "machineType": {
                    "description": string;
                    "type": string;
                };
                "diskNames": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "instanceName": {
                    "type": string;
                    "description": string;
                };
                "zone": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ExternalId": {
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "sourceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Reference": {
            "description": string;
            "type": string;
            "properties": {
                "sourceAccessions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "ncbiTaxonId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sourceUri": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "md5checksum": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "length": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "VariantSetMetadata": {
            "type": string;
            "properties": {
                "info": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "number": {
                    "description": string;
                    "type": string;
                };
                "key": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "SearchVariantSetsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "datasetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchReferenceSetsRequest": {
            "type": string;
            "properties": {
                "assemblyId": {
                    "type": string;
                    "description": string;
                };
                "md5checksums": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "accessions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "SetIamPolicyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "policy": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DelayedEvent": {
            "type": string;
            "properties": {
                "metrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "cause": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "MergeVariantsRequest": {
            "type": string;
            "properties": {
                "variants": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "infoMergeConfig": {
                    "additionalProperties": {
                        "type": string;
                        "enum": string[];
                    };
                    "description": string;
                    "type": string;
                };
                "variantSetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Read": {
            "type": string;
            "properties": {
                "fragmentLength": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "failedVendorQualityChecks": {
                    "description": string;
                    "type": string;
                };
                "alignedQuality": {
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                };
                "alignment": {
                    "$ref": string;
                    "description": string;
                };
                "numberReads": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "secondaryAlignment": {
                    "description": string;
                    "type": string;
                };
                "fragmentName": {
                    "type": string;
                    "description": string;
                };
                "readGroupSetId": {
                    "type": string;
                    "description": string;
                };
                "duplicateFragment": {
                    "type": string;
                    "description": string;
                };
                "readNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alignedSequence": {
                    "type": string;
                    "description": string;
                };
                "readGroupId": {
                    "type": string;
                    "description": string;
                };
                "nextMatePosition": {
                    "$ref": string;
                    "description": string;
                };
                "info": {
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                    "type": string;
                };
                "properPlacement": {
                    "description": string;
                    "type": string;
                };
                "supplementaryAlignment": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "BatchCreateAnnotationsRequest": {
            "type": string;
            "properties": {
                "requestId": {
                    "description": string;
                    "type": string;
                };
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "WorkerReleasedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "zone": {
                    "type": string;
                    "description": string;
                };
                "instance": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CigarUnit": {
            "type": string;
            "properties": {
                "referenceSequence": {
                    "description": string;
                    "type": string;
                };
                "operationLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "operation": {
                    "enum": string[];
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
        };
        "ReferenceSet": {
            "description": string;
            "type": string;
            "properties": {
                "sourceUri": {
                    "description": string;
                    "type": string;
                };
                "ncbiTaxonId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "referenceIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "md5checksum": {
                    "type": string;
                    "description": string;
                };
                "assemblyId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "sourceAccessions": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Transcript": {
            "description": string;
            "type": string;
            "properties": {
                "geneId": {
                    "description": string;
                    "type": string;
                };
                "exons": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "codingSequence": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AnnotationSet": {
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "referenceSetId": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "info": {
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "datasetId": {
                    "description": string;
                    "type": string;
                };
                "sourceUri": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "FailedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "cause": {
                    "type": string;
                    "description": string;
                };
                "code": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "Experiment": {
            "type": string;
            "properties": {
                "platformUnit": {
                    "type": string;
                    "description": string;
                };
                "libraryId": {
                    "description": string;
                    "type": string;
                };
                "instrumentModel": {
                    "type": string;
                    "description": string;
                };
                "sequencingCenter": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ContainerStoppedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "exitStatus": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "actionId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "stderr": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListDatasetsResponse": {
            "type": string;
            "properties": {
                "datasets": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "TestIamPermissionsRequest": {
            "type": string;
            "properties": {
                "permissions": {
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
        "PullStartedEvent": {
            "type": string;
            "properties": {
                "imageUri": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Exon": {
            "type": string;
            "properties": {
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "frame": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ExportReadGroupSetRequest": {
            "description": string;
            "type": string;
            "properties": {
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "exportUri": {
                    "type": string;
                    "description": string;
                };
                "referenceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "CallSet": {
            "type": string;
            "properties": {
                "sampleId": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "info": {
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                    "type": string;
                };
                "variantSetIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "created": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "PullStoppedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SearchAnnotationSetsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "annotationSets": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "ImportVariantsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "infoMergeConfig": {
                    "additionalProperties": {
                        "enum": string[];
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "variantSetId": {
                    "type": string;
                    "description": string;
                };
                "sourceUris": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "normalizeReferenceNames": {
                    "description": string;
                    "type": string;
                };
                "format": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "ListCoverageBucketsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "bucketWidth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "coverageBuckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "VariantAnnotation": {
            "type": string;
            "properties": {
                "transcriptIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "alternateBases": {
                    "type": string;
                    "description": string;
                };
                "geneId": {
                    "type": string;
                    "description": string;
                };
                "clinicalSignificance": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "conditions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "effect": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "RunPipelineResponse": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ExportVariantSetRequest": {
            "type": string;
            "properties": {
                "callSetIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "projectId": {
                    "type": string;
                    "description": string;
                };
                "format": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "bigqueryDataset": {
                    "description": string;
                    "type": string;
                };
                "bigqueryTable": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Event": {
            "description": string;
            "type": string;
            "properties": {
                "timestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "details": {
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Expr": {
            "type": string;
            "properties": {
                "expression": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "location": {
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
        };
        "SearchAnnotationsRequest": {
            "type": string;
            "properties": {
                "referenceName": {
                    "description": string;
                    "type": string;
                };
                "referenceId": {
                    "description": string;
                    "type": string;
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "annotationSetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "OperationEvent": {
            "type": string;
            "properties": {
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CodingSequence": {
            "type": string;
            "properties": {
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "TestIamPermissionsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "permissions": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "GetIamPolicyRequest": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "SearchReferencesResponse": {
            "type": string;
            "properties": {
                "references": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchAnnotationSetsRequest": {
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "referenceSetId": {
                    "type": string;
                    "description": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "datasetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "types": {
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchReadGroupSetsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "readGroupSets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "SearchReferencesRequest": {
            "type": string;
            "properties": {
                "accessions": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "referenceSetId": {
                    "type": string;
                    "description": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "md5checksums": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "LinearAlignment": {
            "type": string;
            "properties": {
                "position": {
                    "$ref": string;
                    "description": string;
                };
                "cigar": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mappingQuality": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Dataset": {
            "description": string;
            "type": string;
            "properties": {
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
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
        "ImportVariantsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "callSetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "WorkerAssignedEvent": {
            "type": string;
            "properties": {
                "instance": {
                    "description": string;
                    "type": string;
                };
                "zone": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ReadGroup": {
            "type": string;
            "properties": {
                "sampleId": {
                    "description": string;
                    "type": string;
                };
                "datasetId": {
                    "description": string;
                    "type": string;
                };
                "experiment": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "referenceSetId": {
                    "type": string;
                    "description": string;
                };
                "info": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "programs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "predictedInsertSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ReadGroupSet": {
            "description": string;
            "type": string;
            "properties": {
                "datasetId": {
                    "description": string;
                    "type": string;
                };
                "readGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "filename": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "referenceSetId": {
                    "type": string;
                    "description": string;
                };
                "info": {
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SearchVariantSetsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "variantSets": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "Entry": {
            "type": string;
            "properties": {
                "status": {
                    "$ref": string;
                    "description": string;
                };
                "annotation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Position": {
            "description": string;
            "type": string;
            "properties": {
                "position": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "referenceName": {
                    "description": string;
                    "type": string;
                };
                "reverseStrand": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SearchReferenceSetsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "referenceSets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "SearchCallSetsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "variantSetIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "ContainerKilledEvent": {
            "type": string;
            "properties": {
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ImportReadGroupSetsRequest": {
            "type": string;
            "properties": {
                "partitionStrategy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "datasetId": {
                    "description": string;
                    "type": string;
                };
                "sourceUris": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "referenceSetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Policy": {
            "description": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "version": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bindings": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/genomics.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/genomics": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/bigquery": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.read_write": {
                    "description": string;
                };
            };
        };
    };
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
};
export default _default;
//# sourceMappingURL=genomics-v1.d.ts.map