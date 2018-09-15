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
                "https://www.googleapis.com/auth/youtube": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtube.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtubepartner": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/yt-analytics-monetary.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/yt-analytics.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Group": {
            "id": string;
            "type": string;
            "properties": {
                "contentDetails": {
                    "type": string;
                    "properties": {
                        "itemCount": {
                            "type": string;
                            "format": string;
                        };
                        "itemType": {
                            "type": string;
                        };
                    };
                };
                "etag": {
                    "type": string;
                };
                "id": {
                    "type": string;
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
                "snippet": {
                    "type": string;
                    "properties": {
                        "publishedAt": {
                            "type": string;
                            "format": string;
                        };
                        "title": {
                            "type": string;
                        };
                    };
                };
            };
        };
        "GroupItem": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                };
                "groupId": {
                    "type": string;
                };
                "id": {
                    "type": string;
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
                "resource": {
                    "type": string;
                    "properties": {
                        "id": {
                            "type": string;
                        };
                        "kind": {
                            "type": string;
                        };
                    };
                };
            };
        };
        "GroupItemListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                };
                "items": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
            };
        };
        "GroupListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                };
                "items": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                };
            };
        };
        "ResultTable": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "columnHeaders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "columnType": {
                                "type": string;
                                "description": string;
                            };
                            "dataType": {
                                "type": string;
                                "description": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
            };
        };
    };
    "resources": {
        "groupItems": {
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
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
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
                        "groupId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
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
        "groups": {
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
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
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
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
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
        "reports": {
            "methods": {
                "query": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "currency": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "end-date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "filters": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "include-historical-channel-data": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "max-results": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "metrics": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "sort": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "start-date": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "start-index": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
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
//# sourceMappingURL=youtubeAnalytics-v1.d.ts.map