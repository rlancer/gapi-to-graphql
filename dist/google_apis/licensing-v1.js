"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "kind": "discovery#restDescription", "etag": "\"J3WqvAcMk4eQjJXvfSI4Yr8VouA/tIOs6izg-EVHX4TTrroawBuzhAM\"", "discoveryVersion": "v1", "id": "licensing:v1", "name": "licensing", "version": "v1", "revision": "20170213", "title": "Enterprise License Manager API", "description": "Views and manages licenses for your domain.", "ownerDomain": "google.com", "ownerName": "Google", "icons": { "x16": "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png", "x32": "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" }, "documentationLink": "https://developers.google.com/google-apps/licensing/", "protocol": "rest", "baseUrl": "https://www.googleapis.com/apps/licensing/v1/product/", "basePath": "/apps/licensing/v1/product/", "rootUrl": "https://www.googleapis.com/", "servicePath": "apps/licensing/v1/product/", "batchPath": "batch/licensing/v1", "parameters": { "alt": { "type": "string", "description": "Data format for the response.", "default": "json", "enum": ["json"], "enumDescriptions": ["Responses with Content-Type of application/json"], "location": "query" }, "fields": { "type": "string", "description": "Selector specifying which fields to include in a partial response.", "location": "query" }, "key": { "type": "string", "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "location": "query" }, "oauth_token": { "type": "string", "description": "OAuth 2.0 token for the current user.", "location": "query" }, "prettyPrint": { "type": "boolean", "description": "Returns response with indentations and line breaks.", "default": "true", "location": "query" }, "quotaUser": { "type": "string", "description": "An opaque string that represents a user for quota purposes. Must not exceed 40 characters.", "location": "query" }, "userIp": { "type": "string", "description": "Deprecated. Please use quotaUser instead.", "location": "query" } }, "auth": { "oauth2": { "scopes": { "https://www.googleapis.com/auth/apps.licensing": { "description": "View and manage G Suite licenses for your domain" } } } }, "schemas": { "LicenseAssignment": { "id": "LicenseAssignment", "type": "object", "description": "Template for LiscenseAssignment Resource", "properties": { "etags": { "type": "string", "description": "ETag of the resource." }, "kind": { "type": "string", "description": "Identifies the resource as a LicenseAssignment.", "default": "licensing#licenseAssignment" }, "productId": { "type": "string", "description": "Id of the product.", "annotations": { "required": ["licensing.licenseAssignments.update"] } }, "productName": { "type": "string", "description": "Display Name of the product." }, "selfLink": { "type": "string", "description": "Link to this page." }, "skuId": { "type": "string", "description": "Id of the sku of the product.", "annotations": { "required": ["licensing.licenseAssignments.update"] } }, "skuName": { "type": "string", "description": "Display Name of the sku of the product." }, "userId": { "type": "string", "description": "Email id of the user.", "annotations": { "required": ["licensing.licenseAssignments.update"] } } } }, "LicenseAssignmentInsert": { "id": "LicenseAssignmentInsert", "type": "object", "description": "Template for LicenseAssignment Insert request", "properties": { "userId": { "type": "string", "description": "Email id of the user", "annotations": { "required": ["licensing.licenseAssignments.insert"] } } } }, "LicenseAssignmentList": { "id": "LicenseAssignmentList", "type": "object", "description": "LicesnseAssignment List for a given product/sku for a customer.", "properties": { "etag": { "type": "string", "description": "ETag of the resource." }, "items": { "type": "array", "description": "The LicenseAssignments in this page of results.", "items": { "$ref": "LicenseAssignment" } }, "kind": { "type": "string", "description": "Identifies the resource as a collection of LicenseAssignments.", "default": "licensing#licenseAssignmentList" }, "nextPageToken": { "type": "string", "description": "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results." } } } }, "resources": { "licenseAssignments": { "methods": { "delete": { "id": "licensing.licenseAssignments.delete", "path": "{productId}/sku/{skuId}/user/{userId}", "httpMethod": "DELETE", "description": "Revoke License.", "parameters": { "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku", "required": true, "location": "path" }, "userId": { "type": "string", "description": "email id or unique Id of the user", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId", "userId"], "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "get": { "id": "licensing.licenseAssignments.get", "path": "{productId}/sku/{skuId}/user/{userId}", "httpMethod": "GET", "description": "Get license assignment of a particular product and sku for a user", "parameters": { "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku", "required": true, "location": "path" }, "userId": { "type": "string", "description": "email id or unique Id of the user", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId", "userId"], "response": { "$ref": "LicenseAssignment" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "insert": { "id": "licensing.licenseAssignments.insert", "path": "{productId}/sku/{skuId}/user", "httpMethod": "POST", "description": "Assign License.", "parameters": { "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId"], "request": { "$ref": "LicenseAssignmentInsert" }, "response": { "$ref": "LicenseAssignment" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "listForProduct": { "id": "licensing.licenseAssignments.listForProduct", "path": "{productId}/users", "httpMethod": "GET", "description": "List license assignments for given product of the customer.", "parameters": { "customerId": { "type": "string", "description": "CustomerId represents the customer for whom licenseassignments are queried", "required": true, "location": "query" }, "maxResults": { "type": "integer", "description": "Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.", "default": "100", "format": "uint32", "minimum": "1", "maximum": "1000", "location": "query" }, "pageToken": { "type": "string", "description": "Token to fetch the next page.Optional. By default server will return first page", "default": "", "location": "query" }, "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" } }, "parameterOrder": ["productId", "customerId"], "response": { "$ref": "LicenseAssignmentList" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "listForProductAndSku": { "id": "licensing.licenseAssignments.listForProductAndSku", "path": "{productId}/sku/{skuId}/users", "httpMethod": "GET", "description": "List license assignments for given product and sku of the customer.", "parameters": { "customerId": { "type": "string", "description": "CustomerId represents the customer for whom licenseassignments are queried", "required": true, "location": "query" }, "maxResults": { "type": "integer", "description": "Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.", "default": "100", "format": "uint32", "minimum": "1", "maximum": "1000", "location": "query" }, "pageToken": { "type": "string", "description": "Token to fetch the next page.Optional. By default server will return first page", "default": "", "location": "query" }, "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId", "customerId"], "response": { "$ref": "LicenseAssignmentList" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "patch": { "id": "licensing.licenseAssignments.patch", "path": "{productId}/sku/{skuId}/user/{userId}", "httpMethod": "PATCH", "description": "Assign License. This method supports patch semantics.", "parameters": { "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku for which license would be revoked", "required": true, "location": "path" }, "userId": { "type": "string", "description": "email id or unique Id of the user", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId", "userId"], "request": { "$ref": "LicenseAssignment" }, "response": { "$ref": "LicenseAssignment" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] }, "update": { "id": "licensing.licenseAssignments.update", "path": "{productId}/sku/{skuId}/user/{userId}", "httpMethod": "PUT", "description": "Assign License.", "parameters": { "productId": { "type": "string", "description": "Name for product", "required": true, "location": "path" }, "skuId": { "type": "string", "description": "Name for sku for which license would be revoked", "required": true, "location": "path" }, "userId": { "type": "string", "description": "email id or unique Id of the user", "required": true, "location": "path" } }, "parameterOrder": ["productId", "skuId", "userId"], "request": { "$ref": "LicenseAssignment" }, "response": { "$ref": "LicenseAssignment" }, "scopes": ["https://www.googleapis.com/auth/apps.licensing"] } } } } };
//# sourceMappingURL=licensing-v1.js.map