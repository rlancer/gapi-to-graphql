declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
    "canonicalName": string;
    "version": string;
    "revision": string;
    "title": string;
    "description": string;
    "ownerDomain": string;
    "ownerName": string;
    "packagePath": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "documentationLink": string;
    "protocol": string;
    "baseUrl": string;
    "basePath": string;
    "rootUrl": string;
    "servicePath": string;
    "batchPath": string;
    "parameters": {
        "alt": {
            "type": string;
            "description": string;
            "default": string;
            "enum": string[];
            "enumDescriptions": string[];
            "location": string;
        };
        "fields": {
            "type": string;
            "description": string;
            "location": string;
        };
        "key": {
            "type": string;
            "description": string;
            "location": string;
        };
        "oauth_token": {
            "type": string;
            "description": string;
            "location": string;
        };
        "prettyPrint": {
            "type": string;
            "description": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "type": string;
            "description": string;
            "location": string;
        };
        "userIp": {
            "type": string;
            "description": string;
            "location": string;
        };
    };
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/admin.reports.audit.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.reports.usage.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Activities": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Activity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "callerType": {
                            "type": string;
                            "description": string;
                        };
                        "email": {
                            "type": string;
                            "description": string;
                        };
                        "key": {
                            "type": string;
                            "description": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "events": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "parameters": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "boolValue": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "intValue": {
                                            "type": string;
                                            "description": string;
                                            "format": string;
                                        };
                                        "multiIntValue": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                                "format": string;
                                            };
                                        };
                                        "multiValue": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                        "name": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "value": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "applicationName": {
                            "type": string;
                            "description": string;
                        };
                        "customerId": {
                            "type": string;
                            "description": string;
                        };
                        "time": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "uniqueQualifier": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "ipAddress": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "ownerDomain": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Channel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "expiration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "params": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "payload": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
                "resourceUri": {
                    "type": string;
                    "description": string;
                };
                "token": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UsageReport": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "date": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "entity": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                    "properties": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "readOnly": boolean;
                        };
                        "entityId": {
                            "type": string;
                            "description": string;
                            "readOnly": boolean;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "readOnly": boolean;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "readOnly": boolean;
                        };
                        "userEmail": {
                            "type": string;
                            "description": string;
                            "readOnly": boolean;
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "parameters": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                    "items": {
                        "type": string;
                        "properties": {
                            "boolValue": {
                                "type": string;
                                "description": string;
                                "readOnly": boolean;
                            };
                            "datetimeValue": {
                                "type": string;
                                "description": string;
                                "format": string;
                                "readOnly": boolean;
                            };
                            "intValue": {
                                "type": string;
                                "description": string;
                                "format": string;
                                "readOnly": boolean;
                            };
                            "msgValue": {
                                "type": string;
                                "description": string;
                                "readOnly": boolean;
                                "items": {
                                    "type": string;
                                    "additionalProperties": {
                                        "type": string;
                                    };
                                };
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "stringValue": {
                                "type": string;
                                "description": string;
                                "readOnly": boolean;
                            };
                        };
                    };
                };
            };
        };
        "UsageReports": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "usageReports": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "code": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "key": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "value": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "message": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
            };
        };
    };
    "resources": {
        "activities": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "actorIpAddress": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "applicationName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "customerId": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "endTime": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "eventName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startTime": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "actorIpAddress": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "applicationName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "customerId": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "endTime": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "eventName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startTime": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
        "channels": {
            "methods": {
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "customerUsageReports": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "parameters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "entityUsageReports": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "entityKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entityType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "parameters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "userUsageReport": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "parameters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=admin-reports_v1.d.ts.map