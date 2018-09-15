declare const _default: {
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/genomics": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/compute": {
                    "description": string;
                };
            };
        };
    };
    "servicePath": string;
    "description": string;
    "kind": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "pipelines": {
            "methods": {
                "getControllerConfig": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "operationId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "validationToken": {
                            "location": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
                        "pipelineId": {
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
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "namePrefix": {
                            "location": string;
                            "description": string;
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
                        "projectId": {
                            "description": string;
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
                "create": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "run": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
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
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "pipelineId": {
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
                "setOperationStatus": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "operations": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "filter": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
                            "pattern": string;
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
                "cancel": {
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
                        "name": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
            };
        };
    };
    "parameters": {
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
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
            "location": string;
            "description": string;
            "type": string;
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
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
    };
    "schemas": {
        "ControllerConfig": {
            "description": string;
            "type": string;
            "properties": {
                "vars": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "image": {
                    "type": string;
                };
                "gcsLogPath": {
                    "type": string;
                };
                "gcsSources": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "type": string;
                };
                "gcsSinks": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "type": string;
                };
                "disks": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "type": string;
                };
                "machineType": {
                    "type": string;
                };
                "cmd": {
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationEvent": {
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
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RepeatedString": {
            "type": string;
            "properties": {
                "values": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
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
            "description": string;
            "type": string;
        };
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "clientId": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "events": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "request": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "runtimeMetadata": {
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
        "ListPipelinesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "pipelines": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "RunPipelineArgs": {
            "properties": {
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "logging": {
                    "description": string;
                    "$ref": string;
                };
                "keepVmAliveOnFailureDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resources": {
                    "description": string;
                    "$ref": string;
                };
                "outputs": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "clientId": {
                    "description": string;
                    "type": string;
                };
                "serviceAccount": {
                    "description": string;
                    "$ref": string;
                };
                "inputs": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ContainerStartedEvent": {
            "properties": {
                "ipAddress": {
                    "description": string;
                    "type": string;
                };
                "portMappings": {
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SetOperationStatusRequest": {
            "properties": {
                "errorCode": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "timestampEvents": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operationId": {
                    "type": string;
                };
                "errorMessage": {
                    "type": string;
                };
                "validationToken": {
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ComputeEngine": {
            "description": string;
            "type": string;
            "properties": {
                "machineType": {
                    "description": string;
                    "type": string;
                };
                "diskNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "instanceName": {
                    "description": string;
                    "type": string;
                };
                "zone": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ImportVariantsResponse": {
            "properties": {
                "callSetIds": {
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
        "WorkerAssignedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "zone": {
                    "description": string;
                    "type": string;
                };
                "instance": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TimestampEvent": {
            "description": string;
            "type": string;
            "properties": {
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LocalCopy": {
            "description": string;
            "type": string;
            "properties": {
                "disk": {
                    "description": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DelayedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "metrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "cause": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DockerExecutor": {
            "description": string;
            "type": string;
            "properties": {
                "cmd": {
                    "description": string;
                    "type": string;
                };
                "imageName": {
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
        "Disk": {
            "properties": {
                "autoDelete": {
                    "description": string;
                    "type": string;
                };
                "sizeGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "mountPoint": {
                    "description": string;
                    "type": string;
                };
                "readOnly": {
                    "description": string;
                    "type": string;
                };
                "source": {
                    "description": string;
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "WorkerReleasedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "instance": {
                    "description": string;
                    "type": string;
                };
                "zone": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FailedEvent": {
            "properties": {
                "code": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "cause": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ContainerKilledEvent": {
            "properties": {
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PipelineParameter": {
            "description": string;
            "type": string;
            "properties": {
                "defaultValue": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "localCopy": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ContainerStoppedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "exitStatus": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "stderr": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LoggingOptions": {
            "description": string;
            "type": string;
            "properties": {
                "gcsPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "PullStartedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UnexpectedExitStatusEvent": {
            "description": string;
            "type": string;
            "properties": {
                "exitStatus": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "actionId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RunPipelineRequest": {
            "properties": {
                "ephemeralPipeline": {
                    "description": string;
                    "$ref": string;
                };
                "pipelineArgs": {
                    "$ref": string;
                    "description": string;
                };
                "pipelineId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CancelOperationRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "PullStoppedEvent": {
            "description": string;
            "type": string;
            "properties": {
                "imageUri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RuntimeMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "computeEngine": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
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
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "done": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ImportReadGroupSetsResponse": {
            "properties": {
                "readGroupSetIds": {
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
        "RunPipelineResponse": {
            "description": string;
            "type": string;
            "properties": {};
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
        "Event": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "details": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ServiceAccount": {
            "description": string;
            "type": string;
            "properties": {
                "email": {
                    "description": string;
                    "type": string;
                };
                "scopes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "Pipeline": {
            "properties": {
                "docker": {
                    "description": string;
                    "$ref": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "inputParameters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resources": {
                    "description": string;
                    "$ref": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "pipelineId": {
                    "description": string;
                    "type": string;
                };
                "outputParameters": {
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
        "PipelineResources": {
            "description": string;
            "type": string;
            "properties": {
                "minimumRamGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "preemptible": {
                    "description": string;
                    "type": string;
                };
                "zones": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "acceleratorCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "acceleratorType": {
                    "description": string;
                    "type": string;
                };
                "minimumCpuCores": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "noAddress": {
                    "description": string;
                    "type": string;
                };
                "disks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bootDiskSizeGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "version": string;
};
export default _default;
//# sourceMappingURL=genomics-v1alpha2.d.ts.map