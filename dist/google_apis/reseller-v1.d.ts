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
    "labels": string[];
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
                "https://www.googleapis.com/auth/apps.order": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/apps.order.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Address": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addressLine1": {
                    "type": string;
                    "description": string;
                };
                "addressLine2": {
                    "type": string;
                    "description": string;
                };
                "addressLine3": {
                    "type": string;
                    "description": string;
                };
                "contactName": {
                    "type": string;
                    "description": string;
                };
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "organizationName": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChangePlanRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dealCode": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "planName": {
                    "type": string;
                    "description": string;
                };
                "purchaseOrderId": {
                    "type": string;
                    "description": string;
                };
                "seats": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Customer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alternateEmail": {
                    "type": string;
                    "description": string;
                };
                "customerDomain": {
                    "type": string;
                    "description": string;
                };
                "customerDomainVerified": {
                    "type": string;
                    "description": string;
                };
                "customerId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "postalAddress": {
                    "$ref": string;
                    "description": string;
                };
                "resourceUiUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RenewalSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "renewalType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResellernotifyGetwatchdetailsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "serviceAccountEmailAddresses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "topicName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResellernotifyResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "topicName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Seats": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "licensedNumberOfSeats": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maximumNumberOfSeats": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numberOfSeats": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Subscription": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "billingMethod": {
                    "type": string;
                    "description": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "customerDomain": {
                    "type": string;
                    "description": string;
                };
                "customerId": {
                    "type": string;
                    "description": string;
                };
                "dealCode": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "plan": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "commitmentInterval": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "endTime": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "startTime": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                            };
                        };
                        "isCommitmentPlan": {
                            "type": string;
                            "description": string;
                        };
                        "planName": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "purchaseOrderId": {
                    "type": string;
                    "description": string;
                };
                "renewalSettings": {
                    "$ref": string;
                    "description": string;
                };
                "resourceUiUrl": {
                    "type": string;
                    "description": string;
                };
                "seats": {
                    "$ref": string;
                    "description": string;
                };
                "skuId": {
                    "type": string;
                    "description": string;
                };
                "skuName": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "subscriptionId": {
                    "type": string;
                    "description": string;
                };
                "suspensionReasons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "transferInfo": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "minimumTransferableSeats": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "transferabilityExpirationTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "trialSettings": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "isInTrial": {
                            "type": string;
                            "description": string;
                        };
                        "trialEndTime": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
            };
        };
        "Subscriptions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "subscriptions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
    };
    "resources": {
        "customers": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerAuthToken": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
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
        "resellernotify": {
            "methods": {
                "getwatchdetails": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "register": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "serviceAccountEmailAddress": {
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
                "unregister": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "serviceAccountEmailAddress": {
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
            };
        };
        "subscriptions": {
            "methods": {
                "activate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "changePlan": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "changeRenewalSettings": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "changeSeats": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "deletionType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subscriptionId": {
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
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerAuthToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "customerId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerAuthToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "customerId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "customerNamePrefix": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
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
                "startPaidService": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
                "suspend": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "customerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "subscriptionId": {
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
    };
};
export default _default;
//# sourceMappingURL=reseller-v1.d.ts.map