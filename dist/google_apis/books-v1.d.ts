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
                "https://www.googleapis.com/auth/books": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Annotation": {
            "id": string;
            "type": string;
            "properties": {
                "afterSelectedText": {
                    "type": string;
                    "description": string;
                };
                "beforeSelectedText": {
                    "type": string;
                    "description": string;
                };
                "clientVersionRanges": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "cfiRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "contentVersion": {
                            "type": string;
                            "description": string;
                        };
                        "gbImageRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "gbTextRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "imageCfiRange": {
                            "$ref": string;
                            "description": string;
                        };
                    };
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currentVersionRanges": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "cfiRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "contentVersion": {
                            "type": string;
                            "description": string;
                        };
                        "gbImageRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "gbTextRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "imageCfiRange": {
                            "$ref": string;
                            "description": string;
                        };
                    };
                };
                "data": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "highlightStyle": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "layerId": {
                    "type": string;
                    "description": string;
                };
                "layerSummary": {
                    "type": string;
                    "properties": {
                        "allowedCharacterCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "limitType": {
                            "type": string;
                            "description": string;
                        };
                        "remainingCharacterCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "pageIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "selectedText": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Annotationdata": {
            "id": string;
            "type": string;
            "properties": {
                "annotationType": {
                    "type": string;
                    "description": string;
                };
                "data": {
                    "type": string;
                };
                "encoded_data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "layerId": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Annotations": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AnnotationsSummary": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "default": string;
                };
                "layers": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "allowedCharacterCount": {
                                "type": string;
                                "format": string;
                            };
                            "layerId": {
                                "type": string;
                            };
                            "limitType": {
                                "type": string;
                            };
                            "remainingCharacterCount": {
                                "type": string;
                                "format": string;
                            };
                            "updated": {
                                "type": string;
                                "format": string;
                            };
                        };
                    };
                };
            };
        };
        "Annotationsdata": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "BooksAnnotationsRange": {
            "id": string;
            "type": string;
            "properties": {
                "endOffset": {
                    "type": string;
                    "description": string;
                };
                "endPosition": {
                    "type": string;
                    "description": string;
                };
                "startOffset": {
                    "type": string;
                    "description": string;
                };
                "startPosition": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BooksCloudloadingResource": {
            "id": string;
            "type": string;
            "properties": {
                "author": {
                    "type": string;
                };
                "processingState": {
                    "type": string;
                };
                "title": {
                    "type": string;
                };
                "volumeId": {
                    "type": string;
                };
            };
        };
        "BooksVolumesRecommendedRateResponse": {
            "id": string;
            "type": string;
            "properties": {
                "consistency_token": {
                    "type": string;
                };
            };
        };
        "Bookshelf": {
            "id": string;
            "type": string;
            "properties": {
                "access": {
                    "type": string;
                    "description": string;
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumesLastUpdated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Bookshelves": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Category": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "badgeUrl": {
                                "type": string;
                            };
                            "categoryId": {
                                "type": string;
                            };
                            "name": {
                                "type": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "ConcurrentAccessRestriction": {
            "id": string;
            "type": string;
            "properties": {
                "deviceAllowed": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxConcurrentDevices": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
                "nonce": {
                    "type": string;
                    "description": string;
                };
                "reasonCode": {
                    "type": string;
                    "description": string;
                };
                "restricted": {
                    "type": string;
                    "description": string;
                };
                "signature": {
                    "type": string;
                    "description": string;
                };
                "source": {
                    "type": string;
                    "description": string;
                };
                "timeWindowSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Dictlayerdata": {
            "id": string;
            "type": string;
            "properties": {
                "common": {
                    "type": string;
                    "properties": {
                        "title": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "dict": {
                    "type": string;
                    "properties": {
                        "source": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "attribution": {
                                    "type": string;
                                };
                                "url": {
                                    "type": string;
                                };
                            };
                        };
                        "words": {
                            "type": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "derivatives": {
                                        "type": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "source": {
                                                    "type": string;
                                                    "properties": {
                                                        "attribution": {
                                                            "type": string;
                                                        };
                                                        "url": {
                                                            "type": string;
                                                        };
                                                    };
                                                };
                                                "text": {
                                                    "type": string;
                                                };
                                            };
                                        };
                                    };
                                    "examples": {
                                        "type": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "source": {
                                                    "type": string;
                                                    "properties": {
                                                        "attribution": {
                                                            "type": string;
                                                        };
                                                        "url": {
                                                            "type": string;
                                                        };
                                                    };
                                                };
                                                "text": {
                                                    "type": string;
                                                };
                                            };
                                        };
                                    };
                                    "senses": {
                                        "type": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "conjugations": {
                                                    "type": string;
                                                    "items": {
                                                        "type": string;
                                                        "properties": {
                                                            "type": {
                                                                "type": string;
                                                            };
                                                            "value": {
                                                                "type": string;
                                                            };
                                                        };
                                                    };
                                                };
                                                "definitions": {
                                                    "type": string;
                                                    "items": {
                                                        "type": string;
                                                        "properties": {
                                                            "definition": {
                                                                "type": string;
                                                            };
                                                            "examples": {
                                                                "type": string;
                                                                "items": {
                                                                    "type": string;
                                                                    "properties": {
                                                                        "source": {
                                                                            "type": string;
                                                                            "properties": {
                                                                                "attribution": {
                                                                                    "type": string;
                                                                                };
                                                                                "url": {
                                                                                    "type": string;
                                                                                };
                                                                            };
                                                                        };
                                                                        "text": {
                                                                            "type": string;
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                "partOfSpeech": {
                                                    "type": string;
                                                };
                                                "pronunciation": {
                                                    "type": string;
                                                };
                                                "pronunciationUrl": {
                                                    "type": string;
                                                };
                                                "source": {
                                                    "type": string;
                                                    "properties": {
                                                        "attribution": {
                                                            "type": string;
                                                        };
                                                        "url": {
                                                            "type": string;
                                                        };
                                                    };
                                                };
                                                "syllabification": {
                                                    "type": string;
                                                };
                                                "synonyms": {
                                                    "type": string;
                                                    "items": {
                                                        "type": string;
                                                        "properties": {
                                                            "source": {
                                                                "type": string;
                                                                "properties": {
                                                                    "attribution": {
                                                                        "type": string;
                                                                    };
                                                                    "url": {
                                                                        "type": string;
                                                                    };
                                                                };
                                                            };
                                                            "text": {
                                                                "type": string;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    "source": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "attribution": {
                                                "type": string;
                                            };
                                            "url": {
                                                "type": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
            };
        };
        "Discoveryclusters": {
            "id": string;
            "type": string;
            "properties": {
                "clusters": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "banner_with_content_container": {
                                "type": string;
                                "properties": {
                                    "fillColorArgb": {
                                        "type": string;
                                    };
                                    "imageUrl": {
                                        "type": string;
                                    };
                                    "maskColorArgb": {
                                        "type": string;
                                    };
                                    "moreButtonText": {
                                        "type": string;
                                    };
                                    "moreButtonUrl": {
                                        "type": string;
                                    };
                                    "textColorArgb": {
                                        "type": string;
                                    };
                                };
                            };
                            "subTitle": {
                                "type": string;
                            };
                            "title": {
                                "type": string;
                            };
                            "totalVolumes": {
                                "type": string;
                                "format": string;
                            };
                            "uid": {
                                "type": string;
                            };
                            "volumes": {
                                "type": string;
                                "items": {
                                    "$ref": string;
                                };
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "totalClusters": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "DownloadAccessRestriction": {
            "id": string;
            "type": string;
            "properties": {
                "deviceAllowed": {
                    "type": string;
                    "description": string;
                };
                "downloadsAcquired": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "justAcquired": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxDownloadDevices": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
                "nonce": {
                    "type": string;
                    "description": string;
                };
                "reasonCode": {
                    "type": string;
                    "description": string;
                };
                "restricted": {
                    "type": string;
                    "description": string;
                };
                "signature": {
                    "type": string;
                    "description": string;
                };
                "source": {
                    "type": string;
                    "description": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DownloadAccesses": {
            "id": string;
            "type": string;
            "properties": {
                "downloadAccessList": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "FamilyInfo": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "membership": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "acquirePermission": {
                            "type": string;
                            "description": string;
                        };
                        "ageGroup": {
                            "type": string;
                            "description": string;
                        };
                        "allowedMaturityRating": {
                            "type": string;
                            "description": string;
                        };
                        "isInFamily": {
                            "type": string;
                        };
                        "role": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "Geolayerdata": {
            "id": string;
            "type": string;
            "properties": {
                "common": {
                    "type": string;
                    "properties": {
                        "lang": {
                            "type": string;
                            "description": string;
                        };
                        "previewImageUrl": {
                            "type": string;
                            "description": string;
                        };
                        "snippet": {
                            "type": string;
                            "description": string;
                        };
                        "snippetUrl": {
                            "type": string;
                            "description": string;
                        };
                        "title": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "geo": {
                    "type": string;
                    "properties": {
                        "boundary": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "latitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "longitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                            };
                        };
                        "cachePolicy": {
                            "type": string;
                            "description": string;
                        };
                        "countryCode": {
                            "type": string;
                            "description": string;
                        };
                        "latitude": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "longitude": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "mapType": {
                            "type": string;
                            "description": string;
                        };
                        "viewport": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "hi": {
                                    "type": string;
                                    "properties": {
                                        "latitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "longitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                                "lo": {
                                    "type": string;
                                    "properties": {
                                        "latitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "longitude": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                            };
                        };
                        "zoom": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
            };
        };
        "Layersummaries": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Layersummary": {
            "id": string;
            "type": string;
            "properties": {
                "annotationCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "annotationTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "annotationsDataLink": {
                    "type": string;
                    "description": string;
                };
                "annotationsLink": {
                    "type": string;
                    "description": string;
                };
                "contentVersion": {
                    "type": string;
                    "description": string;
                };
                "dataCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "layerId": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeAnnotationsVersion": {
                    "type": string;
                    "description": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Metadata": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "download_url": {
                                "type": string;
                            };
                            "encrypted_key": {
                                "type": string;
                            };
                            "language": {
                                "type": string;
                            };
                            "size": {
                                "type": string;
                                "format": string;
                            };
                            "version": {
                                "type": string;
                                "format": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Notification": {
            "id": string;
            "type": string;
            "properties": {
                "body": {
                    "type": string;
                };
                "crmExperimentIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "doc_id": {
                    "type": string;
                };
                "doc_type": {
                    "type": string;
                };
                "dont_show_notification": {
                    "type": string;
                };
                "iconUrl": {
                    "type": string;
                };
                "is_document_mature": {
                    "type": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "notificationGroup": {
                    "type": string;
                };
                "notification_type": {
                    "type": string;
                };
                "pcampaign_id": {
                    "type": string;
                };
                "reason": {
                    "type": string;
                };
                "show_notification_settings_action": {
                    "type": string;
                };
                "targetUrl": {
                    "type": string;
                };
                "title": {
                    "type": string;
                };
            };
        };
        "Offers": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "artUrl": {
                                "type": string;
                            };
                            "gservicesKey": {
                                "type": string;
                            };
                            "id": {
                                "type": string;
                            };
                            "items": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "author": {
                                            "type": string;
                                        };
                                        "canonicalVolumeLink": {
                                            "type": string;
                                        };
                                        "coverUrl": {
                                            "type": string;
                                        };
                                        "description": {
                                            "type": string;
                                        };
                                        "title": {
                                            "type": string;
                                        };
                                        "volumeId": {
                                            "type": string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "ReadingPosition": {
            "id": string;
            "type": string;
            "properties": {
                "epubCfiPosition": {
                    "type": string;
                    "description": string;
                };
                "gbImagePosition": {
                    "type": string;
                    "description": string;
                };
                "gbTextPosition": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "pdfPosition": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RequestAccess": {
            "id": string;
            "type": string;
            "properties": {
                "concurrentAccess": {
                    "$ref": string;
                    "description": string;
                };
                "downloadAccess": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Review": {
            "id": string;
            "type": string;
            "properties": {
                "author": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "displayName": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "content": {
                    "type": string;
                    "description": string;
                };
                "date": {
                    "type": string;
                    "description": string;
                };
                "fullTextUrl": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "rating": {
                    "type": string;
                    "description": string;
                };
                "source": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "description": {
                            "type": string;
                            "description": string;
                        };
                        "extraDescription": {
                            "type": string;
                            "description": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Series": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "series": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "bannerImageUrl": {
                                "type": string;
                            };
                            "imageUrl": {
                                "type": string;
                            };
                            "seriesId": {
                                "type": string;
                            };
                            "seriesType": {
                                "type": string;
                            };
                            "title": {
                                "type": string;
                            };
                        };
                    };
                };
            };
        };
        "Seriesmembership": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "member": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                };
            };
        };
        "Usersettings": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "notesExport": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "folderName": {
                            "type": string;
                        };
                        "isEnabled": {
                            "type": string;
                        };
                    };
                };
                "notification": {
                    "type": string;
                    "properties": {
                        "matchMyInterests": {
                            "type": string;
                            "properties": {
                                "opted_state": {
                                    "type": string;
                                };
                            };
                        };
                        "moreFromAuthors": {
                            "type": string;
                            "properties": {
                                "opted_state": {
                                    "type": string;
                                };
                            };
                        };
                        "moreFromSeries": {
                            "type": string;
                            "properties": {
                                "opted_state": {
                                    "type": string;
                                };
                            };
                        };
                        "priceDrop": {
                            "type": string;
                            "properties": {
                                "opted_state": {
                                    "type": string;
                                };
                            };
                        };
                        "rewardExpirations": {
                            "type": string;
                            "properties": {
                                "opted_state": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
            };
        };
        "Volume": {
            "id": string;
            "type": string;
            "properties": {
                "accessInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "accessViewStatus": {
                            "type": string;
                            "description": string;
                        };
                        "country": {
                            "type": string;
                            "description": string;
                        };
                        "downloadAccess": {
                            "$ref": string;
                            "description": string;
                        };
                        "driveImportedContentLink": {
                            "type": string;
                            "description": string;
                        };
                        "embeddable": {
                            "type": string;
                            "description": string;
                        };
                        "epub": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "acsTokenLink": {
                                    "type": string;
                                    "description": string;
                                };
                                "downloadLink": {
                                    "type": string;
                                    "description": string;
                                };
                                "isAvailable": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "explicitOfflineLicenseManagement": {
                            "type": string;
                            "description": string;
                        };
                        "pdf": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "acsTokenLink": {
                                    "type": string;
                                    "description": string;
                                };
                                "downloadLink": {
                                    "type": string;
                                    "description": string;
                                };
                                "isAvailable": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "publicDomain": {
                            "type": string;
                            "description": string;
                        };
                        "quoteSharingAllowed": {
                            "type": string;
                            "description": string;
                        };
                        "textToSpeechPermission": {
                            "type": string;
                            "description": string;
                        };
                        "viewOrderUrl": {
                            "type": string;
                            "description": string;
                        };
                        "viewability": {
                            "type": string;
                            "description": string;
                        };
                        "webReaderLink": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "layerInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "layers": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "layerId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "volumeAnnotationsVersion": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "recommendedInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "explanation": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "saleInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "buyLink": {
                            "type": string;
                            "description": string;
                        };
                        "country": {
                            "type": string;
                            "description": string;
                        };
                        "isEbook": {
                            "type": string;
                            "description": string;
                        };
                        "listPrice": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "amount": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "currencyCode": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "offers": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "finskyOfferType": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                    "giftable": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "listPrice": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "amountInMicros": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "currencyCode": {
                                                "type": string;
                                            };
                                        };
                                    };
                                    "rentalDuration": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "count": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "unit": {
                                                "type": string;
                                            };
                                        };
                                    };
                                    "retailPrice": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "amountInMicros": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "currencyCode": {
                                                "type": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        "onSaleDate": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "retailPrice": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "amount": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "currencyCode": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "saleability": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "searchInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "textSnippet": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "userInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "acquiredTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "acquisitionType": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "copy": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "allowedCharacterCount": {
                                    "type": string;
                                    "format": string;
                                };
                                "limitType": {
                                    "type": string;
                                };
                                "remainingCharacterCount": {
                                    "type": string;
                                    "format": string;
                                };
                                "updated": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "entitlementType": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "familySharing": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "familyRole": {
                                    "type": string;
                                    "description": string;
                                };
                                "isSharingAllowed": {
                                    "type": string;
                                    "description": string;
                                };
                                "isSharingDisabledByFop": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "isFamilySharedFromUser": {
                            "type": string;
                            "description": string;
                        };
                        "isFamilySharedToUser": {
                            "type": string;
                            "description": string;
                        };
                        "isFamilySharingAllowed": {
                            "type": string;
                            "description": string;
                        };
                        "isFamilySharingDisabledByFop": {
                            "type": string;
                            "description": string;
                        };
                        "isInMyBooks": {
                            "type": string;
                            "description": string;
                        };
                        "isPreordered": {
                            "type": string;
                            "description": string;
                        };
                        "isPurchased": {
                            "type": string;
                            "description": string;
                        };
                        "isUploaded": {
                            "type": string;
                            "description": string;
                        };
                        "readingPosition": {
                            "$ref": string;
                            "description": string;
                        };
                        "rentalPeriod": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "endUtcSec": {
                                    "type": string;
                                    "format": string;
                                };
                                "startUtcSec": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "rentalState": {
                            "type": string;
                            "description": string;
                        };
                        "review": {
                            "$ref": string;
                            "description": string;
                        };
                        "updated": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "userUploadedVolumeInfo": {
                            "type": string;
                            "properties": {
                                "processingState": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
                "volumeInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "allowAnonLogging": {
                            "type": string;
                            "description": string;
                        };
                        "authors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "averageRating": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "canonicalVolumeLink": {
                            "type": string;
                            "description": string;
                        };
                        "categories": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "comicsContent": {
                            "type": string;
                            "description": string;
                        };
                        "contentVersion": {
                            "type": string;
                            "description": string;
                        };
                        "description": {
                            "type": string;
                            "description": string;
                        };
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "description": string;
                                };
                                "thickness": {
                                    "type": string;
                                    "description": string;
                                };
                                "width": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "imageLinks": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "extraLarge": {
                                    "type": string;
                                    "description": string;
                                };
                                "large": {
                                    "type": string;
                                    "description": string;
                                };
                                "medium": {
                                    "type": string;
                                    "description": string;
                                };
                                "small": {
                                    "type": string;
                                    "description": string;
                                };
                                "smallThumbnail": {
                                    "type": string;
                                    "description": string;
                                };
                                "thumbnail": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "industryIdentifiers": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "identifier": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                        "infoLink": {
                            "type": string;
                            "description": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                        };
                        "mainCategory": {
                            "type": string;
                            "description": string;
                        };
                        "maturityRating": {
                            "type": string;
                        };
                        "pageCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "panelizationSummary": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "containsEpubBubbles": {
                                    "type": string;
                                };
                                "containsImageBubbles": {
                                    "type": string;
                                };
                                "epubBubbleVersion": {
                                    "type": string;
                                };
                                "imageBubbleVersion": {
                                    "type": string;
                                };
                            };
                        };
                        "previewLink": {
                            "type": string;
                            "description": string;
                        };
                        "printType": {
                            "type": string;
                            "description": string;
                        };
                        "printedPageCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "publishedDate": {
                            "type": string;
                            "description": string;
                        };
                        "publisher": {
                            "type": string;
                            "description": string;
                        };
                        "ratingsCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "readingModes": {
                            "type": string;
                            "description": string;
                        };
                        "samplePageCount": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "seriesInfo": {
                            "$ref": string;
                        };
                        "subtitle": {
                            "type": string;
                            "description": string;
                        };
                        "title": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "Volume2": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                };
            };
        };
        "Volumeannotation": {
            "id": string;
            "type": string;
            "properties": {
                "annotationDataId": {
                    "type": string;
                    "description": string;
                };
                "annotationDataLink": {
                    "type": string;
                    "description": string;
                };
                "annotationType": {
                    "type": string;
                    "description": string;
                };
                "contentRanges": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "cfiRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "contentVersion": {
                            "type": string;
                            "description": string;
                        };
                        "gbImageRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "gbTextRange": {
                            "$ref": string;
                            "description": string;
                        };
                    };
                };
                "data": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "layerId": {
                    "type": string;
                    "description": string;
                };
                "pageIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "selectedText": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "volumeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Volumeannotations": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Volumes": {
            "id": string;
            "type": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Volumeseriesinfo": {
            "id": string;
            "type": string;
            "properties": {
                "bookDisplayNumber": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "shortSeriesBookTitle": {
                    "type": string;
                    "description": string;
                };
                "volumeSeries": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "issue": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "issueDisplayNumber": {
                                            "type": string;
                                        };
                                        "issueOrderNumber": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                            };
                            "orderNumber": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "seriesBookType": {
                                "type": string;
                                "description": string;
                            };
                            "seriesId": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
            };
        };
    };
    "resources": {
        "bookshelves": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "shelf": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "userId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "userId": {
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
            };
            "resources": {
                "volumes": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "showPreorders": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "userId": {
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
                    };
                };
            };
        };
        "cloudloading": {
            "methods": {
                "addBook": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "drive_document_id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "mime_type": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "name": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "upload_client_token": {
                            "type": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "deleteBook": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "volumeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "updateBook": {
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
            };
        };
        "dictionary": {
            "methods": {
                "listOfflineMetadata": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "cpksver": {
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
            };
        };
        "familysharing": {
            "methods": {
                "getFamilyInfo": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "share": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "docId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "volumeId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "unshare": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "docId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "volumeId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
            };
        };
        "layers": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "contentVersion": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "summaryId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "volumeId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "contentVersion": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "volumeId": {
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
            };
            "resources": {
                "annotationData": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "allowWebDefinitions": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "annotationDataId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "h": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "layerId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "scale": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "w": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
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
                                "annotationDataId": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "h": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "layerId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "scale": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMax": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMin": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "w": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                };
                "volumeAnnotations": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "annotationId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "layerId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
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
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "endOffset": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "endPosition": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "layerId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "showDeleted": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startOffset": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startPosition": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMax": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMin": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeAnnotationsVersion": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
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
                    };
                };
            };
        };
        "myconfig": {
            "methods": {
                "getUserSettings": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "releaseDownloadAccess": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "cpksver": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "volumeIds": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "requestAccess": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "cpksver": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "licenseTypes": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "nonce": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "volumeId": {
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
                "syncVolumeLicenses": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "cpksver": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "features": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "includeNonComicsSeries": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "nonce": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "showPreorders": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "volumeIds": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "updateUserSettings": {
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
            };
        };
        "mylibrary": {
            "resources": {
                "annotations": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "annotationId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "insert": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "annotationId": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "country": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "showOnlySummaryInResponse": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
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
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "layerId": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "layerIds": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "showDeleted": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMax": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "updatedMin": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                        "summary": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "layerIds": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "volumeId": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "annotationId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
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
                "bookshelves": {
                    "methods": {
                        "addVolume": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "reason": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "clearVolumes": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
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
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                        "moveVolume": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "volumePosition": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "removeVolume": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "reason": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "shelf": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                    };
                    "resources": {
                        "volumes": {
                            "methods": {
                                "list": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "country": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "maxResults": {
                                            "type": string;
                                            "description": string;
                                            "format": string;
                                            "minimum": string;
                                            "location": string;
                                        };
                                        "projection": {
                                            "type": string;
                                            "description": string;
                                            "enum": string[];
                                            "enumDescriptions": string[];
                                            "location": string;
                                        };
                                        "q": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "shelf": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "showPreorders": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "source": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "startIndex": {
                                            "type": string;
                                            "description": string;
                                            "format": string;
                                            "minimum": string;
                                            "location": string;
                                        };
                                    };
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "scopes": string[];
                                };
                            };
                        };
                    };
                };
                "readingpositions": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
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
                        "setPosition": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "action": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "contentVersion": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "deviceCookie": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "position": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "timestamp": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                    };
                };
            };
        };
        "notification": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "notification_id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "onboarding": {
            "methods": {
                "listCategories": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listCategoryVolumes": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "categoryId": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxAllowedMaturityRating": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageSize": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "personalizedstream": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxAllowedMaturityRating": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "promooffer": {
            "methods": {
                "accept": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "androidId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "device": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "manufacturer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "model": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "offerId": {
                            "type": string;
                            "location": string;
                        };
                        "product": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "serial": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "volumeId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "dismiss": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "androidId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "device": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "manufacturer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "model": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "offerId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "product": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "serial": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "androidId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "device": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "manufacturer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "model": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "product": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "serial": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "series": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "series_id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "membership": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "page_size": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "page_token": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "series_id": {
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
                    };
                };
            };
        };
        "volumes": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "includeNonComicsSeries": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "partner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "user_library_consistent_read": {
                            "type": string;
                            "location": string;
                        };
                        "volumeId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "download": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "filter": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "langRestrict": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "libraryRestrict": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxAllowedMaturityRating": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "partner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "printType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "q": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "showPreorders": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
            "resources": {
                "associated": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "association": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxAllowedMaturityRating": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
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
                    };
                };
                "mybooks": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "acquireMethod": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "country": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "processingState": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                            };
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                    };
                };
                "recommended": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxAllowedMaturityRating": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                            };
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                        "rate": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "rating": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "volumeId": {
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
                    };
                };
                "useruploaded": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "locale": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
                                    "location": string;
                                };
                                "processingState": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "source": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startIndex": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "location": string;
                                };
                                "volumeId": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
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
    };
};
export default _default;
//# sourceMappingURL=books-v1.d.ts.map