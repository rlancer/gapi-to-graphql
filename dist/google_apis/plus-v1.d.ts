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
                "https://www.googleapis.com/auth/plus.login": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.me": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.profile": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Acl": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
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
        "Activity": {
            "id": string;
            "type": string;
            "properties": {
                "access": {
                    "$ref": string;
                    "description": string;
                };
                "actor": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "clientSpecificActorInfo": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "youtubeActorInfo": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "channelId": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                        "displayName": {
                            "type": string;
                            "description": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                        };
                        "image": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "url": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "name": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "familyName": {
                                    "type": string;
                                    "description": string;
                                };
                                "givenName": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                        "verification": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "adHocVerified": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                    };
                };
                "address": {
                    "type": string;
                    "description": string;
                };
                "annotation": {
                    "type": string;
                    "description": string;
                };
                "crosspostSource": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "geocode": {
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
                "location": {
                    "$ref": string;
                    "description": string;
                };
                "object": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "actor": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "clientSpecificActorInfo": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "youtubeActorInfo": {
                                            "type": string;
                                            "description": string;
                                            "properties": {
                                                "channelId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                        };
                                    };
                                };
                                "displayName": {
                                    "type": string;
                                    "description": string;
                                };
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                                "image": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "url": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                                "url": {
                                    "type": string;
                                    "description": string;
                                };
                                "verification": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "adHocVerified": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                        "attachments": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "content": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "displayName": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "embed": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "url": {
                                                "type": string;
                                                "description": string;
                                            };
                                        };
                                    };
                                    "fullImage": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "height": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "url": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "width": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                        };
                                    };
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "image": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "height": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "url": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "width": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                        };
                                    };
                                    "objectType": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "thumbnails": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "description": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "image": {
                                                    "type": string;
                                                    "description": string;
                                                    "properties": {
                                                        "height": {
                                                            "type": string;
                                                            "description": string;
                                                            "format": string;
                                                        };
                                                        "type": {
                                                            "type": string;
                                                            "description": string;
                                                        };
                                                        "url": {
                                                            "type": string;
                                                            "description": string;
                                                        };
                                                        "width": {
                                                            "type": string;
                                                            "description": string;
                                                            "format": string;
                                                        };
                                                    };
                                                };
                                                "url": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                        };
                                    };
                                    "url": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                        "content": {
                            "type": string;
                            "description": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                        };
                        "objectType": {
                            "type": string;
                            "description": string;
                        };
                        "originalContent": {
                            "type": string;
                            "description": string;
                        };
                        "plusoners": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "selfLink": {
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
                        "replies": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "selfLink": {
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
                        "resharers": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "selfLink": {
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
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "placeId": {
                    "type": string;
                    "description": string;
                };
                "placeName": {
                    "type": string;
                    "description": string;
                };
                "provider": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "title": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "published": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "radius": {
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
                "url": {
                    "type": string;
                    "description": string;
                };
                "verb": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ActivityFeed": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
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
                "nextLink": {
                    "type": string;
                    "description": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
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
            };
        };
        "Comment": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "clientSpecificActorInfo": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "youtubeActorInfo": {
                                    "type": string;
                                    "description": string;
                                    "properties": {
                                        "channelId": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                        "displayName": {
                            "type": string;
                            "description": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                        };
                        "image": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "url": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                        "verification": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "adHocVerified": {
                                    "type": string;
                                    "description": string;
                                };
                            };
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
                "inReplyTo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "url": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "object": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "content": {
                            "type": string;
                            "description": string;
                        };
                        "objectType": {
                            "type": string;
                            "description": string;
                            "default": string;
                        };
                        "originalContent": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "plusoners": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "totalItems": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "published": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "verb": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "CommentFeed": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
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
                "nextLink": {
                    "type": string;
                    "description": string;
                };
                "nextPageToken": {
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
            };
        };
        "PeopleFeed": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "title": {
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
        "Person": {
            "id": string;
            "type": string;
            "properties": {
                "aboutMe": {
                    "type": string;
                    "description": string;
                };
                "ageRange": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "max": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "min": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "birthday": {
                    "type": string;
                    "description": string;
                };
                "braggingRights": {
                    "type": string;
                    "description": string;
                };
                "circledByCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cover": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "coverInfo": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "leftImageOffset": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "topImageOffset": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                            };
                        };
                        "coverPhoto": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                    "description": string;
                                };
                                "width": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                            };
                        };
                        "layout": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "currentLocation": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "domain": {
                    "type": string;
                    "description": string;
                };
                "emails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "value": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "gender": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "image": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "isDefault": {
                            "type": string;
                            "description": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "isPlusUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "familyName": {
                            "type": string;
                            "description": string;
                        };
                        "formatted": {
                            "type": string;
                            "description": string;
                        };
                        "givenName": {
                            "type": string;
                            "description": string;
                        };
                        "honorificPrefix": {
                            "type": string;
                            "description": string;
                        };
                        "honorificSuffix": {
                            "type": string;
                            "description": string;
                        };
                        "middleName": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "nickname": {
                    "type": string;
                    "description": string;
                };
                "objectType": {
                    "type": string;
                    "description": string;
                };
                "occupation": {
                    "type": string;
                    "description": string;
                };
                "organizations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "department": {
                                "type": string;
                                "description": string;
                            };
                            "description": {
                                "type": string;
                                "description": string;
                            };
                            "endDate": {
                                "type": string;
                                "description": string;
                            };
                            "location": {
                                "type": string;
                                "description": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "primary": {
                                "type": string;
                                "description": string;
                            };
                            "startDate": {
                                "type": string;
                                "description": string;
                            };
                            "title": {
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
                "placesLived": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "primary": {
                                "type": string;
                                "description": string;
                            };
                            "value": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "plusOneCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "relationshipStatus": {
                    "type": string;
                    "description": string;
                };
                "skills": {
                    "type": string;
                    "description": string;
                };
                "tagline": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "urls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "label": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "value": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "verified": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Place": {
            "id": string;
            "type": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "formatted": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "displayName": {
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
                "position": {
                    "type": string;
                    "description": string;
                    "properties": {
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
                    };
                };
            };
        };
        "PlusAclentryResource": {
            "id": string;
            "type": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "id": {
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
    "resources": {
        "activities": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "activityId": {
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
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                "search": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "query": {
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
        "comments": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "commentId": {
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
                        "activityId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "people": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
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
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "pageToken": {
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
                "listByActivity": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "activityId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "search": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "query": {
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
export default _default;
//# sourceMappingURL=plus-v1.d.ts.map