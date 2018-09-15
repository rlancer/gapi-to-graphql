declare const _default: {
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "title": string;
    "ownerName": string;
    "discoveryVersion": string;
    "resources": {
        "apps": {
            "resources": {
                "services": {
                    "resources": {
                        "versions": {
                            "methods": {
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
                                        "versionsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "servicesId": {
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
                                        "versionsId": {
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
                                        "servicesId": {
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
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "servicesId": {
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
                                        "view": {
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
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
                                        "servicesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "appsId": {
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
                                        "mask": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
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
                                        "servicesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
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
                                    "request": {
                                        "$ref": string;
                                    };
                                };
                            };
                            "resources": {
                                "instances": {
                                    "methods": {
                                        "debug": {
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
                                                "versionsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "servicesId": {
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
                                        "delete": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "servicesId": {
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
                                        "get": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "servicesId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "appsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "instancesId": {
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
                                                "servicesId": {
                                                    "description": string;
                                                    "required": boolean;
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
                                                "versionsId": {
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
                    };
                    "methods": {
                        "delete": {
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
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "servicesId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "get": {
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
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "servicesId": {
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
                                "appsId": {
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
                                "migrateTraffic": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "mask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "servicesId": {
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
                "operations": {
                    "methods": {
                        "list": {
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
                                "filter": {
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
                        "get": {
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
                                "operationsId": {
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
                            "parameters": {
                                "filter": {
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
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
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
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "locationsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                };
            };
            "methods": {
                "create": {
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
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "ensureResourcesExist": {
                            "location": string;
                            "description": string;
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
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
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
            "location": string;
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
            "description": string;
            "type": string;
            "location": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
    };
    "schemas": {
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
                "path": {
                    "description": string;
                    "type": string;
                };
                "domain": {
                    "description": string;
                    "type": string;
                };
                "service": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListVersionsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "versions": {
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
        "ApiEndpointHandler": {
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
                "maxIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestUtilization": {
                    "$ref": string;
                    "description": string;
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
                "coolDownPeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxConcurrentRequests": {
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
                    "description": string;
                    "$ref": string;
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
            "description": string;
            "type": string;
            "properties": {
                "image": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RequestUtilization": {
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
            "description": string;
            "type": string;
        };
        "UrlMap": {
            "description": string;
            "type": string;
            "properties": {
                "apiEndpoint": {
                    "description": string;
                    "$ref": string;
                };
                "staticFiles": {
                    "$ref": string;
                    "description": string;
                };
                "redirectHttpResponseCode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
        "Operation": {
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
            "description": string;
            "type": string;
        };
        "ApiConfigHandler": {
            "properties": {
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
                "url": {
                    "description": string;
                    "type": string;
                };
                "securityLevel": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "authFailAction": {
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
        "StaticFilesHandler": {
            "description": string;
            "type": string;
            "properties": {
                "httpHeaders": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "applicationReadable": {
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
            "description": string;
            "type": string;
        };
        "BasicScaling": {
            "description": string;
            "type": string;
            "properties": {
                "idleTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxInstances": {
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
            "properties": {
                "oauth2ClientSecretSha256": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Status": {
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
            "description": string;
            "type": string;
        };
        "ManualScaling": {
            "description": string;
            "type": string;
            "properties": {
                "instances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LocationMetadata": {
            "properties": {
                "standardEnvironmentAvailable": {
                    "description": string;
                    "type": string;
                };
                "flexibleEnvironmentAvailable": {
                    "description": string;
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
        "Service": {
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
        "ListOperationsResponse": {
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
            "description": string;
            "type": string;
        };
        "OperationMetadata": {
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
            "description": string;
            "type": string;
        };
        "CreateVersionMetadataV1Beta": {
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
        "OperationMetadataV1": {
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
            };
            "id": string;
        };
        "ErrorHandler": {
            "description": string;
            "type": string;
            "properties": {
                "errorCode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
        "Application": {
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
            "description": string;
            "type": string;
        };
        "Network": {
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
                "subnetworkName": {
                    "description": string;
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
                "vmUnlocked": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "vmZoneName": {
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
                "vmIp": {
                    "description": string;
                    "type": string;
                };
                "memoryUsage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errors": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "availability": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "vmStatus": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Location": {
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
            "description": string;
            "type": string;
        };
        "NetworkUtilization": {
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
            "description": string;
            "type": string;
        };
        "HealthCheck": {
            "properties": {
                "disableHealthCheck": {
                    "description": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "healthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "restartThreshold": {
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
                "unhealthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DebugInstanceRequest": {
            "properties": {
                "sshKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
        "OperationMetadataV1Beta5": {
            "description": string;
            "type": string;
            "properties": {
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
        "Version": {
            "description": string;
            "type": string;
            "properties": {
                "deployer": {
                    "description": string;
                    "type": string;
                };
                "automaticScaling": {
                    "$ref": string;
                    "description": string;
                };
                "diskUsageBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "healthCheck": {
                    "$ref": string;
                    "description": string;
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
                    "$ref": string;
                    "description": string;
                };
                "endpointsApiService": {
                    "$ref": string;
                    "description": string;
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "deployment": {
                    "$ref": string;
                    "description": string;
                };
                "runtimeApiVersion": {
                    "description": string;
                    "type": string;
                };
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
                    "description": string;
                    "$ref": string;
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
                    "$ref": string;
                    "description": string;
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
            };
            "id": string;
        };
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
            "properties": {
                "sha1Sum": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "TrafficSplit": {
            "description": string;
            "type": string;
            "properties": {
                "shardBy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "allocations": {
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadataV1Beta": {
            "description": string;
            "type": string;
            "properties": {
                "createVersionMetadata": {
                    "$ref": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
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
            };
            "id": string;
        };
        "ListServicesResponse": {
            "properties": {
                "services": {
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
        "Resources": {
            "description": string;
            "type": string;
            "properties": {
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
            };
            "id": string;
        };
        "Deployment": {
            "properties": {
                "files": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "container": {
                    "description": string;
                    "$ref": string;
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
            "description": string;
            "type": string;
        };
        "Volume": {
            "description": string;
            "type": string;
            "properties": {
                "sizeGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "volumeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListInstancesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "instances": {
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
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/appengine.admin": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
            };
        };
    };
    "kind": string;
    "description": string;
    "servicePath": string;
};
export default _default;
//# sourceMappingURL=appengine-v1beta5.d.ts.map