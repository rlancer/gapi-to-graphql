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
        "InstanceUpdate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "error": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "errors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "location": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "instance": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InstanceUpdateList": {
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
                "selfLink": {
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
                "clientOperationId": {
                    "type": string;
                };
                "creationTimestamp": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                };
                "error": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "errors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "location": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "httpErrorMessage": {
                    "type": string;
                };
                "httpErrorStatusCode": {
                    "type": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "insertTime": {
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
                "operationType": {
                    "type": string;
                };
                "progress": {
                    "type": string;
                    "format": string;
                };
                "region": {
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
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "statusMessage": {
                    "type": string;
                    "description": string;
                };
                "targetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetLink": {
                    "type": string;
                    "description": string;
                };
                "user": {
                    "type": string;
                };
                "warnings": {
                    "type": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "code": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
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
                            };
                            "message": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "zone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperationList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RollingUpdate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "actionType": {
                    "type": string;
                    "description": string;
                };
                "creationTimestamp": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "error": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "errors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "location": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "instanceGroup": {
                    "type": string;
                    "description": string;
                };
                "instanceGroupManager": {
                    "type": string;
                    "description": string;
                };
                "instanceTemplate": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "oldInstanceTemplate": {
                    "type": string;
                    "description": string;
                };
                "policy": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "autoPauseAfterInstances": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "instanceStartupTimeoutSec": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "maxNumConcurrentInstances": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "maxNumFailedInstances": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "minInstanceUpdateTimeSec": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "progress": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "selfLink": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "statusMessage": {
                    "type": string;
                    "description": string;
                };
                "user": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RollingUpdateList": {
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
                "selfLink": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "rollingUpdates": {
            "methods": {
                "cancel": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                        "filter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
                "listInstanceUpdates": {
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
                "pause": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
                "resume": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
                "rollback": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "rollingUpdate": {
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
        "zoneOperations": {
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
                            "pattern": string;
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
                        "filter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
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
                        "project": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
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
//# sourceMappingURL=replicapoolupdater-v1beta1.d.ts.map