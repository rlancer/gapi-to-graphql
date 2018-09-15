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
                "https://www.googleapis.com/auth/blogger": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Blog": {
            "id": string;
            "type": string;
            "properties": {
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
                "locale": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "country": {
                            "type": string;
                            "description": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                        };
                        "variant": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "pages": {
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
                "posts": {
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
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BlogList": {
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
        "Comment": {
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
                "blog": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                    "format": string;
                };
                "inReplyTo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "post": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
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
            };
        };
        "CommentList": {
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
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Page": {
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
                "blog": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
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
            };
        };
        "PageList": {
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
        "Post": {
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
                "blog": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "published": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PostList": {
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
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "User": {
            "id": string;
            "type": string;
            "properties": {
                "about": {
                    "type": string;
                    "description": string;
                };
                "blogs": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "selfLink": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "locale": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "country": {
                            "type": string;
                            "description": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                        };
                        "variant": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "selfLink": {
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
    "resources": {
        "blogs": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "blogId": {
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
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "commentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "postId": {
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
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fetchBodies": {
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
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "postId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "startDate": {
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
        "pages": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "pageId": {
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
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fetchBodies": {
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
        "posts": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "postId": {
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
                        "blogId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fetchBodies": {
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
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startDate": {
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
        "users": {
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
            };
            "resources": {
                "blogs": {
                    "methods": {
                        "list": {
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
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=blogger-v2.d.ts.map