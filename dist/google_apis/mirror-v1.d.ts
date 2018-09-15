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
    "labels": string[];
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
                "https://www.googleapis.com/auth/glass.location": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/glass.timeline": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Account": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authTokens": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "features": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "password": {
                    "type": string;
                };
                "userData": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Attachment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentType": {
                    "type": string;
                    "description": string;
                };
                "contentUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isProcessingContent": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AttachmentsListResponse": {
            "id": string;
            "type": string;
            "description": string;
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
        "AuthToken": {
            "id": string;
            "type": string;
            "properties": {
                "authToken": {
                    "type": string;
                };
                "type": {
                    "type": string;
                };
            };
        };
        "Command": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Contact": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acceptCommands": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "acceptTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "displayName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "imageUrls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "priority": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sharingFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "source": {
                    "type": string;
                    "description": string;
                };
                "speakableName": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ContactsListResponse": {
            "id": string;
            "type": string;
            "description": string;
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
        "Location": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accuracy": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "address": {
                    "type": string;
                    "description": string;
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
                "timestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "LocationsListResponse": {
            "id": string;
            "type": string;
            "description": string;
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
        "MenuItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "contextual_command": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "payload": {
                    "type": string;
                    "description": string;
                };
                "removeWhenSelected": {
                    "type": string;
                    "description": string;
                };
                "values": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MenuValue": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "iconUrl": {
                    "type": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Notification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "collection": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                    "description": string;
                };
                "operation": {
                    "type": string;
                    "description": string;
                };
                "userActions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "userToken": {
                    "type": string;
                    "description": string;
                };
                "verifyToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "NotificationConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deliveryTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "level": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Setting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Subscription": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "callbackUrl": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "collection": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
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
                "notification": {
                    "$ref": string;
                    "description": string;
                };
                "operation": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userToken": {
                    "type": string;
                    "description": string;
                };
                "verifyToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SubscriptionsListResponse": {
            "id": string;
            "type": string;
            "description": string;
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
        "TimelineItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attachments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bundleId": {
                    "type": string;
                    "description": string;
                };
                "canonicalUrl": {
                    "type": string;
                    "description": string;
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creator": {
                    "$ref": string;
                    "description": string;
                };
                "displayTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "html": {
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
                };
                "isBundleCover": {
                    "type": string;
                    "description": string;
                };
                "isDeleted": {
                    "type": string;
                    "description": string;
                };
                "isPinned": {
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
                "menuItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "notification": {
                    "$ref": string;
                    "description": string;
                };
                "pinScore": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "recipients": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "sourceItemId": {
                    "type": string;
                    "description": string;
                };
                "speakableText": {
                    "type": string;
                    "description": string;
                };
                "speakableType": {
                    "type": string;
                    "description": string;
                };
                "text": {
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
        "TimelineListResponse": {
            "id": string;
            "type": string;
            "description": string;
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
            };
        };
        "UserAction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "payload": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserData": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
    };
    "resources": {
        "accounts": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "accountType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "userToken": {
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
                };
            };
        };
        "contacts": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "id": {
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
                        "id": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
        "locations": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "settings": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
        "subscriptions": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "id": {
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
        "timeline": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "id": {
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
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "maxSize": string;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bundleId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                        "pinnedOnly": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sourceItemId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
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
                        "maxSize": string;
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
            "resources": {
                "attachments": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "attachmentId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "itemId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
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
                                "attachmentId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "itemId": {
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
                            "supportsMediaDownload": boolean;
                        };
                        "insert": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "itemId": {
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
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
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "itemId": {
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
    };
};
export default _default;
//# sourceMappingURL=mirror-v1.d.ts.map