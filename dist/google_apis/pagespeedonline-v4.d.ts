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
    "schemas": {
        "PagespeedApiFormatStringV4": {
            "id": string;
            "type": string;
            "properties": {
                "args": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "key": {
                                "type": string;
                                "description": string;
                            };
                            "rects": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "height": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "left": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "top": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "width": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                            };
                            "secondary_rects": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "height": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "left": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "top": {
                                            "type": string;
                                            "format": string;
                                        };
                                        "width": {
                                            "type": string;
                                            "format": string;
                                        };
                                    };
                                };
                            };
                            "type": {
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
                "format": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PagespeedApiImageV4": {
            "id": string;
            "type": string;
            "properties": {
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "key": {
                    "type": string;
                    "description": string;
                };
                "mime_type": {
                    "type": string;
                    "description": string;
                };
                "page_rect": {
                    "type": string;
                    "properties": {
                        "height": {
                            "type": string;
                            "format": string;
                        };
                        "left": {
                            "type": string;
                            "format": string;
                        };
                        "top": {
                            "type": string;
                            "format": string;
                        };
                        "width": {
                            "type": string;
                            "format": string;
                        };
                    };
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PagespeedApiPagespeedResponseV4": {
            "id": string;
            "type": string;
            "properties": {
                "captchaResult": {
                    "type": string;
                    "description": string;
                };
                "formattedResults": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "locale": {
                            "type": string;
                            "description": string;
                        };
                        "ruleResults": {
                            "type": string;
                            "description": string;
                            "additionalProperties": {
                                "type": string;
                                "description": string;
                                "properties": {
                                    "beta": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "groups": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                        };
                                    };
                                    "localizedRuleName": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "ruleImpact": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                    "summary": {
                                        "$ref": string;
                                        "description": string;
                                    };
                                    "urlBlocks": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "header": {
                                                    "$ref": string;
                                                    "description": string;
                                                };
                                                "urls": {
                                                    "type": string;
                                                    "description": string;
                                                    "items": {
                                                        "type": string;
                                                        "properties": {
                                                            "details": {
                                                                "type": string;
                                                                "description": string;
                                                                "items": {
                                                                    "$ref": string;
                                                                };
                                                            };
                                                            "result": {
                                                                "$ref": string;
                                                                "description": string;
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
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "invalidRules": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "loadingExperience": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "id": {
                            "type": string;
                            "description": string;
                        };
                        "initial_url": {
                            "type": string;
                        };
                        "metrics": {
                            "type": string;
                            "additionalProperties": {
                                "type": string;
                                "description": string;
                                "properties": {
                                    "category": {
                                        "type": string;
                                    };
                                    "distributions": {
                                        "type": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "max": {
                                                    "type": string;
                                                    "format": string;
                                                };
                                                "min": {
                                                    "type": string;
                                                    "format": string;
                                                };
                                                "proportion": {
                                                    "type": string;
                                                    "format": string;
                                                };
                                            };
                                        };
                                    };
                                    "median": {
                                        "type": string;
                                        "format": string;
                                    };
                                };
                            };
                        };
                        "overall_category": {
                            "type": string;
                        };
                    };
                };
                "pageStats": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "cms": {
                            "type": string;
                            "description": string;
                        };
                        "cssResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "flashResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "htmlResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "imageResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "javascriptResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numRenderBlockingRoundTrips": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numTotalRoundTrips": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberCssResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberHosts": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberJsResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberRobotedResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberStaticResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "numberTransientFetchFailureResources": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "otherResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "overTheWireResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "robotedUrls": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "textResponseBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "totalRequestBytes": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "transientFetchFailureUrls": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                    };
                };
                "responseCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "ruleGroups": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                        "properties": {
                            "pass": {
                                "type": string;
                            };
                            "score": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "screenshot": {
                    "$ref": string;
                    "description": string;
                };
                "snapshots": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "major": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "minor": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
            };
        };
    };
    "resources": {
        "pagespeedapi": {
            "methods": {
                "runpagespeed": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "filter_third_party_resources": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                        "rule": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "screenshot": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "snapshots": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "strategy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "pattern": string;
                            "location": string;
                        };
                        "utm_campaign": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "utm_source": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=pagespeedonline-v4.d.ts.map