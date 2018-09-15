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
        "SubscriptionPurchase": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoRenewing": {
                    "type": string;
                    "description": string;
                };
                "initiationTimestampMsec": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "validUntilTimestampMsec": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
    };
    "resources": {
        "purchases": {
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
            };
        };
    };
};
export default _default;
//# sourceMappingURL=androidpublisher-v1.d.ts.map