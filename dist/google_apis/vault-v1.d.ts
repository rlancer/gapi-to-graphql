declare const _default: {
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "matters": {
            "methods": {
                "removePermissions": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "matterId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "reopen": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "matterId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "view": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "matterId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "undelete": {
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
                    "scopes": string[];
                    "parameters": {
                        "matterId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                };
                "close": {
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
                    "scopes": string[];
                    "parameters": {
                        "matterId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                };
                "update": {
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "matterId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "delete": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "matterId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "view": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "state": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "addPermissions": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "matterId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                };
            };
            "resources": {
                "holds": {
                    "methods": {
                        "list": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
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
                                "view": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "create": {
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "removeHeldAccounts": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "holdId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "get": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "view": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "matterId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "holdId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "addHeldAccounts": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "holdId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "matterId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "update": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "holdId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "delete": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "matterId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "holdId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                    "resources": {
                        "accounts": {
                            "methods": {
                                "delete": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "accountId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "matterId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "holdId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "list": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "matterId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "holdId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "create": {
                                    "request": {
                                        "$ref": string;
                                    };
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "holdId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "matterId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                            };
                        };
                    };
                };
                "exports": {
                    "methods": {
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "exportId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "matterId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "create": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "matterId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "matterId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "exportId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "location": string;
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
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "UserInfo": {
            "description": string;
            "type": string;
            "properties": {
                "email": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                        "type": string;
                    };
                };
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UndeleteMatterRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "RemoveHeldAccountsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "accountIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "CloudStorageFile": {
            "description": string;
            "type": string;
            "properties": {
                "size": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "md5Hash": {
                    "description": string;
                    "type": string;
                };
                "objectName": {
                    "description": string;
                    "type": string;
                };
                "bucketName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RemoveMatterPermissionsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "accountId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MailOptions": {
            "description": string;
            "type": string;
            "properties": {
                "excludeDrafts": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MatterPermission": {
            "description": string;
            "type": string;
            "properties": {
                "role": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "accountId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GroupsExportOptions": {
            "description": string;
            "type": string;
            "properties": {
                "exportFormat": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RemoveHeldAccountsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "statuses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "HeldHangoutsChatQuery": {
            "description": string;
            "type": string;
            "properties": {
                "includeRooms": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HangoutsChatOptions": {
            "description": string;
            "type": string;
            "properties": {
                "includeRooms": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HeldMailQuery": {
            "description": string;
            "type": string;
            "properties": {
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "terms": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DriveExportOptions": {
            "description": string;
            "type": string;
            "properties": {
                "includeAccessInfo": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddHeldAccountResult": {
            "description": string;
            "type": string;
            "properties": {
                "account": {
                    "description": string;
                    "$ref": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "HeldGroupsQuery": {
            "description": string;
            "type": string;
            "properties": {
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "terms": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HeldDriveQuery": {
            "description": string;
            "type": string;
            "properties": {
                "includeTeamDriveFiles": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HeldOrgUnit": {
            "description": string;
            "type": string;
            "properties": {
                "orgUnitId": {
                    "description": string;
                    "type": string;
                };
                "holdTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddHeldAccountsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Matter": {
            "description": string;
            "type": string;
            "properties": {
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "matterPermissions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "matterId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HeldAccount": {
            "description": string;
            "type": string;
            "properties": {
                "accountId": {
                    "description": string;
                    "type": string;
                };
                "holdTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Export": {
            "description": string;
            "type": string;
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "requester": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "matterId": {
                    "description": string;
                    "type": string;
                };
                "exportOptions": {
                    "description": string;
                    "$ref": string;
                };
                "stats": {
                    "description": string;
                    "$ref": string;
                };
                "cloudStorageSink": {
                    "$ref": string;
                    "description": string;
                };
                "query": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ExportStats": {
            "description": string;
            "type": string;
            "properties": {
                "exportedArtifactCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalArtifactCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sizeInBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CorpusQuery": {
            "description": string;
            "type": string;
            "properties": {
                "mailQuery": {
                    "$ref": string;
                    "description": string;
                };
                "groupsQuery": {
                    "$ref": string;
                    "description": string;
                };
                "hangoutsChatQuery": {
                    "description": string;
                    "$ref": string;
                };
                "driveQuery": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Hold": {
            "description": string;
            "type": string;
            "properties": {
                "accounts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "query": {
                    "description": string;
                    "$ref": string;
                };
                "orgUnit": {
                    "$ref": string;
                    "description": string;
                };
                "corpus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "holdId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HangoutsChatInfo": {
            "description": string;
            "type": string;
            "properties": {
                "roomId": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "AccountInfo": {
            "description": string;
            "type": string;
            "properties": {
                "emails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "HangoutsChatExportOptions": {
            "description": string;
            "type": string;
            "properties": {
                "exportFormat": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListHoldsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "holds": {
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
        "ListHeldAccountsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "accounts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
        "ListExportsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "exports": {
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
        "ReopenMatterRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "CloseMatterRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "MailExportOptions": {
            "description": string;
            "type": string;
            "properties": {
                "exportFormat": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Query": {
            "description": string;
            "type": string;
            "properties": {
                "mailOptions": {
                    "description": string;
                    "$ref": string;
                };
                "timeZone": {
                    "description": string;
                    "type": string;
                };
                "teamDriveInfo": {
                    "$ref": string;
                    "description": string;
                };
                "accountInfo": {
                    "description": string;
                    "$ref": string;
                };
                "driveOptions": {
                    "description": string;
                    "$ref": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dataScope": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "searchMethod": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "corpus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "hangoutsChatInfo": {
                    "description": string;
                    "$ref": string;
                };
                "hangoutsChatOptions": {
                    "description": string;
                    "$ref": string;
                };
                "orgUnitInfo": {
                    "description": string;
                    "$ref": string;
                };
                "terms": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CloudStorageSink": {
            "description": string;
            "type": string;
            "properties": {
                "files": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListMattersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "matters": {
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
        "CloseMatterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "matter": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "OrgUnitInfo": {
            "description": string;
            "type": string;
            "properties": {
                "orgUnitId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddHeldAccountsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "emails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "accountIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "AddMatterPermissionsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sendEmails": {
                    "description": string;
                    "type": string;
                };
                "matterPermission": {
                    "$ref": string;
                    "description": string;
                };
                "ccMe": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ReopenMatterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "matter": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ExportOptions": {
            "description": string;
            "type": string;
            "properties": {
                "mailOptions": {
                    "description": string;
                    "$ref": string;
                };
                "hangoutsChatOptions": {
                    "description": string;
                    "$ref": string;
                };
                "groupsOptions": {
                    "description": string;
                    "$ref": string;
                };
                "driveOptions": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DriveOptions": {
            "description": string;
            "type": string;
            "properties": {
                "versionDate": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "includeTeamDrives": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TeamDriveInfo": {
            "description": string;
            "type": string;
            "properties": {
                "teamDriveIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/ediscovery.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/ediscovery": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
};
export default _default;
//# sourceMappingURL=vault-v1.d.ts.map