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
                "https://www.googleapis.com/auth/doubleclicksearch": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Availability": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "agencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "availabilityTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "segmentationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "segmentationName": {
                    "type": string;
                    "description": string;
                };
                "segmentationType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Conversion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "adId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "agencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "attributionModel": {
                    "type": string;
                    "description": string;
                };
                "campaignId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "channel": {
                    "type": string;
                    "description": string;
                };
                "clickId": {
                    "type": string;
                    "description": string;
                };
                "conversionId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "conversionModifiedTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "conversionTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "countMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "criterionId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
                    "type": string;
                    "description": string;
                };
                "customDimension": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customMetric": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "deviceType": {
                    "type": string;
                    "description": string;
                };
                "dsConversionId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "engineAccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightOrderId": {
                    "type": string;
                    "description": string;
                };
                "inventoryAccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "productCountry": {
                    "type": string;
                    "description": string;
                };
                "productGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "productLanguage": {
                    "type": string;
                    "description": string;
                };
                "quantityMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "revenueMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "segmentationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "segmentationName": {
                    "type": string;
                    "description": string;
                };
                "segmentationType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "storeId": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ConversionList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "conversion": {
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
            };
        };
        "CustomDimension": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "CustomMetric": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Report": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "files": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "byteCount": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "url": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isReportReady": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "request": {
                    "$ref": string;
                    "description": string;
                };
                "rowCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "statisticsCurrencyCode": {
                    "type": string;
                    "description": string;
                };
                "statisticsTimeZone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReportApiColumnSpec": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "columnName": {
                    "type": string;
                    "description": string;
                };
                "customDimensionName": {
                    "type": string;
                    "description": string;
                };
                "customMetricName": {
                    "type": string;
                    "description": string;
                };
                "endDate": {
                    "type": string;
                    "description": string;
                };
                "groupByColumn": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "headerText": {
                    "type": string;
                    "description": string;
                };
                "platformSource": {
                    "type": string;
                    "description": string;
                };
                "productReportPerspective": {
                    "type": string;
                    "description": string;
                };
                "savedColumnName": {
                    "type": string;
                    "description": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReportRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "columns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "downloadFormat": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "filters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "column": {
                                "$ref": string;
                                "description": string;
                            };
                            "operator": {
                                "type": string;
                                "description": string;
                            };
                            "values": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
                "includeDeletedEntities": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "includeRemovedEntities": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxRowsPerFile": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "minimum": string;
                    "maximum": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "orderBy": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "column": {
                                "$ref": string;
                                "description": string;
                            };
                            "sortOrder": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "reportScope": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "adGroupId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "adId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "agencyId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "engineAccountId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "keywordId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "reportType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "rowCount": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "format": string;
                    "minimum": string;
                    "maximum": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "startRow": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "format": string;
                    "minimum": string;
                    "maximum": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "statisticsCurrency": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timeRange": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "changedAttributesSinceTimestamp": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "changedMetricsSinceTimestamp": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "endDate": {
                            "type": string;
                            "description": string;
                        };
                        "startDate": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "verifySingleTimeZone": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "ReportRow": {
            "id": string;
            "type": string;
            "description": string;
            "additionalProperties": {
                "type": string;
                "description": string;
            };
        };
        "SavedColumn": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "savedColumnName": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SavedColumnList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
            };
        };
        "UpdateAvailabilityRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "availabilities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UpdateAvailabilityResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "availabilities": {
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
        "conversion": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "adGroupId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "adId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "agencyId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "criterionId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "endDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "engineAccountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "rowCount": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "startDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "startRow": {
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
                "insert": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "agencyId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "endDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "engineAccountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "rowCount": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "startDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "startRow": {
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
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "updateAvailability": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "reports": {
            "methods": {
                "generate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
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
                        "reportId": {
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
                "getFile": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "reportFragment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                    "useMediaDownloadService": boolean;
                };
                "request": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "savedColumns": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "agencyId": {
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
    };
};
export default _default;
//# sourceMappingURL=doubleclicksearch-v2.d.ts.map