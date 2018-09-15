declare const _default: {
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "version_module": boolean;
    "resources": {
        "leads": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
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
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "orderBy": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
        };
        "offers": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "requestMetadata.partnersSessionId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.experimentIds": {
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                };
            };
            "resources": {
                "history": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": never[];
                            "httpMethod": string;
                            "parameters": {
                                "entireCompany": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "requestMetadata.experimentIds": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
                                };
                                "orderBy": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "requestMetadata.trafficSource.trafficSubId": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "requestMetadata.userOverrides.userId": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "requestMetadata.partnersSessionId": {
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
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "requestMetadata.trafficSource.trafficSourceId": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "requestMetadata.locale": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "requestMetadata.userOverrides.ipAddress": {
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
                    };
                };
            };
        };
        "analytics": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
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
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.experimentIds": {
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
        };
        "userStates": {
            "methods": {
                "list": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "location": string;
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                };
            };
        };
        "v2": {
            "methods": {
                "getPartnersstatus": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
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
                "updateLeads": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "updateCompanies": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.partnersSessionId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "updateMask": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "companies": {
            "methods": {
                "get": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "companyId": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                        };
                        "currencyCode": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "orderBy": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "view": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "address": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "gpsMotivations": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "enum": string[];
                        };
                        "languageCodes": {
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                        };
                        "pageSize": {
                            "type": string;
                            "location": string;
                            "description": string;
                            "format": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "orderBy": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "specializations": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxMonthlyBudget.currencyCode": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "minMonthlyBudget.currencyCode": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "view": {
                            "type": string;
                            "location": string;
                            "enum": string[];
                            "description": string;
                        };
                        "address": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "minMonthlyBudget.units": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "maxMonthlyBudget.nanos": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "services": {
                            "location": string;
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "maxMonthlyBudget.units": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "minMonthlyBudget.nanos": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "companyName": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "pageToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "industries": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                            "enum": string[];
                        };
                        "websiteUrl": {
                            "description": string;
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
                "leads": {
                    "methods": {
                        "create": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "companyId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
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
            };
        };
        "users": {
            "methods": {
                "updateProfile": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.userOverrides.userId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "createCompanyRelation": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "userId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.experimentIds": {
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "deleteCompanyRelation": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.userOverrides.userId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.experimentIds": {
                            "repeated": boolean;
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "userId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
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
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "requestMetadata.userOverrides.userId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.partnersSessionId": {
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                        "userView": {
                            "enum": string[];
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSourceId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMetadata.locale": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.userOverrides.ipAddress": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "requestMetadata.experimentIds": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "requestMetadata.trafficSource.trafficSubId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "userId": {
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
        "userEvents": {
            "methods": {
                "log": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "clientMessages": {
            "methods": {
                "log": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
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
            "description": string;
            "type": string;
            "location": string;
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
            "type": string;
            "location": string;
            "description": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
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
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
    };
    "schemas": {
        "Rank": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "UserProfile": {
            "description": string;
            "type": string;
            "properties": {
                "address": {
                    "$ref": string;
                    "description": string;
                };
                "industries": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "emailOptIns": {
                    "$ref": string;
                    "description": string;
                };
                "familyName": {
                    "description": string;
                    "type": string;
                };
                "languages": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "markets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "migrateToAfa": {
                    "description": string;
                    "type": string;
                };
                "phoneNumber": {
                    "description": string;
                    "type": string;
                };
                "adwordsManagerAccount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "primaryCountryCode": {
                    "description": string;
                    "type": string;
                };
                "emailAddress": {
                    "description": string;
                    "type": string;
                };
                "channels": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "profilePublic": {
                    "description": string;
                    "type": string;
                };
                "jobFunctions": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "givenName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GetPartnersStatusResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "HistoricalOffer": {
            "description": string;
            "type": string;
            "properties": {
                "lastModifiedTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "adwordsUrl": {
                    "description": string;
                    "type": string;
                };
                "offerType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "senderName": {
                    "description": string;
                    "type": string;
                };
                "offerCountryCode": {
                    "description": string;
                    "type": string;
                };
                "expirationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "offerCode": {
                    "description": string;
                    "type": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "status": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "clientEmail": {
                    "description": string;
                    "type": string;
                };
                "clientId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "clientName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UserOverrides": {
            "type": string;
            "properties": {
                "userId": {
                    "type": string;
                    "description": string;
                };
                "ipAddress": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "LogUserEventRequest": {
            "description": string;
            "type": string;
            "properties": {
                "eventCategory": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "lead": {
                    "description": string;
                    "$ref": string;
                };
                "eventAction": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "requestMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "eventDatas": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "eventScope": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AnalyticsDataPoint": {
            "properties": {
                "eventLocations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "eventCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Analytics": {
            "description": string;
            "type": string;
            "properties": {
                "eventDate": {
                    "description": string;
                    "$ref": string;
                };
                "profileViews": {
                    "$ref": string;
                    "description": string;
                };
                "searchViews": {
                    "$ref": string;
                    "description": string;
                };
                "contacts": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "PublicProfile": {
            "type": string;
            "properties": {
                "profileImage": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "displayImageUrl": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AdWordsManagerAccountInfo": {
            "description": string;
            "type": string;
            "properties": {
                "customerName": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ResponseMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "debugInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "RecaptchaChallenge": {
            "type": string;
            "properties": {
                "id": {
                    "description": string;
                    "type": string;
                };
                "response": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AvailableOffer": {
            "description": string;
            "type": string;
            "properties": {
                "description": {
                    "description": string;
                    "type": string;
                };
                "offerLevel": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "qualifiedCustomersComplete": {
                    "description": string;
                    "type": string;
                };
                "countryOfferInfos": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "offerType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "maxAccountAge": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "qualifiedCustomer": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "terms": {
                    "description": string;
                    "type": string;
                };
                "showSpecialOfferCopy": {
                    "description": string;
                    "type": string;
                };
                "available": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "LatLng": {
            "description": string;
            "type": string;
            "properties": {
                "latitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "longitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Money": {
            "description": string;
            "type": string;
            "properties": {
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
                "currencyCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AnalyticsSummary": {
            "description": string;
            "type": string;
            "properties": {
                "profileViewsCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "searchViewsCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "contactsCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LogMessageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "requestMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "level": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "details": {
                    "description": string;
                    "type": string;
                };
                "clientInfo": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DebugInfo": {
            "description": string;
            "type": string;
            "properties": {
                "serviceUrl": {
                    "description": string;
                    "type": string;
                };
                "serverInfo": {
                    "description": string;
                    "type": string;
                };
                "serverTraceInfo": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Lead": {
            "description": string;
            "type": string;
            "properties": {
                "websiteUrl": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "state": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "gpsMotivations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "email": {
                    "description": string;
                    "type": string;
                };
                "familyName": {
                    "description": string;
                    "type": string;
                };
                "comments": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "phoneNumber": {
                    "description": string;
                    "type": string;
                };
                "adwordsCustomerId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "createTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "marketingOptIn": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "givenName": {
                    "description": string;
                    "type": string;
                };
                "minMonthlyBudget": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListUserStatesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "userStates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "responseMetadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CompanyRelation": {
            "description": string;
            "type": string;
            "properties": {
                "badgeTier": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "specializationStatus": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "phoneNumber": {
                    "description": string;
                    "type": string;
                };
                "website": {
                    "type": string;
                    "description": string;
                };
                "primaryCountryCode": {
                    "description": string;
                    "type": string;
                };
                "companyId": {
                    "description": string;
                    "type": string;
                };
                "primaryLanguageCode": {
                    "description": string;
                    "type": string;
                };
                "logoUrl": {
                    "description": string;
                    "type": string;
                };
                "resolvedTimestamp": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "companyAdmin": {
                    "description": string;
                    "type": string;
                };
                "address": {
                    "description": string;
                    "type": string;
                };
                "isPending": {
                    "description": string;
                    "type": string;
                };
                "creationTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "primaryAddress": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "managerAccount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "segment": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "internalCompanyId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Date": {
            "description": string;
            "type": string;
            "properties": {
                "year": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "day": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
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
        "TrafficSource": {
            "description": string;
            "type": string;
            "properties": {
                "trafficSourceId": {
                    "description": string;
                    "type": string;
                };
                "trafficSubId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "RequestMetadata": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "locale": {
                    "description": string;
                    "type": string;
                };
                "userOverrides": {
                    "description": string;
                    "$ref": string;
                };
                "partnersSessionId": {
                    "description": string;
                    "type": string;
                };
                "experimentIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "trafficSource": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CreateLeadRequest": {
            "type": string;
            "properties": {
                "lead": {
                    "description": string;
                    "$ref": string;
                };
                "recaptchaChallenge": {
                    "description": string;
                    "$ref": string;
                };
                "requestMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "EventData": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "values": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
        };
        "ExamStatus": {
            "description": string;
            "type": string;
            "properties": {
                "warning": {
                    "description": string;
                    "type": string;
                };
                "expiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "lastPassed": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "examType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "passed": {
                    "description": string;
                    "type": string;
                };
                "taken": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListOffersResponse": {
            "properties": {
                "availableOffers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "noOfferReason": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CountryOfferInfo": {
            "description": string;
            "type": string;
            "properties": {
                "offerCountryCode": {
                    "description": string;
                    "type": string;
                };
                "spendXAmount": {
                    "description": string;
                    "type": string;
                };
                "offerType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "getYAmount": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListCompaniesResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "companies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "OfferCustomer": {
            "type": string;
            "properties": {
                "getYAmount": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "spendXAmount": {
                    "description": string;
                    "type": string;
                };
                "adwordsUrl": {
                    "description": string;
                    "type": string;
                };
                "eligibilityDaysLeft": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "offerType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "externalCid": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "countryCode": {
                    "description": string;
                    "type": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CertificationStatus": {
            "description": string;
            "type": string;
            "properties": {
                "userCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "isCertified": {
                    "description": string;
                    "type": string;
                };
                "examStatuses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
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
        "LocalizedCompanyInfo": {
            "description": string;
            "type": string;
            "properties": {
                "languageCode": {
                    "type": string;
                    "description": string;
                };
                "countryCodes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "overview": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LogUserEventResponse": {
            "description": string;
            "type": string;
            "properties": {
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListOffersHistoryResponse": {
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "canShowEntireCompany": {
                    "type": string;
                    "description": string;
                };
                "totalResults": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "showingEntireCompany": {
                    "type": string;
                    "description": string;
                };
                "offers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "LogMessageResponse": {
            "properties": {
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SpecializationStatus": {
            "properties": {
                "badgeSpecialization": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "badgeSpecializationState": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Certification": {
            "description": string;
            "type": string;
            "properties": {
                "achieved": {
                    "description": string;
                    "type": string;
                };
                "expiration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "warning": {
                    "description": string;
                    "type": string;
                };
                "certificationType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "lastAchieved": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "User": {
            "type": string;
            "properties": {
                "companyVerificationEmail": {
                    "description": string;
                    "type": string;
                };
                "company": {
                    "$ref": string;
                    "description": string;
                };
                "lastAccessTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "primaryEmails": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "certificationStatus": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "afaInfoShared": {
                    "description": string;
                    "type": string;
                };
                "profile": {
                    "$ref": string;
                    "description": string;
                };
                "availableAdwordsManagerAccounts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "internalId": {
                    "description": string;
                    "type": string;
                };
                "examStatus": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "publicProfile": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ListAnalyticsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "analyticsSummary": {
                    "$ref": string;
                    "description": string;
                };
                "analytics": {
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
        };
        "Company": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "badgeTier": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "specializationStatus": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "companyTypes": {
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                    "description": string;
                };
                "autoApprovalEmailDomains": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
                "primaryLanguageCode": {
                    "description": string;
                    "type": string;
                };
                "profileStatus": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "locations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "convertedMinMonthlyBudget": {
                    "description": string;
                    "$ref": string;
                };
                "industries": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "websiteUrl": {
                    "description": string;
                    "type": string;
                };
                "additionalWebsites": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "badgeAuthorityInAwn": {
                    "description": string;
                    "type": string;
                };
                "primaryAdwordsManagerAccountId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "localizedInfos": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "certificationStatuses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "publicProfile": {
                    "description": string;
                    "$ref": string;
                };
                "originalMinMonthlyBudget": {
                    "description": string;
                    "$ref": string;
                };
                "services": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                    };
                    "enumDescriptions": string[];
                };
                "primaryLocation": {
                    "$ref": string;
                    "description": string;
                };
                "ranks": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListLeadsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "responseMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "totalSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "leads": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CreateLeadResponse": {
            "type": string;
            "properties": {
                "lead": {
                    "description": string;
                    "$ref": string;
                };
                "recaptchaStatus": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "responseMetadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GetCompanyResponse": {
            "description": string;
            "type": string;
            "properties": {
                "company": {
                    "$ref": string;
                    "description": string;
                };
                "responseMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Location": {
            "properties": {
                "administrativeArea": {
                    "description": string;
                    "type": string;
                };
                "locality": {
                    "description": string;
                    "type": string;
                };
                "latLng": {
                    "description": string;
                    "$ref": string;
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
                "dependentLocality": {
                    "description": string;
                    "type": string;
                };
                "address": {
                    "description": string;
                    "type": string;
                };
                "postalCode": {
                    "description": string;
                    "type": string;
                };
                "sortingCode": {
                    "description": string;
                    "type": string;
                };
                "languageCode": {
                    "description": string;
                    "type": string;
                };
                "addressLine": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CertificationExamStatus": {
            "description": string;
            "type": string;
            "properties": {
                "numberUsersPass": {
                    "description": string;
                    "format": string;
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
        "OptIns": {
            "description": string;
            "type": string;
            "properties": {
                "specialOffers": {
                    "type": string;
                    "description": string;
                };
                "performanceSuggestions": {
                    "type": string;
                    "description": string;
                };
                "physicalMail": {
                    "description": string;
                    "type": string;
                };
                "phoneContact": {
                    "description": string;
                    "type": string;
                };
                "marketComm": {
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
    "version": string;
    "baseUrl": string;
    "canonicalName": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "rootUrl": string;
    "basePath": string;
    "ownerDomain": string;
    "name": string;
};
export default _default;
//# sourceMappingURL=partners-v2.d.ts.map