declare const _default: {
    "servicePath": string;
    "description": string;
    "kind": string;
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "BatchAnnotateImagesRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "requests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DetectedBreak": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "isPrefix": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CancelOperationRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {};
        };
        "ImageContext": {
            "properties": {
                "languageHints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "webDetectionParams": {
                    "$ref": string;
                    "description": string;
                };
                "latLongRect": {
                    "description": string;
                    "$ref": string;
                };
                "cropHintsParams": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p3beta1Symbol": {
            "properties": {
                "property": {
                    "description": string;
                    "$ref": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p1beta1EntityAnnotation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "topicality": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "properties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1ImageAnnotationContext": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "type": string;
                    "description": string;
                };
                "pageNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse": {
            "type": string;
            "properties": {
                "outputConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1Paragraph": {
            "properties": {
                "property": {
                    "description": string;
                    "$ref": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
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
        "GoogleCloudVisionV1p3beta1FaceAnnotationLandmark": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "position": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1Word": {
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "symbols": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p3beta1SafeSearchAnnotation": {
            "properties": {
                "medical": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "racy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "violence": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "adult": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "spoof": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p3beta1ProductSearchResults": {
            "description": string;
            "type": string;
            "properties": {
                "indexTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "results": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1EntityAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "topicality": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "properties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CropHintsAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "cropHints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "updateTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "updateTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1Position": {
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "z": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p1beta1WebDetectionWebImage": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1ImageAnnotationContext": {
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
                "pageNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1Position": {
            "description": string;
            "type": string;
            "properties": {
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "z": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DominantColorsAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "colors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1Page": {
            "description": string;
            "type": string;
            "properties": {
                "blocks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "pages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1DominantColorsAnnotation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "colors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "BoundingPoly": {
            "description": string;
            "type": string;
            "properties": {
                "normalizedVertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "vertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1OutputConfig": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "batchSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "gcsDestination": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1GcsSource": {
            "type": string;
            "properties": {
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CropHintsParams": {
            "description": string;
            "type": string;
            "properties": {
                "aspectRatios": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1EntityAnnotation": {
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "topicality": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "properties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LocationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "latLng": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BatchAnnotateImagesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "WebPage": {
            "description": string;
            "type": string;
            "properties": {
                "pageTitle": {
                    "description": string;
                    "type": string;
                };
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EntityAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
                "topicality": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "properties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage": {
            "type": string;
            "properties": {
                "languageCode": {
                    "type": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1FaceAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "headwearLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
                "rollAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sorrowLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "tiltAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "fdBoundingPoly": {
                    "$ref": string;
                    "description": string;
                };
                "angerLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "landmarks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "surpriseLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "landmarkingConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "joyLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "underExposedLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "panAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "detectionConfidence": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "blurredLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WebImage": {
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak": {
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "isPrefix": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1WebDetectionWebPage": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "pageTitle": {
                    "description": string;
                    "type": string;
                };
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1AnnotateImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "landmarkAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "faceAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cropHintsAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "labelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "productSearchResults": {
                    "description": string;
                    "$ref": string;
                };
                "localizedObjectAnnotations": {
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
                "fullTextAnnotation": {
                    "$ref": string;
                    "description": string;
                };
                "textAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imagePropertiesAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "logoAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "context": {
                    "description": string;
                    "$ref": string;
                };
                "webDetection": {
                    "$ref": string;
                    "description": string;
                };
                "safeSearchAnnotation": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1Block": {
            "type": string;
            "properties": {
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "paragraphs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "blockType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1CropHint": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "importanceFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "FaceAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "tiltAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "fdBoundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "surpriseLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "landmarks": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "angerLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "joyLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "landmarkingConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "detectionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "panAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "underExposedLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "blurredLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "headwearLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
                "rollAngle": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sorrowLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "InputConfig": {
            "type": string;
            "properties": {
                "gcsSource": {
                    "$ref": string;
                    "description": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1Vertex": {
            "description": string;
            "type": string;
            "properties": {
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1Page": {
            "description": string;
            "type": string;
            "properties": {
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blocks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1WebDetectionWebLabel": {
            "description": string;
            "type": string;
            "properties": {
                "label": {
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
        "GoogleCloudVisionV1p3beta1WebDetectionWebPage": {
            "description": string;
            "type": string;
            "properties": {
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "pageTitle": {
                    "description": string;
                    "type": string;
                };
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1WebDetectionWebEntity": {
            "description": string;
            "type": string;
            "properties": {
                "entityId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1TextAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "pages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AsyncAnnotateFileRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "inputConfig": {
                    "description": string;
                    "$ref": string;
                };
                "features": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imageContext": {
                    "description": string;
                    "$ref": string;
                };
                "outputConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "GoogleCloudVisionV1p3beta1GcsDestination": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1BoundingPoly": {
            "description": string;
            "type": string;
            "properties": {
                "vertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse": {
            "properties": {
                "responses": {
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
        "GoogleCloudVisionV1p3beta1Vertex": {
            "description": string;
            "type": string;
            "properties": {
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AnnotateImageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "features": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "imageContext": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1ProductKeyValue": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Symbol": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "description": string;
                    "$ref": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1OutputConfig": {
            "description": string;
            "type": string;
            "properties": {
                "gcsDestination": {
                    "$ref": string;
                    "description": string;
                };
                "batchSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1DominantColorsAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "colors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1Word": {
            "properties": {
                "symbols": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
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
        "GoogleCloudVisionV1p1beta1CropHint": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "importanceFraction": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1TextAnnotationTextProperty": {
            "description": string;
            "type": string;
            "properties": {
                "detectedLanguages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "detectedBreak": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1Page": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blocks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1CropHintsAnnotation": {
            "properties": {
                "cropHints": {
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
        "GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "isPrefix": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1InputConfig": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "gcsSource": {
                    "$ref": string;
                    "description": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "ImageAnnotationContext": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
                "pageNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1WebDetectionWebLabel": {
            "properties": {
                "label": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p2beta1DominantColorsAnnotation": {
            "properties": {
                "colors": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "WebEntity": {
            "description": string;
            "type": string;
            "properties": {
                "entityId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1BoundingPoly": {
            "type": string;
            "properties": {
                "normalizedVertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "vertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation": {
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1WebDetection": {
            "description": string;
            "type": string;
            "properties": {
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pagesWithMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "visuallySimilarImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "bestGuessLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1LocationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "latLng": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1OutputConfig": {
            "description": string;
            "type": string;
            "properties": {
                "gcsDestination": {
                    "$ref": string;
                    "description": string;
                };
                "batchSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1LocationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "latLng": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "NormalizedVertex": {
            "description": string;
            "type": string;
            "properties": {
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1ColorInfo": {
            "type": string;
            "properties": {
                "pixelFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "$ref": string;
                    "description": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Block": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "blockType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "paragraphs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1Property": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "uint64Value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p3beta1Product": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "productCategory": {
                    "type": string;
                    "description": string;
                };
                "productLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1FaceAnnotation": {
            "type": string;
            "properties": {
                "tiltAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "fdBoundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "surpriseLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "landmarks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "angerLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "joyLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "landmarkingConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "detectionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "panAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "underExposedLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "blurredLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "headwearLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "rollAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sorrowLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1NormalizedVertex": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1FaceAnnotationLandmark": {
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "position": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse": {
            "description": string;
            "type": string;
            "properties": {
                "outputConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Position": {
            "description": string;
            "type": string;
            "properties": {
                "x": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "z": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ColorInfo": {
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pixelFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1WebDetection": {
            "description": string;
            "type": string;
            "properties": {
                "visuallySimilarImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bestGuessLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fullMatchingImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "webEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pagesWithMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "partialMatchingImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1Paragraph": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "description": string;
                    "$ref": string;
                };
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
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
        };
        "GcsDestination": {
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p3beta1BatchOperationMetadata": {
            "type": string;
            "properties": {
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "submitTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1SafeSearchAnnotation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "medical": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "racy": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "violence": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "adult": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "spoof": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
        };
        "Landmark": {
            "description": string;
            "type": string;
            "properties": {
                "position": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1Block": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "paragraphs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "blockType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p3beta1ImageAnnotationContext": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "type": string;
                    "description": string;
                };
                "pageNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Word": {
            "description": string;
            "type": string;
            "properties": {
                "symbols": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
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
        };
        "GoogleCloudVisionV1p1beta1GcsDestination": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1ColorInfo": {
            "description": string;
            "type": string;
            "properties": {
                "pixelFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "$ref": string;
                    "description": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1ImageProperties": {
            "description": string;
            "type": string;
            "properties": {
                "dominantColors": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1AnnotateImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "landmarkAnnotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "faceAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cropHintsAnnotation": {
                    "$ref": string;
                    "description": string;
                };
                "labelAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "localizedObjectAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "fullTextAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "textAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imagePropertiesAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "logoAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "context": {
                    "$ref": string;
                    "description": string;
                };
                "webDetection": {
                    "$ref": string;
                    "description": string;
                };
                "safeSearchAnnotation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1ImageProperties": {
            "description": string;
            "type": string;
            "properties": {
                "dominantColors": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1SafeSearchAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "medical": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "racy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "violence": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "adult": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "spoof": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1Paragraph": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "type": string;
                    "description": string;
                    "format": string;
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
        };
        "Operation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "done": {
                    "type": string;
                    "description": string;
                };
                "response": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1InputConfig": {
            "description": string;
            "type": string;
            "properties": {
                "gcsSource": {
                    "$ref": string;
                    "description": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AsyncBatchAnnotateFilesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "requests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Page": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blocks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "property": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1TextAnnotationTextProperty": {
            "description": string;
            "type": string;
            "properties": {
                "detectedBreak": {
                    "description": string;
                    "$ref": string;
                };
                "detectedLanguages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1LocationInfo": {
            "type": string;
            "properties": {
                "latLng": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Status": {
            "type": string;
            "properties": {
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
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "WebDetectionParams": {
            "description": string;
            "type": string;
            "properties": {
                "includeGeoResults": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1WebDetectionWebPage": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "pageTitle": {
                    "description": string;
                    "type": string;
                };
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "operations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1BoundingPoly": {
            "description": string;
            "type": string;
            "properties": {
                "normalizedVertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "vertices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1InputConfig": {
            "properties": {
                "gcsSource": {
                    "description": string;
                    "$ref": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p1beta1GcsSource": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak": {
            "type": string;
            "properties": {
                "isPrefix": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AsyncBatchAnnotateFilesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1TextAnnotationTextProperty": {
            "description": string;
            "type": string;
            "properties": {
                "detectedLanguages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "detectedBreak": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1ProductSearchResultsResult": {
            "description": string;
            "type": string;
            "properties": {
                "image": {
                    "description": string;
                    "type": string;
                };
                "product": {
                    "description": string;
                    "$ref": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1Property": {
            "description": string;
            "type": string;
            "properties": {
                "uint64Value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SafeSearchAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "spoof": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "medical": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "racy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "violence": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "adult": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "Vertex": {
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "WebLabel": {
            "description": string;
            "type": string;
            "properties": {
                "label": {
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
        "GoogleCloudVisionV1p2beta1WebDetectionWebEntity": {
            "description": string;
            "type": string;
            "properties": {
                "entityId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "TextProperty": {
            "properties": {
                "detectedLanguages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "detectedBreak": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p3beta1CropHint": {
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "importanceFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p1beta1Symbol": {
            "description": string;
            "type": string;
            "properties": {
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "property": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1ImageProperties": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "dominantColors": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse": {
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1ColorInfo": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pixelFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1FaceAnnotationLandmark": {
            "properties": {
                "position": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p2beta1AnnotateFileResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CropHint": {
            "type": string;
            "properties": {
                "confidence": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "importanceFraction": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "boundingPoly": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p3beta1ImportProductSetsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "referenceImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "statuses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1GcsSource": {
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GcsSource": {
            "description": string;
            "type": string;
            "properties": {
                "uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Image": {
            "description": string;
            "type": string;
            "properties": {
                "content": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "source": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "Paragraph": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
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
        };
        "GoogleCloudVisionV1p1beta1Block": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "blockType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "paragraphs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1FaceAnnotation": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "rollAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sorrowLikelihood": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "tiltAngle": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fdBoundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "angerLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "landmarks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "surpriseLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "joyLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "landmarkingConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "underExposedLikelihood": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "panAngle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "detectionConfidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blurredLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "headwearLikelihood": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudVisionV1p1beta1TextAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "pages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1NormalizedVertex": {
            "type": string;
            "properties": {
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p3beta1Position": {
            "description": string;
            "type": string;
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "z": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1AnnotateFileResponse": {
            "properties": {
                "responses": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "inputConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LatLongRect": {
            "description": string;
            "type": string;
            "properties": {
                "minLatLng": {
                    "$ref": string;
                    "description": string;
                };
                "maxLatLng": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1Vertex": {
            "description": string;
            "type": string;
            "properties": {
                "y": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "x": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1GcsDestination": {
            "type": string;
            "properties": {
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AnnotateFileResponse": {
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p1beta1AnnotateFileResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1WebDetectionWebLabel": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "label": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "LatLng": {
            "description": string;
            "type": string;
            "properties": {
                "longitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Color": {
            "type": string;
            "properties": {
                "red": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "green": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alpha": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudVisionV1p2beta1Symbol": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
                    "description": string;
                    "$ref": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Feature": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "maxResults": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "model": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ImageProperties": {
            "properties": {
                "dominantColors": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AsyncAnnotateFileResponse": {
            "description": string;
            "type": string;
            "properties": {
                "outputConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1Word": {
            "description": string;
            "type": string;
            "properties": {
                "property": {
                    "$ref": string;
                    "description": string;
                };
                "boundingBox": {
                    "$ref": string;
                    "description": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "symbols": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DetectedLanguage": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1WebDetection": {
            "description": string;
            "type": string;
            "properties": {
                "visuallySimilarImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "bestGuessLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fullMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pagesWithMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage": {
            "description": string;
            "type": string;
            "properties": {
                "confidence": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "languageCode": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1TextAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "pages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "text": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OutputConfig": {
            "properties": {
                "batchSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "gcsDestination": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AnnotateImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "logoAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "context": {
                    "$ref": string;
                    "description": string;
                };
                "webDetection": {
                    "$ref": string;
                    "description": string;
                };
                "safeSearchAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "landmarkAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "faceAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cropHintsAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "labelAnnotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "localizedObjectAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "fullTextAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "textAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imagePropertiesAnnotation": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1CropHintsAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "cropHints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1ReferenceImage": {
            "properties": {
                "boundingPolys": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LocalizedObjectAnnotation": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "mid": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "boundingPoly": {
                    "description": string;
                    "$ref": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WebDetection": {
            "description": string;
            "type": string;
            "properties": {
                "visuallySimilarImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bestGuessLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fullMatchingImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "webEntities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pagesWithMatchingImages": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "partialMatchingImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1WebDetectionWebImage": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage": {
            "properties": {
                "languageCode": {
                    "type": string;
                    "description": string;
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
        "Property": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "uint64Value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "ImageSource": {
            "description": string;
            "type": string;
            "properties": {
                "gcsImageUri": {
                    "type": string;
                    "description": string;
                };
                "imageUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1CropHintsAnnotation": {
            "properties": {
                "cropHints": {
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
        "GoogleCloudVisionV1p1beta1WebDetectionWebEntity": {
            "properties": {
                "entityId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse": {
            "description": string;
            "type": string;
            "properties": {
                "outputConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p1beta1AnnotateImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "context": {
                    "description": string;
                    "$ref": string;
                };
                "logoAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webDetection": {
                    "$ref": string;
                    "description": string;
                };
                "safeSearchAnnotation": {
                    "$ref": string;
                    "description": string;
                };
                "landmarkAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "faceAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cropHintsAnnotation": {
                    "$ref": string;
                    "description": string;
                };
                "labelAnnotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "localizedObjectAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "fullTextAnnotation": {
                    "description": string;
                    "$ref": string;
                };
                "textAnnotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imagePropertiesAnnotation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p3beta1WebDetectionWebImage": {
            "description": string;
            "type": string;
            "properties": {
                "score": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudVisionV1p2beta1Property": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "uint64Value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
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
                "https://www.googleapis.com/auth/cloud-vision": {
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
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "images": {
            "methods": {
                "annotate": {
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
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
        "operations": {
            "methods": {
                "delete": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
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
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "list": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "filter": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "name": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                        "pageToken": {
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
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "name": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "cancel": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
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
                };
            };
        };
        "locations": {
            "resources": {
                "operations": {
                    "methods": {
                        "get": {
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
                            "description": string;
                        };
                    };
                };
            };
        };
        "files": {
            "methods": {
                "asyncBatchAnnotate": {
                    "flatPath": string;
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
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
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
            "type": string;
            "location": string;
            "description": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
    };
    "version": string;
    "baseUrl": string;
};
export default _default;
//# sourceMappingURL=vision-v1.d.ts.map