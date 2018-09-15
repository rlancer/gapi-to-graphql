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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
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
                "billing": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "requesterPays": {
                            "type": string;
                            "description": string;
                        };
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
                "defaultEventBasedHold": {
                    "type": string;
                    "description": string;
                };
                "defaultObjectAcl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "encryption": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "defaultKmsKeyName": {
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
                "labels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
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
                                            "storageClass": {
                                                "type": string;
                                                "description": string;
                                            };
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
                                            "matchesPattern": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "matchesStorageClass": {
                                                "type": string;
                                                "description": string;
                                                "items": {
                                                    "type": string;
                                                };
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
                "projectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "retentionPolicy": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "effectiveTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "isLocked": {
                            "type": string;
                            "description": string;
                        };
                        "retentionPeriod": {
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
                "storageClass": {
                    "type": string;
                    "description": string;
                };
                "timeCreated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updated": {
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
                "projectTeam": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "projectNumber": {
                            "type": string;
                            "description": string;
                        };
                        "team": {
                            "type": string;
                            "description": string;
                        };
                    };
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
        "Notification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "custom_attributes": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "event_types": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
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
                "object_name_prefix": {
                    "type": string;
                    "description": string;
                };
                "payload_format": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "topic": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Notifications": {
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
                };
                "crc32c": {
                    "type": string;
                    "description": string;
                };
                "customerEncryption": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "encryptionAlgorithm": {
                            "type": string;
                            "description": string;
                        };
                        "keySha256": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventBasedHold": {
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
                "kmsKeyName": {
                    "type": string;
                    "description": string;
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
                "retentionExpirationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "temporaryHold": {
                    "type": string;
                    "description": string;
                };
                "timeCreated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeDeleted": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeStorageClassUpdated": {
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
                "projectTeam": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "projectNumber": {
                            "type": string;
                            "description": string;
                        };
                        "team": {
                            "type": string;
                            "description": string;
                        };
                    };
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
        "ObjectAccessControls": {
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
        "Policy": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bindings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "condition": {
                                "type": string;
                            };
                            "members": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                                "annotations": {
                                    "required": string[];
                                };
                            };
                            "role": {
                                "type": string;
                                "description": string;
                                "annotations": {
                                    "required": string[];
                                };
                            };
                        };
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RewriteResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "done": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "objectSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resource": {
                    "$ref": string;
                    "description": string;
                };
                "rewriteToken": {
                    "type": string;
                    "description": string;
                };
                "totalBytesRewritten": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ServiceAccount": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email_address": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TestIamPermissionsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "permissions": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                "getIamPolicy": {
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
                        "userProject": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "predefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "predefinedDefaultObjectAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "userProject": {
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
                        "userProject": {
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
                "lockRetentionPolicy": {
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
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "userProject": {
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
                        "predefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "predefinedDefaultObjectAcl": {
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
                        "userProject": {
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
                "setIamPolicy": {
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
                        "userProject": {
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
                "testIamPermissions": {
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
                        "permissions": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userProject": {
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
                        "predefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "predefinedDefaultObjectAcl": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
        "notifications": {
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
                        "notification": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "userProject": {
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
                        "bucket": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "notification": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                        "destinationPredefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "kmsKeyName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "userProject": {
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
                        "destinationPredefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "userProject": {
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
                        "userProject": {
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
                        "userProject": {
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
                    "supportsMediaDownload": boolean;
                    "useMediaDownloadService": boolean;
                };
                "getIamPolicy": {
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
                        "userProject": {
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
                        "contentEncoding": {
                            "type": string;
                            "description": string;
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
                        "kmsKeyName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "name": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "predefinedAcl": {
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
                        "userProject": {
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
                        "includeTrailingDelimiter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "userProject": {
                            "type": string;
                            "description": string;
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
                        "predefinedAcl": {
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
                        "userProject": {
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
                "rewrite": {
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
                        "destinationKmsKeyName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "destinationObject": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "destinationPredefinedAcl": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "maxBytesRewrittenPerCall": {
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
                        "rewriteToken": {
                            "type": string;
                            "description": string;
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
                        "userProject": {
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
                "setIamPolicy": {
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
                        "userProject": {
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
                "testIamPermissions": {
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
                        "permissions": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userProject": {
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
                        "predefinedAcl": {
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
                        "userProject": {
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
                        "includeTrailingDelimiter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "userProject": {
                            "type": string;
                            "description": string;
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
        "projects": {
            "resources": {
                "serviceAccount": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "projectId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userProject": {
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
    };
};
export default _default;
//# sourceMappingURL=storage-v1.d.ts.map