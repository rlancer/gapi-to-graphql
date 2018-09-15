declare const _default: {
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
    "schemas": {
        "Operation": {
            "properties": {
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Status": {
            "properties": {
                "message": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "MetricsValue": {
            "properties": {
                "value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleAppsScriptTypeFunction": {
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
        "Deployment": {
            "description": string;
            "type": string;
            "properties": {
                "deploymentConfig": {
                    "$ref": string;
                    "description": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "entryPoints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "deploymentId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeAddOnEntryPoint": {
            "description": string;
            "type": string;
            "properties": {
                "reportIssueUrl": {
                    "description": string;
                    "type": string;
                };
                "postInstallTipUrl": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "addOnType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "helpUrl": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ScriptStackTraceElement": {
            "description": string;
            "type": string;
            "properties": {
                "function": {
                    "description": string;
                    "type": string;
                };
                "lineNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListScriptProcessesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "processes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeWebAppConfig": {
            "properties": {
                "access": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "executeAs": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Project": {
            "description": string;
            "type": string;
            "properties": {
                "parentId": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "creator": {
                    "$ref": string;
                    "description": string;
                };
                "scriptId": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "lastModifyUser": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListDeploymentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "deployments": {
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
        "File": {
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "functionSet": {
                    "description": string;
                    "$ref": string;
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
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "lastModifyUser": {
                    "description": string;
                    "$ref": string;
                };
                "source": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ExecutionResponse": {
            "description": string;
            "type": string;
            "properties": {
                "result": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListVersionsResponse": {
            "properties": {
                "versions": {
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
            "description": string;
            "type": string;
        };
        "Metrics": {
            "description": string;
            "type": string;
            "properties": {
                "activeUsers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalExecutions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "failedExecutions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeFunctionSet": {
            "properties": {
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Content": {
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
                "scriptId": {
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
        "GoogleAppsScriptTypeWebAppEntryPoint": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "entryPointConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdateDeploymentRequest": {
            "description": string;
            "type": string;
            "properties": {
                "deploymentConfig": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeExecutionApiEntryPoint": {
            "properties": {
                "entryPointConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ExecutionError": {
            "description": string;
            "type": string;
            "properties": {
                "errorType": {
                    "description": string;
                    "type": string;
                };
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
                "scriptStackTraceElements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeUser": {
            "description": string;
            "type": string;
            "properties": {
                "domain": {
                    "description": string;
                    "type": string;
                };
                "photoUrl": {
                    "description": string;
                    "type": string;
                };
                "email": {
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
        "ListUserProcessesResponse": {
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "processes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ExecutionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sessionState": {
                    "description": string;
                    "type": string;
                };
                "function": {
                    "description": string;
                    "type": string;
                };
                "devMode": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "EntryPoint": {
            "properties": {
                "executionApi": {
                    "description": string;
                    "$ref": string;
                };
                "entryPointType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "addOn": {
                    "description": string;
                    "$ref": string;
                };
                "webApp": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Version": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "versionNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "scriptId": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeExecutionApiConfig": {
            "description": string;
            "type": string;
            "properties": {
                "access": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "DeploymentConfig": {
            "description": string;
            "type": string;
            "properties": {
                "scriptId": {
                    "description": string;
                    "type": string;
                };
                "manifestFileName": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "versionNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleAppsScriptTypeProcess": {
            "properties": {
                "duration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "functionName": {
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userAccessLevel": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "processType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "executingUser": {
                    "description": string;
                    "type": string;
                };
                "projectName": {
                    "description": string;
                    "type": string;
                };
                "processStatus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateProjectRequest": {
            "properties": {
                "parentId": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/documents": {
                    "description": string;
                };
                "https://www.google.com/calendar/feeds": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive": {
                    "description": string;
                };
                "https://mail.google.com/": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/groups": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/forms.currentonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.group": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/spreadsheets": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/forms": {
                    "description": string;
                };
                "https://www.google.com/m8/feeds": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "scripts": {
            "methods": {
                "run": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "scriptId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
        };
        "projects": {
            "methods": {
                "updateContent": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "scriptId": {
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
                    "request": {
                        "$ref": string;
                    };
                };
                "create": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "getContent": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "versionNumber": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "scriptId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                };
                "getMetrics": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "metricsFilter.deploymentId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "scriptId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                        "metricsGranularity": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "scriptId": {
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
            };
            "resources": {
                "deployments": {
                    "methods": {
                        "delete": {
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "scriptId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "deploymentId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "scriptId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "deploymentId": {
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
                                "scriptId": {
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
                        "update": {
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
                                "scriptId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "deploymentId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
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
                            "parameters": {
                                "scriptId": {
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
                };
                "versions": {
                    "methods": {
                        "create": {
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "scriptId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "scriptId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "versionNumber": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                                "scriptId": {
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
                    };
                };
            };
        };
        "processes": {
            "methods": {
                "listScriptProcesses": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
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
                        "scriptProcessFilter.endTime": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "scriptProcessFilter.userAccessLevels": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "scriptProcessFilter.statuses": {
                            "repeated": boolean;
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "scriptProcessFilter.functionName": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "scriptProcessFilter.startTime": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "scriptProcessFilter.deploymentId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "scriptId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "scriptProcessFilter.types": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "userProcessFilter.statuses": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userProcessFilter.types": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "userProcessFilter.deploymentId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "userProcessFilter.endTime": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
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
                        "userProcessFilter.startTime": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "userProcessFilter.projectName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "userProcessFilter.userAccessLevels": {
                            "repeated": boolean;
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                        };
                        "userProcessFilter.functionName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "userProcessFilter.scriptId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
    };
    "parameters": {
        "upload_protocol": {
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
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
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
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "location": string;
            "description": string;
            "type": string;
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
};
export default _default;
//# sourceMappingURL=script-v1.d.ts.map