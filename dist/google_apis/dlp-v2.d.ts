declare const _default: {
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GooglePrivacyDlpV2TaggedField": {
            "type": string;
            "properties": {
                "field": {
                    "description": string;
                    "$ref": string;
                };
                "customTag": {
                    "description": string;
                    "type": string;
                };
                "infoType": {
                    "description": string;
                    "$ref": string;
                };
                "inferred": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2FieldId": {
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
        "GooglePrivacyDlpV2RiskAnalysisJobConfig": {
            "description": string;
            "type": string;
            "properties": {
                "privacyMetric": {
                    "description": string;
                    "$ref": string;
                };
                "actions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sourceTable": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ReplaceWithInfoTypeConfig": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ReplaceValueConfig": {
            "description": string;
            "type": string;
            "properties": {
                "newValue": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig": {
            "description": string;
            "type": string;
            "properties": {
                "surrogateInfoType": {
                    "$ref": string;
                    "description": string;
                };
                "commonAlphabet": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
                "radix": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "customAlphabet": {
                    "description": string;
                    "type": string;
                };
                "cryptoKey": {
                    "$ref": string;
                    "description": string;
                };
                "context": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2TimeZone": {
            "type": string;
            "properties": {
                "offsetMinutes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KAnonymityResult": {
            "description": string;
            "type": string;
            "properties": {
                "equivalenceClassHistogramBuckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CryptoKey": {
            "description": string;
            "type": string;
            "properties": {
                "kmsWrapped": {
                    "$ref": string;
                };
                "unwrapped": {
                    "$ref": string;
                };
                "transient": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2TimespanConfig": {
            "description": string;
            "type": string;
            "properties": {
                "timestampField": {
                    "$ref": string;
                    "description": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "enableAutoPopulationOfTimespanConfig": {
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RequestedOptions": {
            "type": string;
            "properties": {
                "snapshotInspectTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "jobConfig": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2EntityId": {
            "description": string;
            "type": string;
            "properties": {
                "field": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InspectContentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "inspectConfig": {
                    "$ref": string;
                    "description": string;
                };
                "inspectTemplateName": {
                    "description": string;
                    "type": string;
                };
                "item": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2QuasiId": {
            "description": string;
            "type": string;
            "properties": {
                "customTag": {
                    "description": string;
                    "type": string;
                };
                "infoType": {
                    "$ref": string;
                    "description": string;
                };
                "inferred": {
                    "$ref": string;
                    "description": string;
                };
                "field": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2HotwordRule": {
            "description": string;
            "type": string;
            "properties": {
                "likelihoodAdjustment": {
                    "$ref": string;
                    "description": string;
                };
                "hotwordRegex": {
                    "$ref": string;
                    "description": string;
                };
                "proximity": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Regex": {
            "description": string;
            "type": string;
            "properties": {
                "pattern": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DeidentifyContentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "item": {
                    "description": string;
                    "$ref": string;
                };
                "overview": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Expressions": {
            "description": string;
            "type": string;
            "properties": {
                "logicalOperator": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "conditions": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CategoricalStatsResult": {
            "description": string;
            "type": string;
            "properties": {
                "valueFrequencyHistogramBuckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoTypeDescription": {
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
                "supportedBy": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2UpdateInspectTemplateRequest": {
            "description": string;
            "type": string;
            "properties": {
                "inspectTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InspectJobConfig": {
            "properties": {
                "actions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inspectConfig": {
                    "$ref": string;
                    "description": string;
                };
                "inspectTemplateName": {
                    "description": string;
                    "type": string;
                };
                "storageConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "type": string;
        };
        "GooglePrivacyDlpV2LDiversityHistogramBucket": {
            "type": string;
            "properties": {
                "sensitiveValueFrequencyLowerBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValueCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sensitiveValueFrequencyUpperBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CreateJobTriggerRequest": {
            "description": string;
            "type": string;
            "properties": {
                "triggerId": {
                    "description": string;
                    "type": string;
                };
                "jobTrigger": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InspectConfig": {
            "description": string;
            "type": string;
            "properties": {
                "customInfoTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "contentOptions": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "limits": {
                    "$ref": string;
                };
                "excludeInfoTypes": {
                    "description": string;
                    "type": string;
                };
                "minLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "infoTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "includeQuote": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2LDiversityConfig": {
            "description": string;
            "type": string;
            "properties": {
                "sensitiveAttribute": {
                    "description": string;
                    "$ref": string;
                };
                "quasiIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KAnonymityEquivalenceClass": {
            "description": string;
            "type": string;
            "properties": {
                "equivalenceClassSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "quasiIdsValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2UpdateStoredInfoTypeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "config": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2NumericalStatsConfig": {
            "description": string;
            "type": string;
            "properties": {
                "field": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CloudStorageOptions": {
            "description": string;
            "type": string;
            "properties": {
                "fileTypes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "bytesLimitPerFile": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "filesLimitPercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "fileSet": {
                    "$ref": string;
                    "description": string;
                };
                "sampleMethod": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
                "bytesLimitPerFilePercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DateShiftConfig": {
            "properties": {
                "cryptoKey": {
                    "description": string;
                    "$ref": string;
                };
                "upperBoundDays": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "context": {
                    "description": string;
                    "$ref": string;
                };
                "lowerBoundDays": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ReidentifyContentResponse": {
            "description": string;
            "type": string;
            "properties": {
                "overview": {
                    "$ref": string;
                    "description": string;
                };
                "item": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ValueFrequency": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "$ref": string;
                    "description": string;
                };
                "count": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoTypeTransformation": {
            "description": string;
            "type": string;
            "properties": {
                "primitiveTransformation": {
                    "$ref": string;
                    "description": string;
                };
                "infoTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KMapEstimationQuasiIdValues": {
            "description": string;
            "type": string;
            "properties": {
                "quasiIdsValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "estimatedAnonymity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ContentItem": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "byteItem": {
                    "description": string;
                    "$ref": string;
                };
                "table": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ImageLocation": {
            "properties": {
                "boundingBoxes": {
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
        "GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket": {
            "properties": {
                "minProbability": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValueCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxProbability": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValues": {
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
        "GooglePrivacyDlpV2BoundingBox": {
            "description": string;
            "type": string;
            "properties": {
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "top": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "left": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RecordKey": {
            "properties": {
                "bigQueryKey": {
                    "$ref": string;
                };
                "datastoreKey": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2CharacterMaskConfig": {
            "properties": {
                "numberToMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "charactersToIgnore": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "maskingCharacter": {
                    "description": string;
                    "type": string;
                };
                "reverseOrder": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2SummaryResult": {
            "properties": {
                "details": {
                    "description": string;
                    "type": string;
                };
                "count": {
                    "format": string;
                    "type": string;
                };
                "code": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2Bucket": {
            "properties": {
                "min": {
                    "$ref": string;
                    "description": string;
                };
                "max": {
                    "$ref": string;
                    "description": string;
                };
                "replacementValue": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ReidentifyContentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "item": {
                    "description": string;
                    "$ref": string;
                };
                "reidentifyTemplateName": {
                    "description": string;
                    "type": string;
                };
                "inspectConfig": {
                    "description": string;
                    "$ref": string;
                };
                "inspectTemplateName": {
                    "description": string;
                    "type": string;
                };
                "reidentifyConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Key": {
            "description": string;
            "type": string;
            "properties": {
                "path": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "partitionId": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2TableLocation": {
            "description": string;
            "type": string;
            "properties": {
                "rowIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Conditions": {
            "properties": {
                "conditions": {
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
        "GooglePrivacyDlpV2TransformationSummary": {
            "description": string;
            "type": string;
            "properties": {
                "infoType": {
                    "description": string;
                    "$ref": string;
                };
                "transformation": {
                    "$ref": string;
                    "description": string;
                };
                "field": {
                    "$ref": string;
                    "description": string;
                };
                "results": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fieldTransformations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "transformedBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "recordSuppress": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ListInspectTemplatesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "inspectTemplates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CreateInspectTemplateRequest": {
            "description": string;
            "type": string;
            "properties": {
                "templateId": {
                    "description": string;
                    "type": string;
                };
                "inspectTemplate": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CloudStorageFileSet": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DeltaPresenceEstimationConfig": {
            "description": string;
            "type": string;
            "properties": {
                "auxiliaryTables": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "quasiIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DetectionRule": {
            "properties": {
                "hotwordRule": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2StoredInfoType": {
            "properties": {
                "pendingVersions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "currentVersion": {
                    "$ref": string;
                    "description": string;
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
        "GooglePrivacyDlpV2InspectContentResponse": {
            "properties": {
                "result": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2FileSet": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2LDiversityResult": {
            "description": string;
            "type": string;
            "properties": {
                "sensitiveValueFrequencyHistogramBuckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2SaveFindings": {
            "description": string;
            "type": string;
            "properties": {
                "outputConfig": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2OutputStorageConfig": {
            "description": string;
            "type": string;
            "properties": {
                "outputSchema": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "table": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2SurrogateType": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GooglePrivacyDlpV2StorageConfig": {
            "description": string;
            "type": string;
            "properties": {
                "cloudStorageOptions": {
                    "$ref": string;
                    "description": string;
                };
                "datastoreOptions": {
                    "$ref": string;
                    "description": string;
                };
                "timespanConfig": {
                    "$ref": string;
                };
                "bigQueryOptions": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Error": {
            "description": string;
            "type": string;
            "properties": {
                "details": {
                    "$ref": string;
                };
                "timestamps": {
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
        "GooglePrivacyDlpV2UnwrappedCryptoKey": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Table": {
            "description": string;
            "type": string;
            "properties": {
                "headers": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rows": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CryptoHashConfig": {
            "description": string;
            "type": string;
            "properties": {
                "cryptoKey": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2UpdateJobTriggerRequest": {
            "properties": {
                "jobTrigger": {
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
        "GooglePrivacyDlpV2QuasiIdentifierField": {
            "description": string;
            "type": string;
            "properties": {
                "customTag": {
                    "type": string;
                };
                "field": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2PublishToPubSub": {
            "description": string;
            "type": string;
            "properties": {
                "topic": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2LargeCustomDictionaryConfig": {
            "description": string;
            "type": string;
            "properties": {
                "outputPath": {
                    "description": string;
                    "$ref": string;
                };
                "bigQueryField": {
                    "$ref": string;
                    "description": string;
                };
                "cloudStorageFileSet": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2QuoteInfo": {
            "description": string;
            "type": string;
            "properties": {
                "dateTime": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DlpJob": {
            "properties": {
                "jobTriggerName": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "riskDetails": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inspectDetails": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ImageRedactionConfig": {
            "description": string;
            "type": string;
            "properties": {
                "infoType": {
                    "description": string;
                    "$ref": string;
                };
                "redactionColor": {
                    "$ref": string;
                    "description": string;
                };
                "redactAllText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2PublishSummaryToCscc": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GooglePrivacyDlpV2RecordTransformations": {
            "description": string;
            "type": string;
            "properties": {
                "recordSuppressions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fieldTransformations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoTypeStats": {
            "properties": {
                "infoType": {
                    "description": string;
                    "$ref": string;
                };
                "count": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2Result": {
            "type": string;
            "properties": {
                "totalEstimatedBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "infoTypeStats": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "processedBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DateTime": {
            "description": string;
            "type": string;
            "properties": {
                "dayOfWeek": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
                "time": {
                    "$ref": string;
                };
                "date": {
                    "description": string;
                    "$ref": string;
                };
                "timeZone": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KmsWrappedCryptoKey": {
            "description": string;
            "type": string;
            "properties": {
                "wrappedKey": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cryptoKeyName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ContentLocation": {
            "properties": {
                "containerVersion": {
                    "description": string;
                    "type": string;
                };
                "containerTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "containerName": {
                    "description": string;
                    "type": string;
                };
                "recordLocation": {
                    "$ref": string;
                    "description": string;
                };
                "imageLocation": {
                    "$ref": string;
                    "description": string;
                };
                "documentLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2RedactImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "redactedImage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "extractedText": {
                    "description": string;
                    "type": string;
                };
                "inspectResult": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RedactConfig": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GooglePrivacyDlpV2ListInfoTypesResponse": {
            "properties": {
                "infoTypes": {
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
        "GooglePrivacyDlpV2CloudStoragePath": {
            "description": string;
            "type": string;
            "properties": {
                "path": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Schedule": {
            "description": string;
            "type": string;
            "properties": {
                "recurrencePeriodDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2StoredInfoTypeVersion": {
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "config": {
                    "description": string;
                    "$ref": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "errors": {
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
        "GooglePrivacyDlpV2ListDeidentifyTemplatesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "deidentifyTemplates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CategoricalStatsHistogramBucket": {
            "type": string;
            "properties": {
                "valueFrequencyUpperBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "valueFrequencyLowerBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValueCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Row": {
            "type": string;
            "properties": {
                "values": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2QuasiIdField": {
            "properties": {
                "field": {
                    "$ref": string;
                };
                "customTag": {
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2DeidentifyTemplate": {
            "description": string;
            "type": string;
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
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
                "deidentifyConfig": {
                    "description": string;
                    "$ref": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RedactImageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "imageRedactionConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "byteItem": {
                    "description": string;
                    "$ref": string;
                };
                "inspectConfig": {
                    "$ref": string;
                    "description": string;
                };
                "includeFindings": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2BigQueryTable": {
            "description": string;
            "type": string;
            "properties": {
                "tableId": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "datasetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2PrimitiveTransformation": {
            "description": string;
            "type": string;
            "properties": {
                "replaceConfig": {
                    "$ref": string;
                };
                "timePartConfig": {
                    "$ref": string;
                };
                "fixedSizeBucketingConfig": {
                    "$ref": string;
                };
                "dateShiftConfig": {
                    "$ref": string;
                };
                "characterMaskConfig": {
                    "$ref": string;
                };
                "redactConfig": {
                    "$ref": string;
                };
                "bucketingConfig": {
                    "$ref": string;
                };
                "replaceWithInfoTypeConfig": {
                    "$ref": string;
                };
                "cryptoHashConfig": {
                    "$ref": string;
                };
                "cryptoReplaceFfxFpeConfig": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2FieldTransformation": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "description": string;
                    "$ref": string;
                };
                "infoTypeTransformations": {
                    "description": string;
                    "$ref": string;
                };
                "fields": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "primitiveTransformation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails": {
            "properties": {
                "numericalStatsResult": {
                    "$ref": string;
                };
                "kAnonymityResult": {
                    "$ref": string;
                };
                "kMapEstimationResult": {
                    "$ref": string;
                };
                "deltaPresenceEstimationResult": {
                    "$ref": string;
                };
                "lDiversityResult": {
                    "$ref": string;
                };
                "requestedSourceTable": {
                    "description": string;
                    "$ref": string;
                };
                "requestedPrivacyMetric": {
                    "$ref": string;
                    "description": string;
                };
                "categoricalStatsResult": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2InspectResult": {
            "description": string;
            "type": string;
            "properties": {
                "findings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "findingsTruncated": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Dictionary": {
            "description": string;
            "type": string;
            "properties": {
                "wordList": {
                    "$ref": string;
                    "description": string;
                };
                "cloudStoragePath": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleProtobufEmpty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GooglePrivacyDlpV2TimePartConfig": {
            "description": string;
            "type": string;
            "properties": {
                "partToExtract": {
                    "enum": string[];
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Proximity": {
            "properties": {
                "windowBefore": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "windowAfter": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2Condition": {
            "properties": {
                "field": {
                    "description": string;
                    "$ref": string;
                };
                "operator": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "value": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2LikelihoodAdjustment": {
            "description": string;
            "type": string;
            "properties": {
                "relativeLikelihood": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "fixedLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Action": {
            "description": string;
            "type": string;
            "properties": {
                "saveFindings": {
                    "$ref": string;
                    "description": string;
                };
                "pubSub": {
                    "description": string;
                    "$ref": string;
                };
                "publishSummaryToCscc": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoTypeTransformations": {
            "description": string;
            "type": string;
            "properties": {
                "transformations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2StoredInfoTypeConfig": {
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
                "largeCustomDictionary": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RecordSuppression": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KAnonymityConfig": {
            "properties": {
                "entityId": {
                    "$ref": string;
                    "description": string;
                };
                "quasiIds": {
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
        "GooglePrivacyDlpV2BigQueryOptions": {
            "properties": {
                "tableReference": {
                    "$ref": string;
                    "description": string;
                };
                "sampleMethod": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "rowsLimit": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "rowsLimitPercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "identifyingFields": {
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
        "GooglePrivacyDlpV2FindingLimits": {
            "type": string;
            "properties": {
                "maxFindingsPerItem": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxFindingsPerRequest": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxFindingsPerInfoType": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleTypeTimeOfDay": {
            "description": string;
            "type": string;
            "properties": {
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
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Value": {
            "description": string;
            "type": string;
            "properties": {
                "timestampValue": {
                    "format": string;
                    "type": string;
                };
                "booleanValue": {
                    "type": string;
                };
                "floatValue": {
                    "format": string;
                    "type": string;
                };
                "timeValue": {
                    "$ref": string;
                };
                "integerValue": {
                    "format": string;
                    "type": string;
                };
                "stringValue": {
                    "type": string;
                };
                "dateValue": {
                    "$ref": string;
                };
                "dayOfWeekValue": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2BigQueryField": {
            "description": string;
            "type": string;
            "properties": {
                "table": {
                    "$ref": string;
                    "description": string;
                };
                "field": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2LDiversityEquivalenceClass": {
            "description": string;
            "type": string;
            "properties": {
                "equivalenceClassSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "quasiIdsValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "numDistinctSensitiveValues": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "topSensitiveValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoTypeLimit": {
            "description": string;
            "type": string;
            "properties": {
                "infoType": {
                    "$ref": string;
                    "description": string;
                };
                "maxFindings": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InspectTemplate": {
            "description": string;
            "type": string;
            "properties": {
                "inspectConfig": {
                    "description": string;
                    "$ref": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updateTime": {
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
        "GooglePrivacyDlpV2NumericalStatsResult": {
            "description": string;
            "type": string;
            "properties": {
                "maxValue": {
                    "description": string;
                    "$ref": string;
                };
                "quantileValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "minValue": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Location": {
            "description": string;
            "type": string;
            "properties": {
                "contentLocations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "codepointRange": {
                    "$ref": string;
                    "description": string;
                };
                "byteRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CustomInfoType": {
            "description": string;
            "type": string;
            "properties": {
                "storedType": {
                    "$ref": string;
                    "description": string;
                };
                "infoType": {
                    "description": string;
                    "$ref": string;
                };
                "dictionary": {
                    "$ref": string;
                    "description": string;
                };
                "regex": {
                    "$ref": string;
                    "description": string;
                };
                "surrogateType": {
                    "$ref": string;
                    "description": string;
                };
                "likelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "detectionRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DeidentifyConfig": {
            "properties": {
                "recordTransformations": {
                    "$ref": string;
                    "description": string;
                };
                "infoTypeTransformations": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues": {
            "description": string;
            "type": string;
            "properties": {
                "estimatedProbability": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "quasiIdsValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Trigger": {
            "description": string;
            "type": string;
            "properties": {
                "schedule": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Range": {
            "properties": {
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "end": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2CategoricalStatsConfig": {
            "description": string;
            "type": string;
            "properties": {
                "field": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2BigQueryKey": {
            "description": string;
            "type": string;
            "properties": {
                "rowNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "tableReference": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2PartitionId": {
            "description": string;
            "type": string;
            "properties": {
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "namespaceId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2BucketingConfig": {
            "description": string;
            "type": string;
            "properties": {
                "buckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CharsToIgnore": {
            "description": string;
            "type": string;
            "properties": {
                "commonCharactersToIgnore": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
                "charactersToSkip": {
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2TransientCryptoKey": {
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
        "GooglePrivacyDlpV2CancelDlpJobRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GooglePrivacyDlpV2StoredType": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KindExpression": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ListDlpJobsResponse": {
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
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2ByteContentItem": {
            "properties": {
                "data": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2PrivacyMetric": {
            "description": string;
            "type": string;
            "properties": {
                "numericalStatsConfig": {
                    "$ref": string;
                };
                "kAnonymityConfig": {
                    "$ref": string;
                };
                "categoricalStatsConfig": {
                    "$ref": string;
                };
                "kMapEstimationConfig": {
                    "$ref": string;
                };
                "lDiversityConfig": {
                    "$ref": string;
                };
                "deltaPresenceEstimationConfig": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2WordList": {
            "description": string;
            "type": string;
            "properties": {
                "words": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ListStoredInfoTypesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "storedInfoTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2StatisticalTable": {
            "description": string;
            "type": string;
            "properties": {
                "quasiIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "relativeFrequency": {
                    "description": string;
                    "$ref": string;
                };
                "table": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KMapEstimationResult": {
            "properties": {
                "kMapEstimationHistogram": {
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
        "GooglePrivacyDlpV2JobTrigger": {
            "description": string;
            "type": string;
            "properties": {
                "triggers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "errors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lastRunTime": {
                    "description": string;
                    "format": string;
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
                "inspectJob": {
                    "$ref": string;
                };
                "updateTime": {
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
        "GooglePrivacyDlpV2KMapEstimationConfig": {
            "description": string;
            "type": string;
            "properties": {
                "auxiliaryTables": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "quasiIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KAnonymityHistogramBucket": {
            "properties": {
                "bucketValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "equivalenceClassSizeLowerBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "equivalenceClassSizeUpperBound": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValueCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "type": string;
        };
        "GooglePrivacyDlpV2CreateStoredInfoTypeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "storedInfoTypeId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2PathElement": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2DeidentifyContentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "item": {
                    "$ref": string;
                    "description": string;
                };
                "deidentifyTemplateName": {
                    "description": string;
                    "type": string;
                };
                "deidentifyConfig": {
                    "$ref": string;
                    "description": string;
                };
                "inspectConfig": {
                    "$ref": string;
                    "description": string;
                };
                "inspectTemplateName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2ListJobTriggersResponse": {
            "properties": {
                "jobTriggers": {
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
        "GooglePrivacyDlpV2DatastoreKey": {
            "description": string;
            "type": string;
            "properties": {
                "entityKey": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2Finding": {
            "description": string;
            "type": string;
            "properties": {
                "likelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "quoteInfo": {
                    "description": string;
                    "$ref": string;
                };
                "quote": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "$ref": string;
                    "description": string;
                };
                "infoType": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CreateDlpJobRequest": {
            "properties": {
                "inspectJob": {
                    "$ref": string;
                };
                "jobId": {
                    "description": string;
                    "type": string;
                };
                "riskJob": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2RecordLocation": {
            "description": string;
            "type": string;
            "properties": {
                "fieldId": {
                    "$ref": string;
                    "description": string;
                };
                "tableLocation": {
                    "$ref": string;
                    "description": string;
                };
                "recordKey": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deidentifyTemplate": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleTypeDate": {
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
        "GooglePrivacyDlpV2InspectDataSourceDetails": {
            "properties": {
                "requestedOptions": {
                    "$ref": string;
                    "description": string;
                };
                "result": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GooglePrivacyDlpV2DatastoreOptions": {
            "description": string;
            "type": string;
            "properties": {
                "partitionId": {
                    "description": string;
                    "$ref": string;
                };
                "kind": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DocumentLocation": {
            "description": string;
            "type": string;
            "properties": {
                "fileOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2AuxiliaryTable": {
            "description": string;
            "type": string;
            "properties": {
                "quasiIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "relativeFrequency": {
                    "$ref": string;
                    "description": string;
                };
                "table": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2CreateDeidentifyTemplateRequest": {
            "description": string;
            "type": string;
            "properties": {
                "templateId": {
                    "description": string;
                    "type": string;
                };
                "deidentifyTemplate": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2FixedSizeBucketingConfig": {
            "description": string;
            "type": string;
            "properties": {
                "lowerBound": {
                    "description": string;
                    "$ref": string;
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "upperBound": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleRpcStatus": {
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
        "GooglePrivacyDlpV2Color": {
            "description": string;
            "type": string;
            "properties": {
                "red": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "green": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2KMapEstimationHistogramBucket": {
            "description": string;
            "type": string;
            "properties": {
                "bucketValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "minAnonymity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxAnonymity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucketValueCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2RecordCondition": {
            "description": string;
            "type": string;
            "properties": {
                "expressions": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2TransformationOverview": {
            "description": string;
            "type": string;
            "properties": {
                "transformedBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "transformationSummaries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2DeltaPresenceEstimationResult": {
            "description": string;
            "type": string;
            "properties": {
                "deltaPresenceEstimationHistogram": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GooglePrivacyDlpV2InfoType": {
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
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "infoTypes": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "languageCode": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "filter": {
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
        };
        "organizations": {
            "resources": {
                "inspectTemplates": {
                    "methods": {
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
                        "delete": {
                            "flatPath": string;
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
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
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
                        "get": {
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
                        "list": {
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
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "orderBy": {
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
                    };
                };
                "deidentifyTemplates": {
                    "methods": {
                        "delete": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "name": {
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
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "name": {
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
                                "orderBy": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
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
                "storedInfoTypes": {
                    "methods": {
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "name": {
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
                            "request": {
                                "$ref": string;
                            };
                        };
                        "get": {
                            "description": string;
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
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
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
                    };
                };
            };
        };
        "projects": {
            "resources": {
                "jobTriggers": {
                    "methods": {
                        "patch": {
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
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "orderBy": {
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
                        "create": {
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
                "storedInfoTypes": {
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
                        "get": {
                            "description": string;
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
                    };
                };
                "deidentifyTemplates": {
                    "methods": {
                        "delete": {
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
                        };
                        "patch": {
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
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "orderBy": {
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
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
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
                    };
                };
                "image": {
                    "methods": {
                        "redact": {
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
                "dlpJobs": {
                    "methods": {
                        "create": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                            "id": string;
                            "path": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "cancel": {
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
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "name": {
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
                        "list": {
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
                                "filter": {
                                    "location": string;
                                    "description": string;
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
                                "type": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
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
                    };
                };
                "inspectTemplates": {
                    "methods": {
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
                        "patch": {
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
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
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
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
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
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "orderBy": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
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
                    };
                };
                "content": {
                    "methods": {
                        "deidentify": {
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
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "inspect": {
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
                        "reidentify": {
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
    };
    "parameters": {
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
            "description": string;
            "type": string;
            "location": string;
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
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
};
export default _default;
//# sourceMappingURL=dlp-v2.d.ts.map