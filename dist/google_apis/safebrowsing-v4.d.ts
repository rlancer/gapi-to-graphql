declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "title": string;
    "discoveryVersion": string;
    "ownerName": string;
    "resources": {
        "threatListUpdates": {
            "methods": {
                "fetch": {
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
                    "parameters": {};
                };
            };
        };
        "threatHits": {
            "methods": {
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
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
        };
        "encodedFullHashes": {
            "methods": {
                "get": {
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
                        "encodedRequest": {
                            "description": string;
                            "format": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                        "clientId": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "clientVersion": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                };
            };
        };
        "threatLists": {
            "methods": {
                "list": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "parameters": {};
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
            };
        };
        "threatMatches": {
            "methods": {
                "find": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                };
            };
        };
        "fullHashes": {
            "methods": {
                "find": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                };
            };
        };
        "encodedUpdates": {
            "methods": {
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
                        "clientId": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "clientVersion": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "encodedRequest": {
                            "description": string;
                            "format": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                };
            };
        };
    };
    "parameters": {
        "prettyPrint": {
            "type": string;
            "default": string;
            "location": string;
            "description": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
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
        "$.xgafv": {
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
            "enumDescriptions": string[];
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "alt": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
        };
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
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "schemas": {
        "MetadataEntry": {
            "properties": {
                "value": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "key": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "FindThreatMatchesRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "threatInfo": {
                    "description": string;
                    "$ref": string;
                };
                "client": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RawIndices": {
            "description": string;
            "type": string;
            "properties": {
                "indices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ThreatSource": {
            "description": string;
            "type": string;
            "properties": {
                "remoteIp": {
                    "description": string;
                    "type": string;
                };
                "referrer": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UserInfo": {
            "description": string;
            "type": string;
            "properties": {
                "userId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "regionCode": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FetchThreatListUpdatesResponse": {
            "type": string;
            "properties": {
                "listUpdateResponses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "minimumWaitDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Checksum": {
            "description": string;
            "type": string;
            "properties": {
                "sha256": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FindFullHashesResponse": {
            "type": string;
            "properties": {
                "minimumWaitDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "matches": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "negativeCacheDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ThreatEntrySet": {
            "description": string;
            "type": string;
            "properties": {
                "compressionType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "riceIndices": {
                    "description": string;
                    "$ref": string;
                };
                "rawIndices": {
                    "$ref": string;
                    "description": string;
                };
                "rawHashes": {
                    "description": string;
                    "$ref": string;
                };
                "riceHashes": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ThreatHit": {
            "type": string;
            "properties": {
                "platformType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "userInfo": {
                    "$ref": string;
                    "description": string;
                };
                "clientInfo": {
                    "$ref": string;
                    "description": string;
                };
                "threatType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "resources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "entry": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListUpdateRequest": {
            "description": string;
            "type": string;
            "properties": {
                "platformType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "threatType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "constraints": {
                    "description": string;
                    "$ref": string;
                };
                "threatEntryType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "state": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Constraints": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "region": {
                    "description": string;
                    "type": string;
                };
                "supportedCompressions": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "maxDatabaseEntries": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deviceLocation": {
                    "description": string;
                    "type": string;
                };
                "maxUpdateEntries": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "language": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "RiceDeltaEncoding": {
            "properties": {
                "firstValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "encodedData": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "numEntries": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "riceParameter": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ListThreatListsResponse": {
            "properties": {
                "threatLists": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "type": string;
        };
        "FindThreatMatchesResponse": {
            "type": string;
            "properties": {
                "matches": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ThreatListDescriptor": {
            "description": string;
            "type": string;
            "properties": {
                "threatEntryType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "platformType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "threatType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ClientInfo": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "clientId": {
                    "description": string;
                    "type": string;
                };
                "clientVersion": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "ThreatInfo": {
            "type": string;
            "properties": {
                "platformTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "threatEntries": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "threatEntryTypes": {
                    "enumDescriptions": string[];
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                };
                "threatTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
        };
        "ThreatEntryMetadata": {
            "type": string;
            "properties": {
                "entries": {
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
        "RawHashes": {
            "type": string;
            "properties": {
                "rawHashes": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "prefixSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "FindFullHashesRequest": {
            "type": string;
            "properties": {
                "threatInfo": {
                    "description": string;
                    "$ref": string;
                };
                "apiClient": {
                    "description": string;
                    "$ref": string;
                };
                "clientStates": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "client": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "FetchThreatListUpdatesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "listUpdateRequests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "client": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ListUpdateResponse": {
            "description": string;
            "type": string;
            "properties": {
                "removals": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "newClientState": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "platformType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "threatEntryType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "additions": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "checksum": {
                    "$ref": string;
                    "description": string;
                };
                "responseType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "threatType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ThreatMatch": {
            "properties": {
                "threatType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "threatEntryMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "threat": {
                    "description": string;
                    "$ref": string;
                };
                "platformType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "threatEntryType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "cacheDuration": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ThreatEntry": {
            "properties": {
                "digest": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "hash": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "url": {
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
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "version": string;
    "baseUrl": string;
    "kind": string;
    "servicePath": string;
    "description": string;
    "rootUrl": string;
    "basePath": string;
};
export default _default;
//# sourceMappingURL=safebrowsing-v4.d.ts.map