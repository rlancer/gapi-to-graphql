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
                "https://www.googleapis.com/auth/plus.login": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.me": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.profile": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Jwk": {
            "id": string;
            "type": string;
            "properties": {
                "keys": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "alg": {
                                "type": string;
                                "default": string;
                            };
                            "e": {
                                "type": string;
                            };
                            "kid": {
                                "type": string;
                            };
                            "kty": {
                                "type": string;
                                "default": string;
                            };
                            "n": {
                                "type": string;
                            };
                            "use": {
                                "type": string;
                                "default": string;
                            };
                        };
                    };
                };
            };
        };
        "Tokeninfo": {
            "id": string;
            "type": string;
            "properties": {
                "access_type": {
                    "type": string;
                    "description": string;
                };
                "audience": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "expires_in": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "issued_to": {
                    "type": string;
                    "description": string;
                };
                "scope": {
                    "type": string;
                    "description": string;
                };
                "token_handle": {
                    "type": string;
                    "description": string;
                };
                "user_id": {
                    "type": string;
                    "description": string;
                };
                "verified_email": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Userinfoplus": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "family_name": {
                    "type": string;
                    "description": string;
                };
                "gender": {
                    "type": string;
                    "description": string;
                };
                "given_name": {
                    "type": string;
                    "description": string;
                };
                "hd": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "link": {
                    "type": string;
                    "description": string;
                };
                "locale": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "picture": {
                    "type": string;
                    "description": string;
                };
                "verified_email": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
    };
    "methods": {
        "getCertForOpenIdConnect": {
            "id": string;
            "path": string;
            "httpMethod": string;
            "response": {
                "$ref": string;
            };
        };
        "tokeninfo": {
            "id": string;
            "path": string;
            "httpMethod": string;
            "parameters": {
                "access_token": {
                    "type": string;
                    "location": string;
                };
                "id_token": {
                    "type": string;
                    "location": string;
                };
                "token_handle": {
                    "type": string;
                    "location": string;
                };
            };
            "response": {
                "$ref": string;
            };
        };
    };
    "resources": {
        "userinfo": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "v2": {
                    "resources": {
                        "me": {
                            "methods": {
                                "get": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "scopes": string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=oauth2-v2.d.ts.map