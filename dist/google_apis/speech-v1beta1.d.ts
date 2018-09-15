declare const _default: {
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "RecognitionConfig": {
            "description": string;
            "type": string;
            "properties": {
                "maxAlternatives": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sampleRate": {
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
                "speechContext": {
                    "$ref": string;
                    "description": string;
                };
                "encoding": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SyncRecognizeRequest": {
            "description": string;
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
        };
        "RecognitionAudio": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
                "content": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AsyncRecognizeRequest": {
            "properties": {
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "audio": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                    };
                };
            };
            "id": string;
        };
        "SyncRecognizeResponse": {
            "description": string;
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
        };
        "SpeechRecognitionAlternative": {
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "transcript": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "SpeechContext": {
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
            "id": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "operations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
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
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SpeechRecognitionResult": {
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
            "id": string;
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
        "operations": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "name": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
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
                    "id": string;
                    "path": string;
                };
            };
        };
        "speech": {
            "methods": {
                "asyncrecognize": {
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
                "syncrecognize": {
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
            "type": string;
            "location": string;
            "description": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
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
};
export default _default;
//# sourceMappingURL=speech-v1beta1.d.ts.map