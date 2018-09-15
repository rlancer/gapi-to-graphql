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
                "https://www.googleapis.com/auth/ndev.cloudman": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/ndev.cloudman.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/replicapool": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/replicapool.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AccessConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "natIp": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Action": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "commands": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "envVariables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timeoutMilliSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DiskAttachment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deviceName": {
                    "type": string;
                    "description": string;
                };
                "index": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EnvVariable": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hidden": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ExistingDisk": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attachment": {
                    "$ref": string;
                    "description": string;
                };
                "source": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "HealthCheck": {
            "id": string;
            "type": string;
            "properties": {
                "checkIntervalSec": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "healthyThreshold": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "host": {
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
                "port": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeoutSec": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "unhealthyThreshold": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Label": {
            "id": string;
            "type": string;
            "description": string;
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
        "Metadata": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fingerPrint": {
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
            };
        };
        "MetadataItem": {
            "id": string;
            "type": string;
            "description": string;
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
        "NetworkInterface": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accessConfigs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "network": {
                    "type": string;
                    "description": string;
                };
                "networkIp": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "NewDisk": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attachment": {
                    "$ref": string;
                    "description": string;
                };
                "autoDelete": {
                    "type": string;
                    "description": string;
                };
                "boot": {
                    "type": string;
                    "description": string;
                };
                "initializeParams": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "NewDiskInitializeParams": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "diskSizeGb": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "diskType": {
                    "type": string;
                    "description": string;
                };
                "sourceImage": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Pool": {
            "id": string;
            "type": string;
            "properties": {
                "autoRestart": {
                    "type": string;
                    "description": string;
                };
                "baseInstanceName": {
                    "type": string;
                    "description": string;
                };
                "currentNumReplicas": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "healthChecks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "initialNumReplicas": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "numReplicas": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resourceViews": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "targetPool": {
                    "type": string;
                    "description": string;
                };
                "targetPools": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "template": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PoolsDeleteRequest": {
            "id": string;
            "type": string;
            "properties": {
                "abandonInstances": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "PoolsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Replica": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ReplicaStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "details": {
                    "type": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "templateVersion": {
                    "type": string;
                    "description": string;
                };
                "vmLink": {
                    "type": string;
                    "description": string;
                };
                "vmStartTime": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReplicasDeleteRequest": {
            "id": string;
            "type": string;
            "properties": {
                "abandonInstance": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ReplicasListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
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
                "scopes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Tag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fingerPrint": {
                    "type": string;
                    "description": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Template": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "$ref": string;
                    "description": string;
                };
                "healthChecks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "version": {
                    "type": string;
                    "description": string;
                };
                "vmParams": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VmParams": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "baseInstanceName": {
                    "type": string;
                    "description": string;
                };
                "canIpForward": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "disksToAttach": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "disksToCreate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "machineType": {
                    "type": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "networkInterfaces": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "onHostMaintenance": {
                    "type": string;
                };
                "serviceAccounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "tags": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "pools": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                "resize": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "numReplicas": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                "updatetemplate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
            };
        };
        "replicas": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "replicaName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "replicaName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
                "restart": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "poolName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projectName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "replicaName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "zone": {
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
export default _default;
//# sourceMappingURL=replicapool-v1beta1.d.ts.map