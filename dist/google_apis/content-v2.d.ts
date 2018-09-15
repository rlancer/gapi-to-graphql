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
                "https://www.googleapis.com/auth/content": {
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
                "adultContent": {
                    "type": string;
                    "description": string;
                };
                "adwordsLinks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "businessInformation": {
                    "$ref": string;
                    "description": string;
                };
                "googleMyBusinessLink": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "reviewsUrl": {
                    "type": string;
                    "description": string;
                };
                "sellerId": {
                    "type": string;
                    "description": string;
                };
                "users": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "websiteUrl": {
                    "type": string;
                    "description": string;
                };
                "youtubeChannelLinks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccountAddress": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "streetAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountAdwordsLink": {
            "id": string;
            "type": string;
            "properties": {
                "adwordsId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountBusinessInformation": {
            "id": string;
            "type": string;
            "properties": {
                "address": {
                    "$ref": string;
                    "description": string;
                };
                "customerService": {
                    "$ref": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountCustomerService": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountGoogleMyBusinessLink": {
            "id": string;
            "type": string;
            "properties": {
                "gmbEmail": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountIdentifier": {
            "id": string;
            "type": string;
            "properties": {
                "aggregatorId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "accountLevelIssues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dataQualityIssues": {
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
                "products": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "websiteClaimed": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountStatusAccountLevelIssue": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "type": string;
                    "description": string;
                };
                "detail": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountStatusDataQualityIssue": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "type": string;
                    "description": string;
                };
                "detail": {
                    "type": string;
                    "description": string;
                };
                "displayedValue": {
                    "type": string;
                    "description": string;
                };
                "exampleItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "lastChecked": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "numItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                };
                "submittedValue": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountStatusExampleItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "itemId": {
                    "type": string;
                    "description": string;
                };
                "link": {
                    "type": string;
                    "description": string;
                };
                "submittedValue": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "valueOnLandingPage": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountStatusItemLevelIssue": {
            "id": string;
            "type": string;
            "properties": {
                "attributeName": {
                    "type": string;
                    "description": string;
                };
                "code": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "detail": {
                    "type": string;
                    "description": string;
                };
                "documentation": {
                    "type": string;
                    "description": string;
                };
                "numItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resolution": {
                    "type": string;
                    "description": string;
                };
                "servability": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountStatusProducts": {
            "id": string;
            "type": string;
            "properties": {
                "channel": {
                    "type": string;
                    "description": string;
                };
                "country": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "type": string;
                    "description": string;
                };
                "itemLevelIssues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "statistics": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "AccountStatusStatistics": {
            "id": string;
            "type": string;
            "properties": {
                "active": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "disapproved": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expiring": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pending": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountTax": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "rules": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccountTaxTaxRule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "locationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "ratePercent": {
                    "type": string;
                    "description": string;
                };
                "shippingTaxed": {
                    "type": string;
                    "description": string;
                };
                "useGlobalRate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountUser": {
            "id": string;
            "type": string;
            "properties": {
                "admin": {
                    "type": string;
                    "description": string;
                };
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountYouTubeChannelLink": {
            "id": string;
            "type": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountsAuthInfoResponse": {
            "id": string;
            "type": string;
            "properties": {
                "accountIdentifiers": {
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
        "AccountsClaimWebsiteResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "AccountsCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccountsCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "account": {
                    "$ref": string;
                    "description": string;
                };
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "force": {
                    "type": string;
                    "description": string;
                };
                "linkRequest": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                    "description": string;
                };
                "overwrite": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountsCustomBatchRequestEntryLinkRequest": {
            "id": string;
            "type": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "linkType": {
                    "type": string;
                    "description": string;
                };
                "linkedAccountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountsCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "AccountsCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "account": {
                    "$ref": string;
                    "description": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "linkStatus": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountsLinkRequest": {
            "id": string;
            "type": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "linkType": {
                    "type": string;
                    "description": string;
                };
                "linkedAccountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountsLinkResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "AccountsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccountstatusesCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccountstatusesCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "destinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountstatusesCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "AccountstatusesCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountStatus": {
                    "$ref": string;
                    "description": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "AccountstatusesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccounttaxCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AccounttaxCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "accountTax": {
                    "$ref": string;
                    "description": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
            };
        };
        "AccounttaxCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "AccounttaxCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountTax": {
                    "$ref": string;
                    "description": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
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
        "AccounttaxListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Amount": {
            "id": string;
            "type": string;
            "properties": {
                "pretax": {
                    "$ref": string;
                    "description": string;
                };
                "tax": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CarrierRate": {
            "id": string;
            "type": string;
            "properties": {
                "carrierName": {
                    "type": string;
                    "description": string;
                };
                "carrierService": {
                    "type": string;
                    "description": string;
                };
                "flatAdjustment": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "originPostalCode": {
                    "type": string;
                    "description": string;
                };
                "percentageAdjustment": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CarriersCarrier": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "services": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "CutoffTime": {
            "id": string;
            "type": string;
            "properties": {
                "hour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minute": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timezone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Datafeed": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attributeLanguage": {
                    "type": string;
                    "description": string;
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                };
                "contentType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "fetchSchedule": {
                    "$ref": string;
                    "description": string;
                };
                "fileName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "format": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "intendedDestinations": {
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
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                };
                "targets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DatafeedFetchSchedule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dayOfMonth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fetchUrl": {
                    "type": string;
                    "description": string;
                };
                "hour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minuteOfHour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "paused": {
                    "type": string;
                    "description": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
                "username": {
                    "type": string;
                    "description": string;
                };
                "weekday": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatafeedFormat": {
            "id": string;
            "type": string;
            "properties": {
                "columnDelimiter": {
                    "type": string;
                    "description": string;
                };
                "fileEncoding": {
                    "type": string;
                    "description": string;
                };
                "quotingMode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatafeedStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "datafeedId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "itemsTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "itemsValid": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "lastUploadDate": {
                    "type": string;
                    "description": string;
                };
                "processingStatus": {
                    "type": string;
                    "description": string;
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DatafeedStatusError": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                };
                "count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "examples": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatafeedStatusExample": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "itemId": {
                    "type": string;
                    "description": string;
                };
                "lineNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatafeedTarget": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "excludedDestinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "includedDestinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "language": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatafeedsCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DatafeedsCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "datafeed": {
                    "$ref": string;
                    "description": string;
                };
                "datafeedId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
            };
        };
        "DatafeedsCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "DatafeedsCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "datafeed": {
                    "$ref": string;
                    "description": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DatafeedsFetchNowResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "DatafeedsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DatafeedstatusesCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DatafeedstatusesCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "country": {
                    "type": string;
                    "description": string;
                };
                "datafeedId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
            };
        };
        "DatafeedstatusesCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "DatafeedstatusesCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "datafeedStatus": {
                    "$ref": string;
                    "description": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DatafeedstatusesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DeliveryTime": {
            "id": string;
            "type": string;
            "properties": {
                "cutoffTime": {
                    "$ref": string;
                    "description": string;
                };
                "holidayCutoffs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "maxHandlingTimeInDays": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxTransitTimeInDays": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minHandlingTimeInDays": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minTransitTimeInDays": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Error": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "domain": {
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
        "Errors": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GmbAccounts": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "gmbAccounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GmbAccountsGmbAccount": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "listingCount": {
                    "type": string;
                    "description": string;
                    "format": string;
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
        "Headers": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "locations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "numberOfItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "postalCodeGroupNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "prices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "weights": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "HolidayCutoff": {
            "id": string;
            "type": string;
            "properties": {
                "deadlineDate": {
                    "type": string;
                    "description": string;
                };
                "deadlineHour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deadlineTimezone": {
                    "type": string;
                    "description": string;
                };
                "holidayId": {
                    "type": string;
                    "description": string;
                };
                "visibleFromDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "HolidaysHoliday": {
            "id": string;
            "type": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "date": {
                    "type": string;
                    "description": string;
                };
                "deliveryGuaranteeDate": {
                    "type": string;
                    "description": string;
                };
                "deliveryGuaranteeHour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Installment": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "months": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Inventory": {
            "id": string;
            "type": string;
            "properties": {
                "availability": {
                    "type": string;
                    "description": string;
                };
                "installment": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "loyaltyPoints": {
                    "$ref": string;
                    "description": string;
                };
                "pickup": {
                    "$ref": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "salePrice": {
                    "$ref": string;
                    "description": string;
                };
                "salePriceEffectiveDate": {
                    "type": string;
                    "description": string;
                };
                "sellOnGoogleQuantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "InventoryCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "InventoryCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inventory": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InventoryCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "InventoryCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
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
        "InventoryPickup": {
            "id": string;
            "type": string;
            "properties": {
                "pickupMethod": {
                    "type": string;
                    "description": string;
                };
                "pickupSla": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InventorySetRequest": {
            "id": string;
            "type": string;
            "properties": {
                "availability": {
                    "type": string;
                    "description": string;
                };
                "installment": {
                    "$ref": string;
                    "description": string;
                };
                "loyaltyPoints": {
                    "$ref": string;
                    "description": string;
                };
                "pickup": {
                    "$ref": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "salePrice": {
                    "$ref": string;
                    "description": string;
                };
                "salePriceEffectiveDate": {
                    "type": string;
                    "description": string;
                };
                "sellOnGoogleQuantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "InventorySetResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "InvoiceSummary": {
            "id": string;
            "type": string;
            "properties": {
                "additionalChargeSummaries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customerBalance": {
                    "$ref": string;
                    "description": string;
                };
                "googleBalance": {
                    "$ref": string;
                    "description": string;
                };
                "merchantBalance": {
                    "$ref": string;
                    "description": string;
                };
                "productTotal": {
                    "$ref": string;
                    "description": string;
                };
                "promotionSummaries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "InvoiceSummaryAdditionalChargeSummary": {
            "id": string;
            "type": string;
            "properties": {
                "totalAmount": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaAboutPageSettings": {
            "id": string;
            "type": string;
            "properties": {
                "status": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaCountrySettings": {
            "id": string;
            "type": string;
            "properties": {
                "about": {
                    "$ref": string;
                    "description": string;
                };
                "country": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "hostedLocalStorefrontActive": {
                    "type": string;
                    "description": string;
                };
                "inventory": {
                    "$ref": string;
                    "description": string;
                };
                "onDisplayToOrder": {
                    "$ref": string;
                    "description": string;
                };
                "posDataProvider": {
                    "$ref": string;
                    "description": string;
                };
                "storePickupActive": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaInventorySettings": {
            "id": string;
            "type": string;
            "properties": {
                "inventoryVerificationContactEmail": {
                    "type": string;
                    "description": string;
                };
                "inventoryVerificationContactName": {
                    "type": string;
                    "description": string;
                };
                "inventoryVerificationContactStatus": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaOnDisplayToOrderSettings": {
            "id": string;
            "type": string;
            "properties": {
                "shippingCostPolicyUrl": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaPosDataProvider": {
            "id": string;
            "type": string;
            "properties": {
                "posDataProviderId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "posExternalAccountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiaSettings": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "countrySettings": {
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
        "LiasettingsCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LiasettingsCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "contactEmail": {
                    "type": string;
                    "description": string;
                };
                "contactName": {
                    "type": string;
                    "description": string;
                };
                "country": {
                    "type": string;
                    "description": string;
                };
                "gmbEmail": {
                    "type": string;
                    "description": string;
                };
                "liaSettings": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
                "posDataProviderId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "posExternalAccountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiasettingsCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "LiasettingsCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "gmbAccounts": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "liaSettings": {
                    "$ref": string;
                    "description": string;
                };
                "posDataProviders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LiasettingsGetAccessibleGmbAccountsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "gmbAccounts": {
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
        "LiasettingsListPosDataProvidersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "posDataProviders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LiasettingsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LiasettingsRequestGmbAccessResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "LiasettingsRequestInventoryVerificationResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "LiasettingsSetInventoryVerificationContactResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "LiasettingsSetPosDataProviderResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "LocationIdSet": {
            "id": string;
            "type": string;
            "properties": {
                "locationIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "LoyaltyPoints": {
            "id": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "pointsValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "ratio": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Order": {
            "id": string;
            "type": string;
            "properties": {
                "acknowledged": {
                    "type": string;
                    "description": string;
                };
                "channelType": {
                    "type": string;
                    "description": string;
                };
                "customer": {
                    "$ref": string;
                    "description": string;
                };
                "deliveryDetails": {
                    "$ref": string;
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
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "merchantId": {
                    "type": string;
                    "format": string;
                };
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "netAmount": {
                    "$ref": string;
                    "description": string;
                };
                "paymentMethod": {
                    "$ref": string;
                    "description": string;
                };
                "paymentStatus": {
                    "type": string;
                    "description": string;
                };
                "placedDate": {
                    "type": string;
                    "description": string;
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "refunds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingCost": {
                    "$ref": string;
                    "description": string;
                };
                "shippingCostTax": {
                    "$ref": string;
                    "description": string;
                };
                "shippingOption": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderAddress": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "fullAddress": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "isPostOfficeBox": {
                    "type": string;
                    "description": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "recipientName": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "streetAddress": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "OrderCancellation": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderCustomer": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "marketingRightsInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrderCustomerMarketingRightsInfo": {
            "id": string;
            "type": string;
            "properties": {
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                };
                "marketingEmailAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderDeliveryDetails": {
            "id": string;
            "type": string;
            "properties": {
                "address": {
                    "$ref": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cancellations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "quantityCanceled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityDelivered": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityOrdered": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityPending": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityReturned": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityShipped": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "returnInfo": {
                    "$ref": string;
                    "description": string;
                };
                "returns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "tax": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrderLineItemProduct": {
            "id": string;
            "type": string;
            "properties": {
                "brand": {
                    "type": string;
                    "description": string;
                };
                "channel": {
                    "type": string;
                    "description": string;
                };
                "condition": {
                    "type": string;
                    "description": string;
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "imageLink": {
                    "type": string;
                    "description": string;
                };
                "itemGroupId": {
                    "type": string;
                    "description": string;
                };
                "mpn": {
                    "type": string;
                    "description": string;
                };
                "offerId": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "shownImage": {
                    "type": string;
                    "description": string;
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "variantAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrderLineItemProductVariantAttribute": {
            "id": string;
            "type": string;
            "properties": {
                "dimension": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderLineItemReturnInfo": {
            "id": string;
            "type": string;
            "properties": {
                "daysToReturn": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "isReturnable": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "policyUrl": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderLineItemShippingDetails": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "method": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderLineItemShippingDetailsMethod": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "maxDaysInTransit": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "methodName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "minDaysInTransit": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderMerchantProvidedAnnotation": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPaymentMethod": {
            "id": string;
            "type": string;
            "properties": {
                "billingAddress": {
                    "$ref": string;
                    "description": string;
                };
                "expirationMonth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expirationYear": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastFourDigits": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPromotion": {
            "id": string;
            "type": string;
            "properties": {
                "benefits": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "effectiveDates": {
                    "type": string;
                    "description": string;
                };
                "genericRedemptionCode": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "longTitle": {
                    "type": string;
                    "description": string;
                };
                "productApplicability": {
                    "type": string;
                    "description": string;
                };
                "redemptionChannel": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPromotionBenefit": {
            "id": string;
            "type": string;
            "properties": {
                "discount": {
                    "$ref": string;
                    "description": string;
                };
                "offerIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "subType": {
                    "type": string;
                    "description": string;
                };
                "taxImpact": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderRefund": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderReportDisbursement": {
            "id": string;
            "type": string;
            "properties": {
                "disbursementAmount": {
                    "$ref": string;
                    "description": string;
                };
                "disbursementCreationDate": {
                    "type": string;
                    "description": string;
                };
                "disbursementDate": {
                    "type": string;
                    "description": string;
                };
                "disbursementId": {
                    "type": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OrderReportTransaction": {
            "id": string;
            "type": string;
            "properties": {
                "disbursementAmount": {
                    "$ref": string;
                    "description": string;
                };
                "disbursementCreationDate": {
                    "type": string;
                    "description": string;
                };
                "disbursementDate": {
                    "type": string;
                    "description": string;
                };
                "disbursementId": {
                    "type": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
                "productAmount": {
                    "$ref": string;
                    "description": string;
                };
                "transactionDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderReturn": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderShipment": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderShipmentLineItemShipment": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OrderinvoicesCreateChargeInvoiceRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "invoiceSummary": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderinvoicesCreateChargeInvoiceResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderinvoicesCreateRefundInvoiceRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "refundOnlyOption": {
                    "$ref": string;
                    "description": string;
                };
                "returnOption": {
                    "$ref": string;
                    "description": string;
                };
                "shipmentInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrderinvoicesCreateRefundInvoiceResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthApprovedRequest": {
            "id": string;
            "type": string;
            "properties": {
                "authAmountPretax": {
                    "$ref": string;
                };
                "authAmountTax": {
                    "$ref": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthApprovedResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderpaymentsNotifyAuthDeclinedRequest": {
            "id": string;
            "type": string;
            "properties": {
                "declineReason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthDeclinedResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderpaymentsNotifyChargeRequest": {
            "id": string;
            "type": string;
            "properties": {
                "chargeState": {
                    "type": string;
                    "description": string;
                };
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyChargeResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderpaymentsNotifyRefundRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "refundState": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyRefundResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrderreportsListDisbursementsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "disbursements": {
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
        "OrderreportsListTransactionsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "transactions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersAcknowledgeRequest": {
            "id": string;
            "type": string;
            "properties": {
                "operationId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersAcknowledgeResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersAdvanceTestOrderResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCancelLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersCancelRequest": {
            "id": string;
            "type": string;
            "properties": {
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersCancelTestOrderByCustomerRequest": {
            "id": string;
            "type": string;
            "properties": {
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelTestOrderByCustomerResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCreateTestOrderRequest": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "templateName": {
                    "type": string;
                    "description": string;
                };
                "testOrder": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersCreateTestOrderResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cancel": {
                    "$ref": string;
                    "description": string;
                };
                "cancelLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "inStoreRefundLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "method": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
                "refund": {
                    "$ref": string;
                    "description": string;
                };
                "rejectReturnLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "returnLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "returnRefundLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "setLineItemMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "shipLineItems": {
                    "$ref": string;
                    "description": string;
                };
                "updateLineItemShippingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "updateShipment": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryCancel": {
            "id": string;
            "type": string;
            "properties": {
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryCancelLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryInStoreRefundLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryRefund": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryRejectReturnLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryReturnLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryReturnRefundLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntrySetLineItemMetadata": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryShipLineItems": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "shipmentInfos": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryUpdateShipment": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "OrdersCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "order": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersGetByMerchantOrderIdResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "order": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersGetTestOrderTemplateResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "template": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersInStoreRefundLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersInStoreRefundLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersRefundRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersRefundResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersRejectReturnLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersRejectReturnLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersReturnLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersReturnLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersReturnRefundLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersReturnRefundLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersSetLineItemMetadataRequest": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersSetLineItemMetadataResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersShipLineItemsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "shipmentInfos": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersShipLineItemsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersUpdateLineItemShippingDetailsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateLineItemShippingDetailsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersUpdateMerchantOrderIdRequest": {
            "id": string;
            "type": string;
            "properties": {
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateMerchantOrderIdResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "OrdersUpdateShipmentRequest": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateShipmentResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
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
        "PosCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PosCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inventory": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
                "sale": {
                    "$ref": string;
                    "description": string;
                };
                "store": {
                    "$ref": string;
                    "description": string;
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                };
                "targetMerchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PosCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "PosCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "inventory": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "sale": {
                    "$ref": string;
                    "description": string;
                };
                "store": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PosDataProviders": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "posDataProviders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PosDataProvidersPosDataProvider": {
            "id": string;
            "type": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "providerId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PosInventory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosInventoryRequest": {
            "id": string;
            "type": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosInventoryResponse": {
            "id": string;
            "type": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PosSale": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "saleId": {
                    "type": string;
                    "description": string;
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosSaleRequest": {
            "id": string;
            "type": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "saleId": {
                    "type": string;
                    "description": string;
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosSaleResponse": {
            "id": string;
            "type": string;
            "properties": {
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "saleId": {
                    "type": string;
                    "description": string;
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PosStore": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "storeAddress": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "storeCode": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PostalCodeGroup": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "postalCodeRanges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PostalCodeRange": {
            "id": string;
            "type": string;
            "properties": {
                "postalCodeRangeBegin": {
                    "type": string;
                    "description": string;
                };
                "postalCodeRangeEnd": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Price": {
            "id": string;
            "type": string;
            "properties": {
                "currency": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Product": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "additionalImageLinks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "additionalProductTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "adult": {
                    "type": string;
                    "description": string;
                };
                "adwordsGrouping": {
                    "type": string;
                    "description": string;
                };
                "adwordsLabels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "adwordsRedirect": {
                    "type": string;
                    "description": string;
                };
                "ageGroup": {
                    "type": string;
                    "description": string;
                };
                "aspects": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "availability": {
                    "type": string;
                    "description": string;
                };
                "availabilityDate": {
                    "type": string;
                    "description": string;
                };
                "brand": {
                    "type": string;
                    "description": string;
                };
                "channel": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "color": {
                    "type": string;
                    "description": string;
                };
                "condition": {
                    "type": string;
                    "description": string;
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "costOfGoodsSold": {
                    "$ref": string;
                    "description": string;
                };
                "customAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customLabel0": {
                    "type": string;
                    "description": string;
                };
                "customLabel1": {
                    "type": string;
                    "description": string;
                };
                "customLabel2": {
                    "type": string;
                    "description": string;
                };
                "customLabel3": {
                    "type": string;
                    "description": string;
                };
                "customLabel4": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "destinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "displayAdsId": {
                    "type": string;
                    "description": string;
                };
                "displayAdsLink": {
                    "type": string;
                    "description": string;
                };
                "displayAdsSimilarIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "displayAdsTitle": {
                    "type": string;
                    "description": string;
                };
                "displayAdsValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "energyEfficiencyClass": {
                    "type": string;
                    "description": string;
                };
                "expirationDate": {
                    "type": string;
                    "description": string;
                };
                "gender": {
                    "type": string;
                    "description": string;
                };
                "googleProductCategory": {
                    "type": string;
                    "description": string;
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "identifierExists": {
                    "type": string;
                    "description": string;
                };
                "imageLink": {
                    "type": string;
                    "description": string;
                };
                "installment": {
                    "$ref": string;
                    "description": string;
                };
                "isBundle": {
                    "type": string;
                    "description": string;
                };
                "itemGroupId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "link": {
                    "type": string;
                    "description": string;
                };
                "loyaltyPoints": {
                    "$ref": string;
                    "description": string;
                };
                "material": {
                    "type": string;
                    "description": string;
                };
                "maxEnergyEfficiencyClass": {
                    "type": string;
                    "description": string;
                };
                "maxHandlingTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minEnergyEfficiencyClass": {
                    "type": string;
                    "description": string;
                };
                "minHandlingTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "mobileLink": {
                    "type": string;
                    "description": string;
                };
                "mpn": {
                    "type": string;
                    "description": string;
                };
                "multipack": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "offerId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "onlineOnly": {
                    "type": string;
                    "description": string;
                };
                "pattern": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "productType": {
                    "type": string;
                    "description": string;
                };
                "promotionIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "salePrice": {
                    "$ref": string;
                    "description": string;
                };
                "salePriceEffectiveDate": {
                    "type": string;
                    "description": string;
                };
                "sellOnGoogleQuantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "shipping": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingHeight": {
                    "$ref": string;
                    "description": string;
                };
                "shippingLabel": {
                    "type": string;
                    "description": string;
                };
                "shippingLength": {
                    "$ref": string;
                    "description": string;
                };
                "shippingWeight": {
                    "$ref": string;
                    "description": string;
                };
                "shippingWidth": {
                    "$ref": string;
                    "description": string;
                };
                "sizeSystem": {
                    "type": string;
                    "description": string;
                };
                "sizeType": {
                    "type": string;
                    "description": string;
                };
                "sizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "source": {
                    "type": string;
                    "description": string;
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "taxes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "unitPricingBaseMeasure": {
                    "$ref": string;
                    "description": string;
                };
                "unitPricingMeasure": {
                    "$ref": string;
                    "description": string;
                };
                "validatedDestinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ProductAspect": {
            "id": string;
            "type": string;
            "properties": {
                "aspectName": {
                    "type": string;
                    "description": string;
                };
                "destinationName": {
                    "type": string;
                    "description": string;
                };
                "intention": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductCustomAttribute": {
            "id": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "unit": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductCustomGroup": {
            "id": string;
            "type": string;
            "properties": {
                "attributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductDestination": {
            "id": string;
            "type": string;
            "properties": {
                "destinationName": {
                    "type": string;
                    "description": string;
                };
                "intention": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductShipping": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "locationGroupName": {
                    "type": string;
                    "description": string;
                };
                "locationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "service": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductShippingDimension": {
            "id": string;
            "type": string;
            "properties": {
                "unit": {
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
        "ProductShippingWeight": {
            "id": string;
            "type": string;
            "properties": {
                "unit": {
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
        "ProductStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "dataQualityIssues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "destinationStatuses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "googleExpirationDate": {
                    "type": string;
                    "description": string;
                };
                "itemLevelIssues": {
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
                "lastUpdateDate": {
                    "type": string;
                    "description": string;
                };
                "link": {
                    "type": string;
                    "description": string;
                };
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductStatusDataQualityIssue": {
            "id": string;
            "type": string;
            "properties": {
                "destination": {
                    "type": string;
                    "description": string;
                };
                "detail": {
                    "type": string;
                    "description": string;
                };
                "fetchStatus": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                };
                "valueOnLandingPage": {
                    "type": string;
                    "description": string;
                };
                "valueProvided": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductStatusDestinationStatus": {
            "id": string;
            "type": string;
            "properties": {
                "approvalPending": {
                    "type": string;
                    "description": string;
                };
                "approvalStatus": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "type": string;
                    "description": string;
                };
                "intention": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductStatusItemLevelIssue": {
            "id": string;
            "type": string;
            "properties": {
                "attributeName": {
                    "type": string;
                    "description": string;
                };
                "code": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "destination": {
                    "type": string;
                    "description": string;
                };
                "detail": {
                    "type": string;
                    "description": string;
                };
                "documentation": {
                    "type": string;
                    "description": string;
                };
                "resolution": {
                    "type": string;
                    "description": string;
                };
                "servability": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductTax": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "locationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "rate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "taxShip": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductUnitPricingBaseMeasure": {
            "id": string;
            "type": string;
            "properties": {
                "unit": {
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
        "ProductUnitPricingMeasure": {
            "id": string;
            "type": string;
            "properties": {
                "unit": {
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
        "ProductsCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ProductsCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductsCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "ProductsCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "product": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ProductsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ProductstatusesCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ProductstatusesCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "destinations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "includeAttributes": {
                    "type": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductstatusesCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "ProductstatusesCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "productStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ProductstatusesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Promotion": {
            "id": string;
            "type": string;
            "properties": {
                "promotionAmount": {
                    "$ref": string;
                    "description": string;
                };
                "promotionId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RateGroup": {
            "id": string;
            "type": string;
            "properties": {
                "applicableShippingLabels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "carrierRates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mainTable": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "singleValue": {
                    "$ref": string;
                    "description": string;
                };
                "subtables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Row": {
            "id": string;
            "type": string;
            "properties": {
                "cells": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Service": {
            "id": string;
            "type": string;
            "properties": {
                "active": {
                    "type": string;
                    "description": string;
                };
                "currency": {
                    "type": string;
                    "description": string;
                };
                "deliveryCountry": {
                    "type": string;
                    "description": string;
                };
                "deliveryTime": {
                    "$ref": string;
                    "description": string;
                };
                "eligibility": {
                    "type": string;
                    "description": string;
                };
                "minimumOrderValue": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "rateGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ShipmentInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceSummary": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ShipmentInvoiceLineItemInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipmentUnitIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "unitInvoice": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ShippingSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "postalCodeGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "services": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ShippingsettingsCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ShippingsettingsCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "method": {
                    "type": string;
                };
                "shippingSettings": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ShippingsettingsCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
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
        "ShippingsettingsCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "shippingSettings": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ShippingsettingsGetSupportedCarriersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "carriers": {
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
        "ShippingsettingsGetSupportedHolidaysResponse": {
            "id": string;
            "type": string;
            "properties": {
                "holidays": {
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
        "ShippingsettingsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Table": {
            "id": string;
            "type": string;
            "properties": {
                "columnHeaders": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "rowHeaders": {
                    "$ref": string;
                    "description": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TestOrder": {
            "id": string;
            "type": string;
            "properties": {
                "customer": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "enableOrderinvoices": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "notificationMode": {
                    "type": string;
                    "description": string;
                };
                "paymentMethod": {
                    "$ref": string;
                    "description": string;
                };
                "predefinedDeliveryAddress": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingCost": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingCostTax": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingOption": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "TestOrderCustomer": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "marketingRightsInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestOrderCustomerMarketingRightsInfo": {
            "id": string;
            "type": string;
            "properties": {
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TestOrderLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "quantityOrdered": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "returnInfo": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingDetails": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "unitTax": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "TestOrderLineItemProduct": {
            "id": string;
            "type": string;
            "properties": {
                "brand": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "channel": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "condition": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "imageLink": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "itemGroupId": {
                    "type": string;
                    "description": string;
                };
                "mpn": {
                    "type": string;
                    "description": string;
                };
                "offerId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "variantAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TestOrderPaymentMethod": {
            "id": string;
            "type": string;
            "properties": {
                "expirationMonth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expirationYear": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastFourDigits": {
                    "type": string;
                    "description": string;
                };
                "predefinedBillingAddress": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UnitInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "additionalCharges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "unitPricePretax": {
                    "$ref": string;
                    "description": string;
                };
                "unitPriceTaxes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UnitInvoiceAdditionalCharge": {
            "id": string;
            "type": string;
            "properties": {
                "additionalChargeAmount": {
                    "$ref": string;
                    "description": string;
                };
                "additionalChargePromotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UnitInvoiceTaxLine": {
            "id": string;
            "type": string;
            "properties": {
                "taxAmount": {
                    "$ref": string;
                    "description": string;
                };
                "taxName": {
                    "type": string;
                    "description": string;
                };
                "taxType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Value": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "carrierRateName": {
                    "type": string;
                    "description": string;
                };
                "flatRate": {
                    "$ref": string;
                    "description": string;
                };
                "noShipping": {
                    "type": string;
                    "description": string;
                };
                "pricePercentage": {
                    "type": string;
                    "description": string;
                };
                "subtableName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Weight": {
            "id": string;
            "type": string;
            "properties": {
                "unit": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "accounts": {
            "methods": {
                "authinfo": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "claimwebsite": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "overwrite": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "force": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "merchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "link": {
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
                        "merchantId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
        "accountstatuses": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "request": {
                        "$ref": string;
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "destinations": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "merchantId": {
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
                    "parameters": {
                        "destinations": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
        "accounttax": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
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
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
        "datafeeds": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "fetchnow": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
        "datafeedstatuses": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "request": {
                        "$ref": string;
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
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "datafeedId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
        "inventory": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "set": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "productId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "storeCode": {
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
        "liasettings": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "getaccessiblegmbaccounts": {
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
                        "merchantId": {
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
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listposdataproviders": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "requestgmbaccess": {
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
                        "gmbEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "requestinventoryverification": {
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
                        "country": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "merchantId": {
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
                "setinventoryverificationcontact": {
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
                        "contactEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "contactName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "setposdataprovider": {
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
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "posDataProviderId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "posExternalAccountId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
        "orderinvoices": {
            "methods": {
                "createchargeinvoice": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "createrefundinvoice": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
        "orderpayments": {
            "methods": {
                "notifyauthapproved": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "notifyauthdeclined": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "notifycharge": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "notifyrefund": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
        "orderreports": {
            "methods": {
                "listdisbursements": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "disbursementEndDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "disbursementStartDate": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listtransactions": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "disbursementEndDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "disbursementId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "disbursementStartDate": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
        "orders": {
            "methods": {
                "acknowledge": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "advancetestorder": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "cancel": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "cancellineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "canceltestorderbycustomer": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "createtestorder": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
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
                "custombatch": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "getbymerchantorderid": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantOrderId": {
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
                "gettestordertemplate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "templateName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "instorerefundlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                        "acknowledged": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placedDateEnd": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placedDateStart": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "statuses": {
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
                "refund": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "rejectreturnlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "returnlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "returnrefundlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "setlineitemmetadata": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "shiplineitems": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "updatelineitemshippingdetails": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "updatemerchantorderid": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
                "updateshipment": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
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
        "pos": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "storeCode": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "targetMerchantId": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "storeCode": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "targetMerchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "targetMerchantId": {
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
                "inventory": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "targetMerchantId": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "targetMerchantId": {
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
                "sale": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "targetMerchantId": {
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
        "products": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "productId": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "productId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "includeInvalidInsertedItems": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
        "productstatuses": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeAttributes": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
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
                        "destinations": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "includeAttributes": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "productId": {
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
                        "destinations": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "includeAttributes": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "includeInvalidInsertedItems": {
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
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
        "shippingsettings": {
            "methods": {
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
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
                "getsupportedcarriers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
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
                "getsupportedholidays": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
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
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
                        "dryRun": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
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
//# sourceMappingURL=content-v2.d.ts.map