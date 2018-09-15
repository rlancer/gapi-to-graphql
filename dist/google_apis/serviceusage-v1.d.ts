declare const _default: {
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "services": {
            "methods": {
                "disable": {
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
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "batchEnable": {
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
                "enable": {
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
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                };
                "list": {
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
                        "filter": {
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
                    "path": string;
                    "id": string;
                };
            };
        };
        "operations": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
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
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
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
                };
            };
        };
    };
    "parameters": {
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
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "BatchEnableServicesResponse": {
            "properties": {
                "services": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "failures": {
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
        "MetricRule": {
            "description": string;
            "type": string;
            "properties": {
                "selector": {
                    "description": string;
                    "type": string;
                };
                "metricCosts": {
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
        "CancelOperationRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleApiService": {
            "description": string;
            "type": string;
            "properties": {
                "enums": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "context": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "usage": {
                    "description": string;
                    "$ref": string;
                };
                "metrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "authentication": {
                    "description": string;
                    "$ref": string;
                };
                "experimental": {
                    "$ref": string;
                    "description": string;
                };
                "control": {
                    "description": string;
                    "$ref": string;
                };
                "configVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "monitoring": {
                    "$ref": string;
                    "description": string;
                };
                "producerProjectId": {
                    "description": string;
                    "type": string;
                };
                "systemTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "quota": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "billing": {
                    "description": string;
                    "$ref": string;
                };
                "customError": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "endpoints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "logs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "apis": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "types": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sourceInfo": {
                    "description": string;
                    "$ref": string;
                };
                "http": {
                    "$ref": string;
                    "description": string;
                };
                "systemParameters": {
                    "$ref": string;
                    "description": string;
                };
                "backend": {
                    "$ref": string;
                    "description": string;
                };
                "documentation": {
                    "$ref": string;
                    "description": string;
                };
                "monitoredResources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "logging": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Authentication": {
            "description": string;
            "type": string;
            "properties": {
                "providers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
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
                    "$ref": string;
                    "description": string;
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
        "Page": {
            "description": string;
            "type": string;
            "properties": {
                "subpages": {
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
                "content": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleApiServiceusageV1ServiceConfig": {
            "description": string;
            "type": string;
            "properties": {
                "quota": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "authentication": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "endpoints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "apis": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "documentation": {
                    "$ref": string;
                    "description": string;
                };
                "usage": {
                    "description": string;
                    "$ref": string;
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
                        "type": string;
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
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
        "AuthProvider": {
            "description": string;
            "type": string;
            "properties": {
                "jwksUri": {
                    "description": string;
                    "type": string;
                };
                "audiences": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "issuer": {
                    "description": string;
                    "type": string;
                };
                "authorizationUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EnumValue": {
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
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
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
        "CustomHttpPattern": {
            "properties": {
                "kind": {
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
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "resourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "MetricDescriptorMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "ingestDelay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "launchStage": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "samplePeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SystemParameterRule": {
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
                "selector": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HttpRule": {
            "properties": {
                "mediaUpload": {
                    "description": string;
                    "$ref": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
                "custom": {
                    "$ref": string;
                    "description": string;
                };
                "get": {
                    "description": string;
                    "type": string;
                };
                "patch": {
                    "description": string;
                    "type": string;
                };
                "put": {
                    "description": string;
                    "type": string;
                };
                "authorizations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "delete": {
                    "description": string;
                    "type": string;
                };
                "body": {
                    "description": string;
                    "type": string;
                };
                "mediaDownload": {
                    "description": string;
                    "$ref": string;
                };
                "post": {
                    "description": string;
                    "type": string;
                };
                "restMethodName": {
                    "description": string;
                    "type": string;
                };
                "additionalBindings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "restCollection": {
                    "description": string;
                    "type": string;
                };
                "responseBody": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MonitoringDestination": {
            "properties": {
                "monitoredResource": {
                    "description": string;
                    "type": string;
                };
                "metrics": {
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
        "SystemParameters": {
            "description": string;
            "type": string;
            "properties": {
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Quota": {
            "description": string;
            "type": string;
            "properties": {
                "limits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "metricRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "LoggingDestination": {
            "description": string;
            "type": string;
            "properties": {
                "logs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "monitoredResource": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Option": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "value": {
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
        "Logging": {
            "description": string;
            "type": string;
            "properties": {
                "consumerDestinations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "producerDestinations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "QuotaLimit": {
            "description": string;
            "type": string;
            "properties": {
                "unit": {
                    "description": string;
                    "type": string;
                };
                "maxLimit": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "duration": {
                    "description": string;
                    "type": string;
                };
                "freeTier": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "defaultLimit": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "metric": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "values": {
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
        "Method": {
            "description": string;
            "type": string;
            "properties": {
                "syntax": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "responseTypeUrl": {
                    "description": string;
                    "type": string;
                };
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseStreaming": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "requestTypeUrl": {
                    "description": string;
                    "type": string;
                };
                "requestStreaming": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EnableFailure": {
            "description": string;
            "type": string;
            "properties": {
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
                "serviceId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Mixin": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "root": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CustomError": {
            "description": string;
            "type": string;
            "properties": {
                "types": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Http": {
            "properties": {
                "fullyDecodeReservedExpansion": {
                    "description": string;
                    "type": string;
                };
                "rules": {
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
        "SourceInfo": {
            "description": string;
            "type": string;
            "properties": {
                "sourceFiles": {
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
            };
            "id": string;
        };
        "Control": {
            "description": string;
            "type": string;
            "properties": {
                "environment": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SystemParameter": {
            "description": string;
            "type": string;
            "properties": {
                "httpHeader": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "urlQueryParameter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleApiServiceusageV1Service": {
            "properties": {
                "parent": {
                    "description": string;
                    "type": string;
                };
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "Monitoring": {
            "properties": {
                "consumerDestinations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "producerDestinations": {
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
        "Field": {
            "properties": {
                "kind": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "jsonName": {
                    "description": string;
                    "type": string;
                };
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "oneofIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "packed": {
                    "description": string;
                    "type": string;
                };
                "cardinality": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
                "typeUrl": {
                    "description": string;
                    "type": string;
                };
                "number": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Enum": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "enumvalue": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sourceContext": {
                    "$ref": string;
                    "description": string;
                };
                "syntax": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "LabelDescriptor": {
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "valueType": {
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
        "EnableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "EnableServiceResponse": {
            "description": string;
            "type": string;
            "properties": {
                "service": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "Type": {
            "description": string;
            "type": string;
            "properties": {
                "fields": {
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
                "oneofs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "sourceContext": {
                    "description": string;
                    "$ref": string;
                };
                "syntax": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Experimental": {
            "description": string;
            "type": string;
            "properties": {
                "authorization": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "Backend": {
            "description": string;
            "type": string;
            "properties": {
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DocumentationRule": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "deprecationDescription": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuthorizationConfig": {
            "description": string;
            "type": string;
            "properties": {
                "provider": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ContextRule": {
            "properties": {
                "provided": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "requested": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "allowedRequestExtensions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "allowedResponseExtensions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SourceContext": {
            "description": string;
            "type": string;
            "properties": {
                "fileName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MetricDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "valueType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "metricKind": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
                "unit": {
                    "description": string;
                    "type": string;
                };
                "labels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Billing": {
            "description": string;
            "type": string;
            "properties": {
                "consumerDestinations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
        "Endpoint": {
            "description": string;
            "type": string;
            "properties": {
                "aliases": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "features": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "allowCors": {
                    "description": string;
                    "type": string;
                };
                "name": {
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
        "OAuthRequirements": {
            "description": string;
            "type": string;
            "properties": {
                "canonicalScopes": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Usage": {
            "description": string;
            "type": string;
            "properties": {
                "requirements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "producerNotificationChannel": {
                    "description": string;
                    "type": string;
                };
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Context": {
            "description": string;
            "type": string;
            "properties": {
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DisableServiceResponse": {
            "description": string;
            "type": string;
            "properties": {
                "service": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "LogDescriptor": {
            "properties": {
                "labels": {
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
                "description": {
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
        "CustomErrorRule": {
            "description": string;
            "type": string;
            "properties": {
                "isErrorType": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MonitoredResourceDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
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
                "description": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MediaDownload": {
            "properties": {
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "downloadService": {
                    "description": string;
                    "type": string;
                };
                "completeNotification": {
                    "description": string;
                    "type": string;
                };
                "maxDirectDownloadSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dropzone": {
                    "description": string;
                    "type": string;
                };
                "useDirectDownload": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DisableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "disableDependentServices": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuthorizationRule": {
            "description": string;
            "type": string;
            "properties": {
                "selector": {
                    "description": string;
                    "type": string;
                };
                "permissions": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleApiServiceusageV1OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "resourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "MediaUpload": {
            "description": string;
            "type": string;
            "properties": {
                "completeNotification": {
                    "description": string;
                    "type": string;
                };
                "progressNotification": {
                    "description": string;
                    "type": string;
                };
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "dropzone": {
                    "description": string;
                    "type": string;
                };
                "startNotification": {
                    "description": string;
                    "type": string;
                };
                "uploadService": {
                    "description": string;
                    "type": string;
                };
                "mimeTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "maxSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "BillingDestination": {
            "description": string;
            "type": string;
            "properties": {
                "monitoredResource": {
                    "description": string;
                    "type": string;
                };
                "metrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "BatchEnableServicesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "serviceIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "UsageRule": {
            "description": string;
            "type": string;
            "properties": {
                "skipServiceControl": {
                    "description": string;
                    "type": string;
                };
                "allowUnregisteredCalls": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuthRequirement": {
            "description": string;
            "type": string;
            "properties": {
                "audiences": {
                    "description": string;
                    "type": string;
                };
                "providerId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Documentation": {
            "description": string;
            "type": string;
            "properties": {
                "documentationRootUrl": {
                    "description": string;
                    "type": string;
                };
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "overview": {
                    "description": string;
                    "type": string;
                };
                "pages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "summary": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuthenticationRule": {
            "description": string;
            "type": string;
            "properties": {
                "oauth": {
                    "description": string;
                    "$ref": string;
                };
                "requirements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
                "allowWithoutCredential": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BackendRule": {
            "properties": {
                "minDeadline": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "address": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
                "deadline": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Api": {
            "description": string;
            "type": string;
            "properties": {
                "methods": {
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
                "syntax": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "sourceContext": {
                    "$ref": string;
                    "description": string;
                };
                "version": {
                    "description": string;
                    "type": string;
                };
                "mixins": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "options": {
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
                "https://www.googleapis.com/auth/service.management": {
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
};
export default _default;
//# sourceMappingURL=serviceusage-v1.d.ts.map