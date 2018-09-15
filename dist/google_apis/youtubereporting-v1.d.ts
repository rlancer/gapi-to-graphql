declare const _default: {
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "reportTypes": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "includeSystemManaged": {
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
                        "onBehalfOfContentOwner": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                };
            };
        };
        "media": {
            "methods": {
                "download": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "supportsMediaDownload": boolean;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "resourceName": {
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
        "jobs": {
            "methods": {
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "jobId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "includeSystemManaged": {
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
                    };
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
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "jobId": {
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
                "create": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
            "resources": {
                "reports": {
                    "methods": {
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "onBehalfOfContentOwner": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "startTimeBefore": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "jobId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "createdAfter": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "startTimeAtOrAfter": {
                                    "description": string;
                                    "format": string;
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
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "jobId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "onBehalfOfContentOwner": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "reportId": {
                                    "description": string;
                                    "required": boolean;
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
        };
    };
    "parameters": {
        "upload_protocol": {
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
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
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
    "schemas": {
        "GdataObjectId": {
            "type": string;
            "properties": {
                "objectName": {
                    "type": string;
                    "description": string;
                };
                "bucketName": {
                    "description": string;
                    "type": string;
                };
                "generation": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GdataMedia": {
            "description": string;
            "type": string;
            "properties": {
                "blobRef": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "diffUploadResponse": {
                    "$ref": string;
                    "description": string;
                };
                "diffVersionResponse": {
                    "$ref": string;
                    "description": string;
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "token": {
                    "description": string;
                    "type": string;
                };
                "hash": {
                    "description": string;
                    "type": string;
                };
                "blobstore2Info": {
                    "description": string;
                    "$ref": string;
                };
                "filename": {
                    "description": string;
                    "type": string;
                };
                "hashVerified": {
                    "description": string;
                    "type": string;
                };
                "diffDownloadResponse": {
                    "description": string;
                    "$ref": string;
                };
                "cosmoBinaryReference": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "isPotentialRetry": {
                    "description": string;
                    "type": string;
                };
                "md5Hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sha256Hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "algorithm": {
                    "description": string;
                    "type": string;
                };
                "objectId": {
                    "$ref": string;
                    "description": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "bigstoreObjectRef": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "referenceType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "inline": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "diffUploadRequest": {
                    "$ref": string;
                    "description": string;
                };
                "diffChecksumsResponse": {
                    "$ref": string;
                    "description": string;
                };
                "crc32cHash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sha1Hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "length": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "contentTypeInfo": {
                    "description": string;
                    "$ref": string;
                };
                "contentType": {
                    "description": string;
                    "type": string;
                };
                "downloadParameters": {
                    "$ref": string;
                    "description": string;
                };
                "mediaId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "compositeMedia": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GdataDiffVersionResponse": {
            "properties": {
                "objectSizeBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GdataDiffDownloadResponse": {
            "properties": {
                "objectLocation": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GdataDiffUploadRequest": {
            "properties": {
                "objectVersion": {
                    "type": string;
                    "description": string;
                };
                "objectInfo": {
                    "description": string;
                    "$ref": string;
                };
                "checksumsInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GdataBlobstore2Info": {
            "description": string;
            "type": string;
            "properties": {
                "readToken": {
                    "description": string;
                    "type": string;
                };
                "uploadMetadataContainer": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blobGeneration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blobId": {
                    "description": string;
                    "type": string;
                };
                "downloadReadHandle": {
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
        "ReportType": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "systemManaged": {
                    "type": string;
                    "description": string;
                };
                "deprecateTime": {
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
        "ListReportTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "reportTypes": {
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
        "ListJobsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "jobs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GdataCompositeMedia": {
            "description": string;
            "type": string;
            "properties": {
                "md5Hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inline": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blobstore2Info": {
                    "$ref": string;
                    "description": string;
                };
                "blobRef": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "objectId": {
                    "description": string;
                    "$ref": string;
                };
                "sha1Hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "crc32cHash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "length": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cosmoBinaryReference": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "referenceType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListReportsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "reports": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GdataContentTypeInfo": {
            "description": string;
            "type": string;
            "properties": {
                "fromBytes": {
                    "description": string;
                    "type": string;
                };
                "fromFileName": {
                    "type": string;
                    "description": string;
                };
                "bestGuess": {
                    "description": string;
                    "type": string;
                };
                "fromUrlPath": {
                    "description": string;
                    "type": string;
                };
                "fromHeader": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GdataDiffUploadResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "originalObject": {
                    "description": string;
                    "$ref": string;
                };
                "objectVersion": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Report": {
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "jobExpireTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "downloadUrl": {
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "jobId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GdataDiffChecksumsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "chunkSizeBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "checksumsLocation": {
                    "$ref": string;
                    "description": string;
                };
                "objectSizeBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectLocation": {
                    "$ref": string;
                    "description": string;
                };
                "objectVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GdataDownloadParameters": {
            "description": string;
            "type": string;
            "properties": {
                "ignoreRange": {
                    "description": string;
                    "type": string;
                };
                "allowGzipCompression": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Job": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "systemManaged": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "createTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportTypeId": {
                    "type": string;
                    "description": string;
                };
                "expireTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "version": string;
    "baseUrl": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/yt-analytics.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/yt-analytics-monetary.readonly": {
                    "description": string;
                };
            };
        };
    };
    "kind": string;
    "servicePath": string;
    "description": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
};
export default _default;
//# sourceMappingURL=youtubereporting-v1.d.ts.map