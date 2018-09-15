declare const _default: {
    "discoveryVersion": string;
    "ownerName": string;
    "version_module": boolean;
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
                "get": {
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
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "patch": {
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
                        "updateMask": {
                            "description": string;
                            "format": string;
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
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "create": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
            };
            "resources": {
                "firewall": {
                    "resources": {
                        "ingressRules": {
                            "methods": {
                                "get": {
                                    "flatPath": string;
                                    "id": string;
                                    "path": string;
                                    "description": string;
                                    "httpMethod": string;
                                    "parameterOrder": string[];
                                    "response": {
                                        "$ref": string;
                                    };
                                    "parameters": {
                                        "ingressRulesId": {
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
                                    };
                                    "scopes": string[];
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
                                        "appsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "ingressRulesId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                        "updateMask": {
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
                                "batchUpdate": {
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "delete": {
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
                                        "ingressRulesId": {
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
                                    "description": string;
                                };
                                "list": {
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
                                        "matchingAddress": {
                                            "location": string;
                                            "description": string;
                                            "type": string;
                                        };
                                    };
                                    "flatPath": string;
                                    "path": string;
                                    "id": string;
                                };
                                "create": {
                                    "flatPath": string;
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
                                        "appsId": {
                                            "location": string;
                                            "description": string;
                                            "required": boolean;
                                            "type": string;
                                        };
                                    };
                                    "scopes": string[];
                                };
                            };
                        };
                    };
                };
                "locations": {
                    "methods": {
                        "list": {
                            "description": string;
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
                                "filter": {
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
                            "scopes": string[];
                            "parameters": {
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "locationsId": {
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
                    };
                };
                "authorizedCertificates": {
                    "methods": {
                        "delete": {
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
                                "authorizedCertificatesId": {
                                    "description": string;
                                    "required": boolean;
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
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "view": {
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "authorizedCertificatesId": {
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
                            "id": string;
                            "path": string;
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
                                "authorizedCertificatesId": {
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
                                "appsId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                        };
                        "create": {
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
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "services": {
                    "methods": {
                        "delete": {
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
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
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
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "get": {
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
                            };
                            "flatPath": string;
                        };
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
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                    "resources": {
                        "versions": {
                            "methods": {
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
                                    };
                                    "flatPath": string;
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
                                "list": {
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
                                    "path": string;
                                    "id": string;
                                    "description": string;
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
                                        "view": {
                                            "description": string;
                                            "type": string;
                                            "location": string;
                                            "enum": string[];
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
                                    };
                                    "scopes": string[];
                                    "flatPath": string;
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
                            };
                            "resources": {
                                "instances": {
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
                                                "instancesId": {
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
                                                "pageToken": {
                                                    "description": string;
                                                    "type": string;
                                                    "location": string;
                                                };
                                                "pageSize": {
                                                    "location": string;
                                                    "description": string;
                                                    "format": string;
                                                    "type": string;
                                                };
                                                "versionsId": {
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
                                        "get": {
                                            "description": string;
                                            "response": {
                                                "$ref": string;
                                            };
                                            "parameterOrder": string[];
                                            "httpMethod": string;
                                            "scopes": string[];
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
                                            "flatPath": string;
                                            "path": string;
                                            "id": string;
                                        };
                                        "debug": {
                                            "httpMethod": string;
                                            "parameterOrder": string[];
                                            "response": {
                                                "$ref": string;
                                            };
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
                                                "instancesId": {
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
                                            "scopes": string[];
                                            "flatPath": string;
                                            "id": string;
                                            "path": string;
                                            "description": string;
                                            "request": {
                                                "$ref": string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                "authorizedDomains": {
                    "methods": {
                        "list": {
                            "description": string;
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
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "operations": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
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
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "operationsId": {
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
                    };
                };
                "domainMappings": {
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
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "domainMappingsId": {
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
                            "scopes": string[];
                            "parameters": {
                                "domainMappingsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
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
                            "flatPath": string;
                            "id": string;
                            "path": string;
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
                                "appsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "overrideStrategy": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                            };
                            "scopes": string[];
                        };
                        "delete": {
                            "flatPath": string;
                            "id": string;
                            "path": string;
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
                                "domainMappingsId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
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
            "location": string;
            "description": string;
            "type": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
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
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
        "alt": {
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
        };
    };
    "schemas": {
        "ManagedCertificate": {
            "description": string;
            "type": string;
            "properties": {
                "lastRenewalTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "ListInstancesResponse": {
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
            "description": string;
            "type": string;
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
            "properties": {
                "versions": {
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
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
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
                    "$ref": string;
                    "description": string;
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
        "ApiEndpointHandler": {
            "properties": {
                "scriptPath": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AutomaticScaling": {
            "description": string;
            "type": string;
            "properties": {
                "maxConcurrentRequests": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "coolDownPeriod": {
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
                    "description": string;
                    "$ref": string;
                };
                "minPendingLatency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "requestUtilization": {
                    "$ref": string;
                    "description": string;
                };
                "maxIdleInstances": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "standardSchedulerSettings": {
                    "description": string;
                    "$ref": string;
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
                    "description": string;
                    "$ref": string;
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
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
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
                "locations": {
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
            "description": string;
            "type": string;
        };
        "UrlMap": {
            "description": string;
            "type": string;
            "properties": {
                "login": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "apiEndpoint": {
                    "$ref": string;
                    "description": string;
                };
                "staticFiles": {
                    "description": string;
                    "$ref": string;
                };
                "redirectHttpResponseCode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "securityLevel": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "authFailAction": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "script": {
                    "$ref": string;
                    "description": string;
                };
                "urlRegex": {
                    "description": string;
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
                "rolloutStrategy": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "Operation": {
            "description": string;
            "type": string;
            "properties": {
                "done": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "additionalProperties": {
                        "description": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "error": {
                    "description": string;
                    "$ref": string;
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
        "ApiConfigHandler": {
            "description": string;
            "type": string;
            "properties": {
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
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "StaticFilesHandler": {
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
                "applicationReadable": {
                    "description": string;
                    "type": string;
                };
                "httpHeaders": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
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
            "description": string;
            "type": string;
        };
        "BasicScaling": {
            "description": string;
            "type": string;
            "properties": {
                "idleTimeout": {
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
        "DiskUtilization": {
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
            "description": string;
            "type": string;
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
                "code": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
                "details": {
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
            };
            "id": string;
        };
        "IdentityAwareProxy": {
            "description": string;
            "type": string;
            "properties": {
                "enabled": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientSecret": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientId": {
                    "description": string;
                    "type": string;
                };
                "oauth2ClientSecretSha256": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
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
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListOperationsResponse": {
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
            "description": string;
            "type": string;
        };
        "FirewallRule": {
            "description": string;
            "type": string;
            "properties": {
                "sourceRange": {
                    "description": string;
                    "type": string;
                };
                "priority": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "action": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "description": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "OperationMetadata": {
            "description": string;
            "type": string;
            "properties": {
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
                "method": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListAuthorizedCertificatesResponse": {
            "properties": {
                "certificates": {
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
            };
            "id": string;
        };
        "ErrorHandler": {
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
            "description": string;
            "type": string;
        };
        "SslSettings": {
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
            "description": string;
            "type": string;
        };
        "OperationMetadataV1": {
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
                "ephemeralMessage": {
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
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "defaultHostname": {
                    "description": string;
                    "type": string;
                };
                "featureSettings": {
                    "$ref": string;
                    "description": string;
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
            };
            "id": string;
        };
        "Instance": {
            "description": string;
            "type": string;
            "properties": {
                "vmName": {
                    "description": string;
                    "type": string;
                };
                "qps": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vmId": {
                    "description": string;
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
                "averageLatency": {
                    "description": string;
                    "format": string;
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
                "id": {
                    "description": string;
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
            };
            "id": string;
        };
        "LivenessCheck": {
            "description": string;
            "type": string;
            "properties": {
                "path": {
                    "description": string;
                    "type": string;
                };
                "host": {
                    "description": string;
                    "type": string;
                };
                "successThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "checkInterval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "failureThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "timeout": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "initialDelay": {
                    "description": string;
                    "format": string;
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
            "properties": {
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
                "targetSentBytesPerSecond": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Location": {
            "description": string;
            "type": string;
            "properties": {
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
                "labels": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
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
        "HealthCheck": {
            "description": string;
            "type": string;
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
        };
        "ReadinessCheck": {
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
            };
            "id": string;
        };
        "DebugInstanceRequest": {
            "properties": {
                "sshKey": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "StandardSchedulerSettings": {
            "properties": {
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
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OperationMetadataV1Beta5": {
            "description": string;
            "type": string;
            "properties": {
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
                "method": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVersionMetadataV1Alpha": {
            "properties": {
                "cloudBuildId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Version": {
            "description": string;
            "type": string;
            "properties": {
                "diskUsageBytes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "runtimeChannel": {
                    "description": string;
                    "type": string;
                };
                "healthCheck": {
                    "$ref": string;
                    "description": string;
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
                    "$ref": string;
                    "description": string;
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
                    "$ref": string;
                    "description": string;
                };
                "versionUrl": {
                    "description": string;
                    "type": string;
                };
                "vm": {
                    "description": string;
                    "type": string;
                };
                "instanceClass": {
                    "description": string;
                    "type": string;
                };
                "servingStatus": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "runtimeApiVersion": {
                    "description": string;
                    "type": string;
                };
                "deployment": {
                    "description": string;
                    "$ref": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "inboundServices": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "resources": {
                    "$ref": string;
                    "description": string;
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
                "id": {
                    "description": string;
                    "type": string;
                };
                "createdBy": {
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
                    "$ref": string;
                    "description": string;
                };
                "network": {
                    "description": string;
                    "$ref": string;
                };
                "betaSettings": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
                "env": {
                    "description": string;
                    "type": string;
                };
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
                    "description": string;
                    "$ref": string;
                };
                "automaticScaling": {
                    "description": string;
                    "$ref": string;
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
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
                "sha1Sum": {
                    "description": string;
                    "type": string;
                };
                "mimeType": {
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
        "TrafficSplit": {
            "properties": {
                "shardBy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "allocations": {
                    "additionalProperties": {
                        "format": string;
                        "type": string;
                    };
                    "description": string;
                    "type": string;
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
        "ListIngressRulesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
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
        "Deployment": {
            "description": string;
            "type": string;
            "properties": {
                "zip": {
                    "$ref": string;
                    "description": string;
                };
                "container": {
                    "$ref": string;
                    "description": string;
                };
                "files": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "cloudBuildOptions": {
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
    };
    "protocol": string;
    "icons": {
        "x32": string;
        "x16": string;
    };
    "version": string;
    "baseUrl": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/cloud-platform.read-only": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/appengine.admin": {
                    "description": string;
                };
            };
        };
    };
    "kind": string;
    "servicePath": string;
    "description": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
};
export default _default;
//# sourceMappingURL=appengine-v1.d.ts.map