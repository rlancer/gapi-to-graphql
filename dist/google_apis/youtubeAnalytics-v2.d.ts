declare const _default: {
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "kind": string;
    "description": string;
    "basePath": string;
    "id": string;
    "documentationLink": string;
    "revision": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "GroupContentDetails": {
            "description": string;
            "type": string;
            "properties": {
                "itemType": {
                    "description": string;
                    "type": string;
                };
                "itemCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "QueryResponse": {
            "description": string;
            "type": string;
            "properties": {
                "columnHeaders": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Group": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "snippet": {
                    "description": string;
                    "$ref": string;
                };
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                };
                "etag": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GroupItemResource": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "EmptyResponse": {
            "properties": {
                "errors": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ErrorProto": {
            "description": string;
            "type": string;
            "properties": {
                "argument": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "externalErrorMessage": {
                    "description": string;
                    "type": string;
                };
                "domain": {
                    "type": string;
                    "description": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "debugInfo": {
                    "description": string;
                    "type": string;
                };
                "code": {
                    "description": string;
                    "type": string;
                };
                "locationType": {
                    "enum": string[];
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "GroupSnippet": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "publishedAt": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ResultTableColumnHeader": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "dataType": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "columnType": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Errors": {
            "description": string;
            "type": string;
            "properties": {
                "error": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "code": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "requestId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListGroupItemsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "errors": {
                    "description": string;
                    "$ref": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                };
                "items": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "etag": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GroupItem": {
            "properties": {
                "kind": {
                    "description": string;
                    "type": string;
                };
                "etag": {
                    "description": string;
                    "type": string;
                };
                "resource": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "groupId": {
                    "description": string;
                    "type": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListGroupsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "description": string;
                    "type": string;
                };
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/youtube.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/yt-analytics.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtube": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/yt-analytics-monetary.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtubepartner": {
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
        "groups": {
            "methods": {
                "delete": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "id": {
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
                "insert": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                };
                "list": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "pageToken": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "id": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "mine": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "update": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
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
        "reports": {
            "methods": {
                "query": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "filters": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "sort": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "startDate": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "metrics": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "includeHistoricalChannelData": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "ids": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "currency": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "startIndex": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "dimensions": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "endDate": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "maxResults": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                };
            };
        };
        "groupItems": {
            "methods": {
                "list": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "groupId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "id": {
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
                "insert": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "access_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
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
        "fields": {
            "type": string;
            "location": string;
            "description": string;
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
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
    };
};
export default _default;
//# sourceMappingURL=youtubeAnalytics-v2.d.ts.map