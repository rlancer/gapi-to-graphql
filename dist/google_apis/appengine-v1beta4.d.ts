declare const _default: {
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "apps": {
            "methods": {
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "ensureResourcesExist": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "appsId": {
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
                "patch": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "appsId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                        "mask": {
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
            };
            "resources": {
                "modules": {
                    "methods": {
                        "delete": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "modulesId": {
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
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "modulesId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
                            "scopes": string[];
                            "parameters": {
                                "appsId": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
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
                                "migrateTraffic": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "modulesId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "mask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
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
                    };
                    "resources": {
                        "versions": {
                            "methods": {
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
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "modulesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
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
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "modulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "versionsId": {
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
                                "get": {
                                    "description": string;
                                    "httpMethod": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "parameters": {
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "modulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "versionsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "view": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "list": {
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "pageSize": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "modulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "view": {
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "appsId": {
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                };
                                "patch": {
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
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "modulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "versionsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "mask": {
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
                                };
                            };
                            "resources": {
                                "instances": {
                                    "methods": {
                                        "get": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "modulesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "versionsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "appsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "instancesId": {
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
                                        "list": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "appsId": {
                                                    "description": string;
                                                    "required": boolean;
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
                                                "modulesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "versionsId": {
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
                                        "debug": {
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
                                                "appsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "instancesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "modulesId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "versionsId": {
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
                                        "delete": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "appsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "instancesId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "modulesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "versionsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
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
                    };
                };
                "operations": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "appsId": {
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
                                "filter": {
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
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "operationsId": {
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
                    };
                };
                "locations": {
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
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "locationsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "appsId": {
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
                    };
                };
            };
        };
    };
    "parameters": {
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
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
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
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "schemas": {
        "ScriptHandler": {
            "description": string;
            "type": string;
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FileInfo": {
            "description": string;
            "type": string;
            "properties": {
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
                "sha1Sum": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TrafficSplit": {
            "description": string;
            "type": string;
            "properties": {
                "shardBy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "allocations": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "OperationMetadataV1Beta": {
            "description": string;
            "type": string;
            "properties": {
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListModulesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "modules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Resources": {
            "description": string;
            "type": string;
            "properties": {
                "cpu": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "memoryGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "volumes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "diskGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Deployment": {
            "description": string;
            "type": string;
            "properties": {
                "files": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "container": {
                    "$ref": string;
                    "description": string;
                };
                "sourceReferences": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Volume": {
            "properties": {
                "volumeType": {
                    "description": string;
                    "type": string;
                };
                "sizeGb": {
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
            "description": string;
            "type": string;
        };
        "ListInstancesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "instances": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "OperationMetadataV1Alpha": {
            "properties": {
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UrlDispatchRule": {
            "properties": {
                "domain": {
                    "description": string;
                    "type": string;
                };
                "module": {
                    "description": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Module": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "split": {
                    "description": string;
                    "$ref": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListVersionsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "versions": {
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
        "ApiEndpointHandler": {
            "description": string;
            "type": string;
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "StaticDirectoryHandler": {
            "description": string;
            "type": string;
            "properties": {
                "expiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "applicationReadable": {
                    "description": string;
                    "type": string;
                };
                "httpHeaders": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "directory": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "requireMatchingFile": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AutomaticScaling": {
            "description": string;
            "type": string;
            "properties": {
                "minPendingLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "maxIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxTotalInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minTotalInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "networkUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "maxConcurrentRequests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "coolDownPeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxPendingLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cpuUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "diskUtilization": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "Library": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
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
        "ListLocationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "locations": {
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
        "ContainerInfo": {
            "properties": {
                "image": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "RequestUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetRequestCountPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetConcurrentRequests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EndpointsApiService": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "configId": {
                    "description": string;
                    "type": string;
                };
                "disableTraceSampling": {
                    "description": string;
                    "type": string;
                };
                "rolloutStrategy": {
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
        "UrlMap": {
            "description": string;
            "type": string;
            "properties": {
                "redirectHttpResponseCode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "securityLevel": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "authFailAction": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "script": {
                    "description": string;
                    "$ref": string;
                };
                "urlRegex": {
                    "description": string;
                    "type": string;
                };
                "login": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "apiEndpoint": {
                    "$ref": string;
                    "description": string;
                };
                "staticDirectory": {
                    "$ref": string;
                    "description": string;
                };
                "staticFiles": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ApiConfigHandler": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "securityLevel": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "authFailAction": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "script": {
                    "description": string;
                    "type": string;
                };
                "login": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "StaticFilesHandler": {
            "description": string;
            "type": string;
            "properties": {
                "applicationReadable": {
                    "description": string;
                    "type": string;
                };
                "httpHeaders": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "uploadPathRegex": {
                    "description": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "requireMatchingFile": {
                    "description": string;
                    "type": string;
                };
                "expiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DiskUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetReadBytesPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetWriteOpsPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetWriteBytesPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetReadOpsPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BasicScaling": {
            "description": string;
            "type": string;
            "properties": {
                "maxInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "idleTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CpuUtilization": {
            "properties": {
                "aggregationWindowLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetUtilization": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "IdentityAwareProxy": {
            "description": string;
            "type": string;
            "properties": {
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientSecret": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientId": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientSecretSha256": {
                    "description": string;
                    "type": string;
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
        "ManualScaling": {
            "properties": {
                "instances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateVersionMetadataV1": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LocationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "flexibleEnvironmentAvailable": {
                    "description": string;
                    "type": string;
                };
                "standardEnvironmentAvailable": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "operations": {
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
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "operationType": {
                    "description": string;
                    "type": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1Beta": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ErrorHandler": {
            "description": string;
            "type": string;
            "properties": {
                "errorCode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "staticFile": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadataV1": {
            "properties": {
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Network": {
            "description": string;
            "type": string;
            "properties": {
                "forwardedPorts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "instanceTag": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Application": {
            "description": string;
            "type": string;
            "properties": {
                "iap": {
                    "$ref": string;
                };
                "authDomain": {
                    "description": string;
                    "type": string;
                };
                "defaultCookieExpiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "codeBucket": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "defaultBucket": {
                    "description": string;
                    "type": string;
                };
                "dispatchRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultHostname": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Instance": {
            "description": string;
            "type": string;
            "properties": {
                "requests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "appEngineRelease": {
                    "description": string;
                    "type": string;
                };
                "startTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vmName": {
                    "description": string;
                    "type": string;
                };
                "qps": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vmId": {
                    "description": string;
                    "type": string;
                };
                "vmZoneName": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "vmUnlocked": {
                    "description": string;
                    "type": string;
                };
                "averageLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "memoryUsage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vmIp": {
                    "description": string;
                    "type": string;
                };
                "vmStatus": {
                    "description": string;
                    "type": string;
                };
                "availability": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "errors": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "NetworkUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetReceivedBytesPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetSentPacketsPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetSentBytesPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetReceivedPacketsPerSec": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Location": {
            "description": string;
            "type": string;
            "properties": {
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
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HealthCheck": {
            "description": string;
            "type": string;
            "properties": {
                "unhealthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "disableHealthCheck": {
                    "description": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "restartThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "healthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "checkInterval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SourceReference": {
            "description": string;
            "type": string;
            "properties": {
                "revisionId": {
                    "description": string;
                    "type": string;
                };
                "repository": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DebugInstanceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sshKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadataV1Beta5": {
            "description": string;
            "type": string;
            "properties": {
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1Alpha": {
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Version": {
            "properties": {
                "resources": {
                    "$ref": string;
                    "description": string;
                };
                "inboundServices": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "errorHandlers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultExpiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "libraries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nobuildFilesRegex": {
                    "description": string;
                    "type": string;
                };
                "basicScaling": {
                    "$ref": string;
                    "description": string;
                };
                "runtime": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "envVariables": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "network": {
                    "description": string;
                    "$ref": string;
                };
                "betaSettings": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "env": {
                    "description": string;
                    "type": string;
                };
                "handlers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "deployer": {
                    "description": string;
                    "type": string;
                };
                "automaticScaling": {
                    "$ref": string;
                    "description": string;
                };
                "healthCheck": {
                    "description": string;
                    "$ref": string;
                };
                "threadsafe": {
                    "description": string;
                    "type": string;
                };
                "manualScaling": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "apiConfig": {
                    "description": string;
                    "$ref": string;
                };
                "endpointsApiService": {
                    "description": string;
                    "$ref": string;
                };
                "vm": {
                    "description": string;
                    "type": string;
                };
                "instanceClass": {
                    "description": string;
                    "type": string;
                };
                "servingStatus": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "deployment": {
                    "$ref": string;
                    "description": string;
                };
                "runtimeApiVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/appengine.admin": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
            };
        };
    };
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
};
export default _default;
//# sourceMappingURL=appengine-v1beta4.d.ts.map