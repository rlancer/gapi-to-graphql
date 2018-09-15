declare const _default: {
    "ownerName": string;
    "resources": {
        "voices": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "languageCode": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
        };
        "text": {
            "methods": {
                "synthesize": {
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
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
    };
    "parameters": {
        "upload_protocol": {
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
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
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
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "location": string;
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
            "location": string;
        };
        "access_token": {
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
    "schemas": {
        "Voice": {
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
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
        "AudioConfig": {
            "properties": {
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
                "effectsProfileId": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "volumeGainDb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListVoicesResponse": {
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
            "description": string;
            "type": string;
        };
        "SynthesizeSpeechResponse": {
            "properties": {
                "audioContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SynthesizeSpeechRequest": {
            "description": string;
            "type": string;
            "properties": {
                "input": {
                    "description": string;
                    "$ref": string;
                };
                "voice": {
                    "$ref": string;
                    "description": string;
                };
                "audioConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "VoiceSelectionParams": {
            "description": string;
            "type": string;
            "properties": {
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
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
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
};
export default _default;
//# sourceMappingURL=texttospeech-v1beta1.d.ts.map