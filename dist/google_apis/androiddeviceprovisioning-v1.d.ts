declare const _default: {
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "CustomerListDevicesResponse": {
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
        "DeviceClaim": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "ownerCompanyId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resellerId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sectionType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
        };
        "DevicesLongRunningOperationResponse": {
            "description": string;
            "type": string;
            "properties": {
                "successCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "perDeviceStatus": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PerDeviceStatusInBatch": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "errorIdentifier": {
                    "description": string;
                    "type": string;
                };
                "errorMessage": {
                    "type": string;
                    "description": string;
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "ClaimDevicesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "claims": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "FindDevicesByOwnerRequest": {
            "description": string;
            "type": string;
            "properties": {
                "pageToken": {
                    "type": string;
                    "description": string;
                };
                "sectionType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "customerId": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "limit": {
                    "description": string;
                    "format": string;
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
                    "type": string;
                    "description": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
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
        "DeviceIdentifier": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "model": {
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
                "manufacturer": {
                    "type": string;
                    "description": string;
                };
                "serialNumber": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Dpc": {
            "description": string;
            "type": string;
            "properties": {
                "dpcName": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "packageName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UnclaimDevicesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "unclaims": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CustomerApplyConfigurationRequest": {
            "description": string;
            "type": string;
            "properties": {
                "device": {
                    "$ref": string;
                    "description": string;
                };
                "configuration": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CustomerUnclaimDeviceRequest": {
            "type": string;
            "properties": {
                "device": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "FindDevicesByDeviceIdentifierRequest": {
            "properties": {
                "limit": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deviceIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "pageToken": {
                    "type": string;
                    "description": string;
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
                        "type": string;
                        "additionalProperties": {
                            "type": string;
                            "description": string;
                        };
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
        "OperationPerDevice": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "updateMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "unclaim": {
                    "$ref": string;
                    "description": string;
                };
                "result": {
                    "$ref": string;
                    "description": string;
                };
                "claim": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CustomerListConfigurationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "configurations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "FindDevicesByOwnerResponse": {
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
        "CustomerRemoveConfigurationRequest": {
            "description": string;
            "type": string;
            "properties": {
                "device": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ListVendorsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "vendors": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ClaimDeviceRequest": {
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "description": string;
                    "$ref": string;
                };
                "sectionType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "customerId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DevicesLongRunningOperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "processingStatus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "progress": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "devicesCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateDeviceMetadataInBatchRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "updates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListCustomersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "customers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ClaimDeviceResponse": {
            "description": string;
            "type": string;
            "properties": {
                "deviceName": {
                    "description": string;
                    "type": string;
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateMetadataArguments": {
            "description": string;
            "type": string;
            "properties": {
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deviceIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "deviceMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DeviceReference": {
            "description": string;
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "description": string;
                    "$ref": string;
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Device": {
            "description": string;
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "description": string;
                    "$ref": string;
                };
                "deviceMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "configuration": {
                    "description": string;
                    "type": string;
                };
                "claims": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "CreateCustomerRequest": {
            "description": string;
            "type": string;
            "properties": {
                "customer": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Company": {
            "description": string;
            "type": string;
            "properties": {
                "companyName": {
                    "description": string;
                    "type": string;
                };
                "companyId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "adminEmails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "termsStatus": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "ownerEmails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ListVendorCustomersResponse": {
            "properties": {
                "customers": {
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
        "Configuration": {
            "description": string;
            "type": string;
            "properties": {
                "dpcResourcePath": {
                    "description": string;
                    "type": string;
                };
                "configurationId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "companyName": {
                    "description": string;
                    "type": string;
                };
                "isDefault": {
                    "description": string;
                    "type": string;
                };
                "customMessage": {
                    "description": string;
                    "type": string;
                };
                "dpcExtras": {
                    "description": string;
                    "type": string;
                };
                "contactEmail": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "configurationName": {
                    "description": string;
                    "type": string;
                };
                "contactPhone": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateDeviceMetadataRequest": {
            "type": string;
            "properties": {
                "deviceMetadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CustomerListDpcsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "dpcs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PartnerUnclaim": {
            "description": string;
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "sectionType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "type": string;
            "properties": {};
            "id": string;
            "description": string;
        };
        "FindDevicesByDeviceIdentifierResponse": {
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
        "PartnerClaim": {
            "description": string;
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "deviceMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "sectionType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "customerId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UnclaimDeviceRequest": {
            "type": string;
            "properties": {
                "deviceIdentifier": {
                    "description": string;
                    "$ref": string;
                };
                "sectionType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "deviceId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DeviceMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "entries": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CustomerListCustomersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "customers": {
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
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "canonicalName": string;
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "partners": {
            "resources": {
                "vendors": {
                    "resources": {
                        "customers": {
                            "methods": {
                                "list": {
                                    "description": string;
                                    "httpMethod": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
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
                                        "parent": {
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
                            };
                        };
                    };
                    "methods": {
                        "list": {
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
                                "parent": {
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
                "devices": {
                    "methods": {
                        "claimAsync": {
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
                                "partnerId": {
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "findByIdentifier": {
                            "flatPath": string;
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
                            "parameters": {
                                "partnerId": {
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                        };
                        "unclaimAsync": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "partnerId": {
                                    "type": string;
                                    "required": boolean;
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                    "format": string;
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
                        "metadata": {
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
                                "metadataOwnerId": {
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "deviceId": {
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "updateMetadataAsync": {
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
                                "partnerId": {
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
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
                        "unclaim": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "partnerId": {
                                    "description": string;
                                    "pattern": string;
                                    "format": string;
                                    "type": string;
                                    "required": boolean;
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
                        "findByOwner": {
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
                            "parameters": {
                                "partnerId": {
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "claim": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "partnerId": {
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                    "pattern": string;
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
                    };
                };
                "customers": {
                    "methods": {
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
                                "parent": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
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
                                "partnerId": {
                                    "pattern": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
        "operations": {
            "methods": {
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
                        "name": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                };
            };
        };
        "customers": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
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
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
            "resources": {
                "devices": {
                    "methods": {
                        "applyConfiguration": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
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
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
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
                                "name": {
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "unclaim": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "removeConfiguration": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "configurations": {
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "delete": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
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
                            "flatPath": string;
                        };
                        "patch": {
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
                                "name": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "list": {
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
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                        };
                    };
                };
                "dpcs": {
                    "methods": {
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
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
                        };
                    };
                };
            };
        };
    };
    "parameters": {
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
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
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
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "key": {
            "type": string;
            "location": string;
            "description": string;
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
            "type": string;
            "default": string;
            "location": string;
            "description": string;
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
};
export default _default;
//# sourceMappingURL=androiddeviceprovisioning-v1.d.ts.map