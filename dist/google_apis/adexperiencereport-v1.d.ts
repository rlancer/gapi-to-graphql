declare const _default: {
    "schemas": {
        "PlatformSummary": {
            "description": string;
            "type": string;
            "properties": {
                "filterStatus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "underReview": {
                    "description": string;
                    "type": string;
                };
                "reportUrl": {
                    "description": string;
                    "type": string;
                };
                "lastChangeTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "betterAdsStatus": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "region": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "enforcementTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ViolatingSitesResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "violatingSites": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SiteSummaryResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "mobileSummary": {
                    "description": string;
                    "$ref": string;
                };
                "reviewedSite": {
                    "description": string;
                    "type": string;
                };
                "desktopSummary": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/xapi.zoo": {
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
        "violatingSites": {
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
                    "parameters": {};
                    "flatPath": string;
                };
            };
        };
        "sites": {
            "methods": {
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
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                };
            };
        };
    };
    "parameters": {
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
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
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
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
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
};
export default _default;
//# sourceMappingURL=adexperiencereport-v1.d.ts.map