declare const _default: {
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "BuildStep": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "secretEnv": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "dir": {
                    "description": string;
                    "type": string;
                };
                "timing": {
                    "$ref": string;
                    "description": string;
                };
                "env": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "waitFor": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "entrypoint": {
                    "description": string;
                    "type": string;
                };
                "volumes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "args": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
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
        "RepoSource": {
            "properties": {
                "repoName": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "commitSha": {
                    "description": string;
                    "type": string;
                };
                "dir": {
                    "description": string;
                    "type": string;
                };
                "branchName": {
                    "description": string;
                    "type": string;
                };
                "tagName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "FileHashes": {
            "properties": {
                "fileHash": {
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
        "BuildTrigger": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "build": {
                    "$ref": string;
                    "description": string;
                };
                "ignoredFiles": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "substitutions": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "includedFiles": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "disabled": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "triggerTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "filename": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Build": {
            "description": string;
            "type": string;
            "properties": {
                "finishTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "logUrl": {
                    "description": string;
                    "type": string;
                };
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "options": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "statusDetail": {
                    "description": string;
                    "type": string;
                };
                "artifacts": {
                    "description": string;
                    "$ref": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "secrets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "logsBucket": {
                    "description": string;
                    "type": string;
                };
                "results": {
                    "description": string;
                    "$ref": string;
                };
                "steps": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "buildTriggerId": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "tags": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "substitutions": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "timing": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sourceProvenance": {
                    "description": string;
                    "$ref": string;
                };
                "images": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CancelBuildRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ListBuildsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "builds": {
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
        "Volume": {
            "properties": {
                "path": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "operations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "TimeSpan": {
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
            };
            "id": string;
        };
        "BuildOptions": {
            "description": string;
            "type": string;
            "properties": {
                "diskSizeGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sourceProvenanceHash": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "machineType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "logStreamingOption": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "logging": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "requestedVerifyOption": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "substitutionOption": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "StorageSource": {
            "description": string;
            "type": string;
            "properties": {
                "generation": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bucket": {
                    "description": string;
                    "type": string;
                };
                "object": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Results": {
            "properties": {
                "buildStepOutputs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "images": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "numArtifacts": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "artifactManifest": {
                    "description": string;
                    "type": string;
                };
                "buildStepImages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ArtifactObjects": {
            "description": string;
            "type": string;
            "properties": {
                "timing": {
                    "$ref": string;
                    "description": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "paths": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ListBuildTriggersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "triggers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "BuiltImage": {
            "description": string;
            "type": string;
            "properties": {
                "pushTiming": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "digest": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Hash": {
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Secret": {
            "properties": {
                "kmsKeyName": {
                    "description": string;
                    "type": string;
                };
                "secretEnv": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "Source": {
            "description": string;
            "type": string;
            "properties": {
                "storageSource": {
                    "description": string;
                    "$ref": string;
                };
                "repoSource": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "RetryBuildRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "Artifacts": {
            "properties": {
                "images": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "objects": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ArtifactResult": {
            "description": string;
            "type": string;
            "properties": {
                "fileHash": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "location": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BuildOperationMetadata": {
            "properties": {
                "build": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SourceProvenance": {
            "description": string;
            "type": string;
            "properties": {
                "resolvedRepoSource": {
                    "$ref": string;
                    "description": string;
                };
                "resolvedStorageSource": {
                    "$ref": string;
                    "description": string;
                };
                "fileHashes": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CancelOperationRequest": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
        };
        "Operation": {
            "description": string;
            "type": string;
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
                "name": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "description": string;
                    "$ref": string;
                };
                "metadata": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
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
                "https://www.googleapis.com/auth/cloud-platform": {
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
        "projects": {
            "resources": {
                "builds": {
                    "methods": {
                        "cancel": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "id": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "projectId": {
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "retry": {
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
                                "projectId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "id": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "projectId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "id": {
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
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "projectId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
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
                            "scopes": string[];
                            "parameters": {
                                "projectId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                };
                "triggers": {
                    "methods": {
                        "run": {
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
                                "triggerId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "projectId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                        };
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "triggerId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "projectId": {
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
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "triggerId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "projectId": {
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
                        };
                        "delete": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "triggerId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "projectId": {
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
                        "list": {
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "projectId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "create": {
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
                                "projectId": {
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
                    };
                };
            };
        };
        "operations": {
            "methods": {
                "cancel": {
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
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
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
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
    "parameters": {
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
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
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
};
export default _default;
//# sourceMappingURL=cloudbuild-v1.d.ts.map