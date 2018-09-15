declare const _default: {
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
            };
        };
    };
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "applicationDetailService": {
            "methods": {
                "getApkDetails": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
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
        "projects": {
            "resources": {
                "testMatrices": {
                    "methods": {
                        "cancel": {
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
                                "testMatrixId": {
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
                        "get": {
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
                                "testMatrixId": {
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
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "projectId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "requestId": {
                                    "description": string;
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
                    };
                };
            };
        };
        "testEnvironmentCatalog": {
            "methods": {
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "projectId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "environmentType": {
                            "location": string;
                            "enum": string[];
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
    "parameters": {
        "uploadType": {
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
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
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
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
            "description": string;
            "type": string;
            "location": string;
        };
    };
    "schemas": {
        "AndroidMatrix": {
            "properties": {
                "androidVersionIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "locales": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "androidModelIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "orientations": {
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
        "TestSpecification": {
            "description": string;
            "type": string;
            "properties": {
                "testTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "autoGoogleLogin": {
                    "description": string;
                    "type": string;
                };
                "iosTestSetup": {
                    "description": string;
                    "$ref": string;
                };
                "androidRoboTest": {
                    "description": string;
                    "$ref": string;
                };
                "testSetup": {
                    "description": string;
                    "$ref": string;
                };
                "androidTestLoop": {
                    "description": string;
                    "$ref": string;
                };
                "androidInstrumentationTest": {
                    "$ref": string;
                    "description": string;
                };
                "disablePerformanceMetrics": {
                    "description": string;
                    "type": string;
                };
                "disableVideoRecording": {
                    "description": string;
                    "type": string;
                };
                "iosXcTest": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TestMatrix": {
            "description": string;
            "type": string;
            "properties": {
                "environmentMatrix": {
                    "description": string;
                    "$ref": string;
                };
                "resultStorage": {
                    "description": string;
                    "$ref": string;
                };
                "testMatrixId": {
                    "description": string;
                    "type": string;
                };
                "invalidMatrixDetails": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "testSpecification": {
                    "$ref": string;
                    "description": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "clientInfo": {
                    "description": string;
                    "$ref": string;
                };
                "testExecutions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FileReference": {
            "properties": {
                "gcsPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "LauncherActivityIntent": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ToolResultsExecution": {
            "properties": {
                "executionId": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "historyId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AndroidRoboTest": {
            "description": string;
            "type": string;
            "properties": {
                "appInitialActivity": {
                    "description": string;
                    "type": string;
                };
                "maxSteps": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "roboDirectives": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "roboScript": {
                    "description": string;
                    "$ref": string;
                };
                "maxDepth": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "appApk": {
                    "description": string;
                    "$ref": string;
                };
                "appPackageId": {
                    "description": string;
                    "type": string;
                };
                "startingIntents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ToolResultsHistory": {
            "description": string;
            "type": string;
            "properties": {
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "historyId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ApkManifest": {
            "description": string;
            "type": string;
            "properties": {
                "applicationLabel": {
                    "description": string;
                    "type": string;
                };
                "minSdkVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
                "maxSdkVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "intentFilters": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "NetworkConfigurationCatalog": {
            "type": string;
            "properties": {
                "configurations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "AndroidTestLoop": {
            "description": string;
            "type": string;
            "properties": {
                "scenarios": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "scenarioLabels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "appApk": {
                    "$ref": string;
                    "description": string;
                };
                "appPackageId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IosDeviceList": {
            "description": string;
            "type": string;
            "properties": {
                "iosDevices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "AndroidDeviceCatalog": {
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
                "runtimeConfiguration": {
                    "$ref": string;
                    "description": string;
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
        "ApkDetail": {
            "description": string;
            "type": string;
            "properties": {
                "apkManifest": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ClientInfo": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "clientInfoDetails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "EnvironmentMatrix": {
            "description": string;
            "type": string;
            "properties": {
                "androidDeviceList": {
                    "description": string;
                    "$ref": string;
                };
                "androidMatrix": {
                    "description": string;
                    "$ref": string;
                };
                "iosDeviceList": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CancelTestMatrixResponse": {
            "description": string;
            "type": string;
            "properties": {
                "testState": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Date": {
            "description": string;
            "type": string;
            "properties": {
                "year": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "day": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RoboStartingIntent": {
            "properties": {
                "startActivity": {
                    "$ref": string;
                };
                "launcherActivity": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Locale": {
            "description": string;
            "type": string;
            "properties": {
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
                "region": {
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
        "Account": {
            "description": string;
            "type": string;
            "properties": {
                "googleAuto": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AndroidDevice": {
            "description": string;
            "type": string;
            "properties": {
                "androidModelId": {
                    "description": string;
                    "type": string;
                };
                "androidVersionId": {
                    "description": string;
                    "type": string;
                };
                "orientation": {
                    "description": string;
                    "type": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "NetworkConfiguration": {
            "type": string;
            "properties": {
                "downRule": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "upRule": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TrafficRule": {
            "description": string;
            "type": string;
            "properties": {
                "burst": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bandwidth": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "packetDuplicationRatio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "delay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "packetLossRatio": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IosDevice": {
            "description": string;
            "type": string;
            "properties": {
                "orientation": {
                    "description": string;
                    "type": string;
                };
                "iosVersionId": {
                    "description": string;
                    "type": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "iosModelId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IntentFilter": {
            "description": string;
            "type": string;
            "properties": {
                "actionNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "categoryNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudStorage": {
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
        "IosRuntimeConfiguration": {
            "description": string;
            "type": string;
            "properties": {
                "orientations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "locales": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "TestExecution": {
            "description": string;
            "type": string;
            "properties": {
                "matrixId": {
                    "description": string;
                    "type": string;
                };
                "testDetails": {
                    "$ref": string;
                    "description": string;
                };
                "environment": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "toolResultsStep": {
                    "description": string;
                    "$ref": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "testSpecification": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "timestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AndroidModel": {
            "description": string;
            "type": string;
            "properties": {
                "tags": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "manufacturer": {
                    "description": string;
                    "type": string;
                };
                "brand": {
                    "description": string;
                    "type": string;
                };
                "screenX": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "formFactor": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "codename": {
                    "description": string;
                    "type": string;
                };
                "screenY": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "form": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "screenDensity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "supportedVersionIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "supportedAbis": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "videoRecordingNotSupported": {
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
        "TestSetup": {
            "description": string;
            "type": string;
            "properties": {
                "additionalApks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "filesToPush": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "account": {
                    "$ref": string;
                    "description": string;
                };
                "directoriesToPull": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "networkProfile": {
                    "description": string;
                    "type": string;
                };
                "environmentVariables": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ResultStorage": {
            "description": string;
            "type": string;
            "properties": {
                "toolResultsHistory": {
                    "description": string;
                    "$ref": string;
                };
                "googleCloudStorage": {
                    "description": string;
                    "$ref": string;
                };
                "toolResultsExecution": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AndroidVersion": {
            "description": string;
            "type": string;
            "properties": {
                "apiLevel": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "distribution": {
                    "description": string;
                    "$ref": string;
                };
                "tags": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "releaseDate": {
                    "$ref": string;
                    "description": string;
                };
                "versionString": {
                    "description": string;
                    "type": string;
                };
                "codeName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TestDetails": {
            "properties": {
                "errorMessage": {
                    "description": string;
                    "type": string;
                };
                "videoRecordingDisabled": {
                    "description": string;
                    "type": string;
                };
                "progressMessages": {
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
        "Distribution": {
            "description": string;
            "type": string;
            "properties": {
                "marketShare": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "measurementTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IosVersion": {
            "description": string;
            "type": string;
            "properties": {
                "majorVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "minorVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "tags": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "Orientation": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
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
            };
            "id": string;
        };
        "GoogleAuto": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "AndroidDeviceList": {
            "description": string;
            "type": string;
            "properties": {
                "androidDevices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Apk": {
            "properties": {
                "location": {
                    "description": string;
                    "$ref": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "StartActivityIntent": {
            "description": string;
            "type": string;
            "properties": {
                "action": {
                    "description": string;
                    "type": string;
                };
                "uri": {
                    "description": string;
                    "type": string;
                };
                "categories": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "IosXcTest": {
            "description": string;
            "type": string;
            "properties": {
                "xctestrun": {
                    "$ref": string;
                    "description": string;
                };
                "testsZip": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "TestEnvironmentCatalog": {
            "description": string;
            "type": string;
            "properties": {
                "softwareCatalog": {
                    "description": string;
                    "$ref": string;
                };
                "androidDeviceCatalog": {
                    "$ref": string;
                    "description": string;
                };
                "networkConfigurationCatalog": {
                    "description": string;
                    "$ref": string;
                };
                "iosDeviceCatalog": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ObbFile": {
            "properties": {
                "obbFileName": {
                    "description": string;
                    "type": string;
                };
                "obb": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AndroidRuntimeConfiguration": {
            "description": string;
            "type": string;
            "properties": {
                "orientations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "locales": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "IosDeviceCatalog": {
            "description": string;
            "type": string;
            "properties": {
                "models": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "versions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "runtimeConfiguration": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ToolResultsStep": {
            "description": string;
            "type": string;
            "properties": {
                "stepId": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "historyId": {
                    "description": string;
                    "type": string;
                };
                "executionId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GetApkDetailsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "apkDetail": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AndroidInstrumentationTest": {
            "description": string;
            "type": string;
            "properties": {
                "testTargets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "testApk": {
                    "description": string;
                    "$ref": string;
                };
                "testRunnerClass": {
                    "description": string;
                    "type": string;
                };
                "testPackageId": {
                    "description": string;
                    "type": string;
                };
                "appPackageId": {
                    "description": string;
                    "type": string;
                };
                "appApk": {
                    "description": string;
                    "$ref": string;
                };
                "orchestratorOption": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IosModel": {
            "description": string;
            "type": string;
            "properties": {
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
                "name": {
                    "description": string;
                    "type": string;
                };
                "supportedVersionIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "deviceCapabilities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "DeviceFile": {
            "description": string;
            "type": string;
            "properties": {
                "obbFile": {
                    "description": string;
                    "$ref": string;
                };
                "regularFile": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "IosTestSetup": {
            "properties": {
                "networkProfile": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ClientInfoDetail": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "key": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RegularFile": {
            "description": string;
            "type": string;
            "properties": {
                "devicePath": {
                    "description": string;
                    "type": string;
                };
                "content": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "EnvironmentVariable": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Environment": {
            "description": string;
            "type": string;
            "properties": {
                "iosDevice": {
                    "description": string;
                    "$ref": string;
                };
                "androidDevice": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ProvidedSoftwareCatalog": {
            "description": string;
            "type": string;
            "properties": {
                "orchestratorVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RoboDirective": {
            "description": string;
            "type": string;
            "properties": {
                "resourceName": {
                    "description": string;
                    "type": string;
                };
                "inputText": {
                    "description": string;
                    "type": string;
                };
                "actionType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "version": string;
    "baseUrl": string;
};
export default _default;
//# sourceMappingURL=testing-v1.d.ts.map