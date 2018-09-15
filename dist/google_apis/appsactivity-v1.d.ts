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
                "https://www.googleapis.com/auth/activity": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Activity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "combinedEvent": {
                    "$ref": string;
                    "description": string;
                };
                "singleEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Event": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "additionalEventTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "eventTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fromUserDeletion": {
                    "type": string;
                    "description": string;
                };
                "move": {
                    "$ref": string;
                    "description": string;
                };
                "permissionChanges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "primaryEventType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "rename": {
                    "$ref": string;
                    "description": string;
                };
                "target": {
                    "$ref": string;
                    "description": string;
                };
                "user": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ListActivitiesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Move": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addedParents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "removedParents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Parent": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "isRoot": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Permission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "permissionId": {
                    "type": string;
                    "description": string;
                };
                "role": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "user": {
                    "$ref": string;
                    "description": string;
                };
                "withLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PermissionChange": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addedPermissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "removedPermissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Photo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Rename": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "newTitle": {
                    "type": string;
                    "description": string;
                };
                "oldTitle": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Target": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "User": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "isDeleted": {
                    "type": string;
                    "description": string;
                };
                "isMe": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "permissionId": {
                    "type": string;
                    "description": string;
                };
                "photo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "activities": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "drive.ancestorId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "drive.fileId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "groupingStrategy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageSize": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
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
                        "userId": {
                            "type": string;
                            "description": string;
                            "default": string;
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
export default _default;
//# sourceMappingURL=appsactivity-v1.d.ts.map