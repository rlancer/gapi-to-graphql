declare const _default: {
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/firebase": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "title": string;
    "ownerName": string;
    "resources": {
        "managedShortLinks": {
            "methods": {
                "create": {
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
            };
        };
        "v1": {
            "methods": {
                "getLinkStats": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "durationDays": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "dynamicLink": {
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
                "installAttribution": {
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
                "reopenAttribution": {
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
            };
        };
        "shortLinks": {
            "methods": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                };
            };
        };
    };
    "parameters": {
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
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
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
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
        "alt": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
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
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "ManagedShortLink": {
            "properties": {
                "link": {
                    "description": string;
                    "type": string;
                };
                "creationTime": {
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
                "linkName": {
                    "description": string;
                    "type": string;
                };
                "flaggedAttribute": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "info": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DesktopInfo": {
            "description": string;
            "type": string;
            "properties": {
                "desktopFallbackLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DynamicLinkEventStat": {
            "properties": {
                "event": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "platform": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "GetIosPostInstallAttributionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "iosVersion": {
                    "description": string;
                    "type": string;
                };
                "retrievalMethod": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "visualStyle": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "sdkVersion": {
                    "description": string;
                    "type": string;
                };
                "bundleId": {
                    "description": string;
                    "type": string;
                };
                "device": {
                    "$ref": string;
                    "description": string;
                };
                "uniqueMatchLinkToCheck": {
                    "description": string;
                    "type": string;
                };
                "appInstallationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateManagedShortLinkRequest": {
            "properties": {
                "dynamicLinkInfo": {
                    "$ref": string;
                    "description": string;
                };
                "longDynamicLink": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "suffix": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateShortDynamicLinkResponse": {
            "description": string;
            "type": string;
            "properties": {
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shortLink": {
                    "description": string;
                    "type": string;
                };
                "previewLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Suffix": {
            "description": string;
            "type": string;
            "properties": {
                "customSuffix": {
                    "description": string;
                    "type": string;
                };
                "option": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GooglePlayAnalytics": {
            "description": string;
            "type": string;
            "properties": {
                "utmMedium": {
                    "description": string;
                    "type": string;
                };
                "utmTerm": {
                    "description": string;
                    "type": string;
                };
                "utmSource": {
                    "description": string;
                    "type": string;
                };
                "utmCampaign": {
                    "description": string;
                    "type": string;
                };
                "gclid": {
                    "description": string;
                    "type": string;
                };
                "utmContent": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DynamicLinkInfo": {
            "description": string;
            "type": string;
            "properties": {
                "analyticsInfo": {
                    "$ref": string;
                    "description": string;
                };
                "dynamicLinkDomain": {
                    "description": string;
                    "type": string;
                };
                "desktopInfo": {
                    "description": string;
                    "$ref": string;
                };
                "link": {
                    "description": string;
                    "type": string;
                };
                "iosInfo": {
                    "description": string;
                    "$ref": string;
                };
                "socialMetaTagInfo": {
                    "$ref": string;
                    "description": string;
                };
                "domainUriPrefix": {
                    "description": string;
                    "type": string;
                };
                "androidInfo": {
                    "$ref": string;
                    "description": string;
                };
                "navigationInfo": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "DeviceInfo": {
            "properties": {
                "languageCodeRaw": {
                    "description": string;
                    "type": string;
                };
                "screenResolutionWidth": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "screenResolutionHeight": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "timezone": {
                    "description": string;
                    "type": string;
                };
                "deviceModelName": {
                    "description": string;
                    "type": string;
                };
                "languageCodeFromWebview": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ITunesConnectAnalytics": {
            "description": string;
            "type": string;
            "properties": {
                "at": {
                    "description": string;
                    "type": string;
                };
                "ct": {
                    "description": string;
                    "type": string;
                };
                "mt": {
                    "description": string;
                    "type": string;
                };
                "pt": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GetIosPostInstallAttributionResponse": {
            "description": string;
            "type": string;
            "properties": {
                "fallbackLink": {
                    "description": string;
                    "type": string;
                };
                "requestedLink": {
                    "description": string;
                    "type": string;
                };
                "utmMedium": {
                    "description": string;
                    "type": string;
                };
                "utmSource": {
                    "description": string;
                    "type": string;
                };
                "isStrongMatchExecutable": {
                    "description": string;
                    "type": string;
                };
                "appMinimumVersion": {
                    "description": string;
                    "type": string;
                };
                "invitationId": {
                    "description": string;
                    "type": string;
                };
                "deepLink": {
                    "description": string;
                    "type": string;
                };
                "externalBrowserDestinationLink": {
                    "description": string;
                    "type": string;
                };
                "attributionConfidence": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "matchMessage": {
                    "description": string;
                    "type": string;
                };
                "resolvedLink": {
                    "description": string;
                    "type": string;
                };
                "utmCampaign": {
                    "description": string;
                    "type": string;
                };
                "requestIpVersion": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "CreateManagedShortLinkResponse": {
            "description": string;
            "type": string;
            "properties": {
                "managedShortLink": {
                    "$ref": string;
                    "description": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "previewLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GetIosReopenAttributionResponse": {
            "description": string;
            "type": string;
            "properties": {
                "utmMedium": {
                    "description": string;
                    "type": string;
                };
                "resolvedLink": {
                    "description": string;
                    "type": string;
                };
                "utmSource": {
                    "description": string;
                    "type": string;
                };
                "utmCampaign": {
                    "description": string;
                    "type": string;
                };
                "deepLink": {
                    "description": string;
                    "type": string;
                };
                "invitationId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SocialMetaTagInfo": {
            "description": string;
            "type": string;
            "properties": {
                "socialDescription": {
                    "description": string;
                    "type": string;
                };
                "socialTitle": {
                    "description": string;
                    "type": string;
                };
                "socialImageLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AndroidInfo": {
            "properties": {
                "androidLink": {
                    "description": string;
                    "type": string;
                };
                "androidFallbackLink": {
                    "description": string;
                    "type": string;
                };
                "androidPackageName": {
                    "description": string;
                    "type": string;
                };
                "androidMinPackageVersionCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DynamicLinkWarning": {
            "properties": {
                "warningMessage": {
                    "description": string;
                    "type": string;
                };
                "warningDocumentLink": {
                    "description": string;
                    "type": string;
                };
                "warningCode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DynamicLinkStats": {
            "description": string;
            "type": string;
            "properties": {
                "linkEventStats": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GetIosReopenAttributionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "bundleId": {
                    "description": string;
                    "type": string;
                };
                "requestedLink": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "NavigationInfo": {
            "properties": {
                "enableForcedRedirect": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "IosInfo": {
            "description": string;
            "type": string;
            "properties": {
                "iosCustomScheme": {
                    "description": string;
                    "type": string;
                };
                "iosBundleId": {
                    "description": string;
                    "type": string;
                };
                "iosFallbackLink": {
                    "description": string;
                    "type": string;
                };
                "iosAppStoreId": {
                    "description": string;
                    "type": string;
                };
                "iosIpadFallbackLink": {
                    "description": string;
                    "type": string;
                };
                "iosIpadBundleId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AnalyticsInfo": {
            "description": string;
            "type": string;
            "properties": {
                "itunesConnectAnalytics": {
                    "description": string;
                    "$ref": string;
                };
                "googlePlayAnalytics": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CreateShortDynamicLinkRequest": {
            "description": string;
            "type": string;
            "properties": {
                "longDynamicLink": {
                    "description": string;
                    "type": string;
                };
                "suffix": {
                    "$ref": string;
                    "description": string;
                };
                "dynamicLinkInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
};
export default _default;
//# sourceMappingURL=firebasedynamiclinks-v1.d.ts.map