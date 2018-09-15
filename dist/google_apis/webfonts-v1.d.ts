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
    "schemas": {
        "Webfont": {
            "id": string;
            "type": string;
            "properties": {
                "category": {
                    "type": string;
                    "description": string;
                };
                "family": {
                    "type": string;
                    "description": string;
                };
                "files": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModified": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subsets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "variants": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "version": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "WebfontList": {
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
        "webfonts": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "sort": {
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
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=webfonts-v1.d.ts.map