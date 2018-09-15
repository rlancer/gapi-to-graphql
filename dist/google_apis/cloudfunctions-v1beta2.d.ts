declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "projects": {
            "resources": {
                "locations": {
                    "resources": {
                        "functions": {
                            "methods": {
                                "update": {
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
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "location": {
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
                                            "description": string;
                                            "format": string;
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
                                        "location": {
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
                                "call": {
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
                                "generateUploadUrl": {
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
                                    "flatPath": string;
                                };
                                "generateDownloadUrl": {
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
                                    "request": {
                                        "$ref": string;
                                    };
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
                            };
                        };
                    };
                    "methods": {
                        "list": {
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
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                        };
                    };
                };
            };
        };
        "operations": {
            "methods": {
                "list": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "filter": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "name": {
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
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
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
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "location": string;
            "description": string;
            "type": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "Status": {
            "properties": {
                "message": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CallFunctionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "data": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SourceRepository": {
            "description": string;
            "type": string;
            "properties": {
                "deployedRevision": {
                    "description": string;
                    "type": string;
                };
                "sourcePath": {
                    "description": string;
                    "type": string;
                };
                "revision": {
                    "description": string;
                    "type": string;
                };
                "repositoryUrl": {
                    "description": string;
                    "type": string;
                };
                "tag": {
                    "description": string;
                    "type": string;
                };
                "branch": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CloudFunction": {
            "properties": {
                "availableMemoryMb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "runtime": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "versionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "serviceAccount": {
                    "description": string;
                    "type": string;
                };
                "sourceArchiveUrl": {
                    "description": string;
                    "type": string;
                };
                "sourceRepository": {
                    "description": string;
                    "$ref": string;
                };
                "network": {
                    "description": string;
                    "type": string;
                };
                "entryPoint": {
                    "description": string;
                    "type": string;
                };
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "sourceRepositoryUrl": {
                    "description": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latestOperation": {
                    "description": string;
                    "type": string;
                };
                "httpsTrigger": {
                    "$ref": string;
                    "description": string;
                };
                "maxInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "environmentVariables": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sourceUploadUrl": {
                    "description": string;
                    "type": string;
                };
                "eventTrigger": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
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
        "Location": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "locationId": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
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
        "GenerateDownloadUrlResponse": {
            "description": string;
            "type": string;
            "properties": {
                "downloadUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Retry": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GenerateUploadUrlRequest": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
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
        };
        "GenerateUploadUrlResponse": {
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
        "ListFunctionsResponse": {
            "properties": {
                "functions": {
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
        "ListLocationsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "locations": {
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
        "CallFunctionResponse": {
            "properties": {
                "executionId": {
                    "description": string;
                    "type": string;
                };
                "result": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "EventTrigger": {
            "description": string;
            "type": string;
            "properties": {
                "eventType": {
                    "description": string;
                    "type": string;
                };
                "resource": {
                    "description": string;
                    "type": string;
                };
                "service": {
                    "description": string;
                    "type": string;
                };
                "failurePolicy": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "HTTPSTrigger": {
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "FailurePolicy": {
            "description": string;
            "type": string;
            "properties": {
                "retry": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GenerateDownloadUrlRequest": {
            "properties": {
                "versionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OperationMetadataV1": {
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "request": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "versionId": {
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Operation": {
            "properties": {
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
                "done": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OperationMetadataV1Beta2": {
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "request": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "versionId": {
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
//# sourceMappingURL=cloudfunctions-v1beta2.d.ts.map