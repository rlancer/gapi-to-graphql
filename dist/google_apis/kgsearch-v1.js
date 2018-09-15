"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "parameters": { "access_token": { "location": "query", "description": "OAuth access token.", "type": "string" }, "key": { "location": "query", "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "type": "string" }, "quotaUser": { "location": "query", "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.", "type": "string" }, "pp": { "type": "boolean", "default": "true", "location": "query", "description": "Pretty-print response." }, "oauth_token": { "description": "OAuth 2.0 token for the current user.", "type": "string", "location": "query" }, "bearer_token": { "location": "query", "description": "OAuth bearer token.", "type": "string" }, "upload_protocol": { "type": "string", "location": "query", "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")." }, "prettyPrint": { "location": "query", "description": "Returns response with indentations and line breaks.", "type": "boolean", "default": "true" }, "fields": { "location": "query", "description": "Selector specifying which fields to include in a partial response.", "type": "string" }, "uploadType": { "location": "query", "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").", "type": "string" }, "$.xgafv": { "enumDescriptions": ["v1 error format", "v2 error format"], "location": "query", "enum": ["1", "2"], "description": "V1 error format.", "type": "string" }, "callback": { "type": "string", "location": "query", "description": "JSONP" }, "alt": { "enum": ["json", "media", "proto"], "type": "string", "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"], "location": "query", "description": "Data format for response.", "default": "json" } }, "schemas": { "SearchResponse": { "type": "object", "properties": { "@context": { "description": "The local context applicable for the response. See more details at\nhttp://www.w3.org/TR/json-ld/#context-definitions.", "type": "any" }, "itemListElement": { "description": "The item list of search results.", "type": "array", "items": { "type": "any" } }, "@type": { "description": "The schema type of top-level JSON-LD object, e.g. ItemList.", "type": "any" } }, "id": "SearchResponse", "description": "Response message includes the context and a list of matching results\nwhich contain the detail of associated entities." } }, "protocol": "rest", "icons": { "x16": "http://www.google.com/images/icons/product/search-16.gif", "x32": "http://www.google.com/images/icons/product/search-32.gif" }, "version": "v1", "baseUrl": "https://kgsearch.googleapis.com/", "servicePath": "", "description": "Searches the Google Knowledge Graph for entities.", "kind": "discovery#restDescription", "rootUrl": "https://kgsearch.googleapis.com/", "basePath": "", "ownerDomain": "google.com", "name": "kgsearch", "batchPath": "batch", "revision": "20180104", "documentationLink": "https://developers.google.com/knowledge-graph/", "id": "kgsearch:v1", "title": "Knowledge Graph Search API", "discoveryVersion": "v1", "ownerName": "Google", "version_module": true, "resources": { "entities": { "methods": { "search": { "response": { "$ref": "SearchResponse" }, "parameterOrder": [], "httpMethod": "GET", "parameters": { "types": { "repeated": true, "location": "query", "description": "Restricts returned entities with these types, e.g. Person\n(as defined in http://schema.org/Person). If multiple types are specified,\nreturned entities will contain one or more of these types.", "type": "string" }, "indent": { "description": "Enables indenting of json results.", "type": "boolean", "location": "query" }, "languages": { "type": "string", "repeated": true, "location": "query", "description": "The list of language codes (defined in ISO 693) to run the query with,\ne.g. 'en'." }, "ids": { "description": "The list of entity id to be used for search instead of query string.\nTo specify multiple ids in the HTTP request, repeat the parameter in the\nURL as in ...?ids=A&ids=B", "type": "string", "repeated": true, "location": "query" }, "limit": { "location": "query", "description": "Limits the number of entities to be returned.", "format": "int32", "type": "integer" }, "prefix": { "location": "query", "description": "Enables prefix match against names and aliases of entities", "type": "boolean" }, "query": { "location": "query", "description": "The literal query string for search.", "type": "string" } }, "flatPath": "v1/entities:search", "path": "v1/entities:search", "id": "kgsearch.entities.search", "description": "Searches Knowledge Graph for entities that match the constraints.\nA list of matched entities will be returned in response, which will be in\nJSON-LD format and compatible with http://schema.org" } } } } };
//# sourceMappingURL=kgsearch-v1.js.map