declare const _default: {
    "fullyEncodeReservedExpansion": boolean;
    "title": string;
    "ownerName": string;
    "resources": {
        "projects": {
            "methods": {
                "getBillingInfo": {
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
                    "scopes": string[];
                };
                "updateBillingInfo": {
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
                        "name": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                };
            };
        };
        "billingAccounts": {
            "methods": {
                "patch": {
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
                    "request": {
                        "$ref": string;
                    };
                };
                "get": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
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
                };
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
                "list": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "filter": {
                            "description": string;
                            "type": string;
                            "location": string;
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "setIamPolicy": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
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
                    "id": string;
                    "path": string;
                };
                "create": {
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
                "getIamPolicy": {
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
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
            "resources": {
                "projects": {
                    "methods": {
                        "list": {
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
                                "name": {
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
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                            };
                        };
                    };
                };
            };
        };
        "services": {
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
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
            "resources": {
                "skus": {
                    "methods": {
                        "list": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
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
                                "currencyCode": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "endTime": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "startTime": {
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
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "description": string;
            "type": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "id": string;
    "revision": string;
    "documentationLink": string;
    "discoveryVersion": string;
    "schemas": {
        "ListSkusResponse": {
            "description": string;
            "type": string;
            "properties": {
                "skus": {
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
        "PricingInfo": {
            "description": string;
            "type": string;
            "properties": {
                "effectiveTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "currencyConversionRate": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pricingExpression": {
                    "description": string;
                    "$ref": string;
                };
                "aggregationInfo": {
                    "$ref": string;
                    "description": string;
                };
                "summary": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListProjectBillingInfoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "projectBillingInfo": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PricingExpression": {
            "description": string;
            "type": string;
            "properties": {
                "tieredRates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "usageUnit": {
                    "description": string;
                    "type": string;
                };
                "baseUnitConversionFactor": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "usageUnitDescription": {
                    "description": string;
                    "type": string;
                };
                "displayQuantity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "baseUnit": {
                    "description": string;
                    "type": string;
                };
                "baseUnitDescription": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SetIamPolicyRequest": {
            "description": string;
            "type": string;
            "properties": {
                "updateMask": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "policy": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "TierRate": {
            "description": string;
            "type": string;
            "properties": {
                "unitPrice": {
                    "description": string;
                    "$ref": string;
                };
                "startUsageAmount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Binding": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "description": string;
                    "$ref": string;
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
        "Expr": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "expression": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListServicesResponse": {
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
            };
            "id": string;
        };
        "ListBillingAccountsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "billingAccounts": {
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
        "AggregationInfo": {
            "description": string;
            "type": string;
            "properties": {
                "aggregationLevel": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "aggregationInterval": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "aggregationCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Service": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "serviceId": {
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
        "TestIamPermissionsResponse": {
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
        "AuditLogConfig": {
            "description": string;
            "type": string;
            "properties": {
                "exemptedMembers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "logType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ProjectBillingInfo": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "billingEnabled": {
                    "description": string;
                    "type": string;
                };
                "projectId": {
                    "description": string;
                    "type": string;
                };
                "billingAccountName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Money": {
            "description": string;
            "type": string;
            "properties": {
                "currencyCode": {
                    "description": string;
                    "type": string;
                };
                "nanos": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "units": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BillingAccount": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "masterBillingAccount": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "open": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TestIamPermissionsRequest": {
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
        "Sku": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "serviceProviderName": {
                    "description": string;
                    "type": string;
                };
                "serviceRegions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "pricingInfo": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "category": {
                    "description": string;
                    "$ref": string;
                };
                "skuId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Policy": {
            "description": string;
            "type": string;
            "properties": {
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
                "auditConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bindings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Category": {
            "description": string;
            "type": string;
            "properties": {
                "resourceFamily": {
                    "description": string;
                    "type": string;
                };
                "resourceGroup": {
                    "description": string;
                    "type": string;
                };
                "serviceDisplayName": {
                    "description": string;
                    "type": string;
                };
                "usageType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AuditConfig": {
            "description": string;
            "type": string;
            "properties": {
                "auditLogConfigs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "service": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
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
};
export default _default;
//# sourceMappingURL=cloudbilling-v1.d.ts.map