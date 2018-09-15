declare const _default: {
    "ownerName": string;
    "discoveryVersion": string;
    "resources": {
        "apps": {
            "methods": {
                "repair": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "appsId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
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
                        "appsId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                };
                "patch": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "appsId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
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
            };
            "resources": {
                "authorizedDomains": {
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
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
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
                        };
                    };
                };
                "operations": {
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
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "filter": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
                        };
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "operationsId": {
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
                        };
                    };
                };
                "domainMappings": {
                    "methods": {
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
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "overrideStrategy": {
                                    "location": string;
                                    "enum": string[];
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
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "domainMappingsId": {
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
                        };
                        "list": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "pageToken": {
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
                                "domainMappingsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "patch": {
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
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "domainMappingsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "updateMask": {
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
                "firewall": {
                    "resources": {
                        "ingressRules": {
                            "methods": {
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
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "ingressRulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "flatPath": string;
                                };
                                "list": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "matchingAddress": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
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
                                    "path": string;
                                    "id": string;
                                };
                                "create": {
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
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
                                "get": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "ingressRulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "appsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "patch": {
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
                                        "updateMask": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "ingressRulesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "batchUpdate": {
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
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "locations": {
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
                            "parameters": {
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "filter": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "locationsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "authorizedCertificates": {
                    "methods": {
                        "delete": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "authorizedCertificatesId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
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
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "pageSize": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "view": {
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
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
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                        "get": {
                            "description": string;
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "view": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "authorizedCertificatesId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "patch": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "updateMask": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "authorizedCertificatesId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
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
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
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
                "services": {
                    "methods": {
                        "list": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
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
                            "description": string;
                        };
                        "get": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "servicesId": {
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
                        "patch": {
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
                                "updateMask": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "servicesId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "migrateTraffic": {
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
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "servicesId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                    "resources": {
                        "versions": {
                            "resources": {
                                "instances": {
                                    "methods": {
                                        "delete": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "parameters": {
                                                "versionsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "servicesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "appsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "instancesId": {
                                                    "description": string;
                                                    "required": boolean;
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
                                        "list": {
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
                                            "parameters": {
                                                "appsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
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
                                                "versionsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "servicesId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
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
                                            "parameters": {
                                                "versionsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "servicesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "appsId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "instancesId": {
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
                                        };
                                        "debug": {
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
                                                "servicesId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "appsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                                "instancesId": {
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "versionsId": {
                                                    "location": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "type": string;
                                                };
                                            };
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                    };
                                };
                            };
                            "methods": {
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
                                        "appsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "servicesId": {
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
                                };
                                "delete": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "scopes": string[];
                                    "parameters": {
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "versionsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "servicesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "list": {
                                    "description": string;
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameterOrder": string[];
                                    "httpMethod": string;
                                    "parameters": {
                                        "servicesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
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
                                        "view": {
                                            "location": string;
                                            "enum": string[];
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
                                        "servicesId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "appsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "versionsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "view": {
                                            "location": string;
                                            "enum": string[];
                                            "description": string;
                                            "type": string;
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
                                    "scopes": string[];
                                    "parameters": {
                                        "updateMask": {
                                            "description": string;
                                            "format": string;
                                            "type": string;
                                            "location": string;
                                        };
                                        "servicesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "appsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
                                        };
                                        "versionsId": {
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                            "location": string;
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
                    };
                };
            };
        };
    };
    "parameters": {
        "alt": {
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
        "access_token": {
            "description": string;
            "type": string;
            "location": string;
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
        "fields": {
            "description": string;
            "type": string;
            "location": string;
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
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
    };
    "schemas": {
        "ManagedCertificate": {
            "properties": {
                "lastRenewalTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListInstancesResponse": {
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
            };
            "id": string;
        };
        "ListDomainMappingsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "domainMappings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "OperationMetadataV1Alpha": {
            "properties": {
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UrlDispatchRule": {
            "description": string;
            "type": string;
            "properties": {
                "domain": {
                    "description": string;
                    "type": string;
                };
                "service": {
                    "description": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListVersionsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "versions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ListAuthorizedDomainsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "domains": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DomainMapping": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "sslSettings": {
                    "description": string;
                    "$ref": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "resourceRecords": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "ApiEndpointHandler": {
            "description": string;
            "type": string;
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "VpcAccessConnector": {
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
        "ZipInfo": {
            "description": string;
            "type": string;
            "properties": {
                "filesCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AutomaticScaling": {
            "description": string;
            "type": string;
            "properties": {
                "minPendingLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "standardSchedulerSettings": {
                    "$ref": string;
                    "description": string;
                };
                "maxIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxTotalInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minTotalInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "networkUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "customMetrics": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "coolDownPeriod": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxConcurrentRequests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxPendingLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cpuUtilization": {
                    "description": string;
                    "$ref": string;
                };
                "diskUtilization": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AuthorizedCertificate": {
            "description": string;
            "type": string;
            "properties": {
                "expireTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "domainMappingsCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "domainNames": {
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
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "certificateRawData": {
                    "$ref": string;
                    "description": string;
                };
                "managedCertificate": {
                    "$ref": string;
                    "description": string;
                };
                "visibleDomainMappings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "OAuth2ClientInfo": {
            "properties": {
                "applicationName": {
                    "description": string;
                    "type": string;
                };
                "clientName": {
                    "description": string;
                    "type": string;
                };
                "developerEmailAddress": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "type": string;
        };
        "ResourceRecord": {
            "description": string;
            "type": string;
            "properties": {
                "rrdata": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "Library": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "version": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListLocationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ContainerInfo": {
            "properties": {
                "image": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "RequestUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetRequestCountPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetConcurrentRequests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "EndpointsApiService": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "description": string;
                    "type": string;
                };
                "configId": {
                    "description": string;
                    "type": string;
                };
                "disableTraceSampling": {
                    "description": string;
                    "type": string;
                };
                "rolloutStrategy": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "UrlMap": {
            "description": string;
            "type": string;
            "properties": {
                "securityLevel": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "authFailAction": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "script": {
                    "description": string;
                    "$ref": string;
                };
                "urlRegex": {
                    "description": string;
                    "type": string;
                };
                "login": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "apiEndpoint": {
                    "$ref": string;
                    "description": string;
                };
                "staticFiles": {
                    "$ref": string;
                    "description": string;
                };
                "redirectHttpResponseCode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ApiConfigHandler": {
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "securityLevel": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "authFailAction": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "script": {
                    "description": string;
                    "type": string;
                };
                "login": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "StaticFilesHandler": {
            "description": string;
            "type": string;
            "properties": {
                "requireMatchingFile": {
                    "description": string;
                    "type": string;
                };
                "expiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "httpHeaders": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "applicationReadable": {
                    "description": string;
                    "type": string;
                };
                "uploadPathRegex": {
                    "description": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BasicScaling": {
            "description": string;
            "type": string;
            "properties": {
                "maxInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "idleTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DiskUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetReadBytesPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetReadOpsPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetWriteOpsPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetWriteBytesPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CpuUtilization": {
            "properties": {
                "aggregationWindowLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetUtilization": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Status": {
            "description": string;
            "type": string;
            "properties": {
                "details": {
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
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "IdentityAwareProxy": {
            "properties": {
                "oauth2ClientSecretSha256": {
                    "description": string;
                    "type": string;
                };
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientSecret": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientInfo": {
                    "description": string;
                    "$ref": string;
                };
                "oauth2ClientId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ManualScaling": {
            "description": string;
            "type": string;
            "properties": {
                "instances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LocationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "standardEnvironmentAvailable": {
                    "description": string;
                    "type": string;
                };
                "flexibleEnvironmentAvailable": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Service": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "split": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "operations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "operationType": {
                    "description": string;
                    "type": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FirewallRule": {
            "description": string;
            "type": string;
            "properties": {
                "priority": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "action": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "sourceRange": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListAuthorizedCertificatesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "certificates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1Beta": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FeatureSettings": {
            "description": string;
            "type": string;
            "properties": {
                "splitHealthChecks": {
                    "description": string;
                    "type": string;
                };
                "useContainerOptimizedOs": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadataV1": {
            "description": string;
            "type": string;
            "properties": {
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SslSettings": {
            "description": string;
            "type": string;
            "properties": {
                "certificateId": {
                    "description": string;
                    "type": string;
                };
                "sslManagementType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "pendingManagedCertificateId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ErrorHandler": {
            "description": string;
            "type": string;
            "properties": {
                "errorCode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "staticFile": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Application": {
            "description": string;
            "type": string;
            "properties": {
                "defaultCookieExpiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "locationId": {
                    "description": string;
                    "type": string;
                };
                "servingStatus": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "defaultHostname": {
                    "description": string;
                    "type": string;
                };
                "featureSettings": {
                    "description": string;
                    "$ref": string;
                };
                "authDomain": {
                    "description": string;
                    "type": string;
                };
                "iap": {
                    "$ref": string;
                };
                "codeBucket": {
                    "description": string;
                    "type": string;
                };
                "defaultBucket": {
                    "description": string;
                    "type": string;
                };
                "dispatchRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "gcrDomain": {
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
        "Network": {
            "description": string;
            "type": string;
            "properties": {
                "forwardedPorts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "instanceTag": {
                    "description": string;
                    "type": string;
                };
                "subnetworkName": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "sessionAffinity": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Instance": {
            "description": string;
            "type": string;
            "properties": {
                "averageLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "vmIp": {
                    "description": string;
                    "type": string;
                };
                "memoryUsage": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "errors": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "availability": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "vmStatus": {
                    "description": string;
                    "type": string;
                };
                "startTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vmDebugEnabled": {
                    "description": string;
                    "type": string;
                };
                "requests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "appEngineRelease": {
                    "description": string;
                    "type": string;
                };
                "vmName": {
                    "description": string;
                    "type": string;
                };
                "vmId": {
                    "description": string;
                    "type": string;
                };
                "qps": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "vmZoneName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LivenessCheck": {
            "description": string;
            "type": string;
            "properties": {
                "checkInterval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "failureThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "initialDelay": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "successThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchUpdateIngressRulesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "ingressRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CloudBuildOptions": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "appYamlPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "NetworkUtilization": {
            "description": string;
            "type": string;
            "properties": {
                "targetSentBytesPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetSentPacketsPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetReceivedBytesPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetReceivedPacketsPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Location": {
            "description": string;
            "type": string;
            "properties": {
                "labels": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "locationId": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
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
            };
            "id": string;
        };
        "HealthCheck": {
            "properties": {
                "disableHealthCheck": {
                    "description": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "healthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "restartThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "checkInterval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "unhealthyThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ReadinessCheck": {
            "description": string;
            "type": string;
            "properties": {
                "appStartTimeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "path": {
                    "description": string;
                    "type": string;
                };
                "successThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "checkInterval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "failureThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "StandardSchedulerSettings": {
            "description": string;
            "type": string;
            "properties": {
                "minInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetCpuUtilization": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetThroughputUtilization": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DebugInstanceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sshKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadataV1Beta5": {
            "description": string;
            "type": string;
            "properties": {
                "method": {
                    "description": string;
                    "type": string;
                };
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "target": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1Alpha": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Version": {
            "description": string;
            "type": string;
            "properties": {
                "handlers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "zones": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "entrypoint": {
                    "$ref": string;
                    "description": string;
                };
                "automaticScaling": {
                    "$ref": string;
                    "description": string;
                };
                "runtimeChannel": {
                    "description": string;
                    "type": string;
                };
                "diskUsageBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "healthCheck": {
                    "description": string;
                    "$ref": string;
                };
                "threadsafe": {
                    "description": string;
                    "type": string;
                };
                "readinessCheck": {
                    "$ref": string;
                    "description": string;
                };
                "manualScaling": {
                    "description": string;
                    "$ref": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "apiConfig": {
                    "description": string;
                    "$ref": string;
                };
                "endpointsApiService": {
                    "description": string;
                    "$ref": string;
                };
                "vm": {
                    "description": string;
                    "type": string;
                };
                "versionUrl": {
                    "description": string;
                    "type": string;
                };
                "vpcAccessConnector": {
                    "description": string;
                    "$ref": string;
                };
                "instanceClass": {
                    "description": string;
                    "type": string;
                };
                "servingStatus": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "runtimeApiVersion": {
                    "description": string;
                    "type": string;
                };
                "deployment": {
                    "$ref": string;
                    "description": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resources": {
                    "$ref": string;
                    "description": string;
                };
                "inboundServices": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                };
                "errorHandlers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "defaultExpiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "libraries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nobuildFilesRegex": {
                    "description": string;
                    "type": string;
                };
                "basicScaling": {
                    "$ref": string;
                    "description": string;
                };
                "runtime": {
                    "description": string;
                    "type": string;
                };
                "createdBy": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "envVariables": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "livenessCheck": {
                    "description": string;
                    "$ref": string;
                };
                "network": {
                    "description": string;
                    "$ref": string;
                };
                "betaSettings": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "env": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RepairApplicationRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "BuildInfo": {
            "description": string;
            "type": string;
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CertificateRawData": {
            "description": string;
            "type": string;
            "properties": {
                "publicCertificate": {
                    "description": string;
                    "type": string;
                };
                "privateKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FileInfo": {
            "properties": {
                "sha1Sum": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
                    "description": string;
                    "type": string;
                };
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ScriptHandler": {
            "description": string;
            "type": string;
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Entrypoint": {
            "properties": {
                "shell": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AuthorizedDomain": {
            "description": string;
            "type": string;
            "properties": {
                "id": {
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
        "TrafficSplit": {
            "properties": {
                "shardBy": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "allocations": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OperationMetadataV1Beta": {
            "description": string;
            "type": string;
            "properties": {
                "insertTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "target": {
                    "description": string;
                    "type": string;
                };
                "user": {
                    "description": string;
                    "type": string;
                };
                "ephemeralMessage": {
                    "description": string;
                    "type": string;
                };
                "method": {
                    "description": string;
                    "type": string;
                };
                "endTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createVersionMetadata": {
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ListServicesResponse": {
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
            "description": string;
            "type": string;
        };
        "ListIngressRulesResponse": {
            "properties": {
                "ingressRules": {
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
            "description": string;
            "type": string;
        };
        "Deployment": {
            "description": string;
            "type": string;
            "properties": {
                "files": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "cloudBuildOptions": {
                    "description": string;
                    "$ref": string;
                };
                "zip": {
                    "description": string;
                    "$ref": string;
                };
                "container": {
                    "$ref": string;
                    "description": string;
                };
                "build": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Resources": {
            "description": string;
            "type": string;
            "properties": {
                "volumes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "diskGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cpu": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "memoryGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Volume": {
            "description": string;
            "type": string;
            "properties": {
                "volumeType": {
                    "description": string;
                    "type": string;
                };
                "sizeGb": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchUpdateIngressRulesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "ingressRules": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CustomMetric": {
            "properties": {
                "metricName": {
                    "description": string;
                    "type": string;
                };
                "singleInstanceAssignment": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetUtilization": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "targetType": {
                    "description": string;
                    "type": string;
                };
                "filter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/appengine.admin": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
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
    "id": string;
    "documentationLink": string;
    "revision": string;
    "title": string;
};
export default _default;
//# sourceMappingURL=appengine-v1beta.d.ts.map