declare const _default: {
    "documentationLink": string;
    "id": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GoogleCloudMlV1__GetConfigResponse": {
            "description": string;
            "type": string;
            "properties": {
                "serviceAccountProject": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "serviceAccount": {
                    "description": string;
                    "type": string;
                };
                "config": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__TestIamPermissionsResponse": {
            "properties": {
                "permissions": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudMlV1__HyperparameterOutput": {
            "description": string;
            "type": string;
            "properties": {
                "hyperparameters": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "trialId": {
                    "description": string;
                    "type": string;
                };
                "isTrialStoppedEarly": {
                    "description": string;
                    "type": string;
                };
                "allMetrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "finalMetric": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__SetIamPolicyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "policy": {
                    "$ref": string;
                    "description": string;
                };
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__PredictionOutput": {
            "description": string;
            "type": string;
            "properties": {
                "errorCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "outputPath": {
                    "type": string;
                    "description": string;
                };
                "nodeHours": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "predictionCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__Policy": {
            "description": string;
            "type": string;
            "properties": {
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "auditConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bindings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleLongrunning__ListOperationsResponse": {
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
        "GoogleCloudMlV1__ManualScaling": {
            "description": string;
            "type": string;
            "properties": {
                "nodes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__Binding": {
            "description": string;
            "type": string;
            "properties": {
                "members": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "role": {
                    "description": string;
                    "type": string;
                };
                "condition": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__TrainingOutput": {
            "description": string;
            "type": string;
            "properties": {
                "consumedMLUnits": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "trials": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "completedTrialCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "isHyperparameterTuningJob": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__PredictRequest": {
            "description": string;
            "type": string;
            "properties": {
                "httpBody": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric": {
            "description": string;
            "type": string;
            "properties": {
                "trainingStep": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectiveValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__AcceleratorConfig": {
            "description": string;
            "type": string;
            "properties": {
                "count": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__Config": {
            "type": string;
            "properties": {
                "tpuServiceAccount": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__Version": {
            "description": string;
            "type": string;
            "properties": {
                "framework": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "isDefault": {
                    "type": string;
                    "description": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "manualScaling": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "pythonVersion": {
                    "description": string;
                    "type": string;
                };
                "lastUseTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deploymentUri": {
                    "description": string;
                    "type": string;
                };
                "autoScaling": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
                "runtimeVersion": {
                    "description": string;
                    "type": string;
                };
                "machineType": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__ParameterSpec": {
            "description": string;
            "type": string;
            "properties": {
                "minValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "discreteValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "scaleType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "maxValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "categoricalValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "parameterName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__PredictionInput": {
            "description": string;
            "type": string;
            "properties": {
                "versionName": {
                    "description": string;
                    "type": string;
                };
                "modelName": {
                    "description": string;
                    "type": string;
                };
                "uri": {
                    "description": string;
                    "type": string;
                };
                "maxWorkerCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "signatureName": {
                    "description": string;
                    "type": string;
                };
                "outputPath": {
                    "description": string;
                    "type": string;
                };
                "dataFormat": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "batchSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "runtimeVersion": {
                    "description": string;
                    "type": string;
                };
                "inputPaths": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "accelerator": {
                    "$ref": string;
                    "description": string;
                };
                "region": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__Location": {
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                };
                "capabilities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "modelName": {
                    "description": string;
                    "type": string;
                };
                "version": {
                    "$ref": string;
                    "description": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "operationType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "isCancellationRequested": {
                    "description": string;
                    "type": string;
                };
                "projectNumber": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__AuditLogConfig": {
            "properties": {
                "logType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "exemptedMembers": {
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
        "GoogleType__Expr": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "expression": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__HyperparameterSpec": {
            "description": string;
            "type": string;
            "properties": {
                "goal": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "maxTrials": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "algorithm": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "hyperparameterMetricTag": {
                    "description": string;
                    "type": string;
                };
                "params": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "enableTrialEarlyStopping": {
                    "description": string;
                    "type": string;
                };
                "resumePreviousJobId": {
                    "description": string;
                    "type": string;
                };
                "maxParallelTrials": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__ListLocationsResponse": {
            "properties": {
                "locations": {
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
            "type": string;
        };
        "GoogleCloudMlV1__ListJobsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "jobs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__SetDefaultVersionRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {};
        };
        "GoogleLongrunning__Operation": {
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
        "GoogleIamV1__AuditConfig": {
            "description": string;
            "type": string;
            "properties": {
                "service": {
                    "description": string;
                    "type": string;
                };
                "auditLogConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__Model": {
            "description": string;
            "type": string;
            "properties": {
                "defaultVersion": {
                    "$ref": string;
                    "description": string;
                };
                "regions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "onlinePredictionLogging": {
                    "description": string;
                    "type": string;
                };
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
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
        "GoogleProtobuf__Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudMlV1__CancelJobRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "GoogleCloudMlV1__ListVersionsResponse": {
            "id": string;
            "description": string;
            "type": string;
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
        };
        "GoogleIamV1__TestIamPermissionsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "permissions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__AutoScaling": {
            "description": string;
            "type": string;
            "properties": {
                "minNodes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleRpc__Status": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "message": {
                    "type": string;
                    "description": string;
                };
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                    };
                };
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "GoogleCloudMlV1__TrainingInput": {
            "description": string;
            "type": string;
            "properties": {
                "runtimeVersion": {
                    "description": string;
                    "type": string;
                };
                "pythonModule": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "description": string;
                    "type": string;
                };
                "args": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "workerType": {
                    "description": string;
                    "type": string;
                };
                "parameterServerType": {
                    "description": string;
                    "type": string;
                };
                "scaleTier": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "jobDir": {
                    "description": string;
                    "type": string;
                };
                "hyperparameters": {
                    "description": string;
                    "$ref": string;
                };
                "pythonVersion": {
                    "description": string;
                    "type": string;
                };
                "parameterServerCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "packageUris": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "workerCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "masterType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__ListModelsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "models": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudMlV1__Job": {
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
                "predictionOutput": {
                    "description": string;
                    "$ref": string;
                };
                "trainingOutput": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "predictionInput": {
                    "$ref": string;
                    "description": string;
                };
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "trainingInput": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "jobId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GoogleCloudMlV1__Capability": {
            "type": string;
            "properties": {
                "availableAccelerators": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleApi__HttpBody": {
            "description": string;
            "type": string;
            "properties": {
                "data": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "contentType": {
                    "description": string;
                    "type": string;
                };
                "extensions": {
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
            "methods": {
                "predict": {
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
                        "name": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "getConfig": {
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
            };
            "resources": {
                "locations": {
                    "methods": {
                        "get": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "name": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "parent": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
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
                            "id": string;
                            "path": string;
                        };
                    };
                };
                "jobs": {
                    "methods": {
                        "list": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "create": {
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
                                "parent": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "setIamPolicy": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "resource": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                        "cancel": {
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "getIamPolicy": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "resource": {
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
                        "get": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "name": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "patch": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                        "testIamPermissions": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "resource": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                "operations": {
                    "methods": {
                        "list": {
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "filter": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
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
                        };
                        "cancel": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
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
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "models": {
                    "methods": {
                        "delete": {
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
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "scopes": string[];
                        };
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
                                "pageSize": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
                                "parent": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                                "filter": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "setIamPolicy": {
                            "id": string;
                            "path": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "resource": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "create": {
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
                                "parent": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "getIamPolicy": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "resource": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "patch": {
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
                                "updateMask": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                };
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
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "testIamPermissions": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "resource": {
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
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                    "resources": {
                        "versions": {
                            "methods": {
                                "create": {
                                    "scopes": string[];
                                    "parameters": {
                                        "parent": {
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
                                    "request": {
                                        "$ref": string;
                                    };
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                };
                                "get": {
                                    "parameters": {
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                };
                                "patch": {
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
                                        "updateMask": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "name": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                        };
                                    };
                                };
                                "setDefault": {
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
                                        "name": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                                "delete": {
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "name": {
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
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
                                    "scopes": string[];
                                    "parameters": {
                                        "filter": {
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
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                        "parent": {
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                            "location": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "parameters": {
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
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
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
            "description": string;
            "type": string;
            "location": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "description": string;
    "kind": string;
    "basePath": string;
};
export default _default;
//# sourceMappingURL=ml-v1.d.ts.map