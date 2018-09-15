declare const _default: {
    "ownerName": string;
    "resources": {
        "signupUrls": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "callbackUrl": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "projectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                };
            };
        };
        "enterprises": {
            "methods": {
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
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
                    "id": string;
                    "path": string;
                };
                "patch": {
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
                "create": {
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
                    "parameters": {
                        "signupUrlName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "projectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "enterpriseToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                };
            };
            "resources": {
                "enrollmentTokens": {
                    "methods": {
                        "create": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                };
                "applications": {
                    "methods": {
                        "get": {
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "languageCode": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                    };
                };
                "devices": {
                    "methods": {
                        "delete": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "name": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "wipeDataFlags": {
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "get": {
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "list": {
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
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "patch": {
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
                            "flatPath": string;
                        };
                        "issueCommand": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                            "id": string;
                            "path": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                    "resources": {
                        "operations": {
                            "methods": {
                                "cancel": {
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
                                "delete": {
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
                                "list": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "filter": {
                                            "description": string;
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
                                        "pageToken": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "pageSize": {
                                            "location": string;
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                    "description": string;
                                };
                                "get": {
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
                                    "flatPath": string;
                                };
                            };
                        };
                    };
                };
                "webTokens": {
                    "methods": {
                        "create": {
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "policies": {
                    "methods": {
                        "delete": {
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
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
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "get": {
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "parent": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "patch": {
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
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
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
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
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
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "quotaUser": {
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
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "HardwareStatus": {
            "properties": {
                "fanSpeeds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "skinTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "cpuUsages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "batteryTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "cpuTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "gpuTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "NetworkInfo": {
            "description": string;
            "type": string;
            "properties": {
                "networkOperatorName": {
                    "description": string;
                    "type": string;
                };
                "imei": {
                    "description": string;
                    "type": string;
                };
                "meid": {
                    "description": string;
                    "type": string;
                };
                "wifiMacAddress": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeviceSettings": {
            "properties": {
                "unknownSourcesEnabled": {
                    "description": string;
                    "type": string;
                };
                "verifyAppsEnabled": {
                    "description": string;
                    "type": string;
                };
                "developmentSettingsEnabled": {
                    "description": string;
                    "type": string;
                };
                "adbEnabled": {
                    "description": string;
                    "type": string;
                };
                "isEncrypted": {
                    "description": string;
                    "type": string;
                };
                "encryptionStatus": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "isDeviceSecure": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "StatusReportingSettings": {
            "description": string;
            "type": string;
            "properties": {
                "memoryInfoEnabled": {
                    "description": string;
                    "type": string;
                };
                "displayInfoEnabled": {
                    "description": string;
                    "type": string;
                };
                "powerManagementEventsEnabled": {
                    "description": string;
                    "type": string;
                };
                "deviceSettingsEnabled": {
                    "description": string;
                    "type": string;
                };
                "networkInfoEnabled": {
                    "description": string;
                    "type": string;
                };
                "softwareInfoEnabled": {
                    "description": string;
                    "type": string;
                };
                "applicationReportsEnabled": {
                    "description": string;
                    "type": string;
                };
                "hardwareStatusEnabled": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ExternalData": {
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "sha256Hash": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Policy": {
            "description": string;
            "type": string;
            "properties": {
                "version": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "mountPhysicalMediaDisabled": {
                    "description": string;
                    "type": string;
                };
                "passwordRequirements": {
                    "description": string;
                    "$ref": string;
                };
                "tetheringConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "statusReportingSettings": {
                    "description": string;
                    "$ref": string;
                };
                "maximumTimeToLock": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "funDisabled": {
                    "description": string;
                    "type": string;
                };
                "kioskCustomLauncherEnabled": {
                    "description": string;
                    "type": string;
                };
                "longSupportMessage": {
                    "$ref": string;
                    "description": string;
                };
                "keyguardDisabledFeatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "vpnConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "cameraDisabled": {
                    "description": string;
                    "type": string;
                };
                "wifiConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "factoryResetDisabled": {
                    "description": string;
                    "type": string;
                };
                "addUserDisabled": {
                    "description": string;
                    "type": string;
                };
                "setUserIconDisabled": {
                    "description": string;
                    "type": string;
                };
                "shortSupportMessage": {
                    "description": string;
                    "$ref": string;
                };
                "setWallpaperDisabled": {
                    "description": string;
                    "type": string;
                };
                "ensureVerifyAppsEnabled": {
                    "description": string;
                    "type": string;
                };
                "debuggingFeaturesAllowed": {
                    "description": string;
                    "type": string;
                };
                "openNetworkConfiguration": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "shareLocationDisabled": {
                    "description": string;
                    "type": string;
                };
                "cellBroadcastsConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "androidDevicePolicyTracks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "modifyAccountsDisabled": {
                    "description": string;
                    "type": string;
                };
                "frpAdminEmails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "locationMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "installUnknownSourcesAllowed": {
                    "description": string;
                    "type": string;
                };
                "persistentPreferredActivities": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "privateKeySelectionEnabled": {
                    "description": string;
                    "type": string;
                };
                "createWindowsDisabled": {
                    "description": string;
                    "type": string;
                };
                "bluetoothContactSharingDisabled": {
                    "description": string;
                    "type": string;
                };
                "autoTimeRequired": {
                    "description": string;
                    "type": string;
                };
                "removeUserDisabled": {
                    "description": string;
                    "type": string;
                };
                "complianceRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "installAppsDisabled": {
                    "description": string;
                    "type": string;
                };
                "systemUpdate": {
                    "description": string;
                    "$ref": string;
                };
                "smsDisabled": {
                    "description": string;
                    "type": string;
                };
                "appAutoUpdatePolicy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "uninstallAppsDisabled": {
                    "description": string;
                    "type": string;
                };
                "statusBarDisabled": {
                    "description": string;
                    "type": string;
                };
                "deviceOwnerLockScreenInfo": {
                    "description": string;
                    "$ref": string;
                };
                "credentialsConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "blockApplicationsEnabled": {
                    "description": string;
                    "type": string;
                };
                "accountTypesWithManagementDisabled": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "safeBootDisabled": {
                    "description": string;
                    "type": string;
                };
                "applications": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "usbMassStorageEnabled": {
                    "description": string;
                    "type": string;
                };
                "choosePrivateKeyRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "permissionGrants": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "keyguardDisabled": {
                    "description": string;
                    "type": string;
                };
                "permittedInputMethods": {
                    "description": string;
                    "$ref": string;
                };
                "screenCaptureDisabled": {
                    "description": string;
                    "type": string;
                };
                "networkResetDisabled": {
                    "description": string;
                    "type": string;
                };
                "networkEscapeHatchEnabled": {
                    "description": string;
                    "type": string;
                };
                "mobileNetworksConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "playStoreMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "encryptionPolicy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "unmuteMicrophoneDisabled": {
                    "description": string;
                    "type": string;
                };
                "recommendedGlobalProxy": {
                    "$ref": string;
                    "description": string;
                };
                "skipFirstUseHintsEnabled": {
                    "description": string;
                    "type": string;
                };
                "usbFileTransferDisabled": {
                    "description": string;
                    "type": string;
                };
                "adjustVolumeDisabled": {
                    "description": string;
                    "type": string;
                };
                "outgoingCallsDisabled": {
                    "description": string;
                    "type": string;
                };
                "defaultPermissionPolicy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "bluetoothConfigDisabled": {
                    "description": string;
                    "type": string;
                };
                "stayOnPluggedModes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "outgoingBeamDisabled": {
                    "description": string;
                    "type": string;
                };
                "dataRoamingDisabled": {
                    "description": string;
                    "type": string;
                };
                "wifiConfigsLockdownEnabled": {
                    "description": string;
                    "type": string;
                };
                "bluetoothDisabled": {
                    "description": string;
                    "type": string;
                };
                "alwaysOnVpnPackage": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "PowerManagementEvent": {
            "description": string;
            "type": string;
            "properties": {
                "eventType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "batteryLevel": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ApiLevelCondition": {
            "description": string;
            "type": string;
            "properties": {
                "minApiLevel": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SoftwareInfo": {
            "properties": {
                "androidBuildTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "securityPatchLevel": {
                    "description": string;
                    "type": string;
                };
                "androidBuildNumber": {
                    "description": string;
                    "type": string;
                };
                "androidVersion": {
                    "description": string;
                    "type": string;
                };
                "deviceBuildSignature": {
                    "description": string;
                    "type": string;
                };
                "primaryLanguageCode": {
                    "description": string;
                    "type": string;
                };
                "androidDevicePolicyVersionName": {
                    "description": string;
                    "type": string;
                };
                "androidDevicePolicyVersionCode": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bootloaderVersion": {
                    "description": string;
                    "type": string;
                };
                "deviceKernelVersion": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ChoosePrivateKeyRule": {
            "properties": {
                "privateKeyAlias": {
                    "description": string;
                    "type": string;
                };
                "packageNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "urlPattern": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListDevicesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "devices": {
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
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "done": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ProxyInfo": {
            "properties": {
                "pacUri": {
                    "description": string;
                    "type": string;
                };
                "port": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "excludedHosts": {
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
        "PasswordRequirements": {
            "properties": {
                "passwordExpirationTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumUpperCase": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordQuality": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "maximumFailedPasswordsForWipe": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumNumeric": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumSymbols": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumLetters": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumNonLetter": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordHistoryLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumLowerCase": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "passwordMinimumLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "EnrollmentToken": {
            "description": string;
            "type": string;
            "properties": {
                "additionalData": {
                    "description": string;
                    "type": string;
                };
                "oneTimeOnly": {
                    "description": string;
                    "type": string;
                };
                "qrCode": {
                    "description": string;
                    "type": string;
                };
                "policyName": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "$ref": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "duration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "expirationTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
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
            "description": string;
            "type": string;
        };
        "SignupUrl": {
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "NonComplianceDetail": {
            "properties": {
                "settingName": {
                    "description": string;
                    "type": string;
                };
                "nonComplianceReason": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "installationFailureReason": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
                "fieldPath": {
                    "description": string;
                    "type": string;
                };
                "currentValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "HardwareInfo": {
            "properties": {
                "skinThrottlingTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "hardware": {
                    "description": string;
                    "type": string;
                };
                "cpuThrottlingTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "gpuShutdownTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "gpuThrottlingTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "batteryThrottlingTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "manufacturer": {
                    "description": string;
                    "type": string;
                };
                "serialNumber": {
                    "description": string;
                    "type": string;
                };
                "brand": {
                    "description": string;
                    "type": string;
                };
                "deviceBasebandVersion": {
                    "description": string;
                    "type": string;
                };
                "batteryShutdownTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "skinShutdownTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "model": {
                    "description": string;
                    "type": string;
                };
                "cpuShutdownTemperatures": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Display": {
            "properties": {
                "density": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "refreshRate": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "displayId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
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
        "ApplicationPermission": {
            "description": string;
            "type": string;
            "properties": {
                "permissionId": {
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
            };
            "id": string;
        };
        "ManagedProperty": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "key": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "entries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultValue": {
                    "description": string;
                    "type": string;
                };
                "nestedProperties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "TermsAndConditions": {
            "properties": {
                "content": {
                    "description": string;
                    "$ref": string;
                };
                "header": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AlwaysOnVpnPackage": {
            "description": string;
            "type": string;
            "properties": {
                "lockdownEnabled": {
                    "description": string;
                    "type": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
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
        "MemoryInfo": {
            "properties": {
                "totalRam": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalInternalStorage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PermissionGrant": {
            "properties": {
                "permission": {
                    "description": string;
                    "type": string;
                };
                "policy": {
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
        "Enterprise": {
            "properties": {
                "enabledNotificationTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "appAutoApprovalEnabled": {
                    "description": string;
                    "type": string;
                };
                "enterpriseDisplayName": {
                    "description": string;
                    "type": string;
                };
                "pubsubTopic": {
                    "description": string;
                    "type": string;
                };
                "logo": {
                    "description": string;
                    "$ref": string;
                };
                "termsAndConditions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "primaryColor": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ApplicationReport": {
            "properties": {
                "packageSha256Hash": {
                    "description": string;
                    "type": string;
                };
                "events": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "installerPackageName": {
                    "description": string;
                    "type": string;
                };
                "signingKeyCertFingerprints": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "applicationSource": {
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
                "versionName": {
                    "description": string;
                    "type": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
                "versionCode": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "WebToken": {
            "properties": {
                "permissions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "parentFrameUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "User": {
            "properties": {
                "accountIdentifier": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Device": {
            "description": string;
            "type": string;
            "properties": {
                "enrollmentTokenData": {
                    "description": string;
                    "type": string;
                };
                "managementMode": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "nonComplianceDetails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "user": {
                    "$ref": string;
                    "description": string;
                };
                "previousDeviceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "lastStatusReportTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "policyCompliant": {
                    "description": string;
                    "type": string;
                };
                "deviceSettings": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "enrollmentTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "disabledReason": {
                    "description": string;
                    "$ref": string;
                };
                "softwareInfo": {
                    "$ref": string;
                    "description": string;
                };
                "hardwareInfo": {
                    "description": string;
                    "$ref": string;
                };
                "appliedPolicyVersion": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "applicationReports": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "displays": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "apiLevel": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "userName": {
                    "description": string;
                    "type": string;
                };
                "networkInfo": {
                    "$ref": string;
                    "description": string;
                };
                "memoryEvents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "memoryInfo": {
                    "description": string;
                    "$ref": string;
                };
                "hardwareStatusSamples": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "appliedState": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "appliedPolicyName": {
                    "description": string;
                    "type": string;
                };
                "lastPolicySyncTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "policyName": {
                    "description": string;
                    "type": string;
                };
                "powerManagementEvents": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "enrollmentTokenName": {
                    "description": string;
                    "type": string;
                };
                "lastPolicyComplianceReportTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListPoliciesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "policies": {
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
        "ComplianceRule": {
            "description": string;
            "type": string;
            "properties": {
                "apiLevelCondition": {
                    "$ref": string;
                    "description": string;
                };
                "nonComplianceDetailCondition": {
                    "description": string;
                    "$ref": string;
                };
                "packageNamesToDisable": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "disableApps": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SystemUpdate": {
            "properties": {
                "endMinutes": {
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
                "startMinutes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ApplicationEvent": {
            "properties": {
                "eventType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PackageNameList": {
            "properties": {
                "packageNames": {
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
        "NonComplianceDetailCondition": {
            "properties": {
                "nonComplianceReason": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
                "settingName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PersistentPreferredActivity": {
            "properties": {
                "actions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "categories": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "receiverActivity": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Application": {
            "properties": {
                "permissions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "managedProperties": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
        "UserFacingMessage": {
            "description": string;
            "type": string;
            "properties": {
                "defaultMessage": {
                    "description": string;
                    "type": string;
                };
                "localizedMessages": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ManagedPropertyEntry": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
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
        "ApplicationPolicy": {
            "properties": {
                "defaultPermissionPolicy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "disabled": {
                    "description": string;
                    "type": string;
                };
                "delegatedScopes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
                "installType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "minimumVersionCode": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "permissionGrants": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lockTaskAllowed": {
                    "description": string;
                    "type": string;
                };
                "managedConfiguration": {
                    "additionalProperties": {
                        "description": string;
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
        "Command": {
            "description": string;
            "type": string;
            "properties": {
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errorCode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "newPassword": {
                    "description": string;
                    "type": string;
                };
                "resetPasswordFlags": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "userName": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "duration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MemoryEvent": {
            "description": string;
            "type": string;
            "properties": {
                "byteCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "eventType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "createTime": {
                    "description": string;
                    "format": string;
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
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/androidmanagement": {
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
};
export default _default;
//# sourceMappingURL=androidmanagement-v1.d.ts.map