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
    "packagePath": string;
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
                "https://www.googleapis.com/auth/admin.directory.customer": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.customer.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.device.chromeos": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.device.mobile": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.device.mobile.action": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.device.mobile.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.domain": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.domain.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.group": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.group.member": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.group.member.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.group.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.notifications": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.orgunit": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.orgunit.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.resource.calendar": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.rolemanagement": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user.alias": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user.alias.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.user.security": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.userschema": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/admin.directory.userschema.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Alias": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alias": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "primaryEmail": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Aliases": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "aliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "AppAccessCollections": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "blockedApiAccessBuckets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "enforceSettingsForAndroidDrive": {
                    "type": string;
                    "description": string;
                };
                "errorMessage": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resourceName": {
                    "type": string;
                    "description": string;
                };
                "trustDomainOwnedApps": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Asp": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "codeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastTimeUsed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "userKey": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Asps": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Building": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buildingId": {
                    "type": string;
                    "description": string;
                };
                "buildingName": {
                    "type": string;
                    "description": string;
                };
                "coordinates": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "etags": {
                    "type": string;
                    "description": string;
                };
                "floorNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "BuildingCoordinates": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "latitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "longitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Buildings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buildings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CalendarResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buildingId": {
                    "type": string;
                    "description": string;
                };
                "capacity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "etags": {
                    "type": string;
                    "description": string;
                };
                "featureInstances": {
                    "type": string;
                };
                "floorName": {
                    "type": string;
                    "description": string;
                };
                "floorSection": {
                    "type": string;
                    "description": string;
                };
                "generatedResourceName": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resourceCategory": {
                    "type": string;
                    "description": string;
                };
                "resourceDescription": {
                    "type": string;
                    "description": string;
                };
                "resourceEmail": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "resourceName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "resourceType": {
                    "type": string;
                    "description": string;
                };
                "userVisibleDescription": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CalendarResources": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Channel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "expiration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "params": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "payload": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
                "resourceUri": {
                    "type": string;
                    "description": string;
                };
                "token": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChromeOsDevice": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activeTimeRanges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "activeTime": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "date": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "annotatedAssetId": {
                    "type": string;
                    "description": string;
                };
                "annotatedLocation": {
                    "type": string;
                    "description": string;
                };
                "annotatedUser": {
                    "type": string;
                    "description": string;
                };
                "bootMode": {
                    "type": string;
                    "description": string;
                };
                "deviceFiles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "createTime": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "downloadUrl": {
                                "type": string;
                                "description": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "deviceId": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "ethernetMacAddress": {
                    "type": string;
                    "description": string;
                };
                "firmwareVersion": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastEnrollmentTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastSync": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "macAddress": {
                    "type": string;
                    "description": string;
                };
                "meid": {
                    "type": string;
                    "description": string;
                };
                "model": {
                    "type": string;
                    "description": string;
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "orderNumber": {
                    "type": string;
                    "description": string;
                };
                "orgUnitPath": {
                    "type": string;
                    "description": string;
                };
                "osVersion": {
                    "type": string;
                    "description": string;
                };
                "platformVersion": {
                    "type": string;
                    "description": string;
                };
                "recentUsers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "email": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "serialNumber": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "supportEndDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tpmVersionInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "family": {
                            "type": string;
                            "description": string;
                        };
                        "firmwareVersion": {
                            "type": string;
                            "description": string;
                        };
                        "manufacturer": {
                            "type": string;
                            "description": string;
                        };
                        "specLevel": {
                            "type": string;
                            "description": string;
                        };
                        "tpmModel": {
                            "type": string;
                            "description": string;
                        };
                        "vendorSpecific": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "willAutoRenew": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChromeOsDeviceAction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "deprovisionReason": {
                    "type": string;
                };
            };
        };
        "ChromeOsDevices": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "chromeosdevices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChromeOsMoveDevicesToOu": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deviceIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Customer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alternateEmail": {
                    "type": string;
                    "description": string;
                };
                "customerCreationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "customerDomain": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "postalAddress": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CustomerPostalAddress": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addressLine1": {
                    "type": string;
                    "description": string;
                };
                "addressLine2": {
                    "type": string;
                    "description": string;
                };
                "addressLine3": {
                    "type": string;
                    "description": string;
                };
                "contactName": {
                    "type": string;
                    "description": string;
                };
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "organizationName": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DomainAlias": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "domainAliasName": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "parentDomainName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "verified": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DomainAliases": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "domainAliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Domains": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "domainAliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "domainName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "isPrimary": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "verified": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Domains2": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "domains": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Feature": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etags": {
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
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "FeatureInstance": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "feature": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "FeatureRename": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "newName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Features": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "features": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Group": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adminCreated": {
                    "type": string;
                    "description": string;
                };
                "aliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "directMembersCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
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
                "nonEditableAliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Groups": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "groups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Member": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delivery_settings": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "role": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Members": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "members": {
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
        "MembersHasMember": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "isMember": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
            };
        };
        "MobileDevice": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adbStatus": {
                    "type": string;
                    "description": string;
                };
                "applications": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "displayName": {
                                "type": string;
                                "description": string;
                            };
                            "packageName": {
                                "type": string;
                                "description": string;
                            };
                            "permission": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "versionCode": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "versionName": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "basebandVersion": {
                    "type": string;
                    "description": string;
                };
                "bootloaderVersion": {
                    "type": string;
                    "description": string;
                };
                "brand": {
                    "type": string;
                    "description": string;
                };
                "buildNumber": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "developerOptionsStatus": {
                    "type": string;
                    "description": string;
                };
                "deviceCompromisedStatus": {
                    "type": string;
                    "description": string;
                };
                "deviceId": {
                    "type": string;
                    "description": string;
                };
                "devicePasswordStatus": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "encryptionStatus": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "firstSync": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hardware": {
                    "type": string;
                    "description": string;
                };
                "hardwareId": {
                    "type": string;
                    "description": string;
                };
                "imei": {
                    "type": string;
                    "description": string;
                };
                "kernelVersion": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastSync": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "managedAccountIsOnOwnerProfile": {
                    "type": string;
                    "description": string;
                };
                "manufacturer": {
                    "type": string;
                    "description": string;
                };
                "meid": {
                    "type": string;
                    "description": string;
                };
                "model": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "networkOperator": {
                    "type": string;
                    "description": string;
                };
                "os": {
                    "type": string;
                    "description": string;
                };
                "otherAccountsInfo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "privilege": {
                    "type": string;
                    "description": string;
                };
                "releaseVersion": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
                "securityPatchLevel": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "serialNumber": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "supportsWorkProfile": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "unknownSourcesStatus": {
                    "type": string;
                    "description": string;
                };
                "userAgent": {
                    "type": string;
                    "description": string;
                };
                "wifiMacAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MobileDeviceAction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "MobileDevices": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mobiledevices": {
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
        "Notification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "body": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fromAddress": {
                    "type": string;
                    "description": string;
                };
                "isUnread": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "notificationId": {
                    "type": string;
                };
                "sendTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subject": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Notifications": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "unreadNotificationsCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OrgUnit": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "blockInheritance": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "etag": {
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
                    "annotations": {
                        "required": string[];
                    };
                };
                "orgUnitId": {
                    "type": string;
                    "description": string;
                };
                "orgUnitPath": {
                    "type": string;
                    "description": string;
                };
                "parentOrgUnitId": {
                    "type": string;
                    "description": string;
                };
                "parentOrgUnitPath": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrgUnits": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "organizationUnits": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Privilege": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "childPrivileges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "isOuScopable": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "privilegeName": {
                    "type": string;
                    "description": string;
                };
                "serviceId": {
                    "type": string;
                    "description": string;
                };
                "serviceName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Privileges": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Role": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "isSuperAdminRole": {
                    "type": string;
                    "description": string;
                };
                "isSystemRole": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "roleDescription": {
                    "type": string;
                    "description": string;
                };
                "roleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "roleName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "rolePrivileges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "privilegeName": {
                                "type": string;
                                "description": string;
                            };
                            "serviceId": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "RoleAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "assignedTo": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "orgUnitId": {
                    "type": string;
                    "description": string;
                };
                "roleAssignmentId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "roleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scopeType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoleAssignments": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                };
            };
        };
        "Roles": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                };
            };
        };
        "Schema": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fields": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "schemaId": {
                    "type": string;
                    "description": string;
                };
                "schemaName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "SchemaFieldSpec": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fieldId": {
                    "type": string;
                    "description": string;
                };
                "fieldName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "fieldType": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "indexed": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "multiValued": {
                    "type": string;
                    "description": string;
                };
                "numericIndexingSpec": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "maxValue": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "minValue": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "readAccessType": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Schemas": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "schemas": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Token": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "anonymous": {
                    "type": string;
                    "description": string;
                };
                "clientId": {
                    "type": string;
                    "description": string;
                };
                "displayText": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nativeApp": {
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
                "userKey": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Tokens": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TrustedAppId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidPackageName": {
                    "type": string;
                    "description": string;
                };
                "certificateHashSHA1": {
                    "type": string;
                    "description": string;
                };
                "certificateHashSHA256": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TrustedApps": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                };
                "trustedApps": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "User": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addresses": {
                    "type": string;
                };
                "agreedToTerms": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "aliases": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                    "items": {
                        "type": string;
                    };
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "changePasswordAtNextLogin": {
                    "type": string;
                    "description": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "readOnly": boolean;
                };
                "customSchemas": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "customerId": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "deletionTime": {
                    "type": string;
                    "format": string;
                    "readOnly": boolean;
                };
                "emails": {
                    "type": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "externalIds": {
                    "type": string;
                };
                "gender": {
                    "type": string;
                };
                "hashFunction": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "ims": {
                    "type": string;
                };
                "includeInGlobalAddressList": {
                    "type": string;
                    "description": string;
                };
                "ipWhitelisted": {
                    "type": string;
                    "description": string;
                };
                "isAdmin": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "isDelegatedAdmin": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "isEnforcedIn2Sv": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "isEnrolledIn2Sv": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "isMailboxSetup": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "keywords": {
                    "type": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "readOnly": boolean;
                };
                "languages": {
                    "type": string;
                };
                "lastLoginTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "readOnly": boolean;
                };
                "locations": {
                    "type": string;
                };
                "name": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "nonEditableAliases": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                    "items": {
                        "type": string;
                    };
                };
                "notes": {
                    "type": string;
                };
                "orgUnitPath": {
                    "type": string;
                    "description": string;
                };
                "organizations": {
                    "type": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "phones": {
                    "type": string;
                };
                "posixAccounts": {
                    "type": string;
                };
                "primaryEmail": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "relations": {
                    "type": string;
                };
                "sshPublicKeys": {
                    "type": string;
                };
                "suspended": {
                    "type": string;
                    "description": string;
                };
                "suspensionReason": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "thumbnailPhotoEtag": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "thumbnailPhotoUrl": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "websites": {
                    "type": string;
                };
            };
        };
        "UserAbout": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentType": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserAddress": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "customType": {
                    "type": string;
                    "description": string;
                };
                "extendedAddress": {
                    "type": string;
                    "description": string;
                };
                "formatted": {
                    "type": string;
                    "description": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "poBox": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "sourceIsStructured": {
                    "type": string;
                    "description": string;
                };
                "streetAddress": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserCustomProperties": {
            "id": string;
            "type": string;
            "description": string;
            "additionalProperties": {
                "type": string;
            };
        };
        "UserEmail": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "customType": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserExternalId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customType": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserGender": {
            "id": string;
            "type": string;
            "properties": {
                "addressMeAs": {
                    "type": string;
                    "description": string;
                };
                "customGender": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserIm": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customProtocol": {
                    "type": string;
                    "description": string;
                };
                "customType": {
                    "type": string;
                    "description": string;
                };
                "im": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "protocol": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserKeyword": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customType": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserLanguage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customLanguage": {
                    "type": string;
                    "description": string;
                };
                "languageCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserLocation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "area": {
                    "type": string;
                    "description": string;
                };
                "buildingId": {
                    "type": string;
                    "description": string;
                };
                "customType": {
                    "type": string;
                    "description": string;
                };
                "deskCode": {
                    "type": string;
                    "description": string;
                };
                "floorName": {
                    "type": string;
                    "description": string;
                };
                "floorSection": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserMakeAdmin": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "status": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "UserName": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "familyName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "givenName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "UserOrganization": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "costCenter": {
                    "type": string;
                    "description": string;
                };
                "customType": {
                    "type": string;
                    "description": string;
                };
                "department": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "domain": {
                    "type": string;
                    "description": string;
                };
                "fullTimeEquivalent": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "location": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "symbol": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserPhone": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customType": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserPhoto": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "photoData": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "primaryEmail": {
                    "type": string;
                    "description": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "UserPosixAccount": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "gecos": {
                    "type": string;
                    "description": string;
                };
                "gid": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "homeDirectory": {
                    "type": string;
                    "description": string;
                };
                "operatingSystemType": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "shell": {
                    "type": string;
                    "description": string;
                };
                "systemId": {
                    "type": string;
                    "description": string;
                };
                "uid": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "username": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserRelation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customType": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserSshPublicKey": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expirationTimeUsec": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fingerprint": {
                    "type": string;
                    "description": string;
                    "readOnly": boolean;
                };
                "key": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserUndelete": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "orgUnitPath": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserWebsite": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customType": {
                    "type": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Users": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "trigger_event": {
                    "type": string;
                    "description": string;
                };
                "users": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VerificationCode": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "userId": {
                    "type": string;
                    "description": string;
                };
                "verificationCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VerificationCodes": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
    };
    "resources": {
        "asps": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "codeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "codeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "userKey": {
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
                        "userKey": {
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
        "channels": {
            "methods": {
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "chromeosdevices": {
            "methods": {
                "action": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "resourceId": {
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "deviceId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "query": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "moveDevicesToOu": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "deviceId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "deviceId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "customers": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerKey": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerKey": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerKey": {
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
            };
        };
        "domainAliases": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "domainAliasName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "domainAliasName": {
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
                        "customer": {
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "parentDomainName": {
                            "type": string;
                            "description": string;
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
        "domains": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "domainName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "domainName": {
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
                        "customer": {
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
                        "customer": {
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
        "groups": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "domain": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "query": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
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
                        "groupKey": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
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
            };
            "resources": {
                "aliases": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "alias": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "groupKey": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "insert": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "groupKey": {
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
                                "groupKey": {
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
                            "supportsSubscription": boolean;
                        };
                    };
                };
            };
        };
        "members": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "memberKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "memberKey": {
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
                "hasMember": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "memberKey": {
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
                        "groupKey": {
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
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "includeDerivedMembership": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roles": {
                            "type": string;
                            "description": string;
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
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "memberKey": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "memberKey": {
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
            };
        };
        "mobiledevices": {
            "methods": {
                "action": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "resourceId": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "resourceId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "resourceId": {
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "query": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "notifications": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "notificationId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "notificationId": {
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "notificationId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "notificationId": {
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
            };
        };
        "orgunits": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
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
                        "customerId": {
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "orgUnitPath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "repeated": boolean;
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
        "privileges": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
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
        "resolvedAppAccessSettings": {
            "methods": {
                "GetSettings": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                };
                "ListTrustedApps": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                };
            };
        };
        "resources": {
            "resources": {
                "buildings": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "buildingId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "buildingId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                                "customer": {
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
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
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
                                "buildingId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "buildingId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                    };
                };
                "calendars": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "calendarResourceId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "calendarResourceId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                                "customer": {
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
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "minimum": string;
                                    "maximum": string;
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
                                "query": {
                                    "type": string;
                                    "description": string;
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
                                "calendarResourceId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "calendarResourceId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "customer": {
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
                    };
                };
                "features": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "featureKey": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "featureKey": {
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
                                "customer": {
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
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
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
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "featureKey": {
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
                        "rename": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "oldName": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "customer": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "featureKey": {
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
                    };
                };
            };
        };
        "roleAssignments": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleAssignmentId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleAssignmentId": {
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
                        "customer": {
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
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
                        "roleId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
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
        "roles": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleId": {
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
                        "customer": {
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
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
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customer": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "roleId": {
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
            };
        };
        "schemas": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "schemaKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "schemaKey": {
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
                        "customerId": {
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
                        "customerId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "schemaKey": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "schemaKey": {
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
            };
        };
        "tokens": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "userKey": {
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
                        "userKey": {
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
        "users": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customFieldMask": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "viewType": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "customFieldMask": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "customer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "domain": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "event": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "query": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "viewType": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
                "makeAdmin": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
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
                "undelete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
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
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customFieldMask": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "customer": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "domain": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "event": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projection": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "query": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "viewType": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
            "resources": {
                "aliases": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "alias": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userKey": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "insert": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userKey": {
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
                                "event": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "userKey": {
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
                            "supportsSubscription": boolean;
                        };
                        "watch": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "event": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "userKey": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "request": {
                                "$ref": string;
                                "parameterName": string;
                            };
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "supportsSubscription": boolean;
                        };
                    };
                };
                "photos": {
                    "methods": {
                        "delete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userKey": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "scopes": string[];
                        };
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userKey": {
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
                        "patch": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userKey": {
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
                        "update": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userKey": {
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
                    };
                };
            };
        };
        "verificationCodes": {
            "methods": {
                "generate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "invalidate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userKey": {
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
//# sourceMappingURL=admin-directory_v1.d.ts.map