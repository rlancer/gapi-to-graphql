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
                "https://www.googleapis.com/auth/ndev.clouddns.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/ndev.clouddns.readwrite": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Change": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "additions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "deletions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isServing": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ChangesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "changes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "header": {
                    "$ref": string;
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
        "DnsKey": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "algorithm": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "digests": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isActive": {
                    "type": string;
                    "description": string;
                };
                "keyLength": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "keyTag": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "publicKey": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DnsKeyDigest": {
            "id": string;
            "type": string;
            "properties": {
                "digest": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DnsKeySpec": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "algorithm": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "keyLength": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "keyType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "DnsKeysListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dnsKeys": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "header": {
                    "$ref": string;
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
        "ManagedZone": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creationTime": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "dnsName": {
                    "type": string;
                    "description": string;
                };
                "dnssecConfig": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "nameServerSet": {
                    "type": string;
                    "description": string;
                };
                "nameServers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ManagedZoneDnsSecConfig": {
            "id": string;
            "type": string;
            "properties": {
                "defaultKeySpecs": {
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
                "nonExistence": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "state": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ManagedZoneOperationsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "header": {
                    "$ref": string;
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
                "operations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ManagedZonesListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "header": {
                    "$ref": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "managedZones": {
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
        "Operation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dnsKeyContext": {
                    "$ref": string;
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
                "startTime": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "user": {
                    "type": string;
                    "description": string;
                };
                "zoneContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OperationDnsKeyContext": {
            "id": string;
            "type": string;
            "properties": {
                "newValue": {
                    "$ref": string;
                    "description": string;
                };
                "oldValue": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OperationManagedZoneContext": {
            "id": string;
            "type": string;
            "properties": {
                "newValue": {
                    "$ref": string;
                    "description": string;
                };
                "oldValue": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Project": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "number": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quota": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Quota": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dnsKeysPerManagedZone": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "managedZones": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resourceRecordsPerRrset": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rrsetAdditionsPerChange": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rrsetDeletionsPerChange": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rrsetsPerManagedZone": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalRrdataSizePerChange": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "whitelistedKeySpecs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ResourceRecordSet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "rrdatas": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "signatureRrdatas": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "ttl": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResourceRecordSetsListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "header": {
                    "$ref": string;
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
                "rrsets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ResponseHeader": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "operationId": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "changes": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "changeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sortBy": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
        "dnsKeys": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "digestType": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "dnsKeyId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "digestType": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "project": {
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
        "managedZoneOperations": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
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
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sortBy": {
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
            };
        };
        "managedZones": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "project": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "dnsName": {
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
                        "project": {
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
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "project": {
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
        "projects": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientOperationId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "project": {
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
        "resourceRecordSets": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "managedZone": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "name": {
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
                            "location": string;
                        };
                        "type": {
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
    };
};
export default _default;
//# sourceMappingURL=dns-v1.d.ts.map