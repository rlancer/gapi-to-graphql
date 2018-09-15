declare const _default: {
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "description": string;
    "kind": string;
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "ListLogMetricsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "metrics": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
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
                    "$ref": string;
                    "description": string;
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "LogEntry": {
            "description": string;
            "type": string;
            "properties": {
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
                "resource": {
                    "description": string;
                    "$ref": string;
                };
                "httpRequest": {
                    "description": string;
                    "$ref": string;
                };
                "jsonPayload": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "insertId": {
                    "type": string;
                    "description": string;
                };
                "operation": {
                    "description": string;
                    "$ref": string;
                };
                "textPayload": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
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
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "trace": {
                    "description": string;
                    "type": string;
                };
                "severity": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "sourceLocation": {
                    "$ref": string;
                    "description": string;
                };
                "spanId": {
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
                "versionId": {
                    "description": string;
                    "type": string;
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
                    "type": string;
                    "description": string;
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
                    "type": string;
                    "description": string;
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
                    "description": string;
                    "type": string;
                };
                "requestId": {
                    "description": string;
                    "type": string;
                };
                "nickname": {
                    "description": string;
                    "type": string;
                };
                "pendingTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resource": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "description": string;
                    "format": string;
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
                    "description": string;
                    "type": string;
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
                    "description": string;
                    "type": string;
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
            };
            "id": string;
        };
        "LogExclusion": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "type": string;
                };
                "disabled": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "ListMonitoredResourceDescriptorsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
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
            "description": string;
        };
        "ListExclusionsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "exclusions": {
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
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "samplePeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LogMetric": {
            "description": string;
            "type": string;
            "properties": {
                "valueExtractor": {
                    "description": string;
                    "type": string;
                };
                "bucketOptions": {
                    "$ref": string;
                    "description": string;
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
                "version": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "metricDescriptor": {
                    "$ref": string;
                    "description": string;
                };
                "filter": {
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
        "LogEntryOperation": {
            "properties": {
                "last": {
                    "description": string;
                    "type": string;
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
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MonitoredResource": {
            "properties": {
                "labels": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
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
        "LogSink": {
            "description": string;
            "type": string;
            "properties": {
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "includeChildren": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListLogsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "logNames": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HttpRequest": {
            "description": string;
            "type": string;
            "properties": {
                "requestUrl": {
                    "description": string;
                    "type": string;
                };
                "remoteIp": {
                    "description": string;
                    "type": string;
                };
                "serverIp": {
                    "description": string;
                    "type": string;
                };
                "cacheLookup": {
                    "description": string;
                    "type": string;
                };
                "cacheHit": {
                    "description": string;
                    "type": string;
                };
                "cacheValidatedWithOriginServer": {
                    "description": string;
                    "type": string;
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
                "requestSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "responseSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "protocol": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListSinksResponse": {
            "description": string;
            "type": string;
            "properties": {
                "sinks": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "nextPageToken": {
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
            "id": string;
        };
        "ListLogEntriesResponse": {
            "properties": {
                "nextPageToken": {
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LogLine": {
            "properties": {
                "severity": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "logMessage": {
                    "description": string;
                    "type": string;
                };
                "sourceLocation": {
                    "$ref": string;
                    "description": string;
                };
                "time": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "SourceLocation": {
            "description": string;
            "type": string;
            "properties": {
                "file": {
                    "description": string;
                    "type": string;
                };
                "functionName": {
                    "description": string;
                    "type": string;
                };
                "line": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListLogEntriesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "orderBy": {
                    "description": string;
                    "type": string;
                };
                "resourceNames": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
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
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
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
                "repository": {
                    "description": string;
                    "type": string;
                };
                "revisionId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WriteLogEntriesResponse": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
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
            "id": string;
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
                    "type": string;
                    "description": string;
                };
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "resource": {
                    "description": string;
                    "$ref": string;
                };
            };
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
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
            "properties": {
                "exponentialBuckets": {
                    "description": string;
                    "$ref": string;
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
            "description": string;
            "type": string;
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
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
        };
        "organizations": {
            "resources": {
                "exclusions": {
                    "methods": {
                        "list": {
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
                        "patch": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "updateMask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
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
                        "delete": {
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
                "logs": {
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
                        };
                        "delete": {
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
                                "logName": {
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
                "sinks": {
                    "methods": {
                        "get": {
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
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
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
                                "sinkName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "uniqueWriterIdentity": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "updateMask": {
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
                        "update": {
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
                                "sinkName": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "uniqueWriterIdentity": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "sinkName": {
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
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                            "id": string;
                            "path": string;
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
                                "uniqueWriterIdentity": {
                                    "location": string;
                                    "description": string;
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
                            "id": string;
                            "path": string;
                        };
                    };
                };
            };
        };
        "entries": {
            "methods": {
                "list": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "write": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
        };
        "sinks": {
            "methods": {
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
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
                    "path": string;
                    "id": string;
                };
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
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
                    "id": string;
                    "path": string;
                };
                "get": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "sinkName": {
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
                "update": {
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
                        "sinkName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "uniqueWriterIdentity": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "updateMask": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
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
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "uniqueWriterIdentity": {
                            "description": string;
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
        "logs": {
            "methods": {
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "logName": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "parent": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
        };
        "projects": {
            "resources": {
                "logs": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                                "logName": {
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
                    };
                };
                "sinks": {
                    "methods": {
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "uniqueWriterIdentity": {
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
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                        };
                        "patch": {
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
                                "uniqueWriterIdentity": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
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
                        "update": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
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
                                "sinkName": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
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
                            "parameters": {
                                "parent": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                "exclusions": {
                    "methods": {
                        "list": {
                            "description": string;
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
                            "flatPath": string;
                        };
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "updateMask": {
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
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
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
                "metrics": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "metricName": {
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
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
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
                                "pageToken": {
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
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "metricName": {
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
                        "update": {
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
                                "metricName": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
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
        };
        "billingAccounts": {
            "resources": {
                "logs": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
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
                                "logName": {
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
                    };
                };
                "sinks": {
                    "methods": {
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "sinkName": {
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
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "update": {
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
                                "sinkName": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "uniqueWriterIdentity": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
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
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "sinkName": {
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
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "pageSize": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                        "create": {
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
                                "parent": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                                "uniqueWriterIdentity": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                };
                "exclusions": {
                    "methods": {
                        "list": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "updateMask": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
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
                        "create": {
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
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "folders": {
            "resources": {
                "logs": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "logName": {
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
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
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
                    };
                };
                "sinks": {
                    "methods": {
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
                                "sinkName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "sinkName": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "uniqueWriterIdentity": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
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
                            "request": {
                                "$ref": string;
                            };
                        };
                        "update": {
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
                                "sinkName": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                                "uniqueWriterIdentity": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "updateMask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "delete": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                                    "type": string;
                                    "location": string;
                                    "description": string;
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
                "exclusions": {
                    "methods": {
                        "delete": {
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
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "get": {
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
                        "patch": {
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
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "updateMask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                            };
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
                                "parent": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                };
            };
        };
        "exclusions": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "pageSize": {
                            "type": string;
                            "location": string;
                            "description": string;
                            "format": string;
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
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                };
                "patch": {
                    "parameters": {
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
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
                };
                "create": {
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
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "delete": {
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
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
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
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
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
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
    };
};
export default _default;
//# sourceMappingURL=logging-v2.d.ts.map