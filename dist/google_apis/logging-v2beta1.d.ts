declare const _default: {
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/logging.admin": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/logging.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/logging.write": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
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
        "organizations": {
            "resources": {
                "logs": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "logName": {
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
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
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
                        };
                    };
                };
            };
        };
        "entries": {
            "methods": {
                "write": {
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
                    "flatPath": string;
                };
                "list": {
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
            };
        };
        "projects": {
            "resources": {
                "logs": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "logName": {
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
                            "description": string;
                        };
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
                            "scopes": string[];
                            "parameters": {
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                        };
                    };
                };
                "sinks": {
                    "methods": {
                        "delete": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "sinkName": {
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
                            "scopes": string[];
                            "parameters": {
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
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                        };
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "sinkName": {
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
                        "update": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "sinkName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "uniqueWriterIdentity": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
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
                                "uniqueWriterIdentity": {
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
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "metrics": {
                    "methods": {
                        "update": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "metricName": {
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
                        "create": {
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
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "metricName": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
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
                                "parent": {
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
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "metricName": {
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
            };
        };
        "billingAccounts": {
            "resources": {
                "logs": {
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
                            "scopes": string[];
                            "parameters": {
                                "logName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
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
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                    };
                };
            };
        };
        "monitoredResourceDescriptors": {
            "methods": {
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
        };
    };
    "parameters": {
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "type": string;
            "location": string;
            "description": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
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
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
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
    "documentationLink": string;
    "id": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "MonitoredResourceMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "systemLabels": {
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                    "description": string;
                    "type": string;
                };
                "userLabels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BucketOptions": {
            "description": string;
            "type": string;
            "properties": {
                "exponentialBuckets": {
                    "$ref": string;
                    "description": string;
                };
                "linearBuckets": {
                    "$ref": string;
                    "description": string;
                };
                "explicitBuckets": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListLogMetricsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "metrics": {
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
        "MetricDescriptor": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "metricKind": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "description": {
                    "type": string;
                    "description": string;
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
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
        };
        "LogEntry": {
            "description": string;
            "type": string;
            "properties": {
                "httpRequest": {
                    "$ref": string;
                    "description": string;
                };
                "resource": {
                    "$ref": string;
                    "description": string;
                };
                "jsonPayload": {
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                    "description": string;
                    "type": string;
                };
                "insertId": {
                    "description": string;
                    "type": string;
                };
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "textPayload": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "protoPayload": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "trace": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "sourceLocation": {
                    "description": string;
                    "$ref": string;
                };
                "spanId": {
                    "description": string;
                    "type": string;
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "receiveTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "logName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RequestLog": {
            "description": string;
            "type": string;
            "properties": {
                "requestId": {
                    "description": string;
                    "type": string;
                };
                "nickname": {
                    "description": string;
                    "type": string;
                };
                "status": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pendingTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resource": {
                    "description": string;
                    "type": string;
                };
                "taskName": {
                    "description": string;
                    "type": string;
                };
                "urlMapEntry": {
                    "description": string;
                    "type": string;
                };
                "instanceIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "host": {
                    "type": string;
                    "description": string;
                };
                "finished": {
                    "description": string;
                    "type": string;
                };
                "httpVersion": {
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "ip": {
                    "description": string;
                    "type": string;
                };
                "appId": {
                    "description": string;
                    "type": string;
                };
                "appEngineRelease": {
                    "type": string;
                    "description": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "cost": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "instanceId": {
                    "description": string;
                    "type": string;
                };
                "megaCycles": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "first": {
                    "description": string;
                    "type": string;
                };
                "versionId": {
                    "type": string;
                    "description": string;
                };
                "moduleId": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userAgent": {
                    "description": string;
                    "type": string;
                };
                "wasLoadingRequest": {
                    "description": string;
                    "type": string;
                };
                "sourceReference": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "traceId": {
                    "description": string;
                    "type": string;
                };
                "traceSampled": {
                    "description": string;
                    "type": string;
                };
                "line": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "referrer": {
                    "description": string;
                    "type": string;
                };
                "taskQueueName": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListMonitoredResourceDescriptorsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resourceDescriptors": {
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
            "properties": {
                "ingestDelay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "launchStage": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
        "LogEntryOperation": {
            "description": string;
            "type": string;
            "properties": {
                "last": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "producer": {
                    "description": string;
                    "type": string;
                };
                "first": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "LogMetric": {
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "bucketOptions": {
                    "$ref": string;
                    "description": string;
                };
                "valueExtractor": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "labelExtractors": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "metricDescriptor": {
                    "$ref": string;
                    "description": string;
                };
                "version": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MonitoredResource": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "type": {
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
            };
        };
        "LogSink": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "includeChildren": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "description": string;
                    "type": string;
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "writerIdentity": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "outputVersionFormat": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "ListLogsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "logNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ListSinksResponse": {
            "description": string;
            "type": string;
            "properties": {
                "sinks": {
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
        };
        "HttpRequest": {
            "description": string;
            "type": string;
            "properties": {
                "cacheLookup": {
                    "description": string;
                    "type": string;
                };
                "cacheHit": {
                    "description": string;
                    "type": string;
                };
                "cacheValidatedWithOriginServer": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "referer": {
                    "description": string;
                    "type": string;
                };
                "latency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userAgent": {
                    "description": string;
                    "type": string;
                };
                "cacheFillBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestMethod": {
                    "description": string;
                    "type": string;
                };
                "protocol": {
                    "description": string;
                    "type": string;
                };
                "responseSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestUrl": {
                    "type": string;
                    "description": string;
                };
                "remoteIp": {
                    "description": string;
                    "type": string;
                };
                "serverIp": {
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
        "LogEntrySourceLocation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "file": {
                    "description": string;
                    "type": string;
                };
                "function": {
                    "description": string;
                    "type": string;
                };
                "line": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "ListLogEntriesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "entries": {
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
        "LogLine": {
            "type": string;
            "properties": {
                "severity": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "logMessage": {
                    "description": string;
                    "type": string;
                };
                "sourceLocation": {
                    "description": string;
                    "$ref": string;
                };
                "time": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Linear": {
            "description": string;
            "type": string;
            "properties": {
                "numFiniteBuckets": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "offset": {
                    "description": string;
                    "format": string;
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
        "SourceLocation": {
            "properties": {
                "file": {
                    "description": string;
                    "type": string;
                };
                "functionName": {
                    "type": string;
                    "description": string;
                };
                "line": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListLogEntriesRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "orderBy": {
                    "description": string;
                    "type": string;
                };
                "resourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "projectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "Explicit": {
            "description": string;
            "type": string;
            "properties": {
                "bounds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "SourceReference": {
            "description": string;
            "type": string;
            "properties": {
                "revisionId": {
                    "type": string;
                    "description": string;
                };
                "repository": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WriteLogEntriesResponse": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "Exponential": {
            "description": string;
            "type": string;
            "properties": {
                "growthFactor": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "scale": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "numFiniteBuckets": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WriteLogEntriesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "logName": {
                    "description": string;
                    "type": string;
                };
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "partialSuccess": {
                    "description": string;
                    "type": string;
                };
                "dryRun": {
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
                "resource": {
                    "$ref": string;
                    "description": string;
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
                    "type": string;
                    "description": string;
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
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
};
export default _default;
//# sourceMappingURL=logging-v2beta1.d.ts.map