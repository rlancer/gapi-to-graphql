declare const _default: {
    "parameters": {
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "pp": {
            "type": string;
            "default": string;
            "location": string;
            "description": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "bearer_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "type": string;
            "location": string;
            "description": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
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
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
    };
    "schemas": {
        "SearchResponse": {
            "type": string;
            "properties": {
                "@context": {
                    "description": string;
                    "type": string;
                };
                "itemListElement": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "@type": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "description": string;
    "kind": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "version_module": boolean;
    "resources": {
        "entities": {
            "methods": {
                "search": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "types": {
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "indent": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "languages": {
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                        "ids": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "limit": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "prefix": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "query": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=kgsearch-v1.d.ts.map