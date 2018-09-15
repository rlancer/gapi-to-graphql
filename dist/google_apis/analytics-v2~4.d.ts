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
                "https://www.googleapis.com/auth/analytics": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/analytics.readonly": {
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "data": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "end-date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "max-results": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "metrics": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "segment": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sort": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "start-date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "start-index": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
            };
        };
        "management": {
            "resources": {
                "accounts": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "max-results": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "start-index": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                };
                "goals": {
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
                                "max-results": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "profileId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "start-index": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "webPropertyId": {
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
                "profiles": {
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
                                "max-results": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "start-index": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "webPropertyId": {
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
                "segments": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "max-results": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "start-index": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                };
                "webproperties": {
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
                                "max-results": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "start-index": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=analytics-v2~4.d.ts.map