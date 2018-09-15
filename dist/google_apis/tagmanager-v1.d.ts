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
                "shareData": {
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
                "enabledBuiltInVariable": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
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
                "publicId": {
                    "type": string;
                    "description": string;
                };
                "timeZoneCountryId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timeZoneId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
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
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
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
                "macro": {
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
                "notes": {
                    "type": string;
                    "description": string;
                };
                "rule": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
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
                "quickPreview": {
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
                "authorizationTimestampMs": {
                    "type": string;
                    "description": string;
                    "format": string;
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
            };
        };
        "FolderEntities": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "ListAccountUsersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "userAccess": {
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
                "accounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListContainerVersionsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "containerVersion": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "containerVersionHeader": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListContainersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "containers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListEnvironmentsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "environments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListFoldersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "folders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListTagsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "tags": {
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
                "triggers": {
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
                "variables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Macro": {
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
                "disablingRuleId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "enablingRuleId": {
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
                "macroId": {
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
                "type": {
                    "type": string;
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
        "Rule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "condition": {
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
                "ruleId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SetupTag": {
            "id": string;
            "type": string;
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
            };
        };
        "TeardownTag": {
            "id": string;
            "type": string;
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
                "selector": {
                    "$ref": string;
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
            };
        };
        "UserAccess": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountAccess": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
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
                    "annotations": {
                        "required": string[];
                    };
                };
                "permissionId": {
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
                        "accountId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "fingerprint": {
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
            "resources": {
                "containers": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "accountId": {
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
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "containerId": {
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
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "containerId": {
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
                                "accountId": {
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
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "containerId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "fingerprint": {
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
                    "resources": {
                        "environments": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "environmentId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "environmentId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "environmentId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "environmentId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
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
                        "folders": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                "list": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
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
                                "entities": {
                                    "methods": {
                                        "list": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "accountId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "containerId": {
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
                                    };
                                };
                            };
                        };
                        "move_folders": {
                            "methods": {
                                "update": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                            };
                        };
                        "reauthorize_environments": {
                            "methods": {
                                "update": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "environmentId": {
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
                        "tags": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "tagId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "tagId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "tagId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "triggerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "triggerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "triggerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "variableId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "variableId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "variableId": {
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
                        "versions": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "headers": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
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
                                "restore": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
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
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "containerVersionId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "fingerprint": {
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
                                "accountId": {
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
                                "accountId": {
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
                                "accountId": {
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
                                "accountId": {
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
                                "accountId": {
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
//# sourceMappingURL=tagmanager-v1.d.ts.map