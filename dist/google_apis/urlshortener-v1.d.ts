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
                "https://www.googleapis.com/auth/urlshortener": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AnalyticsSnapshot": {
            "id": string;
            "type": string;
            "properties": {
                "browsers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "countries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "longUrlClicks": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "platforms": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "referrers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shortUrlClicks": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AnalyticsSummary": {
            "id": string;
            "type": string;
            "properties": {
                "allTime": {
                    "$ref": string;
                    "description": string;
                };
                "day": {
                    "$ref": string;
                    "description": string;
                };
                "month": {
                    "$ref": string;
                    "description": string;
                };
                "twoHours": {
                    "$ref": string;
                    "description": string;
                };
                "week": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "StringCount": {
            "id": string;
            "type": string;
            "properties": {
                "count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Url": {
            "id": string;
            "type": string;
            "properties": {
                "analytics": {
                    "$ref": string;
                    "description": string;
                };
                "created": {
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
                "longUrl": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UrlHistory": {
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
                "itemsPerPage": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
    };
    "resources": {
        "url": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "shortUrl": {
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
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "start-token": {
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
export default _default;
//# sourceMappingURL=urlshortener-v1.d.ts.map