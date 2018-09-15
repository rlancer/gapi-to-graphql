declare const _default: {
    "schemas": {
        "MonitoredResourceMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "userLabels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "systemLabels": {
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
        "NotificationChannelDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "supportedTiers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
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
        "BucketOptions": {
            "description": string;
            "type": string;
            "properties": {
                "exponentialBuckets": {
                    "$ref": string;
                    "description": string;
                };
                "linearBuckets": {
                    "description": string;
                    "$ref": string;
                };
                "explicitBuckets": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "HttpCheck": {
            "description": string;
            "type": string;
            "properties": {
                "useSsl": {
                    "description": string;
                    "type": string;
                };
                "maskHeaders": {
                    "description": string;
                    "type": string;
                };
                "authInfo": {
                    "description": string;
                    "$ref": string;
                };
                "port": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "headers": {
                    "additionalProperties": {
                        "type": string;
                    };
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
        "CollectdValue": {
            "description": string;
            "type": string;
            "properties": {
                "dataSourceType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "dataSourceName": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "MetricDescriptor": {
            "properties": {
                "metricKind": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
            };
            "id": string;
            "description": string;
            "type": string;
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
        "ListGroupsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "group": {
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
        "NotificationChannel": {
            "description": string;
            "type": string;
            "properties": {
                "enabled": {
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
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
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
                "verificationStatus": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "ListGroupMembersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "members": {
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
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateCollectdTimeSeriesRequest": {
            "properties": {
                "resource": {
                    "description": string;
                    "$ref": string;
                };
                "collectdPayloads": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "collectdVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListMonitoredResourceDescriptorsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "resourceDescriptors": {
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
        "TimeSeries": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
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
                "metric": {
                    "description": string;
                    "$ref": string;
                };
                "points": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resource": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "SpanContext": {
            "properties": {
                "spanName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MonitoredResource": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
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
            };
            "id": string;
        };
        "ListMetricDescriptorsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "metricDescriptors": {
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
        "CollectdPayloadError": {
            "description": string;
            "type": string;
            "properties": {
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "valueErrors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "MonitoredResourceDescriptor": {
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
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ResourceGroup": {
            "description": string;
            "type": string;
            "properties": {
                "resourceType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "groupId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CollectdValueError": {
            "description": string;
            "type": string;
            "properties": {
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UptimeCheckIp": {
            "description": string;
            "type": string;
            "properties": {
                "ipAddress": {
                    "description": string;
                    "type": string;
                };
                "region": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "ListNotificationChannelDescriptorsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "channelDescriptors": {
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
        "Linear": {
            "description": string;
            "type": string;
            "properties": {
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
                "numFiniteBuckets": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SendNotificationChannelVerificationCodeRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "VerifyNotificationChannelRequest": {
            "description": string;
            "type": string;
            "properties": {
                "code": {
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
        "MetricThreshold": {
            "properties": {
                "denominatorFilter": {
                    "description": string;
                    "type": string;
                };
                "denominatorAggregations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "aggregations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trigger": {
                    "description": string;
                    "$ref": string;
                };
                "comparison": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "thresholdValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
                "duration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MutationRecord": {
            "description": string;
            "type": string;
            "properties": {
                "mutateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "mutatedBy": {
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
                "content": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Condition": {
            "description": string;
            "type": string;
            "properties": {
                "conditionAbsent": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "conditionThreshold": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "MetricAbsence": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "type": string;
                };
                "duration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "aggregations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trigger": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Exponential": {
            "description": string;
            "type": string;
            "properties": {
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
                "growthFactor": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Point": {
            "description": string;
            "type": string;
            "properties": {
                "interval": {
                    "description": string;
                    "$ref": string;
                };
                "value": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Metric": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "type": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListUptimeCheckConfigsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "uptimeCheckConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListTimeSeriesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "timeSeries": {
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
                "executionErrors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Group": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "isCluster": {
                    "description": string;
                    "type": string;
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "parentName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GetNotificationChannelVerificationCodeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "expireTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BasicAuthentication": {
            "properties": {
                "password": {
                    "description": string;
                    "type": string;
                };
                "username": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListAlertPoliciesResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "alertPolicies": {
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
        "ListNotificationChannelsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "notificationChannels": {
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
        "Status": {
            "description": string;
            "type": string;
            "properties": {
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
        "Range": {
            "properties": {
                "min": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "max": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UptimeCheckConfig": {
            "description": string;
            "type": string;
            "properties": {
                "contentMatchers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "period": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "httpCheck": {
                    "$ref": string;
                    "description": string;
                };
                "resourceGroup": {
                    "description": string;
                    "$ref": string;
                };
                "tcpCheck": {
                    "$ref": string;
                    "description": string;
                };
                "internalCheckers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "isInternal": {
                    "description": string;
                    "type": string;
                };
                "selectedRegions": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "monitoredResource": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DroppedLabels": {
            "description": string;
            "type": string;
            "properties": {
                "label": {
                    "additionalProperties": {
                        "type": string;
                    };
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
        };
        "CreateTimeSeriesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "timeSeries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Distribution": {
            "description": string;
            "type": string;
            "properties": {
                "bucketCounts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "bucketOptions": {
                    "$ref": string;
                    "description": string;
                };
                "sumOfSquaredDeviation": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "exemplars": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
                "count": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "mean": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AlertPolicy": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "userLabels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "combiner": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "conditions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "documentation": {
                    "$ref": string;
                    "description": string;
                };
                "creationRecord": {
                    "description": string;
                    "$ref": string;
                };
                "notificationChannels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "mutationRecord": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TypedValue": {
            "description": string;
            "type": string;
            "properties": {
                "boolValue": {
                    "description": string;
                    "type": string;
                };
                "stringValue": {
                    "description": string;
                    "type": string;
                };
                "doubleValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "int64Value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "distributionValue": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CollectdPayload": {
            "description": string;
            "type": string;
            "properties": {
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "typeInstance": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "plugin": {
                    "description": string;
                    "type": string;
                };
                "pluginInstance": {
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
            };
            "id": string;
        };
        "GetNotificationChannelVerificationCodeResponse": {
            "description": string;
            "type": string;
            "properties": {
                "code": {
                    "description": string;
                    "type": string;
                };
                "expireTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Aggregation": {
            "description": string;
            "type": string;
            "properties": {
                "perSeriesAligner": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "alignmentPeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "crossSeriesReducer": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "groupByFields": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "CreateCollectdTimeSeriesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "payloadErrors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ContentMatcher": {
            "properties": {
                "content": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Exemplar": {
            "properties": {
                "value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "attachments": {
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
            "description": string;
            "type": string;
        };
        "InternalChecker": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "checkerId": {
                    "description": string;
                    "type": string;
                };
                "gcpZone": {
                    "description": string;
                    "type": string;
                };
                "network": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TcpCheck": {
            "properties": {
                "port": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
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
        "TimeInterval": {
            "description": string;
            "type": string;
            "properties": {
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
            };
            "id": string;
        };
        "ListUptimeCheckIpsResponse": {
            "properties": {
                "uptimeCheckIps": {
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
        "Trigger": {
            "description": string;
            "type": string;
            "properties": {
                "percent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "count": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Field": {
            "properties": {
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LabelDescriptor": {
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Type": {
            "description": string;
            "type": string;
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
                "https://www.googleapis.com/auth/monitoring.write": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/monitoring.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/monitoring": {
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
        "uptimeCheckIps": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
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
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "projects": {
            "resources": {
                "timeSeries": {
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
                                "aggregation.alignmentPeriod": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "orderBy": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "aggregation.crossSeriesReducer": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "aggregation.perSeriesAligner": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "interval.startTime": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "view": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "aggregation.groupByFields": {
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "interval.endTime": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
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
                    };
                };
                "uptimeCheckConfigs": {
                    "methods": {
                        "list": {
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
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
                        "patch": {
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
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
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
                                "name": {
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
                "monitoredResourceDescriptors": {
                    "methods": {
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
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
                            "id": string;
                            "path": string;
                        };
                        "get": {
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
                "notificationChannelDescriptors": {
                    "methods": {
                        "list": {
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
                            "id": string;
                            "path": string;
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
                    };
                };
                "groups": {
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
                            "parameters": {
                                "childrenOfGroup": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "descendantsOfGroup": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "ancestorsOfGroup": {
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
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "validateOnly": {
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
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "validateOnly": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                    "resources": {
                        "members": {
                            "methods": {
                                "list": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "interval.endTime": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
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
                                        "interval.startTime": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "pageSize": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
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
                "collectdTimeSeries": {
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
                    };
                };
                "notificationChannels": {
                    "methods": {
                        "verify": {
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
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
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
                        "get": {
                            "description": string;
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
                        };
                        "sendVerificationCode": {
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
                        "getVerificationCode": {
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
                        "delete": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "force": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
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
                            "scopes": string[];
                            "parameters": {
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "orderBy": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "create": {
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "alertPolicies": {
                    "methods": {
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
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "orderBy": {
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
                            };
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
                        "patch": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "create": {
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "metricDescriptors": {
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
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
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
                        "get": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                            "id": string;
                            "path": string;
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
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "scopes": string[];
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
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
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
};
export default _default;
//# sourceMappingURL=monitoring-v3.d.ts.map