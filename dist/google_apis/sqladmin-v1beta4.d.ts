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
                "https://www.googleapis.com/auth/sqlservice.admin": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AclEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expirationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BackupConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "binaryLogEnabled": {
                    "type": string;
                    "description": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "replicationLogArchivingEnabled": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BackupRun": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "enqueuedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "instance": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "windowStartTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "BackupRunsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "BinLogCoordinates": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "binLogFileName": {
                    "type": string;
                    "description": string;
                };
                "binLogPosition": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "CloneContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "binLogCoordinates": {
                    "$ref": string;
                    "description": string;
                };
                "destinationInstanceName": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "pitrTimestampMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Database": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "charset": {
                    "type": string;
                    "description": string;
                };
                "collation": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "instance": {
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
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "project": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DatabaseFlags": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "DatabaseInstance": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backendType": {
                    "type": string;
                    "description": string;
                };
                "connectionName": {
                    "type": string;
                    "description": string;
                };
                "currentDiskSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "databaseVersion": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "failoverReplica": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "available": {
                            "type": string;
                            "description": string;
                        };
                        "name": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "gceZone": {
                    "type": string;
                    "description": string;
                };
                "instanceType": {
                    "type": string;
                    "description": string;
                };
                "ipAddresses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "ipv6Address": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "masterInstanceName": {
                    "type": string;
                    "description": string;
                };
                "maxDiskSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "onPremisesConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "project": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "replicaConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "replicaNames": {
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
                "serverCaCert": {
                    "$ref": string;
                    "description": string;
                };
                "serviceAccountEmailAddress": {
                    "type": string;
                    "description": string;
                };
                "settings": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "suspensionReason": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "DatabasesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "DemoteMasterConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mysqlReplicaConfiguration": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DemoteMasterContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "masterInstanceName": {
                    "type": string;
                    "description": string;
                };
                "replicaConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "verifyGtidConsistency": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DemoteMasterMySqlReplicaConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "caCertificate": {
                    "type": string;
                    "description": string;
                };
                "clientCertificate": {
                    "type": string;
                    "description": string;
                };
                "clientKey": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "username": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ExportContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "csvExportOptions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "selectQuery": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "databases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "fileType": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "sqlExportOptions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "schemaOnly": {
                            "type": string;
                            "description": string;
                        };
                        "tables": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                    };
                };
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FailoverContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "settingsVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Flag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowedStringValues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "appliesTo": {
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
                "name": {
                    "type": string;
                    "description": string;
                };
                "requiresRestart": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FlagsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "ImportContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "csvImportOptions": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "columns": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "table": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "database": {
                    "type": string;
                    "description": string;
                };
                "fileType": {
                    "type": string;
                    "description": string;
                };
                "importUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InstancesCloneRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cloneContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesDemoteMasterRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "demoteMasterContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesExportRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exportContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesFailoverRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "failoverContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesImportRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "importContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "InstancesListServerCasResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activeVersion": {
                    "type": string;
                };
                "certs": {
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
        "InstancesRestoreBackupRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "restoreBackupContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesRotateServerCaRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "rotateServerCaContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstancesTruncateLogRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "truncateLogContext": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "IpConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authorizedNetworks": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "ipv4Enabled": {
                    "type": string;
                    "description": string;
                };
                "privateNetwork": {
                    "type": string;
                    "description": string;
                };
                "requireSsl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IpMapping": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ipAddress": {
                    "type": string;
                    "description": string;
                };
                "timeToRetire": {
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
        "LocationPreference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "followGaeApplication": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "zone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MaintenanceWindow": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "day": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hour": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updateTrack": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MySqlReplicaConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "caCertificate": {
                    "type": string;
                    "description": string;
                };
                "clientCertificate": {
                    "type": string;
                    "description": string;
                };
                "clientKey": {
                    "type": string;
                    "description": string;
                };
                "connectRetryInterval": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dumpFilePath": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "masterHeartbeatPeriod": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "sslCipher": {
                    "type": string;
                    "description": string;
                };
                "username": {
                    "type": string;
                    "description": string;
                };
                "verifyServerCertificate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OnPremisesConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hostPort": {
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
        "Operation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "exportContext": {
                    "$ref": string;
                    "description": string;
                };
                "importContext": {
                    "$ref": string;
                    "description": string;
                };
                "insertTime": {
                    "type": string;
                    "description": string;
                    "format": string;
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "targetId": {
                    "type": string;
                    "description": string;
                };
                "targetLink": {
                    "type": string;
                };
                "targetProject": {
                    "type": string;
                    "description": string;
                };
                "user": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperationError": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperationErrors": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "errors": {
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
        "OperationsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "ReplicaConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "failoverTarget": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mysqlReplicaConfiguration": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RestoreBackupContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backupRunId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "instanceId": {
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
        "RotateServerCaContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextVersion": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Settings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activationPolicy": {
                    "type": string;
                    "description": string;
                };
                "authorizedGaeApplications": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "availabilityType": {
                    "type": string;
                    "description": string;
                };
                "backupConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "crashSafeReplicationEnabled": {
                    "type": string;
                    "description": string;
                };
                "dataDiskSizeGb": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dataDiskType": {
                    "type": string;
                    "description": string;
                };
                "databaseFlags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "databaseReplicationEnabled": {
                    "type": string;
                    "description": string;
                };
                "ipConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "locationPreference": {
                    "$ref": string;
                    "description": string;
                };
                "maintenanceWindow": {
                    "$ref": string;
                    "description": string;
                };
                "pricingPlan": {
                    "type": string;
                    "description": string;
                };
                "replicationType": {
                    "type": string;
                    "description": string;
                };
                "settingsVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "storageAutoResize": {
                    "type": string;
                    "description": string;
                };
                "storageAutoResizeLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tier": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "userLabels": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
            };
        };
        "SslCert": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cert": {
                    "type": string;
                    "description": string;
                };
                "certSerialNumber": {
                    "type": string;
                    "description": string;
                };
                "commonName": {
                    "type": string;
                    "description": string;
                };
                "createTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expirationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "instance": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "sha1Fingerprint": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SslCertDetail": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "certInfo": {
                    "$ref": string;
                    "description": string;
                };
                "certPrivateKey": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SslCertsCreateEphemeralRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "public_key": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SslCertsInsertRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "commonName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SslCertsInsertResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clientCert": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "operation": {
                    "$ref": string;
                    "description": string;
                };
                "serverCaCert": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SslCertsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "Tier": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "DiskQuota": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "RAM": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "tier": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TiersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
        "TruncateLogContext": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "logType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "User": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "host": {
                    "type": string;
                    "description": string;
                };
                "instance": {
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
                "password": {
                    "type": string;
                    "description": string;
                };
                "project": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UsersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
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
    };
    "resources": {
        "backupRuns": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "instance": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "instance": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
        "databases": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "database": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "instance": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "database": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "instance": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "database": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "instance": {
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
                        "database": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "instance": {
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
        "flags": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "databaseVersion": {
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
            };
        };
        "instances": {
            "methods": {
                "addServerCa": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "clone": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "demoteMaster": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "export": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "failover": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                        "instance": {
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
                "import": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "listServerCas": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "promoteReplica": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "resetSslConfig": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "restart": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "restoreBackup": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "rotateServerCa": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "startReplica": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "stopReplica": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "truncateLog": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                        "instance": {
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
                    "etagRequired": boolean;
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
                        "instance": {
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
        "sslCerts": {
            "methods": {
                "createEphemeral": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                        "sha1Fingerprint": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                        "sha1Fingerprint": {
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
                        "instance": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
            };
        };
        "tiers": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
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
        "users": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "host": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "instance": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "name": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "instance": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "host": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "instance": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "name": {
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
    };
};
export default _default;
//# sourceMappingURL=sqladmin-v1beta4.d.ts.map