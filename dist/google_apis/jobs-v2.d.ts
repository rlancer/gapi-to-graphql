declare const _default: {
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/jobs": {
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
        "jobs": {
            "methods": {
                "delete": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "disableFastProcess": {
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
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "list": {
                    "flatPath": string;
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
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "idsOnly": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "filter": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                };
                "batchDelete": {
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
                "create": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "histogram": {
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
                "search": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
                    };
                };
                "get": {
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
                    "id": string;
                    "path": string;
                };
                "searchForAlert": {
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
                    "path": string;
                    "id": string;
                };
                "deleteByFilter": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
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
        "v2": {
            "methods": {
                "complete": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "companyName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "scope": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "query": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "languageCode": {
                            "description": string;
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
                    "scopes": string[];
                    "flatPath": string;
                };
            };
        };
        "companies": {
            "methods": {
                "list": {
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
                        "mustHaveOpenJobs": {
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
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
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
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                        "updateCompanyFields": {
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
                "create": {
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
                "delete": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
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
                };
            };
            "resources": {
                "jobs": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "includeJobsCount": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                                "companyName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "idsOnly": {
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
                                "jobRequisitionId": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "key": {
            "type": string;
            "location": string;
            "description": string;
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
            "type": string;
            "default": string;
            "location": string;
            "description": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
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
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "id": string;
    "documentationLink": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "CommuteInfo": {
            "description": string;
            "type": string;
            "properties": {
                "travelDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "jobLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BucketRange": {
            "description": string;
            "type": string;
            "properties": {
                "to": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "from": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateJobRequest": {
            "description": string;
            "type": string;
            "properties": {
                "job": {
                    "description": string;
                    "$ref": string;
                };
                "disableStreetAddressResolution": {
                    "description": string;
                    "type": string;
                };
                "processingOptions": {
                    "$ref": string;
                    "description": string;
                };
                "updateJobFields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CompensationHistogramRequest": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "bucketingOption": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CompensationEntry": {
            "description": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "expectedUnitsPerYear": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "unit": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "CustomAttribute": {
            "description": string;
            "type": string;
            "properties": {
                "filterable": {
                    "description": string;
                    "type": string;
                };
                "longValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "stringValues": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "JobQuery": {
            "type": string;
            "properties": {
                "publishDateRange": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "commuteFilter": {
                    "$ref": string;
                    "description": string;
                };
                "languageCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "query": {
                    "description": string;
                    "type": string;
                };
                "compensationFilter": {
                    "description": string;
                    "$ref": string;
                };
                "disableSpellCheck": {
                    "description": string;
                    "type": string;
                };
                "companyDisplayNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "companyNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "employmentTypes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "categories": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "customAttributeFilter": {
                    "description": string;
                    "type": string;
                };
                "locationFilters": {
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
        "ListJobsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
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
        };
        "CompensationFilter": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "units": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "includeJobsWithUnspecifiedCompensationRange": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "HistogramFacets": {
            "properties": {
                "simpleHistogramFacets": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                };
                "customAttributeHistogramFacets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "compensationHistogramFacets": {
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
        "SearchJobsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "totalSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "spellResult": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "histogramResults": {
                    "$ref": string;
                    "description": string;
                };
                "matchingJobs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "appliedCommuteFilter": {
                    "$ref": string;
                    "description": string;
                };
                "numJobsFromBroadenedQuery": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "jobView": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "estimatedTotalSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "appliedJobLocationFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Job": {
            "description": string;
            "type": string;
            "properties": {
                "responsibilities": {
                    "type": string;
                    "description": string;
                };
                "compensationInfo": {
                    "$ref": string;
                    "description": string;
                };
                "expireTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "jobLocations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "department": {
                    "description": string;
                    "type": string;
                };
                "unindexedCustomFields": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "expiryDate": {
                    "$ref": string;
                    "description": string;
                };
                "endDate": {
                    "$ref": string;
                    "description": string;
                };
                "educationLevels": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "customAttributes": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "filterableCustomFields": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "visibility": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "distributorCompanyId": {
                    "type": string;
                    "description": string;
                };
                "promotionValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "publishDate": {
                    "description": string;
                    "$ref": string;
                };
                "applicationUrls": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "companyDisplayName": {
                    "description": string;
                    "type": string;
                };
                "qualifications": {
                    "description": string;
                    "type": string;
                };
                "requisitionId": {
                    "type": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startDate": {
                    "$ref": string;
                    "description": string;
                };
                "level": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "benefits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "applicationInstruction": {
                    "description": string;
                    "type": string;
                };
                "incentives": {
                    "description": string;
                    "type": string;
                };
                "employmentTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "extendedCompensationInfo": {
                    "description": string;
                    "$ref": string;
                };
                "companyName": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "applicationEmailList": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "jobTitle": {
                    "description": string;
                    "type": string;
                };
                "region": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "referenceUrl": {
                    "description": string;
                    "type": string;
                };
                "companyTitle": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ExtendedCompensationFilter": {
            "properties": {
                "includeJobWithUnspecifiedCompensationRange": {
                    "description": string;
                    "type": string;
                };
                "compensationUnits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "currency": {
                    "description": string;
                    "type": string;
                };
                "compensationRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Company": {
            "description": string;
            "type": string;
            "properties": {
                "imageUrl": {
                    "description": string;
                    "type": string;
                };
                "distributorBillingCompanyId": {
                    "description": string;
                    "type": string;
                };
                "careerPageLink": {
                    "type": string;
                    "description": string;
                };
                "keywordSearchableCustomFields": {
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                };
                "disableLocationOptimization": {
                    "description": string;
                    "type": string;
                };
                "companySize": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "eeoText": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "distributorCompanyId": {
                    "description": string;
                    "type": string;
                };
                "structuredCompanyHqLocation": {
                    "description": string;
                    "$ref": string;
                };
                "hiringAgency": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "website": {
                    "description": string;
                    "type": string;
                };
                "hqLocation": {
                    "description": string;
                    "type": string;
                };
                "companyInfoSources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "keywordSearchableCustomAttributes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "suspended": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ExtendedCompensationInfoCompensationRange": {
            "description": string;
            "type": string;
            "properties": {
                "max": {
                    "description": string;
                    "$ref": string;
                };
                "min": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CompensationRange": {
            "description": string;
            "type": string;
            "properties": {
                "min": {
                    "description": string;
                    "$ref": string;
                };
                "max": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CompensationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "annualizedBaseCompensationRange": {
                    "$ref": string;
                    "description": string;
                };
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "max": {
                    "$ref": string;
                    "description": string;
                };
                "annualizedTotalCompensationRange": {
                    "$ref": string;
                    "description": string;
                };
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "min": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CustomAttributeHistogramRequest": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "longValueHistogramBucketingOption": {
                    "description": string;
                    "$ref": string;
                };
                "stringValueHistogram": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ExtendedCompensationInfoCompensationEntry": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "unit": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
                "expectedUnitsPerYear": {
                    "$ref": string;
                    "description": string;
                };
                "unspecified": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "CompensationHistogramResult": {
            "type": string;
            "properties": {
                "result": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
        };
        "PostalAddress": {
            "description": string;
            "type": string;
            "properties": {
                "recipients": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "sublocality": {
                    "description": string;
                    "type": string;
                };
                "revision": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locality": {
                    "description": string;
                    "type": string;
                };
                "administrativeArea": {
                    "description": string;
                    "type": string;
                };
                "organization": {
                    "description": string;
                    "type": string;
                };
                "addressLines": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
                "postalCode": {
                    "description": string;
                    "type": string;
                };
                "sortingCode": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "StringValues": {
            "properties": {
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "JobFilters": {
            "description": string;
            "type": string;
            "properties": {
                "extendedCompensationFilter": {
                    "$ref": string;
                    "description": string;
                };
                "disableSpellCheck": {
                    "description": string;
                    "type": string;
                };
                "customFieldFilters": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "tenantJobOnly": {
                    "description": string;
                    "type": string;
                };
                "companyNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "employmentTypes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "categories": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "customAttributeFilter": {
                    "type": string;
                    "description": string;
                };
                "locationFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "publishDateRange": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "companyTitles": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "languageCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "commuteFilter": {
                    "description": string;
                    "$ref": string;
                };
                "compensationFilter": {
                    "$ref": string;
                    "description": string;
                };
                "query": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListCompanyJobsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "jobs": {
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
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "SearchJobsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "jobView": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "filters": {
                    "$ref": string;
                    "description": string;
                };
                "sortBy": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "requestMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "enableBroadening": {
                    "description": string;
                    "type": string;
                };
                "mode": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "offset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pageSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "query": {
                    "$ref": string;
                    "description": string;
                };
                "disableRelevanceThresholding": {
                    "description": string;
                    "type": string;
                };
                "enablePreciseResultSize": {
                    "description": string;
                    "type": string;
                };
                "histogramFacets": {
                    "$ref": string;
                    "description": string;
                };
                "orderBy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "CommutePreference": {
            "description": string;
            "type": string;
            "properties": {
                "departureHourLocal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "allowNonStreetLevelAddress": {
                    "description": string;
                    "type": string;
                };
                "travelTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startLocation": {
                    "$ref": string;
                    "description": string;
                };
                "method": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "roadTraffic": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CompleteQueryResponse": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "completionResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ResponseMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "requestId": {
                    "description": string;
                    "type": string;
                };
                "experimentIdList": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "mode": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "NumericBucketingResult": {
            "type": string;
            "properties": {
                "maxValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "counts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "minValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CompanyInfoSource": {
            "type": string;
            "properties": {
                "freebaseMid": {
                    "description": string;
                    "type": string;
                };
                "mapsCid": {
                    "description": string;
                    "type": string;
                };
                "gplusId": {
                    "type": string;
                    "description": string;
                };
                "unknownTypeId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "MatchingJob": {
            "description": string;
            "type": string;
            "properties": {
                "job": {
                    "$ref": string;
                    "description": string;
                };
                "searchTextSnippet": {
                    "description": string;
                    "type": string;
                };
                "jobSummary": {
                    "description": string;
                    "type": string;
                };
                "jobTitleSnippet": {
                    "type": string;
                    "description": string;
                };
                "commuteInfo": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "LatLng": {
            "description": string;
            "type": string;
            "properties": {
                "latitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeviceInfo": {
            "description": string;
            "type": string;
            "properties": {
                "deviceType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "JobLocation": {
            "description": string;
            "type": string;
            "properties": {
                "locationType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "postalAddress": {
                    "description": string;
                    "$ref": string;
                };
                "radiusMeters": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latLng": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Money": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "nanos": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "units": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "LocationFilter": {
            "description": string;
            "type": string;
            "properties": {
                "isTelecommute": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "latLng": {
                    "description": string;
                    "$ref": string;
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
                "distanceInMiles": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HistogramResults": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "simpleHistogramResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customAttributeHistogramResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "compensationHistogramResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "NumericBucketingOption": {
            "type": string;
            "properties": {
                "requiresMinMax": {
                    "description": string;
                    "type": string;
                };
                "bucketBounds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "CustomFieldFilter": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "queries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ExtendedCompensationInfoDecimal": {
            "description": string;
            "type": string;
            "properties": {
                "micros": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "units": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateJobRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "job": {
                    "description": string;
                    "$ref": string;
                };
                "disableStreetAddressResolution": {
                    "description": string;
                    "type": string;
                };
                "processingOptions": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SpellingCorrection": {
            "type": string;
            "properties": {
                "corrected": {
                    "description": string;
                    "type": string;
                };
                "correctedText": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GetHistogramResponse": {
            "description": string;
            "type": string;
            "properties": {
                "results": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Filter": {
            "description": string;
            "type": string;
            "properties": {
                "requisitionId": {
                    "description": string;
                    "type": string;
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
        "DeleteJobsByFilterRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "$ref": string;
                    "description": string;
                };
                "disableFastProcess": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ExtendedCompensationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "currency": {
                    "description": string;
                    "type": string;
                };
                "annualizedTotalCompensationRange": {
                    "$ref": string;
                    "description": string;
                };
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "annualizedTotalCompensationUnspecified": {
                    "description": string;
                    "type": string;
                };
                "annualizedBaseCompensationRange": {
                    "$ref": string;
                    "description": string;
                };
                "annualizedBaseCompensationUnspecified": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RequestMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "sessionId": {
                    "description": string;
                    "type": string;
                };
                "domain": {
                    "description": string;
                    "type": string;
                };
                "userId": {
                    "type": string;
                    "description": string;
                };
                "deviceInfo": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GetHistogramRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filters": {
                    "$ref": string;
                    "description": string;
                };
                "requestMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "allowBroadening": {
                    "description": string;
                    "type": string;
                };
                "searchTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "query": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CompletionResult": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "imageUrl": {
                    "description": string;
                    "type": string;
                };
                "suggestion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "JobProcessingOptions": {
            "description": string;
            "type": string;
            "properties": {
                "disableStreetAddressResolution": {
                    "description": string;
                    "type": string;
                };
                "htmlSanitization": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "CustomAttributeHistogramResult": {
            "properties": {
                "key": {
                    "type": string;
                    "description": string;
                };
                "stringValueHistogramResult": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                        "format": string;
                    };
                };
                "longValueHistogramResult": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListCompaniesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "companies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BucketizedCount": {
            "properties": {
                "range": {
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
            "description": string;
            "type": string;
        };
        "CustomField": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "BatchDeleteJobsRequest": {
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "HistogramResult": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "values": {
                    "additionalProperties": {
                        "type": string;
                        "format": string;
                    };
                    "description": string;
                    "type": string;
                };
                "searchType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
};
export default _default;
//# sourceMappingURL=jobs-v2.d.ts.map