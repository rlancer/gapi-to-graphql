declare const _default: {
    "resources": {
        "v1beta1": {
            "methods": {
                "testIamPermissions": {
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
                        "resource": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                };
                "getIamPolicy": {
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
                "setIamPolicy": {
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
        };
        "projects": {
            "resources": {
                "brokers": {
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
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
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
                        };
                        "delete": {
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
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                    };
                    "resources": {
                        "instances": {
                            "methods": {
                                "getLast_operation": {
                                    "description": string;
                                    "httpMethod": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "parameters": {
                                        "planId": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "serviceId": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "name": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "pattern": string;
                                        };
                                        "operation": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                };
                                "list": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "pageSize": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
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
                            "resources": {
                                "bindings": {
                                    "methods": {
                                        "getLast_operation": {
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
                                                "operation": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "planId": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "serviceId": {
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
                                        "list": {
                                            "id": string;
                                            "path": string;
                                            "description": string;
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
                                        };
                                    };
                                };
                            };
                        };
                        "v2": {
                            "resources": {
                                "service_instances": {
                                    "methods": {
                                        "get": {
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
                                            "description": string;
                                        };
                                        "patch": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "acceptsIncomplete": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
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
                                            "request": {
                                                "$ref": string;
                                            };
                                            "description": string;
                                        };
                                        "create": {
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameters": {
                                                "acceptsIncomplete": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "instance_id": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "parent": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
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
                                        "getLast_operation": {
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
                                                "operation": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "planId": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "serviceId": {
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
                                        "delete": {
                                            "httpMethod": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "parameters": {
                                                "acceptsIncomplete": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "name": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                                "planId": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "serviceId": {
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
                                        "service_bindings": {
                                            "methods": {
                                                "getLast_operation": {
                                                    "description": string;
                                                    "response": {
                                                        "$ref": string;
                                                    };
                                                    "parameterOrder": string[];
                                                    "httpMethod": string;
                                                    "parameters": {
                                                        "planId": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                        "serviceId": {
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
                                                        "operation": {
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
                                                        "planId": {
                                                            "description": string;
                                                            "type": string;
                                                            "location": string;
                                                        };
                                                        "serviceId": {
                                                            "description": string;
                                                            "type": string;
                                                            "location": string;
                                                        };
                                                        "acceptsIncomplete": {
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
                                                    };
                                                    "flatPath": string;
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
                                                        "serviceId": {
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
                                                        "planId": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                    };
                                                };
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
                                                        "acceptsIncomplete": {
                                                            "description": string;
                                                            "type": string;
                                                            "location": string;
                                                        };
                                                        "parent": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                        "binding_id": {
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
                                            };
                                        };
                                    };
                                };
                                "catalog": {
                                    "methods": {
                                        "list": {
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
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
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
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
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
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "quotaUser": {
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse": {
            "properties": {
                "operation": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "operation": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__Service": {
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
                "plan_updateable": {
                    "description": string;
                    "type": string;
                };
                "bindable": {
                    "description": string;
                    "type": string;
                };
                "binding_retrievable": {
                    "description": string;
                    "type": string;
                };
                "dashboard_client": {
                    "$ref": string;
                    "description": string;
                };
                "bindings_retrievable": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "instances_retrievable": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "plans": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "metadata": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleType__Expr": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "expression": {
                    "description": string;
                    "type": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__ServiceInstance": {
            "description": string;
            "type": string;
            "properties": {
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "instance_id": {
                    "description": string;
                    "type": string;
                };
                "organization_guid": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "plan_id": {
                    "description": string;
                    "type": string;
                };
                "context": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "space_guid": {
                    "description": string;
                    "type": string;
                };
                "resourceName": {
                    "description": string;
                    "type": string;
                };
                "service_id": {
                    "description": string;
                    "type": string;
                };
                "previous_values": {
                    "additionalProperties": {
                        "description": string;
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
                "deploymentName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleProtobuf__Empty": {
            "properties": {};
            "id": string;
            "description": string;
            "type": string;
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
        "GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse": {
            "properties": {
                "operation": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudServicebrokerV1beta1__Plan": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "bindable": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "schemas": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "free": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__GetBindingResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "deploymentName": {
                    "description": string;
                    "type": string;
                };
                "syslog_drain_url": {
                    "description": string;
                    "type": string;
                };
                "credentials": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "volume_mounts": {
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
                "route_service_url": {
                    "description": string;
                    "type": string;
                };
                "resourceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__ListBrokersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "brokers": {
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
        "GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "instances": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__ListBindingsResponse": {
            "properties": {
                "bindings": {
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
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudServicebrokerV1beta1__DeleteBindingResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "operation": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleIamV1__TestIamPermissionsResponse": {
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
        "GoogleCloudServicebrokerV1beta1__CreateBindingResponse": {
            "properties": {
                "syslog_drain_url": {
                    "description": string;
                    "type": string;
                };
                "operation": {
                    "description": string;
                    "type": string;
                };
                "credentials": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "volume_mounts": {
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
                "route_service_url": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleIamV1__SetIamPolicyRequest": {
            "properties": {
                "policy": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleIamV1__Policy": {
            "description": string;
            "type": string;
            "properties": {
                "bindings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__Binding": {
            "properties": {
                "service_id": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deploymentName": {
                    "description": string;
                    "type": string;
                };
                "binding_id": {
                    "description": string;
                    "type": string;
                };
                "parameters": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "bind_resource": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "plan_id": {
                    "description": string;
                    "type": string;
                };
                "resourceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudServicebrokerV1beta1__DashboardClient": {
            "description": string;
            "type": string;
            "properties": {
                "secret": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "redirect_uri": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__ListCatalogResponse": {
            "description": string;
            "type": string;
            "properties": {
                "services": {
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
                "description": {
                    "description": string;
                    "type": string;
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
        "GoogleCloudServicebrokerV1beta1__Operation": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "state": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1beta1__Broker": {
            "description": string;
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "title": {
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
};
export default _default;
//# sourceMappingURL=servicebroker-v1beta1.d.ts.map