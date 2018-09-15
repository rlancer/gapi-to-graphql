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
                "https://mail.google.com/": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.compose": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.insert": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.labels": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.metadata": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.modify": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.send": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.settings.basic": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/gmail.settings.sharing": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AutoForwarding": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "disposition": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BatchDeleteMessagesRequest": {
            "id": string;
            "type": string;
            "properties": {
                "ids": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "BatchModifyMessagesRequest": {
            "id": string;
            "type": string;
            "properties": {
                "addLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "ids": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "removeLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Delegate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegateEmail": {
                    "type": string;
                    "description": string;
                };
                "verificationStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Draft": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "message": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Filter": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "$ref": string;
                    "description": string;
                };
                "criteria": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FilterAction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "addLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "forward": {
                    "type": string;
                    "description": string;
                };
                "removeLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "FilterCriteria": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "excludeChats": {
                    "type": string;
                    "description": string;
                };
                "from": {
                    "type": string;
                    "description": string;
                };
                "hasAttachment": {
                    "type": string;
                    "description": string;
                };
                "negatedQuery": {
                    "type": string;
                    "description": string;
                };
                "query": {
                    "type": string;
                    "description": string;
                };
                "size": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sizeComparison": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "subject": {
                    "type": string;
                    "description": string;
                };
                "to": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ForwardingAddress": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "forwardingEmail": {
                    "type": string;
                    "description": string;
                };
                "verificationStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "History": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "labelsAdded": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "labelsRemoved": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "messages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "messagesAdded": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "messagesDeleted": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "HistoryLabelAdded": {
            "id": string;
            "type": string;
            "properties": {
                "labelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "message": {
                    "$ref": string;
                };
            };
        };
        "HistoryLabelRemoved": {
            "id": string;
            "type": string;
            "properties": {
                "labelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "message": {
                    "$ref": string;
                };
            };
        };
        "HistoryMessageAdded": {
            "id": string;
            "type": string;
            "properties": {
                "message": {
                    "$ref": string;
                };
            };
        };
        "HistoryMessageDeleted": {
            "id": string;
            "type": string;
            "properties": {
                "message": {
                    "$ref": string;
                };
            };
        };
        "ImapSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoExpunge": {
                    "type": string;
                    "description": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "expungeBehavior": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "maxFolderSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Label": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "color": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "labelListVisibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "messageListVisibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "messagesTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "messagesUnread": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "threadsTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "threadsUnread": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LabelColor": {
            "id": string;
            "type": string;
            "properties": {
                "backgroundColor": {
                    "type": string;
                    "description": string;
                };
                "textColor": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListDelegatesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListDraftsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "drafts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resultSizeEstimate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ListFiltersResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "filter": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListForwardingAddressesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "forwardingAddresses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListHistoryResponse": {
            "id": string;
            "type": string;
            "properties": {
                "history": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "historyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListLabelsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListMessagesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "messages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resultSizeEstimate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ListSendAsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "sendAs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListSmimeInfoResponse": {
            "id": string;
            "type": string;
            "properties": {
                "smimeInfo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListThreadsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resultSizeEstimate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "threads": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Message": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "historyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "internalDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "labelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "payload": {
                    "$ref": string;
                    "description": string;
                };
                "raw": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "sizeEstimate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "snippet": {
                    "type": string;
                    "description": string;
                };
                "threadId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MessagePart": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "body": {
                    "$ref": string;
                    "description": string;
                };
                "filename": {
                    "type": string;
                    "description": string;
                };
                "headers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "partId": {
                    "type": string;
                    "description": string;
                };
                "parts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MessagePartBody": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attachmentId": {
                    "type": string;
                    "description": string;
                };
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "size": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "MessagePartHeader": {
            "id": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ModifyMessageRequest": {
            "id": string;
            "type": string;
            "properties": {
                "addLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "removeLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ModifyThreadRequest": {
            "id": string;
            "type": string;
            "properties": {
                "addLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "removeLabelIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "PopSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accessWindow": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "disposition": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Profile": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "historyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "messagesTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "threadsTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SendAs": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "isDefault": {
                    "type": string;
                    "description": string;
                };
                "isPrimary": {
                    "type": string;
                    "description": string;
                };
                "replyToAddress": {
                    "type": string;
                    "description": string;
                };
                "sendAsEmail": {
                    "type": string;
                    "description": string;
                };
                "signature": {
                    "type": string;
                    "description": string;
                };
                "smtpMsa": {
                    "$ref": string;
                    "description": string;
                };
                "treatAsAlias": {
                    "type": string;
                    "description": string;
                };
                "verificationStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "SmimeInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "encryptedKeyPassword": {
                    "type": string;
                    "description": string;
                };
                "expiration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isDefault": {
                    "type": string;
                    "description": string;
                };
                "issuerCn": {
                    "type": string;
                    "description": string;
                };
                "pem": {
                    "type": string;
                    "description": string;
                };
                "pkcs12": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SmtpMsa": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "host": {
                    "type": string;
                    "description": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "port": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "securityMode": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "username": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Thread": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "historyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "messages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "snippet": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VacationSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enableAutoReply": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "responseBodyHtml": {
                    "type": string;
                    "description": string;
                };
                "responseBodyPlainText": {
                    "type": string;
                    "description": string;
                };
                "responseSubject": {
                    "type": string;
                    "description": string;
                };
                "restrictToContacts": {
                    "type": string;
                    "description": string;
                };
                "restrictToDomain": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "WatchRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "labelFilterAction": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "labelIds": {
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
        "WatchResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expiration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "historyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
    };
    "resources": {
        "users": {
            "methods": {
                "getProfile": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userId": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userId": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "userId": {
                            "type": string;
                            "description": string;
                            "default": string;
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
            "resources": {
                "drafts": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "format": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "includeSpamTrash": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "format": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "q": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "send": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
                        "update": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "history": {
                    "methods": {
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "historyTypes": {
                                    "type": string;
                                    "description": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "labelId": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "format": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "startHistoryId": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                "labels": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "patch": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                "messages": {
                    "methods": {
                        "batchDelete": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "request": {
                                "$ref": string;
                            };
                            "scopes": string[];
                        };
                        "batchModify": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "required": boolean;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "request": {
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
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "format": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "metadataHeaders": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "import": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "deleted": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "internalDateSource": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "neverMarkSpam": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "processForCalendar": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
                        "insert": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "deleted": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "internalDateSource": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "includeSpamTrash": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "labelIds": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "format": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "q": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "modify": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "send": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                            "supportsMediaUpload": boolean;
                            "mediaUpload": {
                                "accept": string[];
                                "maxSize": string;
                                "protocols": {
                                    "simple": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                    "resumable": {
                                        "multipart": boolean;
                                        "path": string;
                                    };
                                };
                            };
                        };
                        "trash": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "untrash": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                    "resources": {
                        "attachments": {
                            "methods": {
                                "get": {
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
                                        "messageId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                "settings": {
                    "methods": {
                        "getAutoForwarding": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "getImap": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "getPop": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "getVacation": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "updateAutoForwarding": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "updateImap": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "updatePop": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "updateVacation": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                    "resources": {
                        "delegates": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "delegateEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "delegateEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                        "filters": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "id": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "id": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                        "forwardingAddresses": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "forwardingEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "forwardingEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                        "sendAs": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "sendAsEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "sendAsEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                "patch": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "sendAsEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                        "sendAsEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
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
                                "verify": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "sendAsEmail": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                    };
                                    "parameterOrder": string[];
                                    "scopes": string[];
                                };
                            };
                            "resources": {
                                "smimeInfo": {
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
                                                "sendAsEmail": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "userId": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": string;
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
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "sendAsEmail": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "userId": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": string;
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
                                                "sendAsEmail": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "userId": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": string;
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
                                                "sendAsEmail": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "userId": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": string;
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
                                        "setDefault": {
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
                                                "sendAsEmail": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "userId": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": string;
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
                    };
                };
                "threads": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "format": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "id": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "metadataHeaders": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                                "includeSpamTrash": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "location": string;
                                };
                                "labelIds": {
                                    "type": string;
                                    "description": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "maxResults": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "format": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "q": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "modify": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "trash": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
                        "untrash": {
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
                                "userId": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
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
    };
};
export default _default;
//# sourceMappingURL=gmail-v1.d.ts.map