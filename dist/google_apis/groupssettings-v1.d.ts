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
                "https://www.googleapis.com/auth/apps.groups.settings": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Groups": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowExternalMembers": {
                    "type": string;
                    "description": string;
                };
                "allowGoogleCommunication": {
                    "type": string;
                    "description": string;
                };
                "allowWebPosting": {
                    "type": string;
                    "description": string;
                };
                "archiveOnly": {
                    "type": string;
                    "description": string;
                };
                "customFooterText": {
                    "type": string;
                    "description": string;
                };
                "customReplyTo": {
                    "type": string;
                    "description": string;
                };
                "defaultMessageDenyNotificationText": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "favoriteRepliesOnTop": {
                    "type": string;
                    "description": string;
                };
                "includeCustomFooter": {
                    "type": string;
                    "description": string;
                };
                "includeInGlobalAddressList": {
                    "type": string;
                    "description": string;
                };
                "isArchived": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxMessageBytes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "membersCanPostAsTheGroup": {
                    "type": string;
                    "description": string;
                };
                "messageDisplayFont": {
                    "type": string;
                    "description": string;
                };
                "messageModerationLevel": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "primaryLanguage": {
                    "type": string;
                    "description": string;
                };
                "replyTo": {
                    "type": string;
                    "description": string;
                };
                "sendMessageDenyNotification": {
                    "type": string;
                    "description": string;
                };
                "showInGroupDirectory": {
                    "type": string;
                    "description": string;
                };
                "spamModerationLevel": {
                    "type": string;
                    "description": string;
                };
                "whoCanAdd": {
                    "type": string;
                    "description": string;
                };
                "whoCanAddReferences": {
                    "type": string;
                    "description": string;
                };
                "whoCanAssignTopics": {
                    "type": string;
                    "description": string;
                };
                "whoCanContactOwner": {
                    "type": string;
                    "description": string;
                };
                "whoCanEnterFreeFormTags": {
                    "type": string;
                    "description": string;
                };
                "whoCanInvite": {
                    "type": string;
                    "description": string;
                };
                "whoCanJoin": {
                    "type": string;
                    "description": string;
                };
                "whoCanLeaveGroup": {
                    "type": string;
                    "description": string;
                };
                "whoCanMarkDuplicate": {
                    "type": string;
                    "description": string;
                };
                "whoCanMarkFavoriteReplyOnAnyTopic": {
                    "type": string;
                    "description": string;
                };
                "whoCanMarkFavoriteReplyOnOwnTopic": {
                    "type": string;
                    "description": string;
                };
                "whoCanMarkNoResponseNeeded": {
                    "type": string;
                    "description": string;
                };
                "whoCanModifyTagsAndCategories": {
                    "type": string;
                    "description": string;
                };
                "whoCanPostMessage": {
                    "type": string;
                    "description": string;
                };
                "whoCanTakeTopics": {
                    "type": string;
                    "description": string;
                };
                "whoCanUnassignTopic": {
                    "type": string;
                    "description": string;
                };
                "whoCanUnmarkFavoriteReplyOnAnyTopic": {
                    "type": string;
                    "description": string;
                };
                "whoCanViewGroup": {
                    "type": string;
                    "description": string;
                };
                "whoCanViewMembership": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "groups": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupUniqueId": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "groupUniqueId": {
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
                        "groupUniqueId": {
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
    };
};
export default _default;
//# sourceMappingURL=groupssettings-v1.d.ts.map