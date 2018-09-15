declare const _default: {
    "discoveryVersion": string;
    "ownerName": string;
    "version_module": boolean;
    "resources": {
        "beacons": {
            "methods": {
                "register": {
                    "parameters": {
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
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                };
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "q": {
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
                        "projectId": {
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "activate": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "beaconName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "projectId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "projectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "beaconName": {
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
                };
                "update": {
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
                        "beaconName": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
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
                "decommission": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "beaconName": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                        "projectId": {
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
                        "beaconName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "projectId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                };
                "deactivate": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "beaconName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "projectId": {
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
            };
            "resources": {
                "attachments": {
                    "methods": {
                        "delete": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "projectId": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "attachmentName": {
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
                        };
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "namespacedType": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "beaconName": {
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
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
                                "beaconName": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                                "projectId": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
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
                        "batchDelete": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "beaconName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "projectId": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "namespacedType": {
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
                    };
                };
                "diagnostics": {
                    "methods": {
                        "list": {
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
                                    "type": string;
                                };
                                "beaconName": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
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
                                "alertFilter": {
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
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
        "beaconinfo": {
            "methods": {
                "getforobserved": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
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
        "namespaces": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
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
                };
                "update": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "namespaceName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "projectId": {
                            "location": string;
                            "description": string;
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
            };
        };
        "v1beta1": {
            "methods": {
                "getEidparams": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                };
            };
        };
    };
    "parameters": {
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
            "type": string;
            "location": string;
            "description": string;
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
            "location": string;
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
            "description": string;
            "type": string;
            "location": string;
        };
        "access_token": {
            "type": string;
            "location": string;
            "description": string;
        };
    };
    "schemas": {
        "Empty": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {};
        };
        "GetInfoForObservedBeaconsRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "observations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "namespacedTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "BeaconAttachment": {
            "description": string;
            "type": string;
            "properties": {
                "attachmentName": {
                    "description": string;
                    "type": string;
                };
                "namespacedType": {
                    "description": string;
                    "type": string;
                };
                "data": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "creationTimeMs": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxDistanceMeters": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EphemeralIdRegistration": {
            "description": string;
            "type": string;
            "properties": {
                "rotationPeriodExponent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "serviceEcdhPublicKey": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "beaconIdentityKey": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "initialEid": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "initialClockValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "beaconEcdhPublicKey": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LatLng": {
            "description": string;
            "type": string;
            "properties": {
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListBeaconAttachmentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "attachments": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Namespace": {
            "description": string;
            "type": string;
            "properties": {
                "namespaceName": {
                    "type": string;
                    "description": string;
                };
                "servingVisibility": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "BeaconInfo": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "beaconName": {
                    "description": string;
                    "type": string;
                };
                "advertisedId": {
                    "description": string;
                    "$ref": string;
                };
                "attachments": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AttachmentInfo": {
            "description": string;
            "type": string;
            "properties": {
                "maxDistanceMeters": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "namespacedType": {
                    "description": string;
                    "type": string;
                };
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "EphemeralIdRegistrationParams": {
            "properties": {
                "minRotationPeriodExponent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxRotationPeriodExponent": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "serviceEcdhPublicKey": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DeleteAttachmentsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "numDeleted": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Observation": {
            "properties": {
                "telemetry": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timestampMs": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "advertisedId": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListDiagnosticsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "diagnostics": {
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
        "GetInfoForObservedBeaconsResponse": {
            "properties": {
                "beacons": {
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
        "Beacon": {
            "description": string;
            "type": string;
            "properties": {
                "ephemeralIdRegistration": {
                    "$ref": string;
                    "description": string;
                };
                "provisioningKey": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "latLng": {
                    "description": string;
                    "$ref": string;
                };
                "placeId": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "properties": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "indoorLevel": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "beaconName": {
                    "description": string;
                    "type": string;
                };
                "expectedStability": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "advertisedId": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AdvertisedId": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "IndoorLevel": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Date": {
            "description": string;
            "type": string;
            "properties": {
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "ListNamespacesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "namespaces": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListBeaconsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "beacons": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Diagnostics": {
            "description": string;
            "type": string;
            "properties": {
                "alerts": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                };
                "estimatedLowBatteryDate": {
                    "$ref": string;
                    "description": string;
                };
                "beaconName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/userlocation.beacon.registry": {
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "title": string;
};
export default _default;
//# sourceMappingURL=proximitybeacon-v1beta1.d.ts.map