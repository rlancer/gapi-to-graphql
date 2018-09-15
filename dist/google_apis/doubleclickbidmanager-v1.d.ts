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
    "icons": {
        "x16": string;
        "x32": string;
    };
    "documentationLink": string;
    "labels": string[];
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
                "https://www.googleapis.com/auth/doubleclickbidmanager": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "DownloadLineItemsRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fileSpec": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "filterIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "filterType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DownloadLineItemsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "lineItems": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DownloadRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fileTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "filterIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "filterType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "version": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DownloadResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adGroups": {
                    "type": string;
                    "description": string;
                };
                "ads": {
                    "type": string;
                    "description": string;
                };
                "campaigns": {
                    "type": string;
                    "description": string;
                };
                "insertionOrders": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FilterPair": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListQueriesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "queries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListReportsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "reports": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Parameters": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "filters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "groupBys": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "includeInviteData": {
                    "type": string;
                    "description": string;
                };
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Query": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "params": {
                    "$ref": string;
                    "description": string;
                };
                "queryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportDataEndTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportDataStartTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "schedule": {
                    "$ref": string;
                    "description": string;
                };
                "timezoneCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QueryMetadata": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dataRange": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "googleCloudStoragePathForLatestReport": {
                    "type": string;
                    "description": string;
                };
                "googleDrivePathForLatestReport": {
                    "type": string;
                    "description": string;
                };
                "latestReportRunTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "locale": {
                    "type": string;
                    "description": string;
                };
                "reportCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "running": {
                    "type": string;
                    "description": string;
                };
                "sendNotification": {
                    "type": string;
                    "description": string;
                };
                "shareEmailAddress": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QuerySchedule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "endTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "frequency": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nextRunMinuteOfDay": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nextRunTimezoneCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Report": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "key": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "params": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ReportFailure": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "errorCode": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ReportKey": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "queryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ReportMetadata": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "googleCloudStoragePath": {
                    "type": string;
                    "description": string;
                };
                "reportDataEndTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportDataStartTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ReportStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "failure": {
                    "$ref": string;
                    "description": string;
                };
                "finishTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "state": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "RowStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "changed": {
                    "type": string;
                    "description": string;
                };
                "entityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "entityName": {
                    "type": string;
                    "description": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "persisted": {
                    "type": string;
                    "description": string;
                };
                "rowNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RunQueryRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dataRange": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "reportDataEndTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportDataStartTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timezoneCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UploadLineItemsRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dryRun": {
                    "type": string;
                    "description": string;
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UploadLineItemsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "uploadStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "UploadStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "rowStatus": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
    };
    "resources": {
        "lineitems": {
            "methods": {
                "downloadlineitems": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "uploadlineitems": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "queries": {
            "methods": {
                "createquery": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "deletequery": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "queryId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "getquery": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "queryId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listqueries": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "runquery": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "queryId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "reports": {
            "methods": {
                "listreports": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "queryId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "sdf": {
            "methods": {
                "download": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
//# sourceMappingURL=doubleclickbidmanager-v1.d.ts.map