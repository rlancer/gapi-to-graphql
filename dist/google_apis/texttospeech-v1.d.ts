declare const _default: {
    "version_module": boolean;
    "schemas": {
        "SynthesisInput": {
            "description": string;
            "type": string;
            "properties": {
                "ssml": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Voice": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "languageCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "naturalSampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "ssmlGender": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
        };
        "AudioConfig": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "pitch": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "speakingRate": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "audioEncoding": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "volumeGainDb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "ListVoicesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "voices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "SynthesizeSpeechResponse": {
            "description": string;
            "type": string;
            "properties": {
                "audioContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SynthesizeSpeechRequest": {
            "description": string;
            "type": string;
            "properties": {
                "voice": {
                    "$ref": string;
                    "description": string;
                };
                "audioConfig": {
                    "$ref": string;
                    "description": string;
                };
                "input": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "VoiceSelectionParams": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "ssmlGender": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
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
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "voices": {
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
                    "parameters": {
                        "languageCode": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                };
            };
        };
        "text": {
            "methods": {
                "synthesize": {
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
    };
    "parameters": {
        "$.xgafv": {
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "alt": {
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
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
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
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
};
export default _default;
//# sourceMappingURL=texttospeech-v1.d.ts.map