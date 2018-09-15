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
                "https://www.googleapis.com/auth/adsense": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/adsense.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Account": {
            "id": string;
            "type": string;
            "properties": {
                "creation_time": {
                    "type": string;
                    "format": string;
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
                "name": {
                    "type": string;
                    "description": string;
                };
                "premium": {
                    "type": string;
                    "description": string;
                };
                "subAccounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timezone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Accounts": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "AdClient": {
            "id": string;
            "type": string;
            "properties": {
                "arcOptIn": {
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
                "productCode": {
                    "type": string;
                    "description": string;
                };
                "supportsReporting": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AdClients": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "AdCode": {
            "id": string;
            "type": string;
            "properties": {
                "adCode": {
                    "type": string;
                    "description": string;
                };
                "ampBody": {
                    "type": string;
                    "description": string;
                };
                "ampHead": {
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
        "AdStyle": {
            "id": string;
            "type": string;
            "properties": {
                "colors": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "background": {
                            "type": string;
                            "description": string;
                        };
                        "border": {
                            "type": string;
                            "description": string;
                        };
                        "text": {
                            "type": string;
                            "description": string;
                        };
                        "title": {
                            "type": string;
                            "description": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "corners": {
                    "type": string;
                    "description": string;
                };
                "font": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "family": {
                            "type": string;
                            "description": string;
                        };
                        "size": {
                            "type": string;
                            "description": string;
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
        "AdUnit": {
            "id": string;
            "type": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                };
                "contentAdsSettings": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "backupOption": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "color": {
                                    "type": string;
                                    "description": string;
                                };
                                "type": {
                                    "type": string;
                                    "description": string;
                                };
                                "url": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "size": {
                            "type": string;
                            "description": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "customStyle": {
                    "$ref": string;
                    "description": string;
                };
                "feedAdsSettings": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "adPosition": {
                            "type": string;
                            "description": string;
                        };
                        "frequency": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "minimumWordCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                        };
                    };
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
                "mobileContentAdsSettings": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "markupLanguage": {
                            "type": string;
                            "description": string;
                        };
                        "scriptingLanguage": {
                            "type": string;
                            "description": string;
                        };
                        "size": {
                            "type": string;
                            "description": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "savedStyleId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AdUnits": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "AdsenseReportsGenerateResponse": {
            "id": string;
            "type": string;
            "properties": {
                "averages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "endDate": {
                    "type": string;
                    "description": string;
                };
                "headers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "currency": {
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
                        "items": {
                            "type": string;
                        };
                    };
                };
                "startDate": {
                    "type": string;
                    "description": string;
                };
                "totalMatchedRows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totals": {
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
                        "type": string;
                    };
                };
            };
        };
        "Alert": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "isDismissible": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Alerts": {
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
        "CustomChannel": {
            "id": string;
            "type": string;
            "properties": {
                "code": {
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
                "name": {
                    "type": string;
                    "description": string;
                };
                "targetingInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "adsAppearOn": {
                            "type": string;
                            "description": string;
                        };
                        "description": {
                            "type": string;
                            "description": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                        };
                        "siteLanguage": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "CustomChannels": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "Metadata": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
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
        "Payment": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "paymentAmount": {
                    "type": string;
                    "description": string;
                };
                "paymentAmountCurrencyCode": {
                    "type": string;
                    "description": string;
                };
                "paymentDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Payments": {
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
        "ReportingMetadataEntry": {
            "id": string;
            "type": string;
            "properties": {
                "compatibleDimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "compatibleMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
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
                "requiredDimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "requiredMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "supportedProducts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "SavedAdStyle": {
            "id": string;
            "type": string;
            "properties": {
                "adStyle": {
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
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SavedAdStyles": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "SavedReport": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
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
            };
        };
        "SavedReports": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
        "UrlChannel": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "urlPattern": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UrlChannels": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tree": {
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
                            "minimum": string;
                            "maximum": string;
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
            "resources": {
                "adclients": {
                    "methods": {
                        "getAdCode": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adClientId": {
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
                                "accountId": {
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
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                };
                "adunits": {
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
                                    "location": string;
                                };
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adUnitId": {
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
                        "getAdCode": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adUnitId": {
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
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "includeInactive": {
                                    "type": string;
                                    "description": string;
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
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                    "resources": {
                        "customchannels": {
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
                                            "location": string;
                                        };
                                        "adClientId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "adUnitId": {
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
                "alerts": {
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
                                    "location": string;
                                };
                                "alertId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
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
                                    "location": string;
                                };
                                "locale": {
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
                "customchannels": {
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
                                    "location": string;
                                };
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customChannelId": {
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
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adClientId": {
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
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                    "resources": {
                        "adunits": {
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
                                            "location": string;
                                        };
                                        "adClientId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "customChannelId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "includeInactive": {
                                            "type": string;
                                            "description": string;
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
                "payments": {
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
                "reports": {
                    "methods": {
                        "generate": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "currency": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
                                    "location": string;
                                };
                                "dimension": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "endDate": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "pattern": string;
                                    "location": string;
                                };
                                "filter": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
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
                                "metric": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "sort": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "startDate": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "pattern": string;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "useTimezoneReporting": {
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
                            "supportsMediaDownload": boolean;
                        };
                    };
                    "resources": {
                        "saved": {
                            "methods": {
                                "generate": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "locale": {
                                            "type": string;
                                            "description": string;
                                            "pattern": string;
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
                                        "savedReportId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "startIndex": {
                                            "type": string;
                                            "description": string;
                                            "format": string;
                                            "minimum": string;
                                            "maximum": string;
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
                                        "accountId": {
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
                "savedadstyles": {
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
                                    "location": string;
                                };
                                "savedAdStyleId": {
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
                                "accountId": {
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
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                };
                "urlchannels": {
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
                                    "location": string;
                                };
                                "adClientId": {
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
        "adclients": {
            "methods": {
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
                            "minimum": string;
                            "maximum": string;
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
        "adunits": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "adClientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "adUnitId": {
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
                "getAdCode": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "adClientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "adUnitId": {
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
                        "adClientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeInactive": {
                            "type": string;
                            "description": string;
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
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "customchannels": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "adUnitId": {
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
        "alerts": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "alertId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "locale": {
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
        "customchannels": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "adClientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "customChannelId": {
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
                        "adClientId": {
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
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "adunits": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "adClientId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customChannelId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "includeInactive": {
                                    "type": string;
                                    "description": string;
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
        "metadata": {
            "resources": {
                "dimensions": {
                    "methods": {
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
                "metrics": {
                    "methods": {
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
            };
        };
        "payments": {
            "methods": {
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
        "reports": {
            "methods": {
                "generate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "currency": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "dimension": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "endDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filter": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "pattern": string;
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
                        "metric": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sort": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "startDate": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "useTimezoneReporting": {
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
                    "supportsMediaDownload": boolean;
                };
            };
            "resources": {
                "saved": {
                    "methods": {
                        "generate": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "pattern": string;
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
                                "savedReportId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
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
                                    "minimum": string;
                                    "maximum": string;
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
            };
        };
        "savedadstyles": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "savedAdStyleId": {
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
                            "minimum": string;
                            "maximum": string;
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
        "urlchannels": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "adClientId": {
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
//# sourceMappingURL=adsense-v1~4.d.ts.map