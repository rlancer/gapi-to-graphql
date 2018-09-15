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
                "https://www.googleapis.com/auth/drive": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.appdata": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.file": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.metadata": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.metadata.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.photos.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.scripts": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "About": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "appInstalled": {
                    "type": string;
                    "description": string;
                };
                "canCreateTeamDrives": {
                    "type": string;
                    "description": string;
                };
                "exportFormats": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
                "folderColorPalette": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "importFormats": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxImportSizes": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "format": string;
                    };
                };
                "maxUploadSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "storageQuota": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "limit": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "usage": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "usageInDrive": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "usageInDriveTrash": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "teamDriveThemes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "backgroundImageLink": {
                                "type": string;
                                "description": string;
                            };
                            "colorRgb": {
                                "type": string;
                                "description": string;
                            };
                            "id": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "user": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Change": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "file": {
                    "$ref": string;
                    "description": string;
                };
                "fileId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "removed": {
                    "type": string;
                    "description": string;
                };
                "teamDrive": {
                    "$ref": string;
                    "description": string;
                };
                "teamDriveId": {
                    "type": string;
                    "description": string;
                };
                "time": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChangeList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "changes": {
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
                "newStartPageToken": {
                    "type": string;
                    "description": string;
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
        "Comment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "anchor": {
                    "type": string;
                    "description": string;
                };
                "author": {
                    "$ref": string;
                    "description": string;
                };
                "content": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "createdTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "htmlContent": {
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
                "modifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotedFileContent": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "mimeType": {
                            "type": string;
                            "description": string;
                        };
                        "value": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "replies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resolved": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CommentList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "comments": {
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
        "File": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "appProperties": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "capabilities": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "canAddChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeCopyRequiresWriterPermission": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeViewersCanCopyContent": {
                            "type": string;
                            "description": string;
                        };
                        "canComment": {
                            "type": string;
                            "description": string;
                        };
                        "canCopy": {
                            "type": string;
                            "description": string;
                        };
                        "canDelete": {
                            "type": string;
                            "description": string;
                        };
                        "canDeleteChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canDownload": {
                            "type": string;
                            "description": string;
                        };
                        "canEdit": {
                            "type": string;
                            "description": string;
                        };
                        "canListChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveChildrenOutOfTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveChildrenWithinTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveItemIntoTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveItemOutOfTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveItemWithinTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canMoveTeamDriveItem": {
                            "type": string;
                            "description": string;
                        };
                        "canReadRevisions": {
                            "type": string;
                            "description": string;
                        };
                        "canReadTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canRemoveChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canRename": {
                            "type": string;
                            "description": string;
                        };
                        "canShare": {
                            "type": string;
                            "description": string;
                        };
                        "canTrash": {
                            "type": string;
                            "description": string;
                        };
                        "canTrashChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canUntrash": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "contentHints": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "indexableText": {
                            "type": string;
                            "description": string;
                        };
                        "thumbnail": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "image": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "mimeType": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                    };
                };
                "copyRequiresWriterPermission": {
                    "type": string;
                    "description": string;
                };
                "createdTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "explicitlyTrashed": {
                    "type": string;
                    "description": string;
                };
                "fileExtension": {
                    "type": string;
                    "description": string;
                };
                "folderColorRgb": {
                    "type": string;
                    "description": string;
                };
                "fullFileExtension": {
                    "type": string;
                    "description": string;
                };
                "hasAugmentedPermissions": {
                    "type": string;
                    "description": string;
                };
                "hasThumbnail": {
                    "type": string;
                    "description": string;
                };
                "headRevisionId": {
                    "type": string;
                    "description": string;
                };
                "iconLink": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "imageMediaMetadata": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "aperture": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "cameraMake": {
                            "type": string;
                            "description": string;
                        };
                        "cameraModel": {
                            "type": string;
                            "description": string;
                        };
                        "colorSpace": {
                            "type": string;
                            "description": string;
                        };
                        "exposureBias": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "exposureMode": {
                            "type": string;
                            "description": string;
                        };
                        "exposureTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "flashUsed": {
                            "type": string;
                            "description": string;
                        };
                        "focalLength": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "height": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "isoSpeed": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "lens": {
                            "type": string;
                            "description": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "altitude": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
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
                            };
                        };
                        "maxApertureValue": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "meteringMode": {
                            "type": string;
                            "description": string;
                        };
                        "rotation": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "sensor": {
                            "type": string;
                            "description": string;
                        };
                        "subjectDistance": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "time": {
                            "type": string;
                            "description": string;
                        };
                        "whiteBalance": {
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
                "isAppAuthorized": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifyingUser": {
                    "$ref": string;
                    "description": string;
                };
                "md5Checksum": {
                    "type": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "modifiedByMe": {
                    "type": string;
                    "description": string;
                };
                "modifiedByMeTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "modifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "originalFilename": {
                    "type": string;
                    "description": string;
                };
                "ownedByMe": {
                    "type": string;
                    "description": string;
                };
                "owners": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "parents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "permissionIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "permissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "properties": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "quotaBytesUsed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "shared": {
                    "type": string;
                    "description": string;
                };
                "sharedWithMeTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sharingUser": {
                    "$ref": string;
                    "description": string;
                };
                "size": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "spaces": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "starred": {
                    "type": string;
                    "description": string;
                };
                "teamDriveId": {
                    "type": string;
                    "description": string;
                };
                "thumbnailLink": {
                    "type": string;
                    "description": string;
                };
                "thumbnailVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "trashed": {
                    "type": string;
                    "description": string;
                };
                "trashedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "trashingUser": {
                    "$ref": string;
                    "description": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoMediaMetadata": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "durationMillis": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "height": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "width": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "viewedByMe": {
                    "type": string;
                    "description": string;
                };
                "viewedByMeTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "viewersCanCopyContent": {
                    "type": string;
                    "description": string;
                };
                "webContentLink": {
                    "type": string;
                    "description": string;
                };
                "webViewLink": {
                    "type": string;
                    "description": string;
                };
                "writersCanShare": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FileList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "files": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "incompleteSearch": {
                    "type": string;
                    "description": string;
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
        "GeneratedIds": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ids": {
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
                "space": {
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
                "allowFileDiscovery": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
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
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "expirationTime": {
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
                "photoLink": {
                    "type": string;
                    "description": string;
                };
                "role": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "teamDrivePermissionDetails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "inherited": {
                                "type": string;
                                "description": string;
                            };
                            "inheritedFrom": {
                                "type": string;
                                "description": string;
                            };
                            "role": {
                                "type": string;
                                "description": string;
                            };
                            "teamDrivePermissionType": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PermissionList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "permissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Reply": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "author": {
                    "$ref": string;
                    "description": string;
                };
                "content": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "createdTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "htmlContent": {
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
                "modifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ReplyList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "replies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Revision": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "keepForever": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifyingUser": {
                    "$ref": string;
                    "description": string;
                };
                "md5Checksum": {
                    "type": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "modifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "originalFilename": {
                    "type": string;
                    "description": string;
                };
                "publishAuto": {
                    "type": string;
                    "description": string;
                };
                "published": {
                    "type": string;
                    "description": string;
                };
                "publishedOutsideDomain": {
                    "type": string;
                    "description": string;
                };
                "size": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RevisionList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "revisions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "StartPageToken": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "startPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TeamDrive": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backgroundImageFile": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                        };
                        "width": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "xCoordinate": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "yCoordinate": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "backgroundImageLink": {
                    "type": string;
                    "description": string;
                };
                "capabilities": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "canAddChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeCopyRequiresWriterPermissionRestriction": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeDomainUsersOnlyRestriction": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeTeamDriveBackground": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeTeamMembersOnlyRestriction": {
                            "type": string;
                            "description": string;
                        };
                        "canComment": {
                            "type": string;
                            "description": string;
                        };
                        "canCopy": {
                            "type": string;
                            "description": string;
                        };
                        "canDeleteChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canDeleteTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canDownload": {
                            "type": string;
                            "description": string;
                        };
                        "canEdit": {
                            "type": string;
                            "description": string;
                        };
                        "canListChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canManageMembers": {
                            "type": string;
                            "description": string;
                        };
                        "canReadRevisions": {
                            "type": string;
                            "description": string;
                        };
                        "canRemoveChildren": {
                            "type": string;
                            "description": string;
                        };
                        "canRename": {
                            "type": string;
                            "description": string;
                        };
                        "canRenameTeamDrive": {
                            "type": string;
                            "description": string;
                        };
                        "canShare": {
                            "type": string;
                            "description": string;
                        };
                        "canTrashChildren": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "colorRgb": {
                    "type": string;
                    "description": string;
                };
                "createdTime": {
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
                "name": {
                    "type": string;
                    "description": string;
                };
                "restrictions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "adminManagedRestrictions": {
                            "type": string;
                            "description": string;
                        };
                        "copyRequiresWriterPermission": {
                            "type": string;
                            "description": string;
                        };
                        "domainUsersOnly": {
                            "type": string;
                            "description": string;
                        };
                        "teamMembersOnly": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "themeId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TeamDriveList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "teamDrives": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "User": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "me": {
                    "type": string;
                    "description": string;
                };
                "permissionId": {
                    "type": string;
                    "description": string;
                };
                "photoLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "about": {
            "methods": {
                "get": {
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
        "changes": {
            "methods": {
                "getStartPageToken": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "teamDriveId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeCorpusRemovals": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeRemoved": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeTeamDriveItems": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "pageSize": {
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
                            "required": boolean;
                            "location": string;
                        };
                        "restrictToMyDrive": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "spaces": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "teamDriveId": {
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
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeCorpusRemovals": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeRemoved": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeTeamDriveItems": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "pageSize": {
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
                            "required": boolean;
                            "location": string;
                        };
                        "restrictToMyDrive": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "spaces": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "teamDriveId": {
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
        "comments": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
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
                "delete": {
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
                        "fileId": {
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
                        "commentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "pageSize": {
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
                        "startModifiedTime": {
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
                        "commentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fileId": {
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
        "files": {
            "methods": {
                "copy": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ignoreDefaultVisibility": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "keepRevisionForever": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocrLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "ignoreDefaultVisibility": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "keepRevisionForever": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocrLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useContentAsIndexableText": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                    "supportsSubscription": boolean;
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "emptyTrash": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "export": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "mimeType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                };
                "generateIds": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "count": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "space": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "acknowledgeAbuse": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                    "supportsSubscription": boolean;
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "corpora": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "corpus": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "includeTeamDriveItems": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageSize": {
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
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "spaces": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "teamDriveId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "addParents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "keepRevisionForever": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocrLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "removeParents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useContentAsIndexableText": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "acknowledgeAbuse": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                    "supportsMediaDownload": boolean;
                    "useMediaDownloadService": boolean;
                    "supportsSubscription": boolean;
                };
            };
        };
        "permissions": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "emailMessage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotificationEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "transferOwnership": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "permissionId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "permissionId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "pageSize": {
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
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "permissionId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "removeExpiration": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "supportsTeamDrives": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "transferOwnership": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
        "replies": {
            "methods": {
                "create": {
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
                        "fileId": {
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
                "delete": {
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "replyId": {
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
                        "commentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "replyId": {
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
                        "commentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "pageSize": {
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
                "update": {
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "replyId": {
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
        "revisions": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revisionId": {
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
                        "acknowledgeAbuse": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revisionId": {
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
                    "useMediaDownloadService": boolean;
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "pageSize": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revisionId": {
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
        "teamdrives": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "requestId": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "teamDriveId": {
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
                        "teamDriveId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "pageSize": {
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
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "teamDriveId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "useDomainAdminAccess": {
                            "type": string;
                            "description": string;
                            "default": string;
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
//# sourceMappingURL=drive-v3.d.ts.map