declare const _default: {
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "version_module": boolean;
    "resources": {
        "googleServiceAccounts": {
            "methods": {
                "get": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "projectId": {
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
            };
        };
        "transferJobs": {
            "methods": {
                "patch": {
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
                        "jobName": {
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
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "jobName": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                        "projectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "list": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "filter": {
                            "type": string;
                            "location": string;
                            "description": string;
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
                };
                "create": {
                    "id": string;
                    "path": string;
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
                };
            };
        };
        "transferOperations": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "name": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
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
                };
                "resume": {
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
                "cancel": {
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
                "pause": {
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
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "name": {
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
    "parameters": {
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
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
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
        };
        "alt": {
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
        };
        "access_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "key": {
            "type": string;
            "location": string;
            "description": string;
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
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "schemas": {
        "ErrorSummary": {
            "properties": {
                "errorCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errorLogEntries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "errorCode": {
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
        "HttpData": {
            "description": string;
            "type": string;
            "properties": {
                "listUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GcsData": {
            "description": string;
            "type": string;
            "properties": {
                "bucketName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListTransferJobsResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "transferJobs": {
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
        "UpdateTransferJobRequest": {
            "description": string;
            "type": string;
            "properties": {
                "transferJob": {
                    "$ref": string;
                    "description": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "updateTransferJobFieldMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ObjectConditions": {
            "type": string;
            "properties": {
                "maxTimeElapsedSinceLastModification": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "includePrefixes": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "minTimeElapsedSinceLastModification": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "excludePrefixes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
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
        "TransferSpec": {
            "description": string;
            "type": string;
            "properties": {
                "awsS3DataSource": {
                    "$ref": string;
                    "description": string;
                };
                "httpDataSource": {
                    "description": string;
                    "$ref": string;
                };
                "objectConditions": {
                    "$ref": string;
                    "description": string;
                };
                "gcsDataSink": {
                    "$ref": string;
                    "description": string;
                };
                "gcsDataSource": {
                    "$ref": string;
                    "description": string;
                };
                "transferOptions": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "TransferOptions": {
            "description": string;
            "type": string;
            "properties": {
                "overwriteObjectsAlreadyExistingInSink": {
                    "description": string;
                    "type": string;
                };
                "deleteObjectsFromSourceAfterTransfer": {
                    "description": string;
                    "type": string;
                };
                "deleteObjectsUniqueInSink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
            "properties": {
                "message": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ResumeTransferOperationRequest": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
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
        };
        "GoogleServiceAccount": {
            "description": string;
            "type": string;
            "properties": {
                "accountEmail": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TimeOfDay": {
            "description": string;
            "type": string;
            "properties": {
                "seconds": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minutes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "hours": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nanos": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ErrorLogEntry": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "errorDetails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "TransferJob": {
            "description": string;
            "type": string;
            "properties": {
                "transferSpec": {
                    "$ref": string;
                    "description": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "schedule": {
                    "$ref": string;
                    "description": string;
                };
                "deletionTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "lastModificationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Schedule": {
            "description": string;
            "type": string;
            "properties": {
                "scheduleStartDate": {
                    "$ref": string;
                    "description": string;
                };
                "scheduleEndDate": {
                    "description": string;
                    "$ref": string;
                };
                "startTimeOfDay": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Date": {
            "description": string;
            "type": string;
            "properties": {
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "year": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "day": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TransferOperation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "transferJobName": {
                    "description": string;
                    "type": string;
                };
                "transferSpec": {
                    "description": string;
                    "$ref": string;
                };
                "counters": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "errorBreakdowns": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AwsS3Data": {
            "type": string;
            "properties": {
                "bucketName": {
                    "description": string;
                    "type": string;
                };
                "awsAccessKey": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AwsAccessKey": {
            "properties": {
                "accessKeyId": {
                    "description": string;
                    "type": string;
                };
                "secretAccessKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Empty": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "PauseTransferOperationRequest": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "TransferCounters": {
            "description": string;
            "type": string;
            "properties": {
                "bytesDeletedFromSource": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsFoundFromSource": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsFailedToDeleteFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsDeletedFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsFoundOnlyFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesFromSourceSkippedBySync": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesDeletedFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesFailedToDeleteFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesFromSourceFailed": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsCopiedToSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsFromSourceFailed": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesFoundOnlyFromSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsDeletedFromSource": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "bytesCopiedToSink": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectsFromSourceSkippedBySync": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bytesFoundFromSource": {
                    "description": string;
                    "format": string;
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
            };
        };
    };
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
};
export default _default;
//# sourceMappingURL=storagetransfer-v1.d.ts.map