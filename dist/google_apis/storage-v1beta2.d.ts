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
                "https://www.googleapis.com/auth/devstorage.full_control": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.read_only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/devstorage.read_write": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Bucket": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "cors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "maxAgeSeconds": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "method": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "origin": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "responseHeader": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
                "defaultObjectAcl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
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
                "lifecycle": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "rule": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "action": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                        };
                                    };
                                    "condition": {
                                        "type": string;
                                        "description": string;
                                        "properties": {
                                            "age": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                            "createdBefore": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                            "isLive": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "numNewerVersions": {
                                                "type": string;
                                                "description": string;
                                                "format": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "logging": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "logBucket": {
                            "type": string;
                            "description": string;
                        };
                        "logObjectPrefix": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "metageneration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "owner": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "entity": {
                            "type": string;
                            "description": string;
                        };
                        "entityId": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "storageClass": {
                    "type": string;
                    "description": string;
                };
                "timeCreated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "versioning": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "enabled": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "website": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "mainPageSuffix": {
                            "type": string;
                            "description": string;
                        };
                        "notFoundPage": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "BucketAccessControl": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bucket": {
                    "type": string;
                    "description": string;
                };
                "domain": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "entity": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "entityId": {
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
                "role": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BucketAccessControls": {
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
        "Buckets": {
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
        "Channel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "expiration": {
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
                "params": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "payload": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
                "resourceUri": {
                    "type": string;
                    "description": string;
                };
                "token": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ComposeRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "destination": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "sourceObjects": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "generation": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                                "annotations": {
                                    "required": string[];
                                };
                            };
                            "objectPreconditions": {
                                "type": string;
                                "description": string;
                                "properties": {
                                    "ifGenerationMatch": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                };
                            };
                        };
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Object": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "bucket": {
                    "type": string;
                    "description": string;
                };
                "cacheControl": {
                    "type": string;
                    "description": string;
                };
                "componentCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "contentDisposition": {
                    "type": string;
                    "description": string;
                };
                "contentEncoding": {
                    "type": string;
                    "description": string;
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                };
                "contentType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "crc32c": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "generation": {
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
                "md5Hash": {
                    "type": string;
                    "description": string;
                };
                "mediaLink": {
                    "type": string;
                    "description": string;
                };
                "metadata": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "metageneration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "owner": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "entity": {
                            "type": string;
                            "description": string;
                        };
                        "entityId": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "size": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "storageClass": {
                    "type": string;
                    "description": string;
                };
                "timeDeleted": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ObjectAccessControl": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bucket": {
                    "type": string;
                    "description": string;
                };
                "domain": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "entity": {
                    "type": string;
                    "description": string;
                };
                "entityId": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "generation": {
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
                "object": {
                    "type": string;
                    "description": string;
                };
                "role": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ObjectAccessControls": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Objects": {
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
                "prefixes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
    };
    "resources": {
        "bucketAccessControls": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
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
                        "bucket": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
        "buckets": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "channels": {
            "methods": {
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "defaultObjectAccessControls": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
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
        "objectAccessControls": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "entity": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
        "objects": {
            "methods": {
                "compose": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "destinationBucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "destinationObject": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                "copy": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "destinationBucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "destinationObject": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifSourceGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifSourceGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifSourceMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifSourceMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sourceBucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sourceGeneration": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "sourceObject": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
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
                    "supportsMediaDownload": boolean;
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "name": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "delimiter": {
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
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "prefix": {
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
                        "versions": {
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
                    "supportsSubscription": boolean;
                };
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "generation": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifGenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ifMetagenerationNotMatch": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "object": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                "watchAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "delimiter": {
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
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "prefix": {
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
                        "versions": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=storage-v1beta2.d.ts.map