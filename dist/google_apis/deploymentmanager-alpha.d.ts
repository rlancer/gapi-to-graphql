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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/ndev.cloudman": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/ndev.cloudman.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AsyncOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "methodMatch": {
                    "type": string;
                    "description": string;
                };
                "pollingOptions": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "AuditConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "auditLogConfigs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "exemptedMembers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "service": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AuditLogConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exemptedMembers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "logType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AuthorizationLoggingOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "permissionType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BasicAuth": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "password": {
                    "type": string;
                };
                "user": {
                    "type": string;
                };
            };
        };
        "Binding": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "condition": {
                    "$ref": string;
                    "description": string;
                };
                "members": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "role": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CollectionOverride": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "collection": {
                    "type": string;
                    "description": string;
                };
                "methodMap": {
                    "$ref": string;
                    "description": string;
                };
                "options": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CompositeType": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "labels": {
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
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                };
                "templateContents": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CompositeTypeLabelEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "CompositeTypesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "compositeTypes": {
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
        "Condition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "iam": {
                    "type": string;
                    "description": string;
                };
                "op": {
                    "type": string;
                    "description": string;
                };
                "svc": {
                    "type": string;
                    "description": string;
                };
                "sys": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
                "values": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ConfigFile": {
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
        "ConfigurableService": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "collectionOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "credential": {
                    "$ref": string;
                    "description": string;
                };
                "descriptorUrl": {
                    "type": string;
                    "description": string;
                };
                "options": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Credential": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "basicAuth": {
                    "$ref": string;
                    "description": string;
                };
                "serviceAccount": {
                    "$ref": string;
                    "description": string;
                };
                "useProjectDefault": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Deployment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "credential": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "manifest": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "outputs": {
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
                "target": {
                    "$ref": string;
                    "description": string;
                };
                "update": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DeploymentLabelEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "DeploymentOutputsEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "DeploymentUpdate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "credential": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "manifest": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DeploymentUpdateLabelEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "DeploymentsCancelPreviewRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fingerprint": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DeploymentsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deployments": {
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
        "DeploymentsStopRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fingerprint": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Diagnostic": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "field": {
                    "type": string;
                    "description": string;
                };
                "level": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Expr": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "expression": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GlobalSetPolicyRequest": {
            "id": string;
            "type": string;
            "properties": {
                "bindings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "policy": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ImportFile": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "content": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InputMapping": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fieldName": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "methodMatch": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LogConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cloudAudit": {
                    "$ref": string;
                    "description": string;
                };
                "counter": {
                    "$ref": string;
                    "description": string;
                };
                "dataAccess": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LogConfigCloudAuditOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authorizationLoggingOptions": {
                    "$ref": string;
                    "description": string;
                };
                "logName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LogConfigCounterOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "field": {
                    "type": string;
                    "description": string;
                };
                "metric": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LogConfigDataAccessOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "logMode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Manifest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "expandedConfig": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "imports": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "layout": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ManifestsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "manifests": {
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
        "MethodMap": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "create": {
                    "type": string;
                    "description": string;
                };
                "delete": {
                    "type": string;
                    "description": string;
                };
                "get": {
                    "type": string;
                    "description": string;
                };
                "setIamPolicy": {
                    "type": string;
                    "description": string;
                };
                "update": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Operation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clientOperationId": {
                    "type": string;
                    "description": string;
                };
                "creationTimestamp": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                };
                "error": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "errors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "location": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "httpErrorMessage": {
                    "type": string;
                    "description": string;
                };
                "httpErrorStatusCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
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
                "operationType": {
                    "type": string;
                    "description": string;
                };
                "progress": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "statusMessage": {
                    "type": string;
                    "description": string;
                };
                "targetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetLink": {
                    "type": string;
                    "description": string;
                };
                "user": {
                    "type": string;
                    "description": string;
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "code": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "key": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "value": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "message": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "zone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperationsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "operations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Options": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "asyncOptions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inputMappings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nameProperty": {
                    "type": string;
                    "description": string;
                };
                "validationOptions": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Policy": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "auditConfigs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bindings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iamOwned": {
                    "type": string;
                    "description": string;
                };
                "rules": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PollingOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "diagnostics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "failCondition": {
                    "type": string;
                    "description": string;
                };
                "finishCondition": {
                    "type": string;
                    "description": string;
                };
                "pollingLink": {
                    "type": string;
                    "description": string;
                };
                "targetLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Resource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accessControl": {
                    "$ref": string;
                    "description": string;
                };
                "finalProperties": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "lastUsedCredential": {
                    "$ref": string;
                    "description": string;
                };
                "manifest": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "properties": {
                    "type": string;
                    "description": string;
                };
                "runtimePolicies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "update": {
                    "$ref": string;
                    "description": string;
                };
                "updateTime": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "code": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "key": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "value": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "message": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
            };
        };
        "ResourceAccessControl": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "gcpIamPolicy": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResourceUpdate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accessControl": {
                    "$ref": string;
                    "description": string;
                };
                "credential": {
                    "$ref": string;
                    "description": string;
                };
                "error": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "errors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "location": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "finalProperties": {
                    "type": string;
                    "description": string;
                };
                "intent": {
                    "type": string;
                    "description": string;
                };
                "manifest": {
                    "type": string;
                    "description": string;
                };
                "properties": {
                    "type": string;
                    "description": string;
                };
                "runtimePolicies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "code": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "key": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "value": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "message": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
            };
        };
        "ResourcesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Rule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "conditions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "ins": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "logConfigs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "notIns": {
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
                        "type": string;
                    };
                };
            };
        };
        "ServiceAccount": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TargetConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "config": {
                    "$ref": string;
                    "description": string;
                };
                "imports": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TemplateContents": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "imports": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "interpreter": {
                    "type": string;
                    "description": string;
                };
                "mainTemplate": {
                    "type": string;
                    "description": string;
                };
                "schema": {
                    "type": string;
                    "description": string;
                };
                "template": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TestPermissionsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "permissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "TestPermissionsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "permissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Type": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "configurableService": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "labels": {
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
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TypeInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "documentationLink": {
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
                "schema": {
                    "$ref": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TypeInfoSchemaInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "input": {
                    "type": string;
                    "description": string;
                };
                "output": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TypeLabelEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "TypeProvider": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "collectionOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "credential": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "descriptorUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                };
                "labels": {
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
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "options": {
                    "$ref": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TypeProviderLabelEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "TypeProvidersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "typeProviders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TypeProvidersListTypesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "types": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TypesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "types": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ValidationOptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "schemaValidation": {
                    "type": string;
                    "description": string;
                };
                "undeclaredProperties": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "compositeTypes": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "compositeType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "compositeType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                            "pattern": string;
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
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "compositeType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "compositeType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "deployments": {
            "methods": {
                "cancelPreview": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "deletePolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "resource": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "createPolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "preview": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "createPolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "deletePolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "preview": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "resource": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "resource": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "createPolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "deletePolicy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "preview": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "manifests": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "manifest": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "operations": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "operation": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "resources": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "resource": {
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
                        "deployment": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "typeProviders": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "getType": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                            "pattern": string;
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
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listTypes": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "typeProvider": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
        "types": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                            "pattern": string;
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
                        "filter": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
//# sourceMappingURL=deploymentmanager-alpha.d.ts.map