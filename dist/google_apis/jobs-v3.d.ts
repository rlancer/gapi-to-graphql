declare const _default: {
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "CustomAttributeHistogramResult": {
            "type": string;
            "properties": {
                "stringValueHistogramResult": {
                    "type": string;
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                };
                "longValueHistogramResult": {
                    "description": string;
                    "$ref": string;
                };
                "key": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ListCompaniesResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "companies": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "BucketizedCount": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
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
        };
        "BatchDeleteJobsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HistogramResult": {
            "description": string;
            "type": string;
            "properties": {
                "values": {
                    "additionalProperties": {
                        "format": string;
                        "type": string;
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
            "id": string;
        };
        "CommuteInfo": {
            "id": string;
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
        };
        "BucketRange": {
            "id": string;
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
        };
        "CompensationHistogramRequest": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "bucketingOption": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdateJobRequest": {
            "description": string;
            "type": string;
            "properties": {
                "job": {
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
        "CompensationEntry": {
            "description": string;
            "type": string;
            "properties": {
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "CustomAttribute": {
            "description": string;
            "type": string;
            "properties": {
                "stringValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "longValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "filterable": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "JobQuery": {
            "description": string;
            "type": string;
            "properties": {
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
                "customAttributeFilter": {
                    "description": string;
                    "type": string;
                };
                "publishTimeRange": {
                    "$ref": string;
                    "description": string;
                };
                "locationFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
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
                "query": {
                    "description": string;
                    "type": string;
                };
                "compensationFilter": {
                    "description": string;
                    "$ref": string;
                };
                "companyDisplayNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "disableSpellCheck": {
                    "description": string;
                    "type": string;
                };
                "jobCategories": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                };
            };
            "id": string;
        };
        "ListJobsResponse": {
            "type": string;
            "properties": {
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
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CompensationFilter": {
            "description": string;
            "type": string;
            "properties": {
                "units": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
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
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "HistogramFacets": {
            "description": string;
            "type": string;
            "properties": {
                "simpleHistogramFacets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
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
        };
        "SearchJobsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locationFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "histogramResults": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
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
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "spellCorrection": {
                    "$ref": string;
                    "description": string;
                };
                "broadenedQueryJobsCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "estimatedTotalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TimeOfDay": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
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
                "seconds": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "ProcessingOptions": {
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
        "CommuteFilter": {
            "description": string;
            "type": string;
            "properties": {
                "roadTraffic": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "allowImpreciseAddresses": {
                    "description": string;
                    "type": string;
                };
                "departureTime": {
                    "$ref": string;
                    "description": string;
                };
                "travelDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startCoordinates": {
                    "description": string;
                    "$ref": string;
                };
                "commuteMethod": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "Job": {
            "properties": {
                "customAttributes": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "jobLevel": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "postingUpdateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "visibility": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "jobBenefits": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "promotionValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
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
                    "description": string;
                    "type": string;
                };
                "processingOptions": {
                    "$ref": string;
                    "description": string;
                };
                "jobEndTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "derivedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "employmentTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "incentives": {
                    "type": string;
                    "description": string;
                };
                "postingCreateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "addresses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "companyName": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "jobStartTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "degreeTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "responsibilities": {
                    "description": string;
                    "type": string;
                };
                "compensationInfo": {
                    "$ref": string;
                    "description": string;
                };
                "department": {
                    "type": string;
                    "description": string;
                };
                "applicationInfo": {
                    "description": string;
                    "$ref": string;
                };
                "postingRegion": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "postingExpireTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "postingPublishTime": {
                    "description": string;
                    "format": string;
                    "type": string;
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
                "keywordSearchableJobCustomAttributes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "derivedInfo": {
                    "description": string;
                    "$ref": string;
                };
                "suspended": {
                    "description": string;
                    "type": string;
                };
                "eeoText": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "imageUri": {
                    "description": string;
                    "type": string;
                };
                "size": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "hiringAgency": {
                    "description": string;
                    "type": string;
                };
                "websiteUri": {
                    "type": string;
                    "description": string;
                };
                "externalId": {
                    "description": string;
                    "type": string;
                };
                "careerSiteUri": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "headquartersAddress": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CompensationRange": {
            "type": string;
            "properties": {
                "minCompensation": {
                    "description": string;
                    "$ref": string;
                };
                "maxCompensation": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CompensationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "annualizedTotalCompensationRange": {
                    "description": string;
                    "$ref": string;
                };
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "annualizedBaseCompensationRange": {
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
                    "$ref": string;
                    "description": string;
                };
                "stringValueHistogram": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Location": {
            "description": string;
            "type": string;
            "properties": {
                "radiusInMiles": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latLng": {
                    "$ref": string;
                    "description": string;
                };
                "locationType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "postalAddress": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CompensationHistogramResult": {
            "description": string;
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
                "administrativeArea": {
                    "description": string;
                    "type": string;
                };
                "locality": {
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
                    "type": string;
                    "description": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateCompanyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "company": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CompanyDerivedInfo": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "headquartersLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SearchJobsRequest": {
            "properties": {
                "orderBy": {
                    "description": string;
                    "type": string;
                };
                "jobQuery": {
                    "description": string;
                    "$ref": string;
                };
                "jobView": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "requirePreciseResultSize": {
                    "description": string;
                    "type": string;
                };
                "pageToken": {
                    "description": string;
                    "type": string;
                };
                "searchMode": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "requestMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "disableKeywordMatch": {
                    "description": string;
                    "type": string;
                };
                "enableBroadening": {
                    "description": string;
                    "type": string;
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
                "histogramFacets": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ApplicationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "uris": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "emails": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "instruction": {
                    "description": string;
                    "type": string;
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
            };
            "id": string;
        };
        "CompleteQueryResponse": {
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "completionResults": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "JobDerivedInfo": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "jobCategories": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "NumericBucketingResult": {
            "description": string;
            "type": string;
            "properties": {
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
                "maxValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MatchingJob": {
            "type": string;
            "properties": {
                "commuteInfo": {
                    "$ref": string;
                    "description": string;
                };
                "job": {
                    "description": string;
                    "$ref": string;
                };
                "searchTextSnippet": {
                    "description": string;
                    "type": string;
                };
                "jobSummary": {
                    "type": string;
                    "description": string;
                };
                "jobTitleSnippet": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CreateCompanyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "company": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "LatLng": {
            "properties": {
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DeviceInfo": {
            "description": string;
            "type": string;
            "properties": {
                "deviceType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Money": {
            "properties": {
                "currencyCode": {
                    "type": string;
                    "description": string;
                };
                "nanos": {
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
            "description": string;
            "type": string;
        };
        "LocationFilter": {
            "description": string;
            "type": string;
            "properties": {
                "telecommutePreference": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "latLng": {
                    "$ref": string;
                    "description": string;
                };
                "address": {
                    "description": string;
                    "type": string;
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
            "id": string;
            "description": string;
            "type": string;
        };
        "NumericBucketingOption": {
            "description": string;
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
        };
        "CreateJobRequest": {
            "description": string;
            "type": string;
            "properties": {
                "job": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "SpellingCorrection": {
            "properties": {
                "corrected": {
                    "description": string;
                    "type": string;
                };
                "correctedText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Empty": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "RequestMetadata": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "sessionId": {
                    "type": string;
                    "description": string;
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
        };
        "CompletionResult": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "imageUri": {
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
        "TimestampRange": {
            "description": string;
            "type": string;
            "properties": {
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
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
                "https://www.googleapis.com/auth/jobs": {
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
        "projects": {
            "methods": {
                "complete": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "description": string;
                            "type": string;
                            "location": string;
                            "enum": string[];
                        };
                        "scope": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "companyName": {
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
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
            };
            "resources": {
                "companies": {
                    "methods": {
                        "delete": {
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "get": {
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
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
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
                                "requireOpenJobs": {
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
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
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
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
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
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "jobView": {
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                };
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "create": {
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
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                        };
                        "batchDelete": {
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
                        "search": {
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                        "searchForAlert": {
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
    };
    "parameters": {
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
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
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
        };
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
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
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
};
export default _default;
//# sourceMappingURL=jobs-v3.d.ts.map