declare const _default: {
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "operations": {
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
                        "name": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
                "cancel": {
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
                    "description": string;
                };
            };
        };
        "services": {
            "methods": {
                "search": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "query": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "parent": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
            };
            "resources": {
                "tenancyUnits": {
                    "methods": {
                        "removeProject": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "name": {
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
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
                        "addProject": {
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
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "filter": {
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
                                "parent": {
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
                        };
                        "create": {
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
            "description": string;
            "type": string;
            "location": string;
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
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
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
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "TenantProjectConfig": {
            "description": string;
            "type": string;
            "properties": {
                "services": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "billingConfig": {
                    "$ref": string;
                    "description": string;
                };
                "tenantProjectPolicy": {
                    "description": string;
                    "$ref": string;
                };
                "folder": {
                    "description": string;
                    "type": string;
                };
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "serviceAccountConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "PolicyBinding": {
            "description": string;
            "type": string;
            "properties": {
                "members": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "role": {
                    "description": string;
                    "type": string;
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
                "responseStreaming": {
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
        "Field": {
            "description": string;
            "type": string;
            "properties": {
                "jsonName": {
                    "description": string;
                    "type": string;
                };
                "kind": {
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "LabelDescriptor": {
            "description": string;
            "type": string;
            "properties": {
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
                "key": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Type": {
            "description": string;
            "type": string;
            "properties": {
                "oneofs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "syntax": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "sourceContext": {
                    "description": string;
                    "$ref": string;
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
            };
            "id": string;
        };
        "Experimental": {
            "description": string;
            "type": string;
            "properties": {
                "authorization": {
                    "$ref": string;
                    "description": string;
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
        "ServiceAccountConfig": {
            "description": string;
            "type": string;
            "properties": {
                "accountId": {
                    "description": string;
                    "type": string;
                };
                "tenantProjectRoles": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
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
        "ContextRule": {
            "description": string;
            "type": string;
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
        "MetricDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "valueType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
                "name": {
                    "description": string;
                    "type": string;
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
        "ListTenancyUnitsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "tenancyUnits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "SearchTenancyUnitsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "tenancyUnits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
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
                "dropzone": {
                    "description": string;
                    "type": string;
                };
                "maxDirectDownloadSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "useDirectDownload": {
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
        "CreateTenancyUnitRequest": {
            "description": string;
            "type": string;
            "properties": {
                "tenancyUnitId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "BillingDestination": {
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
                "providerId": {
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
        "Documentation": {
            "description": string;
            "type": string;
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
        };
        "AuthenticationRule": {
            "description": string;
            "type": string;
            "properties": {
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
                "oauth": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BackendRule": {
            "description": string;
            "type": string;
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
        };
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
        "CancelOperationRequest": {
            "description": string;
            "type": string;
            "properties": {};
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
        "TenantProjectPolicy": {
            "description": string;
            "type": string;
            "properties": {
                "policyBindings": {
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
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
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
        "AddTenantProjectRequest": {
            "description": string;
            "type": string;
            "properties": {
                "tag": {
                    "description": string;
                    "type": string;
                };
                "projectConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "EnumValue": {
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
                "number": {
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
        "Service": {
            "description": string;
            "type": string;
            "properties": {
                "context": {
                    "description": string;
                    "$ref": string;
                };
                "enums": {
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
                    "description": string;
                    "$ref": string;
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
                "billing": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
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
                "systemParameters": {
                    "$ref": string;
                    "description": string;
                };
                "backend": {
                    "description": string;
                    "$ref": string;
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
            "description": string;
            "type": string;
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
        };
        "BillingConfig": {
            "description": string;
            "type": string;
            "properties": {
                "billingAccount": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RemoveTenantProjectRequest": {
            "description": string;
            "type": string;
            "properties": {
                "tag": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TenantResource": {
            "description": string;
            "type": string;
            "properties": {
                "tag": {
                    "description": string;
                    "type": string;
                };
                "resource": {
                    "description": string;
                    "type": string;
                };
                "status": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "HttpRule": {
            "description": string;
            "type": string;
            "properties": {
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
                "responseBody": {
                    "description": string;
                    "type": string;
                };
                "restCollection": {
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
                "authorizations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "put": {
                    "description": string;
                    "type": string;
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
        "TenancyUnit": {
            "description": string;
            "type": string;
            "properties": {
                "tenantResources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "consumer": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "service": {
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
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
};
export default _default;
//# sourceMappingURL=serviceconsumermanagement-v1.d.ts.map