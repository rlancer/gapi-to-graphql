declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
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
                "https://www.googleapis.com/auth/bigquery": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/bigquery.insertdata": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.full_control": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.read_only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.read_write": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "BigQueryModelTraining": {
            "id": string;
            "type": string;
            "properties": {
                "currentIteration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expectedTotalIterations": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "BigtableColumn": {
            "id": string;
            "type": string;
            "properties": {
                "encoding": {
                    "type": string;
                    "description": string;
                };
                "fieldName": {
                    "type": string;
                    "description": string;
                };
                "onlyReadLatest": {
                    "type": string;
                    "description": string;
                };
                "qualifierEncoded": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "qualifierString": {
                    "type": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BigtableColumnFamily": {
            "id": string;
            "type": string;
            "properties": {
                "columns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "encoding": {
                    "type": string;
                    "description": string;
                };
                "familyId": {
                    "type": string;
                    "description": string;
                };
                "onlyReadLatest": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BigtableOptions": {
            "id": string;
            "type": string;
            "properties": {
                "columnFamilies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "ignoreUnspecifiedColumnFamilies": {
                    "type": string;
                    "description": string;
                };
                "readRowkeyAsString": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Clustering": {
            "id": string;
            "type": string;
            "properties": {
                "fields": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "CsvOptions": {
            "id": string;
            "type": string;
            "properties": {
                "allowJaggedRows": {
                    "type": string;
                    "description": string;
                };
                "allowQuotedNewlines": {
                    "type": string;
                    "description": string;
                };
                "encoding": {
                    "type": string;
                    "description": string;
                };
                "fieldDelimiter": {
                    "type": string;
                    "description": string;
                };
                "quote": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "pattern": string;
                };
                "skipLeadingRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Dataset": {
            "id": string;
            "type": string;
            "properties": {
                "access": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "domain": {
                                "type": string;
                                "description": string;
                            };
                            "groupByEmail": {
                                "type": string;
                                "description": string;
                            };
                            "role": {
                                "type": string;
                                "description": string;
                            };
                            "specialGroup": {
                                "type": string;
                                "description": string;
                            };
                            "userByEmail": {
                                "type": string;
                                "description": string;
                            };
                            "view": {
                                "$ref": string;
                                "description": string;
                            };
                        };
                    };
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "datasetReference": {
                    "$ref": string;
                    "description": string;
                };
                "defaultPartitionExpirationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "defaultTableExpirationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "friendlyName": {
                    "type": string;
                    "description": string;
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
                "labels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "lastModifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatasetList": {
            "id": string;
            "type": string;
            "properties": {
                "datasets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "datasetReference": {
                                "$ref": string;
                                "description": string;
                            };
                            "friendlyName": {
                                "type": string;
                                "description": string;
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
                            "labels": {
                                "type": string;
                                "description": string;
                                "additionalProperties": {
                                    "type": string;
                                };
                            };
                            "location": {
                                "type": string;
                                "description": string;
                            };
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
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatasetReference": {
            "id": string;
            "type": string;
            "properties": {
                "datasetId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "DestinationTableProperties": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "friendlyName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EncryptionConfiguration": {
            "id": string;
            "type": string;
            "properties": {
                "kmsKeyName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ErrorProto": {
            "id": string;
            "type": string;
            "properties": {
                "debugInfo": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ExplainQueryStage": {
            "id": string;
            "type": string;
            "properties": {
                "completedParallelInputs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "computeMsAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "computeMsMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "computeRatioAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "computeRatioMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "endMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inputStages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "parallelInputs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "readMsAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "readMsMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "readRatioAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "readRatioMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "recordsRead": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "recordsWritten": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "shuffleOutputBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "shuffleOutputBytesSpilled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "steps": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "waitMsAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "waitMsMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "waitRatioAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "waitRatioMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "writeMsAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "writeMsMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "writeRatioAvg": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "writeRatioMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ExplainQueryStep": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                };
                "substeps": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ExternalDataConfiguration": {
            "id": string;
            "type": string;
            "properties": {
                "autodetect": {
                    "type": string;
                    "description": string;
                };
                "bigtableOptions": {
                    "$ref": string;
                    "description": string;
                };
                "compression": {
                    "type": string;
                    "description": string;
                };
                "csvOptions": {
                    "$ref": string;
                    "description": string;
                };
                "googleSheetsOptions": {
                    "$ref": string;
                    "description": string;
                };
                "ignoreUnknownValues": {
                    "type": string;
                    "description": string;
                };
                "maxBadRecords": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "sourceFormat": {
                    "type": string;
                    "description": string;
                };
                "sourceUris": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "GetQueryResultsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "cacheHit": {
                    "type": string;
                    "description": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "jobComplete": {
                    "type": string;
                    "description": string;
                };
                "jobReference": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numDmlAffectedRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "totalBytesProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GetServiceAccountResponse": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "GoogleSheetsOptions": {
            "id": string;
            "type": string;
            "properties": {
                "range": {
                    "type": string;
                    "description": string;
                };
                "skipLeadingRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IterationResult": {
            "id": string;
            "type": string;
            "properties": {
                "durationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "evalLoss": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "index": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "learnRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "trainingLoss": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Job": {
            "id": string;
            "type": string;
            "properties": {
                "configuration": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "jobReference": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "statistics": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
                "user_email": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "JobCancelResponse": {
            "id": string;
            "type": string;
            "properties": {
                "job": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "JobConfiguration": {
            "id": string;
            "type": string;
            "properties": {
                "copy": {
                    "$ref": string;
                    "description": string;
                };
                "dryRun": {
                    "type": string;
                    "description": string;
                };
                "extract": {
                    "$ref": string;
                    "description": string;
                };
                "jobTimeoutMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "jobType": {
                    "type": string;
                    "description": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "load": {
                    "$ref": string;
                    "description": string;
                };
                "query": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "JobConfigurationExtract": {
            "id": string;
            "type": string;
            "properties": {
                "compression": {
                    "type": string;
                    "description": string;
                };
                "destinationFormat": {
                    "type": string;
                    "description": string;
                };
                "destinationUri": {
                    "type": string;
                    "description": string;
                };
                "destinationUris": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "fieldDelimiter": {
                    "type": string;
                    "description": string;
                };
                "printHeader": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "sourceTable": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "JobConfigurationLoad": {
            "id": string;
            "type": string;
            "properties": {
                "allowJaggedRows": {
                    "type": string;
                    "description": string;
                };
                "allowQuotedNewlines": {
                    "type": string;
                    "description": string;
                };
                "autodetect": {
                    "type": string;
                    "description": string;
                };
                "clustering": {
                    "$ref": string;
                    "description": string;
                };
                "createDisposition": {
                    "type": string;
                    "description": string;
                };
                "destinationEncryptionConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "destinationTable": {
                    "$ref": string;
                    "description": string;
                };
                "destinationTableProperties": {
                    "$ref": string;
                    "description": string;
                };
                "encoding": {
                    "type": string;
                    "description": string;
                };
                "fieldDelimiter": {
                    "type": string;
                    "description": string;
                };
                "ignoreUnknownValues": {
                    "type": string;
                    "description": string;
                };
                "maxBadRecords": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nullMarker": {
                    "type": string;
                    "description": string;
                };
                "projectionFields": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "quote": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "pattern": string;
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "schemaInline": {
                    "type": string;
                    "description": string;
                };
                "schemaInlineFormat": {
                    "type": string;
                    "description": string;
                };
                "schemaUpdateOptions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "skipLeadingRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sourceFormat": {
                    "type": string;
                    "description": string;
                };
                "sourceUris": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "timePartitioning": {
                    "$ref": string;
                    "description": string;
                };
                "writeDisposition": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "JobConfigurationQuery": {
            "id": string;
            "type": string;
            "properties": {
                "allowLargeResults": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "clustering": {
                    "$ref": string;
                    "description": string;
                };
                "createDisposition": {
                    "type": string;
                    "description": string;
                };
                "defaultDataset": {
                    "$ref": string;
                    "description": string;
                };
                "destinationEncryptionConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "destinationTable": {
                    "$ref": string;
                    "description": string;
                };
                "flattenResults": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maximumBillingTier": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "format": string;
                };
                "maximumBytesBilled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "parameterMode": {
                    "type": string;
                    "description": string;
                };
                "preserveNulls": {
                    "type": string;
                    "description": string;
                };
                "priority": {
                    "type": string;
                    "description": string;
                };
                "query": {
                    "type": string;
                    "description": string;
                };
                "queryParameters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "schemaUpdateOptions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "tableDefinitions": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "timePartitioning": {
                    "$ref": string;
                    "description": string;
                };
                "useLegacySql": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "useQueryCache": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "userDefinedFunctionResources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "writeDisposition": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "JobConfigurationTableCopy": {
            "id": string;
            "type": string;
            "properties": {
                "createDisposition": {
                    "type": string;
                    "description": string;
                };
                "destinationEncryptionConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "destinationTable": {
                    "$ref": string;
                    "description": string;
                };
                "sourceTable": {
                    "$ref": string;
                    "description": string;
                };
                "sourceTables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "writeDisposition": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "JobList": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "jobs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "configuration": {
                                "$ref": string;
                                "description": string;
                            };
                            "errorResult": {
                                "$ref": string;
                                "description": string;
                            };
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "jobReference": {
                                "$ref": string;
                                "description": string;
                            };
                            "kind": {
                                "type": string;
                                "description": string;
                                "default": string;
                            };
                            "state": {
                                "type": string;
                                "description": string;
                            };
                            "statistics": {
                                "$ref": string;
                                "description": string;
                            };
                            "status": {
                                "$ref": string;
                                "description": string;
                            };
                            "user_email": {
                                "type": string;
                                "description": string;
                            };
                        };
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
        "JobReference": {
            "id": string;
            "type": string;
            "properties": {
                "jobId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "JobStatistics": {
            "id": string;
            "type": string;
            "properties": {
                "completionRatio": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "extract": {
                    "$ref": string;
                    "description": string;
                };
                "load": {
                    "$ref": string;
                    "description": string;
                };
                "query": {
                    "$ref": string;
                    "description": string;
                };
                "quotaDeferments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalBytesProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "JobStatistics2": {
            "id": string;
            "type": string;
            "properties": {
                "billingTier": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cacheHit": {
                    "type": string;
                    "description": string;
                };
                "ddlOperationPerformed": {
                    "type": string;
                    "description": string;
                };
                "ddlTargetTable": {
                    "$ref": string;
                    "description": string;
                };
                "estimatedBytesProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "modelTraining": {
                    "$ref": string;
                    "description": string;
                };
                "modelTrainingCurrentIteration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "modelTrainingExpectedTotalIteration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numDmlAffectedRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "queryPlan": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "referencedTables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "reservationUsage": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "slotMs": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "statementType": {
                    "type": string;
                    "description": string;
                };
                "timeline": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalBytesBilled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalBytesProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalPartitionsProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalSlotMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "undeclaredQueryParameters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "JobStatistics3": {
            "id": string;
            "type": string;
            "properties": {
                "badRecords": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inputFileBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inputFiles": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "outputBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "outputRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "JobStatistics4": {
            "id": string;
            "type": string;
            "properties": {
                "destinationUriFileCounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
            };
        };
        "JobStatus": {
            "id": string;
            "type": string;
            "properties": {
                "errorResult": {
                    "$ref": string;
                    "description": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "JsonObject": {
            "id": string;
            "type": string;
            "description": string;
            "additionalProperties": {
                "$ref": string;
            };
        };
        "JsonValue": {
            "id": string;
            "type": string;
        };
        "ModelDefinition": {
            "id": string;
            "type": string;
            "properties": {
                "modelOptions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "labels": {
                            "type": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "lossType": {
                            "type": string;
                        };
                        "modelType": {
                            "type": string;
                        };
                    };
                };
                "trainingRuns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ProjectList": {
            "id": string;
            "type": string;
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
                "projects": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "friendlyName": {
                                "type": string;
                                "description": string;
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
                            "numericId": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "projectReference": {
                                "$ref": string;
                                "description": string;
                            };
                        };
                    };
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ProjectReference": {
            "id": string;
            "type": string;
            "properties": {
                "projectId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QueryParameter": {
            "id": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "parameterType": {
                    "$ref": string;
                    "description": string;
                };
                "parameterValue": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "QueryParameterType": {
            "id": string;
            "type": string;
            "properties": {
                "arrayType": {
                    "$ref": string;
                    "description": string;
                };
                "structTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "description": {
                                "type": string;
                                "description": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "$ref": string;
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
        "QueryParameterValue": {
            "id": string;
            "type": string;
            "properties": {
                "arrayValues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "structValues": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QueryRequest": {
            "id": string;
            "type": string;
            "properties": {
                "defaultDataset": {
                    "$ref": string;
                    "description": string;
                };
                "dryRun": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "maxResults": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "parameterMode": {
                    "type": string;
                    "description": string;
                };
                "preserveNulls": {
                    "type": string;
                    "description": string;
                };
                "query": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "queryParameters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timeoutMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "useLegacySql": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "useQueryCache": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "QueryResponse": {
            "id": string;
            "type": string;
            "properties": {
                "cacheHit": {
                    "type": string;
                    "description": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "jobComplete": {
                    "type": string;
                    "description": string;
                };
                "jobReference": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numDmlAffectedRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "totalBytesProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "QueryTimelineSample": {
            "id": string;
            "type": string;
            "properties": {
                "activeUnits": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "completedUnits": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "elapsedMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pendingUnits": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalSlotMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Streamingbuffer": {
            "id": string;
            "type": string;
            "properties": {
                "estimatedBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "estimatedRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "oldestEntryTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Table": {
            "id": string;
            "type": string;
            "properties": {
                "clustering": {
                    "$ref": string;
                    "description": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "encryptionConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "expirationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "externalDataConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "friendlyName": {
                    "type": string;
                    "description": string;
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
                "labels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "lastModifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "model": {
                    "$ref": string;
                    "description": string;
                };
                "numBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numLongTermBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "streamingBuffer": {
                    "$ref": string;
                    "description": string;
                };
                "tableReference": {
                    "$ref": string;
                    "description": string;
                };
                "timePartitioning": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "view": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TableCell": {
            "id": string;
            "type": string;
            "properties": {
                "v": {
                    "type": string;
                };
            };
        };
        "TableDataInsertAllRequest": {
            "id": string;
            "type": string;
            "properties": {
                "ignoreUnknownValues": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "insertId": {
                                "type": string;
                                "description": string;
                            };
                            "json": {
                                "$ref": string;
                                "description": string;
                            };
                        };
                    };
                };
                "skipInvalidRows": {
                    "type": string;
                    "description": string;
                };
                "templateSuffix": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TableDataInsertAllResponse": {
            "id": string;
            "type": string;
            "properties": {
                "insertErrors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "errors": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "$ref": string;
                                };
                            };
                            "index": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TableDataList": {
            "id": string;
            "type": string;
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
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TableFieldSchema": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "fields": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mode": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TableList": {
            "id": string;
            "type": string;
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
                "tables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "clustering": {
                                "$ref": string;
                                "description": string;
                            };
                            "creationTime": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "expirationTime": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "friendlyName": {
                                "type": string;
                                "description": string;
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
                            "labels": {
                                "type": string;
                                "description": string;
                                "additionalProperties": {
                                    "type": string;
                                };
                            };
                            "tableReference": {
                                "$ref": string;
                                "description": string;
                            };
                            "timePartitioning": {
                                "$ref": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "view": {
                                "type": string;
                                "description": string;
                                "properties": {
                                    "useLegacySql": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TableReference": {
            "id": string;
            "type": string;
            "properties": {
                "datasetId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "tableId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "TableRow": {
            "id": string;
            "type": string;
            "properties": {
                "f": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TableSchema": {
            "id": string;
            "type": string;
            "properties": {
                "fields": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TimePartitioning": {
            "id": string;
            "type": string;
            "properties": {
                "expirationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "field": {
                    "type": string;
                    "description": string;
                };
                "requirePartitionFilter": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TrainingRun": {
            "id": string;
            "type": string;
            "properties": {
                "iterationResults": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "trainingOptions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "earlyStop": {
                            "type": string;
                        };
                        "l1Reg": {
                            "type": string;
                            "format": string;
                        };
                        "l2Reg": {
                            "type": string;
                            "format": string;
                        };
                        "learnRate": {
                            "type": string;
                            "format": string;
                        };
                        "learnRateStrategy": {
                            "type": string;
                        };
                        "lineSearchInitLearnRate": {
                            "type": string;
                            "format": string;
                        };
                        "maxIteration": {
                            "type": string;
                            "format": string;
                        };
                        "minRelProgress": {
                            "type": string;
                            "format": string;
                        };
                        "warmStart": {
                            "type": string;
                        };
                    };
                };
            };
        };
        "UserDefinedFunctionResource": {
            "id": string;
            "type": string;
            "properties": {
                "inlineCode": {
                    "type": string;
                    "description": string;
                };
                "resourceUri": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ViewDefinition": {
            "id": string;
            "type": string;
            "properties": {
                "query": {
                    "type": string;
                    "description": string;
                };
                "useLegacySql": {
                    "type": string;
                    "description": string;
                };
                "userDefinedFunctionResources": {
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
        "datasets": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "deleteContents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "all": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "filter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
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
        "jobs": {
            "methods": {
                "cancel": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "jobId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "jobId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
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
                "getQueryResults": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "jobId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeoutMs": {
                            "type": string;
                            "description": string;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "protocols": {
                            "simple": {
                                "multipart": boolean;
                                "path": string;
                            };
                            "resumable": {
                                "multipart": boolean;
                                "path": string;
                            };
                        };
                    };
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "allUsers": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxCreationTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "minCreationTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "stateFilter": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "query": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
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
        "projects": {
            "methods": {
                "getServiceAccount": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "tabledata": {
            "methods": {
                "insertAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "selectedFields": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
        "tables": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "selectedFields": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datasetId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
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
//# sourceMappingURL=bigquery-v2.d.ts.map