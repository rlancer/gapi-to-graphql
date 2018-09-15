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
                "https://www.googleapis.com/auth/webmasters": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/webmasters.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "ApiDataRow": {
            "id": string;
            "type": string;
            "properties": {
                "clicks": {
                    "type": string;
                    "format": string;
                };
                "ctr": {
                    "type": string;
                    "format": string;
                };
                "impressions": {
                    "type": string;
                    "format": string;
                };
                "keys": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "position": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "ApiDimensionFilter": {
            "id": string;
            "type": string;
            "properties": {
                "dimension": {
                    "type": string;
                };
                "expression": {
                    "type": string;
                };
                "operator": {
                    "type": string;
                };
            };
        };
        "ApiDimensionFilterGroup": {
            "id": string;
            "type": string;
            "properties": {
                "filters": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "groupType": {
                    "type": string;
                };
            };
        };
        "SearchAnalyticsQueryRequest": {
            "id": string;
            "type": string;
            "properties": {
                "aggregationType": {
                    "type": string;
                    "description": string;
                };
                "dimensionFilterGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "endDate": {
                    "type": string;
                    "description": string;
                };
                "rowLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "searchType": {
                    "type": string;
                    "description": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                };
                "startRow": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SearchAnalyticsQueryResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "responseAggregationType": {
                    "type": string;
                    "description": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SitemapsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "sitemap": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SitesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "siteEntry": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UrlCrawlErrorCount": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "UrlCrawlErrorCountsPerType": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "category": {
                    "type": string;
                    "description": string;
                };
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "platform": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UrlCrawlErrorsCountsQueryResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countPerTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UrlCrawlErrorsSample": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "first_detected": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "last_crawled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageUrl": {
                    "type": string;
                    "description": string;
                };
                "responseCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "urlDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "UrlCrawlErrorsSamplesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "urlCrawlErrorSample": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UrlSampleDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "containingSitemaps": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "linkedFromUrls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "WmxSite": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "permissionLevel": {
                    "type": string;
                    "description": string;
                };
                "siteUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "WmxSitemap": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "isPending": {
                    "type": string;
                    "description": string;
                };
                "isSitemapsIndex": {
                    "type": string;
                    "description": string;
                };
                "lastDownloaded": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastSubmitted": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "path": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "warnings": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "WmxSitemapContent": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "indexed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "submitted": {
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
    };
    "resources": {
        "searchanalytics": {
            "methods": {
                "query": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "siteUrl": {
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
        "sitemaps": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "feedpath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "feedpath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "siteUrl": {
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
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sitemapIndex": {
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
                "submit": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "feedpath": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
            };
        };
        "sites": {
            "methods": {
                "add": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "siteUrl": {
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
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "urlcrawlerrorscounts": {
            "methods": {
                "query": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "category": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "latestCountsOnly": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "platform": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "siteUrl": {
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
        "urlcrawlerrorssamples": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "category": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "platform": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "url": {
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
                        "category": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "platform": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "siteUrl": {
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
                "markAsFixed": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "category": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "platform": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "siteUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=webmasters-v3.d.ts.map