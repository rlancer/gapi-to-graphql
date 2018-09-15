declare const _default: {
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GoogleCloudServicebrokerV1alpha1__GetBindingResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "volume_mounts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                    };
                };
                "syslog_drain_url": {
                    "description": string;
                    "type": string;
                };
                "route_service_url": {
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
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse": {
            "description": string;
            "type": string;
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
        };
        "GoogleCloudServicebrokerV1alpha1__Binding": {
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
                "binding_id": {
                    "description": string;
                    "type": string;
                };
                "plan_id": {
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
                "parameters": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleIamV1__Binding": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "$ref": string;
                    "description": string;
                };
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
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__DashboardClient": {
            "description": string;
            "type": string;
            "properties": {
                "redirect_uri": {
                    "description": string;
                    "type": string;
                };
                "secret": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__Operation": {
            "properties": {
                "state": {
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
        "GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse": {
            "description": string;
            "type": string;
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
        };
        "GoogleCloudServicebrokerV1alpha1__ListCatalogResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__ListBindingsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__CreateBindingResponse": {
            "description": string;
            "type": string;
            "properties": {
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
                "syslog_drain_url": {
                    "description": string;
                    "type": string;
                };
                "operation": {
                    "description": string;
                    "type": string;
                };
                "credentials": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__Service": {
            "description": string;
            "type": string;
            "properties": {
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
                "description": {
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
                "instance_retrievable": {
                    "description": string;
                    "type": string;
                };
                "dashboard_client": {
                    "description": string;
                    "$ref": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__ServiceInstance": {
            "description": string;
            "type": string;
            "properties": {
                "resourceName": {
                    "description": string;
                    "type": string;
                };
                "space_guid": {
                    "description": string;
                    "type": string;
                };
                "organization_guid": {
                    "description": string;
                    "type": string;
                };
                "service_id": {
                    "description": string;
                    "type": string;
                };
                "previous_values": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
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
                "parameters": {
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
                "instance_id": {
                    "description": string;
                    "type": string;
                };
                "context": {
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
        "GoogleIamV1__SetIamPolicyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "policy": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse": {
            "description": string;
            "type": string;
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
        };
        "GoogleCloudServicebrokerV1alpha1__Plan": {
            "properties": {
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
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "free": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "bindable": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "instances": {
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
        "GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse": {
            "description": string;
            "type": string;
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
        };
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
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
    "resources": {
        "v1alpha1": {
            "methods": {
                "setIamPolicy": {
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "testIamPermissions": {
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
                        "resource": {
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
                "getIamPolicy": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "resource": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                };
            };
        };
        "projects": {
            "resources": {
                "brokers": {
                    "resources": {
                        "v2": {
                            "resources": {
                                "catalog": {
                                    "methods": {
                                        "list": {
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
                                        };
                                    };
                                };
                                "service_instances": {
                                    "methods": {
                                        "delete": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "planId": {
                                                    "description": string;
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
                                                "instanceId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                                "serviceId": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "acceptsIncomplete": {
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
                                        "get": {
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
                                            "path": string;
                                            "id": string;
                                        };
                                        "patch": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "parent": {
                                                    "pattern": string;
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "acceptsIncomplete": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "instance_id": {
                                                    "pattern": string;
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
                                            "request": {
                                                "$ref": string;
                                            };
                                        };
                                        "create": {
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
                                                "acceptsIncomplete": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "instance_id": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
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
                                        };
                                        "getLast_operation": {
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
                                                "planId": {
                                                    "description": string;
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
                                                "instanceId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "pattern": string;
                                                };
                                                "serviceId": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
                                                };
                                                "operation": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                            };
                                        };
                                    };
                                    "resources": {
                                        "service_bindings": {
                                            "methods": {
                                                "delete": {
                                                    "description": string;
                                                    "response": {
                                                        "$ref": string;
                                                    };
                                                    "parameterOrder": string[];
                                                    "httpMethod": string;
                                                    "parameters": {
                                                        "instanceId": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "location": string;
                                                        };
                                                        "acceptsIncomplete": {
                                                            "description": string;
                                                            "type": string;
                                                            "location": string;
                                                        };
                                                        "planId": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                        "parent": {
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                        };
                                                        "bindingId": {
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
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
                                                        "planId": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                        "parent": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                        "bindingId": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                        "instanceId": {
                                                            "pattern": string;
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
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
                                                    "description": string;
                                                };
                                                "create": {
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
                                                        "instanceId": {
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                        };
                                                        "binding_id": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                        "acceptsIncomplete": {
                                                            "description": string;
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
                                                };
                                                "getLast_operation": {
                                                    "id": string;
                                                    "path": string;
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
                                                        "parent": {
                                                            "pattern": string;
                                                            "location": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                        };
                                                        "bindingId": {
                                                            "description": string;
                                                            "required": boolean;
                                                            "type": string;
                                                            "pattern": string;
                                                            "location": string;
                                                        };
                                                        "serviceId": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                        "operation": {
                                                            "location": string;
                                                            "description": string;
                                                            "type": string;
                                                        };
                                                        "instanceId": {
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
                        };
                        "service_instances": {
                            "methods": {
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
                                        "pageSize": {
                                            "description": string;
                                            "format": string;
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
                                        "pageToken": {
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
                        "instances": {
                            "methods": {
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
                            "resources": {
                                "service_bindings": {
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
                                                "pageToken": {
                                                    "location": string;
                                                    "description": string;
                                                    "type": string;
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
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
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
    };
    "version": string;
    "baseUrl": string;
};
export default _default;
//# sourceMappingURL=servicebroker-v1alpha1.d.ts.map