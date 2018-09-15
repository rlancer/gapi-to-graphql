declare const _default: {
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "TextButton": {
            "description": string;
            "type": string;
            "properties": {
                "onClick": {
                    "$ref": string;
                    "description": string;
                };
                "text": {
                    "description": string;
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
        "KeyValue": {
            "description": string;
            "type": string;
            "properties": {
                "topLabel": {
                    "description": string;
                    "type": string;
                };
                "iconUrl": {
                    "description": string;
                    "type": string;
                };
                "button": {
                    "$ref": string;
                    "description": string;
                };
                "content": {
                    "description": string;
                    "type": string;
                };
                "bottomLabel": {
                    "description": string;
                    "type": string;
                };
                "icon": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "contentMultiline": {
                    "description": string;
                    "type": string;
                };
                "onClick": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "Thread": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Section": {
            "description": string;
            "type": string;
            "properties": {
                "header": {
                    "description": string;
                    "type": string;
                };
                "widgets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Button": {
            "description": string;
            "type": string;
            "properties": {
                "textButton": {
                    "description": string;
                    "$ref": string;
                };
                "imageButton": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "OpenLink": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListMembershipsResponse": {
            "type": string;
            "properties": {
                "memberships": {
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
        "UserMentionMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "user": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CardAction": {
            "description": string;
            "type": string;
            "properties": {
                "onClick": {
                    "description": string;
                    "$ref": string;
                };
                "actionLabel": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FormAction": {
            "description": string;
            "type": string;
            "properties": {
                "actionMethodName": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Image": {
            "description": string;
            "type": string;
            "properties": {
                "onClick": {
                    "$ref": string;
                    "description": string;
                };
                "aspectRatio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "imageUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Annotation": {
            "description": string;
            "type": string;
            "properties": {
                "length": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userMention": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "WidgetMarkup": {
            "description": string;
            "type": string;
            "properties": {
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "buttons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "textParagraph": {
                    "description": string;
                    "$ref": string;
                };
                "keyValue": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ActionResponse": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Space": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Card": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "sections": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cardActions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "header": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Message": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "previewText": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "space": {
                    "$ref": string;
                    "description": string;
                };
                "argumentText": {
                    "description": string;
                    "type": string;
                };
                "fallbackText": {
                    "description": string;
                    "type": string;
                };
                "actionResponse": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sender": {
                    "description": string;
                    "$ref": string;
                };
                "cards": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "thread": {
                    "description": string;
                    "$ref": string;
                };
                "annotations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DeprecatedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "threadKey": {
                    "description": string;
                    "type": string;
                };
                "token": {
                    "description": string;
                    "type": string;
                };
                "eventTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "$ref": string;
                    "description": string;
                };
                "action": {
                    "description": string;
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "$ref": string;
                };
                "space": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "configCompleteRedirectUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OnClick": {
            "description": string;
            "type": string;
            "properties": {
                "openLink": {
                    "$ref": string;
                    "description": string;
                };
                "action": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ActionParameter": {
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
        "User": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextParagraph": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "type": string;
                };
            };
            "id": string;
        };
        "Membership": {
            "description": string;
            "type": string;
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "member": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ImageButton": {
            "description": string;
            "type": string;
            "properties": {
                "icon": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "onClick": {
                    "description": string;
                    "$ref": string;
                };
                "iconUrl": {
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
        "CardHeader": {
            "type": string;
            "properties": {
                "imageUrl": {
                    "description": string;
                    "type": string;
                };
                "imageStyle": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListSpacesResponse": {
            "type": string;
            "properties": {
                "spaces": {
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
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "canonicalName": string;
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "spaces": {
            "methods": {
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "pageSize": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
            "resources": {
                "members": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                    };
                };
                "messages": {
                    "methods": {
                        "delete": {
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
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "update": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                        "create": {
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
                            "parameters": {
                                "parent": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "threadKey": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "quotaUser": {
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
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
};
export default _default;
//# sourceMappingURL=chat-v1.d.ts.map