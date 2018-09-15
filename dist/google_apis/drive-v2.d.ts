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
                "https://www.googleapis.com/auth/drive.apps.readonly": {
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
                "additionalRoleInfo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "roleSets": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "additionalRoles": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                        "primaryRole": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "canCreateTeamDrives": {
                    "type": string;
                    "description": string;
                };
                "domainSharingPolicy": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "exportFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "source": {
                                "type": string;
                                "description": string;
                            };
                            "targets": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
                "features": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "featureName": {
                                "type": string;
                                "description": string;
                            };
                            "featureRate": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
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
                    "items": {
                        "type": string;
                        "properties": {
                            "source": {
                                "type": string;
                                "description": string;
                            };
                            "targets": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
                "isCurrentAppInstalled": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languageCode": {
                    "type": string;
                    "description": string;
                };
                "largestChangeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxUploadSizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "size": {
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
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "permissionId": {
                    "type": string;
                    "description": string;
                };
                "quotaBytesByService": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "bytesUsed": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "serviceName": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "quotaBytesTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaBytesUsed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaBytesUsedAggregate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaBytesUsedInTrash": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaType": {
                    "type": string;
                    "description": string;
                };
                "remainingChangeIds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rootFolderId": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
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
        "App": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authorized": {
                    "type": string;
                    "description": string;
                };
                "createInFolderTemplate": {
                    "type": string;
                    "description": string;
                };
                "createUrl": {
                    "type": string;
                    "description": string;
                };
                "hasDriveWideScope": {
                    "type": string;
                    "description": string;
                };
                "icons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "category": {
                                "type": string;
                                "description": string;
                            };
                            "iconUrl": {
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
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "installed": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "longDescription": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "objectType": {
                    "type": string;
                    "description": string;
                };
                "openUrlTemplate": {
                    "type": string;
                    "description": string;
                };
                "primaryFileExtensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "primaryMimeTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "productUrl": {
                    "type": string;
                    "description": string;
                };
                "secondaryFileExtensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "secondaryMimeTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "shortDescription": {
                    "type": string;
                    "description": string;
                };
                "supportsCreate": {
                    "type": string;
                    "description": string;
                };
                "supportsImport": {
                    "type": string;
                    "description": string;
                };
                "supportsMultiOpen": {
                    "type": string;
                    "description": string;
                };
                "supportsOfflineCreate": {
                    "type": string;
                    "description": string;
                };
                "useByDefault": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AppList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "defaultAppIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Change": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "file": {
                    "$ref": string;
                    "description": string;
                };
                "fileId": {
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
                "modificationDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "selfLink": {
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
                "largestChangeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "newStartPageToken": {
                    "type": string;
                    "description": string;
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
        "ChildList": {
            "id": string;
            "type": string;
            "description": string;
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
            };
        };
        "ChildReference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "childLink": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
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
                "commentId": {
                    "type": string;
                    "description": string;
                };
                "content": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "context": {
                    "type": string;
                    "description": string;
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
                "createdDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "fileId": {
                    "type": string;
                    "description": string;
                };
                "fileTitle": {
                    "type": string;
                    "description": string;
                };
                "htmlContent": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "modifiedDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "replies": {
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
                "status": {
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
            };
        };
        "CommentReply": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
                "createdDate": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "modifiedDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "replyId": {
                    "type": string;
                    "description": string;
                };
                "verb": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CommentReplyList": {
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
            };
        };
        "File": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alternateLink": {
                    "type": string;
                    "description": string;
                };
                "appDataContents": {
                    "type": string;
                    "description": string;
                };
                "canComment": {
                    "type": string;
                    "description": string;
                };
                "canReadRevisions": {
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
                        "canChangeCopyRequiresWriterPermission": {
                            "type": string;
                            "description": string;
                        };
                        "canChangeRestrictedDownload": {
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
                "copyRequiresWriterPermission": {
                    "type": string;
                    "description": string;
                };
                "copyable": {
                    "type": string;
                    "description": string;
                };
                "createdDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "defaultOpenWithLink": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "downloadUrl": {
                    "type": string;
                };
                "editable": {
                    "type": string;
                    "description": string;
                };
                "embedLink": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "explicitlyTrashed": {
                    "type": string;
                    "description": string;
                };
                "exportLinks": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "fileExtension": {
                    "type": string;
                    "description": string;
                };
                "fileSize": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                        "date": {
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
                "indexableText": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "text": {
                            "type": string;
                            "description": string;
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
                "labels": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "hidden": {
                            "type": string;
                            "description": string;
                        };
                        "modified": {
                            "type": string;
                            "description": string;
                        };
                        "restricted": {
                            "type": string;
                            "description": string;
                        };
                        "starred": {
                            "type": string;
                            "description": string;
                        };
                        "trashed": {
                            "type": string;
                            "description": string;
                        };
                        "viewed": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "lastModifyingUser": {
                    "$ref": string;
                    "description": string;
                };
                "lastModifyingUserName": {
                    "type": string;
                    "description": string;
                };
                "lastViewedByMeDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "markedViewedByMeDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "md5Checksum": {
                    "type": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "modifiedByMeDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "modifiedDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "openWithLinks": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "originalFilename": {
                    "type": string;
                    "description": string;
                };
                "ownedByMe": {
                    "type": string;
                    "description": string;
                };
                "ownerNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
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
                        "$ref": string;
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
                    "items": {
                        "$ref": string;
                    };
                };
                "quotaBytesUsed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "shareable": {
                    "type": string;
                    "description": string;
                };
                "shared": {
                    "type": string;
                    "description": string;
                };
                "sharedWithMeDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sharingUser": {
                    "$ref": string;
                    "description": string;
                };
                "spaces": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "teamDriveId": {
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
                "thumbnailLink": {
                    "type": string;
                    "description": string;
                };
                "thumbnailVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "trashedDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "trashingUser": {
                    "$ref": string;
                    "description": string;
                };
                "userPermission": {
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
                "etag": {
                    "type": string;
                    "description": string;
                };
                "incompleteSearch": {
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
        "ParentList": {
            "id": string;
            "type": string;
            "description": string;
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ParentReference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "isRoot": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "parentLink": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
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
                "additionalRoles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "authKey": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
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
                "etag": {
                    "type": string;
                    "description": string;
                };
                "expirationDate": {
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "teamDrivePermissionDetails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "additionalRoles": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
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
                "value": {
                    "type": string;
                    "description": string;
                };
                "withLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PermissionId": {
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
            };
        };
        "PermissionList": {
            "id": string;
            "type": string;
            "description": string;
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
            };
        };
        "Property": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "key": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
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
                "value": {
                    "type": string;
                    "description": string;
                };
                "visibility": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PropertyList": {
            "id": string;
            "type": string;
            "description": string;
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Revision": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "downloadUrl": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "exportLinks": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "fileSize": {
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
                "lastModifyingUser": {
                    "$ref": string;
                    "description": string;
                };
                "lastModifyingUserName": {
                    "type": string;
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
                "modifiedDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "originalFilename": {
                    "type": string;
                    "description": string;
                };
                "pinned": {
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
                "publishedLink": {
                    "type": string;
                    "description": string;
                };
                "publishedOutsideDomain": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RevisionList": {
            "id": string;
            "type": string;
            "description": string;
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
                "createdDate": {
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
                    "annotations": {
                        "required": string[];
                    };
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
                "isAuthenticatedUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "permissionId": {
                    "type": string;
                    "description": string;
                };
                "picture": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
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
                    "parameters": {
                        "includeSubscribed": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "maxChangeIdCount": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "location": string;
                        };
                        "startChangeId": {
                            "type": string;
                            "description": string;
                            "format": string;
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
        "apps": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "appId": {
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
                        "appFilterExtensions": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "appFilterMimeTypes": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "languageCode": {
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
        "changes": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "changeId": {
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
                };
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
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeSubscribed": {
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
                        "spaces": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startChangeId": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                        "includeDeleted": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "includeSubscribed": {
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
                        "spaces": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startChangeId": {
                            "type": string;
                            "description": string;
                            "format": string;
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
        "children": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "childId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "folderId": {
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
                        "childId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "folderId": {
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
                        "folderId": {
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
                        "folderId": {
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
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
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
                "insert": {
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
                        "updatedMin": {
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
                        "convert": {
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
                        "ocr": {
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
                        "pinned": {
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
                        "timedTextLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timedTextTrackName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "visibility": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "maxResults": {
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
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "revisionId": {
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
                        "updateViewedDate": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "convert": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocr": {
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
                        "pinned": {
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
                        "timedTextLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timedTextTrackName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "useContentAsIndexableText": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "visibility": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
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
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "spaces": {
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
                "patch": {
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
                        "convert": {
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
                        "modifiedDateBehavior": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "newRevision": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocr": {
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
                        "pinned": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "removeParents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "setModifiedDate": {
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
                        "timedTextLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timedTextTrackName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "updateViewedDate": {
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
                };
                "touch": {
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
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "trash": {
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
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "untrash": {
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
                        "convert": {
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
                        "modifiedDateBehavior": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "newRevision": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "ocr": {
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
                        "pinned": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "removeParents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "setModifiedDate": {
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
                        "timedTextLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timedTextTrackName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "updateViewedDate": {
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
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "revisionId": {
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
                        "updateViewedDate": {
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
        "parents": {
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
                        "parentId": {
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "parentId": {
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
                        "fileId": {
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
        "permissions": {
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
                "getIdForEmail": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "email": {
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
                        "sendNotificationEmails": {
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
                "patch": {
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
        "properties": {
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
                        "propertyKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "visibility": {
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
                        "propertyKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "visibility": {
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
                "insert": {
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
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "propertyKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "visibility": {
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
                        "propertyKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "visibility": {
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
        "realtime": {
            "methods": {
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
                        "revision": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "baseRevision": {
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
                    };
                    "parameterOrder": string[];
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
        };
        "replies": {
            "methods": {
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
                "insert": {
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
                "patch": {
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
                "patch": {
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
                "insert": {
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
//# sourceMappingURL=drive-v2.d.ts.map