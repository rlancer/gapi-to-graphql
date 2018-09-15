declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
    "canonicalName": string;
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
                "https://www.googleapis.com/auth/tagmanager.delete.containers": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.edit.containers": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.edit.containerversions": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.manage.accounts": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.manage.users": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.publish": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/tagmanager.readonly": {
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
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "shareData": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AccountAccess": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "permission": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "BuiltInVariable": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Condition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "parameter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Container": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "domainName": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "publicId": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "usageContext": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "ContainerAccess": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "permission": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ContainerVersion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "builtInVariable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "container": {
                    "$ref": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "containerVersionId": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "folder": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "tag": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "trigger": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "variable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "zone": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ContainerVersionHeader": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "containerVersionId": {
                    "type": string;
                    "description": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "numMacros": {
                    "type": string;
                    "description": string;
                };
                "numRules": {
                    "type": string;
                    "description": string;
                };
                "numTags": {
                    "type": string;
                    "description": string;
                };
                "numTriggers": {
                    "type": string;
                    "description": string;
                };
                "numVariables": {
                    "type": string;
                    "description": string;
                };
                "numZones": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreateBuiltInVariableResponse": {
            "id": string;
            "type": string;
            "properties": {
                "builtInVariable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CreateContainerVersionRequestVersionOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreateContainerVersionResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "compilerError": {
                    "type": string;
                    "description": string;
                };
                "containerVersion": {
                    "$ref": string;
                    "description": string;
                };
                "newWorkspacePath": {
                    "type": string;
                    "description": string;
                };
                "syncStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CreateWorkspaceProposalRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "initialComment": {
                    "$ref": string;
                    "description": string;
                };
                "reviewers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Entity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "changeStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "folder": {
                    "$ref": string;
                    "description": string;
                };
                "tag": {
                    "$ref": string;
                    "description": string;
                };
                "trigger": {
                    "$ref": string;
                    "description": string;
                };
                "variable": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Environment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "authorizationCode": {
                    "type": string;
                    "description": string;
                };
                "authorizationTimestamp": {
                    "$ref": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "containerVersionId": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "enableDebug": {
                    "type": string;
                    "description": string;
                };
                "environmentId": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Folder": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "folderId": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FolderEntities": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "tag": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trigger": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "variable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetWorkspaceStatusResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "mergeConflict": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "workspaceChange": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListAccountsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "account": {
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
        "ListContainerVersionsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "containerVersionHeader": {
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
        "ListContainersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "container": {
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
        "ListEnabledBuiltInVariablesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "builtInVariable": {
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
        "ListEnvironmentsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "environment": {
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
        "ListFoldersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "folder": {
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
        "ListTagsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "tag": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListTriggersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "trigger": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListUserPermissionsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "userPermission": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListVariablesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "variable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListWorkspacesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "workspace": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MergeConflict": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "entityInBaseVersion": {
                    "$ref": string;
                    "description": string;
                };
                "entityInWorkspace": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Parameter": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "key": {
                    "type": string;
                    "description": string;
                };
                "list": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "map": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PublishContainerVersionResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "compilerError": {
                    "type": string;
                    "description": string;
                };
                "containerVersion": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "QuickPreviewResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "compilerError": {
                    "type": string;
                    "description": string;
                };
                "containerVersion": {
                    "$ref": string;
                    "description": string;
                };
                "syncStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RevertBuiltInVariableResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enabled": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RevertFolderResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "folder": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RevertTagResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "tag": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RevertTriggerResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "trigger": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RevertVariableResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "variable": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SetupTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "stopOnSetupFailure": {
                    "type": string;
                    "description": string;
                };
                "tagName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SyncStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "mergeConflict": {
                    "type": string;
                    "description": string;
                };
                "syncError": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SyncWorkspaceResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "mergeConflict": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "syncStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Tag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "blockingRuleId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "blockingTriggerId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "firingRuleId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "firingTriggerId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "liveOnly": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "parameter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "parentFolderId": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "paused": {
                    "type": string;
                    "description": string;
                };
                "priority": {
                    "$ref": string;
                    "description": string;
                };
                "scheduleEndMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduleStartMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "setupTag": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "tagFiringOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "tagId": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "teardownTag": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TeardownTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "stopTeardownOnFailure": {
                    "type": string;
                    "description": string;
                };
                "tagName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Timestamp": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "seconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Trigger": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "autoEventFilter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "checkValidation": {
                    "$ref": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "continuousTimeMinMilliseconds": {
                    "$ref": string;
                    "description": string;
                };
                "customEventFilter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "eventName": {
                    "$ref": string;
                    "description": string;
                };
                "filter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "horizontalScrollPercentageList": {
                    "$ref": string;
                    "description": string;
                };
                "interval": {
                    "$ref": string;
                    "description": string;
                };
                "intervalSeconds": {
                    "$ref": string;
                    "description": string;
                };
                "limit": {
                    "$ref": string;
                    "description": string;
                };
                "maxTimerLengthSeconds": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "parameter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "parentFolderId": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "selector": {
                    "$ref": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "totalTimeMinMilliseconds": {
                    "$ref": string;
                    "description": string;
                };
                "triggerId": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "uniqueTriggerId": {
                    "$ref": string;
                    "description": string;
                };
                "verticalScrollPercentageList": {
                    "$ref": string;
                    "description": string;
                };
                "visibilitySelector": {
                    "$ref": string;
                    "description": string;
                };
                "visiblePercentageMax": {
                    "$ref": string;
                    "description": string;
                };
                "visiblePercentageMin": {
                    "$ref": string;
                    "description": string;
                };
                "waitForTags": {
                    "$ref": string;
                    "description": string;
                };
                "waitForTagsTimeout": {
                    "$ref": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UpdateWorkspaceProposalRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "newComment": {
                    "$ref": string;
                    "description": string;
                };
                "reviewers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "UserPermission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountAccess": {
                    "$ref": string;
                    "description": string;
                };
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerAccess": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Variable": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "disablingTriggerId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "enablingTriggerId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "parameter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "parentFolderId": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "scheduleEndMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduleStartMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "variableId": {
                    "type": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Workspace": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "WorkspaceProposal": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "history": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "reviewers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "WorkspaceProposalHistory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "comment": {
                    "$ref": string;
                    "description": string;
                };
                "createdBy": {
                    "$ref": string;
                    "description": string;
                };
                "createdTimestamp": {
                    "$ref": string;
                    "description": string;
                };
                "statusChange": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "WorkspaceProposalHistoryComment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "content": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "WorkspaceProposalHistoryStatusChange": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "newStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "oldStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "WorkspaceProposalUser": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "gaiaId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Zone": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "boundary": {
                    "$ref": string;
                    "description": string;
                };
                "childContainer": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "containerId": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "tagManagerUrl": {
                    "type": string;
                    "description": string;
                };
                "typeRestriction": {
                    "$ref": string;
                    "description": string;
                };
                "workspaceId": {
                    "type": string;
                    "description": string;
                };
                "zoneId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ZoneBoundary": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "condition": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customEvaluationTriggerId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ZoneChildContainer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nickname": {
                    "type": string;
                    "description": string;
                };
                "publicId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ZoneTypeRestriction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enable": {
                    "type": string;
                    "description": string;
                };
                "whitelistedTypeId": {
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
        "accounts": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "path": {
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
                        "pageToken": {
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
                        "fingerprint": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "path": {
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
            "resources": {
                "containers": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "parent": {
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
                                "path": {
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
                                "path": {
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
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "parent": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "fingerprint": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "path": {
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
                    "resources": {
                        "environments": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "parent": {
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
                                        "path": {
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
                                        "path": {
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
                                        "pageToken": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "parent": {
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
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                                "reauthorize": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                        "version_headers": {
                            "methods": {
                                "latest": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "parent": {
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
                                        "includeDeleted": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "pageToken": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "parent": {
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
                        "versions": {
                            "methods": {
                                "delete": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                        "containerVersionId": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                                "live": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "parent": {
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
                                "publish": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                                "set_latest": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                "undelete": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                "update": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                        "workspaces": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "parent": {
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
                                "create_version": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                        "path": {
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
                                        "path": {
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
                                "getProposal": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                };
                                "getStatus": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                        "pageToken": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "parent": {
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
                                "quick_preview": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                "resolve_conflict": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                                    "scopes": string[];
                                };
                                "sync": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                                "update": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "path": {
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
                                "updateProposal": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "path": {
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
                            "resources": {
                                "built_in_variables": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "type": {
                                                    "type": string;
                                                    "description": string;
                                                    "enum": string[];
                                                    "enumDescriptions": string[];
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
                                        "delete": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "path": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "type": {
                                                    "type": string;
                                                    "description": string;
                                                    "enum": string[];
                                                    "enumDescriptions": string[];
                                                    "repeated": boolean;
                                                    "location": string;
                                                };
                                            };
                                            "parameterOrder": string[];
                                            "scopes": string[];
                                        };
                                        "list": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "parent": {
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
                                        "revert": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "path": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "type": {
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
                                    };
                                };
                                "folders": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
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
                                                "path": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                            };
                                            "parameterOrder": string[];
                                            "scopes": string[];
                                        };
                                        "entities": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                        "get": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "path": {
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
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "parent": {
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
                                        "move_entities_to_folder": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "path": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "tagId": {
                                                    "type": string;
                                                    "description": string;
                                                    "repeated": boolean;
                                                    "location": string;
                                                };
                                                "triggerId": {
                                                    "type": string;
                                                    "description": string;
                                                    "repeated": boolean;
                                                    "location": string;
                                                };
                                                "variableId": {
                                                    "type": string;
                                                    "description": string;
                                                    "repeated": boolean;
                                                    "location": string;
                                                };
                                            };
                                            "parameterOrder": string[];
                                            "request": {
                                                "$ref": string;
                                            };
                                            "scopes": string[];
                                        };
                                        "revert": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                        "update": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                "proposal": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
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
                                        "delete": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "path": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                            };
                                            "parameterOrder": string[];
                                        };
                                    };
                                };
                                "tags": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
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
                                                "path": {
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
                                                "path": {
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
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "parent": {
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
                                        "revert": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                        "update": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                "triggers": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
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
                                                "path": {
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
                                                "path": {
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
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "parent": {
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
                                        "revert": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                        "update": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                "variables": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "parent": {
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
                                                "path": {
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
                                                "path": {
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
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "parent": {
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
                                        "revert": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                                        "update": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "fingerprint": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "path": {
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
                            };
                        };
                    };
                };
                "user_permissions": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "parent": {
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
                                "path": {
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
                                "path": {
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
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "parent": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "path": {
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
            };
        };
    };
};
export default _default;
//# sourceMappingURL=tagmanager-v2.d.ts.map