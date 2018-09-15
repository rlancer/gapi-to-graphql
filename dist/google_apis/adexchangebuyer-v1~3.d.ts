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
                "https://www.googleapis.com/auth/adexchange.buyer": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Account": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bidderLocation": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "maximumQps": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "region": {
                                "type": string;
                                "description": string;
                            };
                            "url": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "cookieMatchingNid": {
                    "type": string;
                    "description": string;
                };
                "cookieMatchingUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maximumActiveCreatives": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maximumTotalQps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numberActiveCreatives": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountsList": {
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
        "BillingInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "accountName": {
                    "type": string;
                    "description": string;
                };
                "billingId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "BillingInfoList": {
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
        "Budget": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "billingId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "budgetAmount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
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
            };
        };
        "Creative": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "HTMLSnippet": {
                    "type": string;
                    "description": string;
                };
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "advertiserName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "agencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "apiUploadTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "attribute": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "buyerCreativeId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "clickThroughUrl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "corrections": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "details": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "reason": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "disapprovalReasons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "details": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "reason": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "filteringReasons": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "date": {
                            "type": string;
                            "description": string;
                        };
                        "reasons": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "filteringCount": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                    "filteringStatus": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "impressionTrackingUrl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nativeAd": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "advertiser": {
                            "type": string;
                        };
                        "appIcon": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "body": {
                            "type": string;
                            "description": string;
                        };
                        "callToAction": {
                            "type": string;
                            "description": string;
                        };
                        "clickTrackingUrl": {
                            "type": string;
                            "description": string;
                        };
                        "headline": {
                            "type": string;
                            "description": string;
                        };
                        "image": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "impressionTrackingUrl": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "logo": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "price": {
                            "type": string;
                            "description": string;
                        };
                        "starRating": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "store": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "productCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "restrictedCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "sensitiveCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "vendorType": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoURL": {
                    "type": string;
                    "description": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "CreativesList": {
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
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DirectDeal": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiser": {
                    "type": string;
                    "description": string;
                };
                "allowsAlcohol": {
                    "type": string;
                    "description": string;
                };
                "buyerAccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
                    "type": string;
                    "description": string;
                };
                "dealTier": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fixedCpm": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "privateExchangeMinCpm": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "publisherBlocksOverriden": {
                    "type": string;
                    "description": string;
                };
                "sellerNetwork": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DirectDealsList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "directDeals": {
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
        "PerformanceReport": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bidRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "bidRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "calloutStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "cookieMatcherStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "creativeStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "filteredBidRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hostedMatchStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "inventoryMatchRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "latency50thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latency85thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latency95thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "noQuotaInRegion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "outOfQuota": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pixelMatchRequests": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pixelMatchResponses": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaConfiguredLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaThrottledLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "successfulRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "unsuccessfulRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PerformanceReportList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "performanceReport": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PretargetingConfig": {
            "id": string;
            "type": string;
            "properties": {
                "billingId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "configId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "configName": {
                    "type": string;
                    "description": string;
                };
                "creativeType": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "dimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "height": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "width": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "excludedContentLabels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedGeoCriteriaIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedPlacements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "token": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "excludedUserLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedVerticals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "geoCriteriaIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "isActive": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "mobileCarriers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "mobileDevices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "mobileOperatingSystemVersions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "placements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "token": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "platforms": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "supportedCreativeAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "userLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "vendorTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "verticals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
            };
        };
        "PretargetingConfigList": {
            "id": string;
            "type": string;
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
    };
    "resources": {
        "accounts": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
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
                        "id": {
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
                    "parameters": {
                        "id": {
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
            };
        };
        "billingInfo": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "budget": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
            };
        };
        "creatives": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "buyerCreativeId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "buyerCreativeId": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "statusFilter": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "directDeals": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "performanceReport": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "endDateTime": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startDateTime": {
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
        "pretargetingConfig": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                    "parameters": {
                        "accountId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
            };
        };
    };
};
export default _default;
//# sourceMappingURL=adexchangebuyer-v1~3.d.ts.map