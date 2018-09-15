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
                "https://www.googleapis.com/auth/plus.circles.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.circles.write": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.login": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.me": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.media.upload": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.profiles.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.stream.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.stream.write": {
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
                "domainRestricted": {
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
                                    "previewThumbnails": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "url": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                        };
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
                        "statusForViewer": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "canComment": {
                                    "type": string;
                                    "description": string;
                                };
                                "canPlusone": {
                                    "type": string;
                                    "description": string;
                                };
                                "canUpdate": {
                                    "type": string;
                                    "description": string;
                                };
                                "isPlusOned": {
                                    "type": string;
                                    "description": string;
                                };
                                "resharingDisabled": {
                                    "type": string;
                                    "description": string;
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
        "Audience": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "item": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "memberCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "visibility": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AudiencesFeed": {
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
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Circle": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
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
                "people": {
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CircleFeed": {
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
                "totalItems": {
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
        "Media": {
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
                    };
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "exif": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "time": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "height": {
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
                "mediaCreatedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "mediaUrl": {
                    "type": string;
                    "description": string;
                };
                "published": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sizeBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "streams": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "summary": {
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
                "videoDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoStatus": {
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
        "PlusDomainsAclentryResource": {
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
        "Videostream": {
            "id": string;
            "type": string;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "preview": {
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
            };
        };
        "audiences": {
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
            };
        };
        "circles": {
            "methods": {
                "addPeople": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "email": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
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
                    "parameters": {
                        "userId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
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
                "remove": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "removePeople": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "email": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userId": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
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
                "insert": {
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
        "media": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "collection": {
                            "type": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "protocols": {
                            "simple": {
                                "multipart": boolean;
                                "path": string;
                            };
                            "resumable": {
                                "multipart": boolean;
                                "path": string;
                            };
                        };
                    };
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
                "listByCircle": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "circleId": {
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
//# sourceMappingURL=plusDomains-v1.d.ts.map