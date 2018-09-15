declare const _default: {
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "Api": {
            "description": string;
            "type": string;
            "properties": {
                "syntax": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "sourceContext": {
                    "description": string;
                    "$ref": string;
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
            };
            "id": string;
        };
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
        "GoogleApiService": {
            "description": string;
            "type": string;
            "properties": {
                "logging": {
                    "description": string;
                    "$ref": string;
                };
                "monitoredResources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
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
                    "$ref": string;
                    "description": string;
                };
                "metrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "authentication": {
                    "$ref": string;
                    "description": string;
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
                "systemTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "producerProjectId": {
                    "description": string;
                    "type": string;
                };
                "quota": {
                    "description": string;
                    "$ref": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "billing": {
                    "$ref": string;
                    "description": string;
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
                "apis": {
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
                "types": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sourceInfo": {
                    "$ref": string;
                    "description": string;
                };
                "http": {
                    "$ref": string;
                    "description": string;
                };
                "backend": {
                    "description": string;
                    "$ref": string;
                };
                "systemParameters": {
                    "$ref": string;
                    "description": string;
                };
                "documentation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
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
        "Authentication": {
            "properties": {
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "providers": {
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
                    "description": string;
                    "$ref": string;
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
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Status": {
            "description": string;
            "type": string;
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
        };
        "AuthProvider": {
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
            "description": string;
            "type": string;
        };
        "Service": {
            "description": string;
            "type": string;
            "properties": {
                "config": {
                    "description": string;
                    "$ref": string;
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
                "parent": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EnumValue": {
            "properties": {
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
        "CustomHttpPattern": {
            "description": string;
            "type": string;
            "properties": {
                "path": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "description": string;
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
        "MetricDescriptorMetadata": {
            "properties": {
                "ingestDelay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "launchStage": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "samplePeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "HttpRule": {
            "description": string;
            "type": string;
            "properties": {
                "mediaUpload": {
                    "$ref": string;
                    "description": string;
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
                    "$ref": string;
                    "description": string;
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
        };
        "MonitoringDestination": {
            "description": string;
            "type": string;
            "properties": {
                "metrics": {
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
        "ServiceConfig": {
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
                    "description": string;
                    "$ref": string;
                };
                "usage": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
            "properties": {
                "value": {
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
            };
            "id": string;
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
                "unit": {
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
                "syntax": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
            };
            "id": string;
        };
        "EnableFailure": {
            "description": string;
            "type": string;
            "properties": {
                "serviceId": {
                    "description": string;
                    "type": string;
                };
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Mixin": {
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
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
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
        };
        "SourceInfo": {
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
            "description": string;
            "type": string;
        };
        "Control": {
            "properties": {
                "environment": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleApiServiceusageV1Service": {
            "description": string;
            "type": string;
            "properties": {
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
                "parent": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SystemParameter": {
            "properties": {
                "urlQueryParameter": {
                    "description": string;
                    "type": string;
                };
                "httpHeader": {
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
        "Field": {
            "description": string;
            "type": string;
            "properties": {
                "jsonName": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
                "cardinality": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "packed": {
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
        };
        "Monitoring": {
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
        "Enum": {
            "description": string;
            "type": string;
            "properties": {
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sourceContext": {
                    "description": string;
                    "$ref": string;
                };
                "syntax": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
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
            };
            "id": string;
        };
        "EnableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "LabelDescriptor": {
            "description": string;
            "type": string;
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
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
                "options": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
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
                "deprecationDescription": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuthorizationConfig": {
            "properties": {
                "provider": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ContextRule": {
            "properties": {
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
                "provided": {
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
                "type": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "valueType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "metricKind": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "unit": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Billing": {
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
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
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
                "selector": {
                    "description": string;
                    "type": string;
                };
                "isErrorType": {
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
        "MediaDownload": {
            "properties": {
                "useDirectDownload": {
                    "description": string;
                    "type": string;
                };
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
                "dropzone": {
                    "description": string;
                    "type": string;
                };
                "maxDirectDownloadSize": {
                    "description": string;
                    "format": string;
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
            "properties": {};
            "id": string;
        };
        "AuthorizationRule": {
            "description": string;
            "type": string;
            "properties": {
                "permissions": {
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
        "GoogleApiServiceusageV1OperationMetadata": {
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
            "description": string;
            "type": string;
        };
        "MediaUpload": {
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
                "maxSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "mimeTypes": {
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
                "selector": {
                    "description": string;
                    "type": string;
                };
                "skipServiceControl": {
                    "description": string;
                    "type": string;
                };
                "allowUnregisteredCalls": {
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
            "description": string;
            "type": string;
        };
        "BackendRule": {
            "properties": {
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
                "minDeadline": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AuthenticationRule": {
            "description": string;
            "type": string;
            "properties": {
                "selector": {
                    "description": string;
                    "type": string;
                };
                "allowWithoutCredential": {
                    "description": string;
                    "type": string;
                };
                "oauth": {
                    "$ref": string;
                    "description": string;
                };
                "requirements": {
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
                "https://www.googleapis.com/auth/service.management": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
            };
        };
    };
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
                "list": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "filter": {
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
                    "description": string;
                };
                "disable": {
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
                "batchEnable": {
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
                "enable": {
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
            };
        };
        "operations": {
            "methods": {
                "list": {
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
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "description": string;
    "kind": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
};
export default _default;
//# sourceMappingURL=serviceusage-v1beta1.d.ts.map