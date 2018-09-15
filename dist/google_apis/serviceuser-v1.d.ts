declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "title": string;
    "ownerName": string;
    "resources": {
        "services": {
            "methods": {
                "search": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
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
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "projects": {
            "resources": {
                "services": {
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
                        };
                        "disable": {
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
                    };
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
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
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
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "AuthProvider": {
            "description": string;
            "type": string;
            "properties": {
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
                "jwksUri": {
                    "description": string;
                    "type": string;
                };
                "audiences": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Service": {
            "description": string;
            "type": string;
            "properties": {
                "quota": {
                    "description": string;
                    "$ref": string;
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
                    "$ref": string;
                    "description": string;
                };
                "systemParameters": {
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
                "enums": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "context": {
                    "description": string;
                    "$ref": string;
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
        "CustomHttpPattern": {
            "description": string;
            "type": string;
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
        };
        "OperationMetadata": {
            "properties": {
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "steps": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "progressPercentage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MetricDescriptorMetadata": {
            "properties": {
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
                "ingestDelay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PublishedService": {
            "description": string;
            "type": string;
            "properties": {
                "service": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
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
                "selector": {
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
        "HttpRule": {
            "properties": {
                "body": {
                    "description": string;
                    "type": string;
                };
                "post": {
                    "description": string;
                    "type": string;
                };
                "mediaDownload": {
                    "$ref": string;
                    "description": string;
                };
                "additionalBindings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseBody": {
                    "description": string;
                    "type": string;
                };
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
                "delete": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MonitoringDestination": {
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
        "Step": {
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "status": {
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
        };
        "Logging": {
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
        "Method": {
            "properties": {
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
                "syntax": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "QuotaLimit": {
            "description": string;
            "type": string;
            "properties": {
                "defaultLimit": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "metric": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "values": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                };
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
                "freeTier": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "duration": {
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
                "root": {
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
            "description": string;
            "type": string;
            "properties": {
                "sourceFiles": {
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
        };
        "Field": {
            "description": string;
            "type": string;
            "properties": {
                "typeUrl": {
                    "description": string;
                    "type": string;
                };
                "number": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
        "Type": {
            "description": string;
            "type": string;
            "properties": {
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
            "description": string;
            "type": string;
            "properties": {
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
                "requested": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
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
                "name": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
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
        "ListEnabledServicesResponse": {
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
                "name": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
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
            "description": string;
            "type": string;
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
        "LogDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
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
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CustomErrorRule": {
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
            "description": string;
            "type": string;
        };
        "MonitoredResourceDescriptor": {
            "description": string;
            "type": string;
            "properties": {
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
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MediaDownload": {
            "description": string;
            "type": string;
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
        };
        "DisableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "SearchServicesResponse": {
            "description": string;
            "type": string;
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
        "BillingDestination": {
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
        "UsageRule": {
            "description": string;
            "type": string;
            "properties": {
                "allowUnregisteredCalls": {
                    "description": string;
                    "type": string;
                };
                "selector": {
                    "description": string;
                    "type": string;
                };
                "skipServiceControl": {
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
                "summary": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
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
        "AuthenticationRule": {
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
            "description": string;
            "type": string;
            "properties": {
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
            "description": string;
            "type": string;
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
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/service.management": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
};
export default _default;
//# sourceMappingURL=serviceuser-v1.d.ts.map