declare const _default: {
    "ownerName": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "resources": {
        "statements": {
            "methods": {
                "list": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "source.androidApp.certificate.sha256Fingerprint": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "relation": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "source.web.site": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "source.androidApp.packageName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
            };
        };
        "assetlinks": {
            "methods": {
                "check": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "source.web.site": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "source.androidApp.packageName": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "target.androidApp.packageName": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "source.androidApp.certificate.sha256Fingerprint": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "relation": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "target.web.site": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "target.androidApp.certificate.sha256Fingerprint": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
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
            "description": string;
            "type": string;
            "location": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
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
            "description": string;
            "type": string;
            "location": string;
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
    "schemas": {
        "WebAsset": {
            "description": string;
            "type": string;
            "properties": {
                "site": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListResponse": {
            "description": string;
            "type": string;
            "properties": {
                "maxAge": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errorCode": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "statements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "debugString": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Statement": {
            "description": string;
            "type": string;
            "properties": {
                "target": {
                    "$ref": string;
                    "description": string;
                };
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "relation": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AndroidAppAsset": {
            "description": string;
            "type": string;
            "properties": {
                "certificate": {
                    "description": string;
                    "$ref": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CertificateInfo": {
            "properties": {
                "sha256Fingerprint": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Asset": {
            "properties": {
                "web": {
                    "$ref": string;
                    "description": string;
                };
                "androidApp": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CheckResponse": {
            "description": string;
            "type": string;
            "properties": {
                "maxAge": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errorCode": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "linked": {
                    "description": string;
                    "type": string;
                };
                "debugString": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
};
export default _default;
//# sourceMappingURL=digitalassetlinks-v1.d.ts.map