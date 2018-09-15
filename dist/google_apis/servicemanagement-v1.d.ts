declare const _default: {
    "baseUrl": string;
    "servicePath": string;
    "kind": string;
    "description": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "schemas": {
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
                "jsonName": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
        "TestIamPermissionsRequest": {
            "description": string;
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
                "valueType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "key": {
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
        "Diagnostic": {
            "description": string;
            "type": string;
            "properties": {
                "kind": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "message": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EnableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "consumerId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Type": {
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
                    "$ref": string;
                    "description": string;
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
            "description": string;
            "type": string;
        };
        "GenerateConfigReportResponse": {
            "properties": {
                "changeReports": {
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
                "diagnostics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "serviceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListServiceConfigsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "serviceConfigs": {
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
        "AuditConfig": {
            "properties": {
                "service": {
                    "description": string;
                    "type": string;
                };
                "auditLogConfigs": {
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
        "SubmitConfigSourceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "validateOnly": {
                    "description": string;
                    "type": string;
                };
                "configSource": {
                    "description": string;
                    "$ref": string;
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
            "properties": {
                "fileName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
        "MetricDescriptor": {
            "description": string;
            "type": string;
            "properties": {
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
                "type": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "valueType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "metricKind": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "displayName": {
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
        "Expr": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "expression": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListServicesResponse": {
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
        "GetIamPolicyRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "TestIamPermissionsResponse": {
            "description": string;
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
        };
        "ConfigFile": {
            "description": string;
            "type": string;
            "properties": {
                "filePath": {
                    "description": string;
                    "type": string;
                };
                "fileType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "fileContents": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MonitoredResourceDescriptor": {
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
        "ChangeReport": {
            "description": string;
            "type": string;
            "properties": {
                "configChanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DisableServiceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "consumerId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SubmitConfigSourceResponse": {
            "description": string;
            "type": string;
            "properties": {
                "serviceConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
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
        "Advice": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ManagedService": {
            "description": string;
            "type": string;
            "properties": {
                "serviceName": {
                    "description": string;
                    "type": string;
                };
                "producerProjectId": {
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
        "TrafficPercentStrategy": {
            "description": string;
            "type": string;
            "properties": {
                "percentages": {
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
        "AuthRequirement": {
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
            "description": string;
            "type": string;
        };
        "Documentation": {
            "description": string;
            "type": string;
            "properties": {
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
            };
            "id": string;
        };
        "AuditLogConfig": {
            "description": string;
            "type": string;
            "properties": {
                "logType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "exemptedMembers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ConfigSource": {
            "description": string;
            "type": string;
            "properties": {
                "files": {
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
        "UndeleteServiceResponse": {
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
        "Policy": {
            "properties": {
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "auditConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bindings": {
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
        "Binding": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "$ref": string;
                    "description": string;
                };
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
        "Service": {
            "properties": {
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
                    "$ref": string;
                    "description": string;
                };
                "billing": {
                    "description": string;
                    "$ref": string;
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
                    "description": string;
                    "$ref": string;
                };
                "http": {
                    "description": string;
                    "$ref": string;
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
                "logging": {
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
                    "description": string;
                    "$ref": string;
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
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "progressPercentage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "MetricDescriptorMetadata": {
            "description": string;
            "type": string;
            "properties": {
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
                "launchStage": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "HttpRule": {
            "description": string;
            "type": string;
            "properties": {
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
                "patch": {
                    "description": string;
                    "type": string;
                };
                "get": {
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
            "description": string;
            "type": string;
        };
        "ConfigChange": {
            "properties": {
                "newValue": {
                    "description": string;
                    "type": string;
                };
                "changeType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "element": {
                    "description": string;
                    "type": string;
                };
                "oldValue": {
                    "description": string;
                    "type": string;
                };
                "advices": {
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
        "Rollout": {
            "description": string;
            "type": string;
            "properties": {
                "deleteServiceStrategy": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "serviceName": {
                    "description": string;
                    "type": string;
                };
                "createdBy": {
                    "description": string;
                    "type": string;
                };
                "trafficPercentStrategy": {
                    "$ref": string;
                    "description": string;
                };
                "rolloutId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GenerateConfigReportRequest": {
            "properties": {
                "oldConfig": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "newConfig": {
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
        "SetIamPolicyRequest": {
            "properties": {
                "policy": {
                    "description": string;
                    "$ref": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DeleteServiceStrategy": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "Step": {
            "description": string;
            "type": string;
            "properties": {
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
            };
            "id": string;
        };
        "Method": {
            "properties": {
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
                "syntax": {
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
        "ListServiceRolloutsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "rollouts": {
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
        "ConfigRef": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Mixin": {
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
                "rules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fullyDecodeReservedExpansion": {
                    "description": string;
                    "type": string;
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
                "https://www.googleapis.com/auth/service.management.readonly": {
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
            "resources": {
                "consumers": {
                    "methods": {
                        "testIamPermissions": {
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
                                "resource": {
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
                        "getIamPolicy": {
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
                                "resource": {
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
                        "setIamPolicy": {
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
                                "resource": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                        };
                    };
                };
                "rollouts": {
                    "methods": {
                        "list": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "serviceName": {
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
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "serviceName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "rolloutId": {
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
                        "create": {
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
                                "serviceName": {
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
                "configs": {
                    "methods": {
                        "submit": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "serviceName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
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
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "serviceName": {
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
                                "serviceName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "configId": {
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
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
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
                                "serviceName": {
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
            "methods": {
                "getConfig": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "serviceName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "configId": {
                            "location": string;
                            "description": string;
                            "type": string;
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
                "enable": {
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
                        "serviceName": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "serviceName": {
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
                "setIamPolicy": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
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
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
                        "serviceName": {
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
                "getIamPolicy": {
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
                "undelete": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "serviceName": {
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
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "producerProjectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "consumerId": {
                            "location": string;
                            "description": string;
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
                    "path": string;
                    "id": string;
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
                "generateConfigReport": {
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
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "serviceName": {
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
                "testIamPermissions": {
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
                        "resource": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
            };
        };
        "operations": {
            "methods": {
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "name": {
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
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "description": string;
            "type": string;
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
    };
    "version": string;
};
export default _default;
//# sourceMappingURL=servicemanagement-v1.d.ts.map