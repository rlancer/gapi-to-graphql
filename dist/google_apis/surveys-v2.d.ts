declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
    "canonicalName": string;
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
                "https://www.googleapis.com/auth/surveys": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/surveys.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "FieldMask": {
            "id": string;
            "type": string;
            "properties": {
                "fields": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "PageInfo": {
            "id": string;
            "type": string;
            "properties": {
                "resultPerPage": {
                    "type": string;
                    "format": string;
                };
                "startIndex": {
                    "type": string;
                    "format": string;
                };
                "totalResults": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "ResultsGetRequest": {
            "id": string;
            "type": string;
            "properties": {
                "resultMask": {
                    "$ref": string;
                };
            };
        };
        "ResultsMask": {
            "id": string;
            "type": string;
            "properties": {
                "fields": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "projection": {
                    "type": string;
                };
            };
        };
        "Survey": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "audience": {
                    "$ref": string;
                    "description": string;
                };
                "cost": {
                    "$ref": string;
                    "description": string;
                };
                "customerData": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "owners": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "questions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "rejectionReason": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "surveyUrlId": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "wantedResponseCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SurveyAudience": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "country": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "countrySubdivision": {
                    "type": string;
                    "description": string;
                };
                "gender": {
                    "type": string;
                    "description": string;
                };
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "populationSource": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveyCost": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "costPerResponseNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
                    "type": string;
                    "description": string;
                };
                "maxCostPerResponseNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SurveyQuestion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "answerOrder": {
                    "type": string;
                    "description": string;
                };
                "answers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "hasOther": {
                    "type": string;
                    "description": string;
                };
                "highValueLabel": {
                    "type": string;
                    "description": string;
                };
                "images": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lastAnswerPositionPinned": {
                    "type": string;
                    "description": string;
                };
                "lowValueLabel": {
                    "type": string;
                    "description": string;
                };
                "mustPickSuggestion": {
                    "type": string;
                    "description": string;
                };
                "numStars": {
                    "type": string;
                    "description": string;
                };
                "openTextPlaceholder": {
                    "type": string;
                    "description": string;
                };
                "openTextSuggestions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "question": {
                    "type": string;
                    "description": string;
                };
                "sentimentText": {
                    "type": string;
                    "description": string;
                };
                "singleLineResponse": {
                    "type": string;
                    "description": string;
                };
                "thresholdAnswers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "unitOfMeasurementLabel": {
                    "type": string;
                    "description": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveyQuestionImage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "altText": {
                    "type": string;
                    "description": string;
                };
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveyRejection": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "explanation": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveyResults": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "status": {
                    "type": string;
                    "description": string;
                };
                "surveyUrlId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveysDeleteResponse": {
            "id": string;
            "type": string;
            "properties": {
                "requestId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveysListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "pageInfo": {
                    "$ref": string;
                };
                "requestId": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "tokenPagination": {
                    "$ref": string;
                };
            };
        };
        "SurveysStartRequest": {
            "id": string;
            "type": string;
            "properties": {
                "maxCostPerResponseNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SurveysStartResponse": {
            "id": string;
            "type": string;
            "properties": {
                "requestId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SurveysStopResponse": {
            "id": string;
            "type": string;
            "properties": {
                "requestId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TokenPagination": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                };
                "previousPageToken": {
                    "type": string;
                };
            };
        };
    };
    "resources": {
        "results": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "surveyUrlId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                };
            };
        };
        "surveys": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "surveyUrlId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "surveyUrlId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "format": string;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "format": string;
                            "location": string;
                        };
                        "token": {
                            "type": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "start": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "resourceId": {
                            "type": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "resourceId": {
                            "type": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "surveyUrlId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=surveys-v2.d.ts.map