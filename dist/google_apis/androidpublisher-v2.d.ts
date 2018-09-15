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
                "https://www.googleapis.com/auth/androidpublisher": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Apk": {
            "id": string;
            "type": string;
            "properties": {
                "binary": {
                    "$ref": string;
                    "description": string;
                };
                "versionCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ApkBinary": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "sha1": {
                    "type": string;
                    "description": string;
                };
                "sha256": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ApkListing": {
            "id": string;
            "type": string;
            "properties": {
                "language": {
                    "type": string;
                    "description": string;
                };
                "recentChanges": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ApkListingsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "listings": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ApksAddExternallyHostedRequest": {
            "id": string;
            "type": string;
            "properties": {
                "externallyHostedApk": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ApksAddExternallyHostedResponse": {
            "id": string;
            "type": string;
            "properties": {
                "externallyHostedApk": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ApksListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "apks": {
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
        "AppDetails": {
            "id": string;
            "type": string;
            "properties": {
                "contactEmail": {
                    "type": string;
                    "description": string;
                };
                "contactPhone": {
                    "type": string;
                    "description": string;
                };
                "contactWebsite": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AppEdit": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expiryTimeSeconds": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Bundle": {
            "id": string;
            "type": string;
            "properties": {
                "sha1": {
                    "type": string;
                    "description": string;
                };
                "sha256": {
                    "type": string;
                    "description": string;
                };
                "versionCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "BundlesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "bundles": {
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
        "Comment": {
            "id": string;
            "type": string;
            "properties": {
                "developerComment": {
                    "$ref": string;
                    "description": string;
                };
                "userComment": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DeobfuscationFile": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "symbolType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DeobfuscationFilesUploadResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deobfuscationFile": {
                    "$ref": string;
                };
            };
        };
        "DeveloperComment": {
            "id": string;
            "type": string;
            "properties": {
                "lastModified": {
                    "$ref": string;
                    "description": string;
                };
                "text": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DeviceMetadata": {
            "id": string;
            "type": string;
            "properties": {
                "cpuMake": {
                    "type": string;
                    "description": string;
                };
                "cpuModel": {
                    "type": string;
                    "description": string;
                };
                "deviceClass": {
                    "type": string;
                    "description": string;
                };
                "glEsVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "manufacturer": {
                    "type": string;
                    "description": string;
                };
                "nativePlatform": {
                    "type": string;
                    "description": string;
                };
                "productName": {
                    "type": string;
                    "description": string;
                };
                "ramMb": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "screenDensityDpi": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "screenHeightPx": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "screenWidthPx": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ExpansionFile": {
            "id": string;
            "type": string;
            "properties": {
                "fileSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "referencesVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ExpansionFilesUploadResponse": {
            "id": string;
            "type": string;
            "properties": {
                "expansionFile": {
                    "$ref": string;
                };
            };
        };
        "ExternallyHostedApk": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "applicationLabel": {
                    "type": string;
                    "description": string;
                };
                "certificateBase64s": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "externallyHostedUrl": {
                    "type": string;
                    "description": string;
                };
                "fileSha1Base64": {
                    "type": string;
                    "description": string;
                };
                "fileSha256Base64": {
                    "type": string;
                    "description": string;
                };
                "fileSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iconBase64": {
                    "type": string;
                    "description": string;
                };
                "maximumSdk": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minimumSdk": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nativeCodes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "packageName": {
                    "type": string;
                    "description": string;
                };
                "usesFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "usesPermissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "versionCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "versionName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ExternallyHostedApkUsesPermission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "maxSdkVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Image": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "sha1": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ImagesDeleteAllResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deleted": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ImagesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "images": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ImagesUploadResponse": {
            "id": string;
            "type": string;
            "properties": {
                "image": {
                    "$ref": string;
                };
            };
        };
        "InAppProduct": {
            "id": string;
            "type": string;
            "properties": {
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "defaultPrice": {
                    "$ref": string;
                    "description": string;
                };
                "gracePeriod": {
                    "type": string;
                    "description": string;
                };
                "listings": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "packageName": {
                    "type": string;
                    "description": string;
                };
                "prices": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "purchaseType": {
                    "type": string;
                    "description": string;
                };
                "season": {
                    "$ref": string;
                    "description": string;
                };
                "sku": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                };
                "subscriptionPeriod": {
                    "type": string;
                    "description": string;
                };
                "trialPeriod": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InAppProductListing": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                };
                "title": {
                    "type": string;
                };
            };
        };
        "InappproductsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "inappproduct": {
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
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
            };
        };
        "Listing": {
            "id": string;
            "type": string;
            "properties": {
                "fullDescription": {
                    "type": string;
                    "description": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "shortDescription": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "video": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListingsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "listings": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MonthDay": {
            "id": string;
            "type": string;
            "properties": {
                "day": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "month": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PageInfo": {
            "id": string;
            "type": string;
            "properties": {
                "resultPerPage": {
                    "type": string;
                    "format": string;
                };
                "startIndex": {
                    "type": string;
                    "format": string;
                };
                "totalResults": {
                    "type": string;
                    "format": string;
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
                "priceMicros": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProductPurchase": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "consumptionState": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "developerPayload": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
                "purchaseState": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "purchaseTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "purchaseType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Prorate": {
            "id": string;
            "type": string;
            "properties": {
                "defaultPrice": {
                    "$ref": string;
                    "description": string;
                };
                "start": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Review": {
            "id": string;
            "type": string;
            "properties": {
                "authorName": {
                    "type": string;
                    "description": string;
                };
                "comments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "reviewId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReviewReplyResult": {
            "id": string;
            "type": string;
            "properties": {
                "lastEdited": {
                    "$ref": string;
                    "description": string;
                };
                "replyText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReviewsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "pageInfo": {
                    "$ref": string;
                };
                "reviews": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "tokenPagination": {
                    "$ref": string;
                };
            };
        };
        "ReviewsReplyRequest": {
            "id": string;
            "type": string;
            "properties": {
                "replyText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReviewsReplyResponse": {
            "id": string;
            "type": string;
            "properties": {
                "result": {
                    "$ref": string;
                };
            };
        };
        "Season": {
            "id": string;
            "type": string;
            "properties": {
                "end": {
                    "$ref": string;
                    "description": string;
                };
                "prorations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "start": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SubscriptionCancelSurveyResult": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cancelSurveyReason": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userInputCancelReason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SubscriptionDeferralInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "desiredExpiryTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expectedExpiryTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SubscriptionPriceChange": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "newPrice": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SubscriptionPurchase": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoRenewing": {
                    "type": string;
                    "description": string;
                };
                "cancelReason": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cancelSurveyResult": {
                    "$ref": string;
                    "description": string;
                };
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "developerPayload": {
                    "type": string;
                    "description": string;
                };
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "expiryTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "familyName": {
                    "type": string;
                    "description": string;
                };
                "givenName": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "linkedPurchaseToken": {
                    "type": string;
                    "description": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
                "paymentState": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "priceAmountMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "priceChange": {
                    "$ref": string;
                    "description": string;
                };
                "priceCurrencyCode": {
                    "type": string;
                    "description": string;
                };
                "profileId": {
                    "type": string;
                    "description": string;
                };
                "profileName": {
                    "type": string;
                    "description": string;
                };
                "purchaseType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userCancellationTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SubscriptionPurchasesDeferRequest": {
            "id": string;
            "type": string;
            "properties": {
                "deferralInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SubscriptionPurchasesDeferResponse": {
            "id": string;
            "type": string;
            "properties": {
                "newExpiryTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Testers": {
            "id": string;
            "type": string;
            "properties": {
                "googleGroups": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "googlePlusCommunities": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Timestamp": {
            "id": string;
            "type": string;
            "properties": {
                "nanos": {
                    "type": string;
                    "format": string;
                };
                "seconds": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "TokenPagination": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                };
                "previousPageToken": {
                    "type": string;
                };
            };
        };
        "Track": {
            "id": string;
            "type": string;
            "properties": {
                "track": {
                    "type": string;
                    "description": string;
                };
                "userFraction": {
                    "type": string;
                    "format": string;
                };
                "versionCodes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
            };
        };
        "TracksListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "tracks": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UserComment": {
            "id": string;
            "type": string;
            "properties": {
                "androidOsVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "appVersionCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "appVersionName": {
                    "type": string;
                    "description": string;
                };
                "device": {
                    "type": string;
                    "description": string;
                };
                "deviceMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "lastModified": {
                    "$ref": string;
                    "description": string;
                };
                "originalText": {
                    "type": string;
                    "description": string;
                };
                "reviewerLanguage": {
                    "type": string;
                    "description": string;
                };
                "starRating": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "text": {
                    "type": string;
                    "description": string;
                };
                "thumbsDownCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "thumbsUpCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VoidedPurchase": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "purchaseTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "purchaseToken": {
                    "type": string;
                    "description": string;
                };
                "voidedTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VoidedPurchasesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "voidedPurchases": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
    };
    "resources": {
        "edits": {
            "methods": {
                "commit": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "editId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "packageName": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "editId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "packageName": {
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
                        "editId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "packageName": {
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
                        "packageName": {
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
                "validate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "editId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "packageName": {
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
            "resources": {
                "apklistings": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "deleteall": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                "apks": {
                    "methods": {
                        "addexternallyhosted": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                        "upload": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                    };
                };
                "bundles": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                        "upload": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                    };
                };
                "deobfuscationfiles": {
                    "methods": {
                        "upload": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "deobfuscationFileType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                    };
                };
                "details": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                "expansionfiles": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "expansionFileType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "expansionFileType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "packageName": {
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
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "expansionFileType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "packageName": {
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
                        "upload": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "apkVersionCode": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "expansionFileType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "packageName": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                    };
                };
                "images": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "imageId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "imageType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "deleteall": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "imageType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "imageType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                        "upload": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "imageType": {
                                    "type": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                    };
                };
                "listings": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "deleteall": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "language": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                "testers": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "pattern": string;
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
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "pattern": string;
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
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "pattern": string;
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
                "tracks": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
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
                                "editId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "track": {
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
        "inappproducts": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sku": {
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
                        "packageName": {
                            "type": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sku": {
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
                        "autoConvertMissingPrices": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "packageName": {
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
                        "maxResults": {
                            "type": string;
                            "format": string;
                            "location": string;
                        };
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "format": string;
                            "location": string;
                        };
                        "token": {
                            "type": string;
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
                        "autoConvertMissingPrices": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sku": {
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
                        "autoConvertMissingPrices": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sku": {
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
        "orders": {
            "methods": {
                "refund": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revoke": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
            };
        };
        "purchases": {
            "resources": {
                "products": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "productId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
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
                "subscriptions": {
                    "methods": {
                        "cancel": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "subscriptionId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "defer": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "subscriptionId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
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
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "subscriptionId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
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
                        "refund": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "subscriptionId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "revoke": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "subscriptionId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "token": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                    };
                };
                "voidedpurchases": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "endTime": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "format": string;
                                    "location": string;
                                };
                                "packageName": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "format": string;
                                    "location": string;
                                };
                                "startTime": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "token": {
                                    "type": string;
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
        "reviews": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "reviewId": {
                            "type": string;
                            "required": boolean;
                            "location": string;
                        };
                        "translationLanguage": {
                            "type": string;
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
                            "format": string;
                            "location": string;
                        };
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "format": string;
                            "location": string;
                        };
                        "token": {
                            "type": string;
                            "location": string;
                        };
                        "translationLanguage": {
                            "type": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "reply": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "packageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "reviewId": {
                            "type": string;
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
//# sourceMappingURL=androidpublisher-v2.d.ts.map