declare const _default: {
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "subscriptions": {
            "methods": {
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "query": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "maxResults": {
                            "type": string;
                            "location": string;
                            "description": string;
                            "format": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "create": {
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
                "modifyAckDeadline": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                };
                "acknowledge": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                };
                "get": {
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
                        "subscription": {
                            "pattern": string;
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
                "pullBatch": {
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
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "modifyPushConfig": {
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
                "pull": {
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
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
                    "scopes": string[];
                    "parameters": {
                        "subscription": {
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
        "topics": {
            "methods": {
                "get": {
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
                        "topic": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                };
                "publish": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {};
                    "scopes": string[];
                };
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "topic": {
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
                "publishBatch": {
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
                "list": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "query": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "maxResults": {
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
                    "description": string;
                };
                "create": {
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
    };
    "parameters": {
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
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
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
    };
    "schemas": {
        "Label": {
            "description": string;
            "type": string;
            "properties": {
                "numValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "key": {
                    "description": string;
                    "type": string;
                };
                "strValue": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ModifyAckDeadlineRequest": {
            "properties": {
                "ackDeadlineSeconds": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "ackIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "subscription": {
                    "description": string;
                    "type": string;
                };
                "ackId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PullBatchRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "subscription": {
                    "type": string;
                    "description": string;
                };
                "returnImmediately": {
                    "type": string;
                    "description": string;
                };
                "maxEvents": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "PubsubMessage": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "messageId": {
                    "description": string;
                    "type": string;
                };
                "label": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "publishTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "ModifyPushConfigRequest": {
            "description": string;
            "type": string;
            "properties": {
                "pushConfig": {
                    "description": string;
                    "$ref": string;
                };
                "subscription": {
                    "description": string;
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
        "PullBatchResponse": {
            "properties": {
                "pullResponses": {
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
        "AcknowledgeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "subscription": {
                    "description": string;
                    "type": string;
                };
                "ackId": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "PublishBatchRequest": {
            "properties": {
                "messages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "topic": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListTopicsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "topic": {
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
        "PullResponse": {
            "description": string;
            "type": string;
            "properties": {
                "ackId": {
                    "description": string;
                    "type": string;
                };
                "pubsubEvent": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "PushConfig": {
            "description": string;
            "type": string;
            "properties": {
                "pushEndpoint": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "PullRequest": {
            "description": string;
            "type": string;
            "properties": {
                "subscription": {
                    "description": string;
                    "type": string;
                };
                "returnImmediately": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListSubscriptionsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "subscription": {
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
        "PubsubEvent": {
            "description": string;
            "type": string;
            "properties": {
                "truncated": {
                    "description": string;
                    "type": string;
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
                "message": {
                    "$ref": string;
                    "description": string;
                };
                "subscription": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "PublishRequest": {
            "description": string;
            "type": string;
            "properties": {
                "topic": {
                    "description": string;
                    "type": string;
                };
                "message": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Subscription": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "ackDeadlineSeconds": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "topic": {
                    "type": string;
                    "description": string;
                };
                "pushConfig": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PublishBatchResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "messageIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
        };
        "Topic": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
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
    "version": string;
    "baseUrl": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/pubsub": {
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
};
export default _default;
//# sourceMappingURL=pubsub-v1beta1a.d.ts.map