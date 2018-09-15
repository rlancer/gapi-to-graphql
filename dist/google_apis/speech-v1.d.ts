declare const _default: {
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
        "operations": {
            "methods": {
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "filter": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "name": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "speech": {
            "methods": {
                "longrunningrecognize": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "recognize": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
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
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "type": string;
            "location": string;
            "description": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
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
        "Operation": {
            "properties": {
                "metadata": {
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                    "description": string;
                    "type": string;
                };
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "RecognitionConfig": {
            "description": string;
            "type": string;
            "properties": {
                "enableWordTimeOffsets": {
                    "description": string;
                    "type": string;
                };
                "maxAlternatives": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "profanityFilter": {
                    "description": string;
                    "type": string;
                };
                "encoding": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "speechContexts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "useEnhanced": {
                    "description": string;
                    "type": string;
                };
                "sampleRateHertz": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "model": {
                    "description": string;
                    "type": string;
                };
                "enableAutomaticPunctuation": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WordInfo": {
            "description": string;
            "type": string;
            "properties": {
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "word": {
                    "description": string;
                    "type": string;
                };
                "speakerTag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
                "details": {
                    "type": string;
                    "items": {
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "RecognizeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "audio": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "operations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SpeechContext": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "phrases": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "SpeechRecognitionAlternative": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "transcript": {
                    "description": string;
                    "type": string;
                };
                "words": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "SpeechRecognitionResult": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "alternatives": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "RecognitionAudio": {
            "description": string;
            "type": string;
            "properties": {
                "content": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LongRunningRecognizeRequest": {
            "type": string;
            "properties": {
                "config": {
                    "description": string;
                    "$ref": string;
                };
                "audio": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "RecognizeResponse": {
            "type": string;
            "properties": {
                "results": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
};
export default _default;
//# sourceMappingURL=speech-v1.d.ts.map