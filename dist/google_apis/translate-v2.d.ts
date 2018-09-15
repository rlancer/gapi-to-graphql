declare const _default: {
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-translation": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "features": string[];
    "title": string;
    "ownerName": string;
    "resources": {
        "detections": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "q": {
                            "type": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                };
                "detect": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                };
            };
        };
        "languages": {
            "methods": {
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameters": {
                        "target": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "model": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "path": string;
                    "id": string;
                    "description": string;
                };
            };
        };
        "translations": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "format": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "enumDescriptions": string[];
                        };
                        "model": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "q": {
                            "description": string;
                            "type": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                        "source": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "cid": {
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                        "target": {
                            "location": string;
                            "description": string;
                            "type": string;
                            "required": boolean;
                        };
                    };
                    "path": string;
                    "id": string;
                };
                "translate": {
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
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
        };
        "alt": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
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
            "location": string;
            "description": string;
            "type": string;
        };
        "bearer_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
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
    "schemas": {
        "GetSupportedLanguagesRequest": {
            "properties": {
                "target": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LanguagesListResponse": {
            "properties": {
                "languages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "type": string;
        };
        "TranslationsResource": {
            "type": string;
            "properties": {
                "translatedText": {
                    "description": string;
                    "type": string;
                };
                "detectedSourceLanguage": {
                    "description": string;
                    "type": string;
                };
                "model": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DetectionsResource": {
            "description": string;
            "type": string;
            "items": {
                "type": string;
                "properties": {
                    "confidence": {
                        "description": string;
                        "format": string;
                        "type": string;
                    };
                    "isReliable": {
                        "description": string;
                        "type": string;
                    };
                    "language": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "TranslationsListResponse": {
            "description": string;
            "type": string;
            "properties": {
                "translations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "TranslateTextRequest": {
            "type": string;
            "properties": {
                "target": {
                    "description": string;
                    "type": string;
                };
                "q": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "format": {
                    "description": string;
                    "type": string;
                };
                "source": {
                    "description": string;
                    "type": string;
                };
                "model": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DetectLanguageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "q": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "LanguagesResource": {
            "type": string;
            "properties": {
                "language": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DetectionsListResponse": {
            "type": string;
            "properties": {
                "detections": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
//# sourceMappingURL=translate-v2.d.ts.map