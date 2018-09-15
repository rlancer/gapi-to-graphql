declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "operations": {
            "methods": {
                "cancel": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                };
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "name": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "get": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "name": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                };
            };
        };
        "videos": {
            "methods": {
                "annotate": {
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
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
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
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GoogleCloudVideointelligenceV1p1beta1_VideoSegment": {
            "properties": {
                "endTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1_Entity": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "entityId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_Entity": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "entityId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_VideoSegment": {
            "description": string;
            "type": string;
            "properties": {
                "endTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_VideoAnnotationResults": {
            "description": string;
            "type": string;
            "properties": {
                "shotLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "frameLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "explicitAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "segmentLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shotAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "annotationResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleLongrunning_CancelOperationRequest": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_Entity": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "entityId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_LabelAnnotation": {
            "properties": {
                "entity": {
                    "$ref": string;
                    "description": string;
                };
                "frames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "segments": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "categoryEntities": {
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
        "GoogleRpc_Status": {
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
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults": {
            "description": string;
            "type": string;
            "properties": {
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "frameLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "speechTranscriptions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "explicitAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "segmentLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shotAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shotLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_VideoSegment": {
            "properties": {
                "endTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTimeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1_LabelFrame": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "annotationResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults": {
            "description": string;
            "type": string;
            "properties": {
                "shotLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "frameLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "explicitAnnotation": {
                    "$ref": string;
                    "description": string;
                };
                "segmentLabelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shotAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress": {
            "description": string;
            "type": string;
            "properties": {
                "progressPercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame": {
            "properties": {
                "pornographyLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_LabelFrame": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress": {
            "description": string;
            "type": string;
            "properties": {
                "annotationProgress": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_WordInfo": {
            "description": string;
            "type": string;
            "properties": {
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "word": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "frames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription": {
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
        "GoogleCloudVideointelligenceV1beta2_LabelFrame": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_ExplicitContentFrame": {
            "description": string;
            "type": string;
            "properties": {
                "pornographyLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleProtobuf_Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_LabelSegment": {
            "description": string;
            "type": string;
            "properties": {
                "segment": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "categoryEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "entity": {
                    "$ref": string;
                    "description": string;
                };
                "frames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "segments": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_ExplicitContentAnnotation": {
            "properties": {
                "frames": {
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
        "GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress": {
            "description": string;
            "type": string;
            "properties": {
                "annotationProgress": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_VideoAnnotationProgress": {
            "description": string;
            "type": string;
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "progressPercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_AnnotateVideoRequest": {
            "description": string;
            "type": string;
            "properties": {
                "features": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "outputUri": {
                    "description": string;
                    "type": string;
                };
                "videoContext": {
                    "$ref": string;
                    "description": string;
                };
                "locationId": {
                    "description": string;
                    "type": string;
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "inputContent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative": {
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
                "words": {
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
        "GoogleCloudVideointelligenceV1_AnnotateVideoProgress": {
            "properties": {
                "annotationProgress": {
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
        "GoogleLongrunning_Operation": {
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
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
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
        "GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress": {
            "description": string;
            "type": string;
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inputUri": {
                    "description": string;
                    "type": string;
                };
                "progressPercent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_AnnotateVideoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "annotationResults": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_LabelSegment": {
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "segment": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleLongrunning_ListOperationsResponse": {
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
        "GoogleCloudVideointelligenceV1_LabelDetectionConfig": {
            "properties": {
                "model": {
                    "description": string;
                    "type": string;
                };
                "labelDetectionMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "stationaryCamera": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame": {
            "description": string;
            "type": string;
            "properties": {
                "pornographyLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "timeOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_ExplicitContentDetectionConfig": {
            "description": string;
            "type": string;
            "properties": {
                "model": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_ShotChangeDetectionConfig": {
            "description": string;
            "type": string;
            "properties": {
                "model": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1beta2_LabelSegment": {
            "properties": {
                "segment": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "frames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVideointelligenceV1_VideoContext": {
            "properties": {
                "segments": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shotChangeDetectionConfig": {
                    "description": string;
                    "$ref": string;
                };
                "labelDetectionConfig": {
                    "$ref": string;
                    "description": string;
                };
                "explicitContentDetectionConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVideointelligenceV1beta2_LabelAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "categoryEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "entity": {
                    "description": string;
                    "$ref": string;
                };
                "frames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "segments": {
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
};
export default _default;
//# sourceMappingURL=videointelligence-v1.d.ts.map