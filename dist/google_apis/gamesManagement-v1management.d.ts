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
                "https://www.googleapis.com/auth/games": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.login": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AchievementResetAllResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "results": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AchievementResetMultipleForAllRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievement_ids": {
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
            };
        };
        "AchievementResetResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentState": {
                    "type": string;
                    "description": string;
                };
                "definitionId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updateOccurred": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EventsResetMultipleForAllRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "event_ids": {
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
            };
        };
        "GamesPlayedResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatched": {
                    "type": string;
                    "description": string;
                };
                "timeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GamesPlayerExperienceInfoResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentExperiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currentLevel": {
                    "$ref": string;
                    "description": string;
                };
                "lastLevelUpTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nextLevel": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "GamesPlayerLevelResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "level": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxExperiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minExperiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "HiddenPlayer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hiddenTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "player": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "HiddenPlayerList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Player": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "avatarImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerUrlLandscape": {
                    "type": string;
                    "description": string;
                };
                "bannerUrlPortrait": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "experienceInfo": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastPlayedWith": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "familyName": {
                            "type": string;
                            "description": string;
                        };
                        "givenName": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "originalPlayerId": {
                    "type": string;
                    "description": string;
                };
                "playerId": {
                    "type": string;
                    "description": string;
                };
                "profileSettings": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlayerScoreResetAllResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "results": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlayerScoreResetResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "definitionId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resetScoreTimeSpans": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ProfileSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "profileVisible": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QuestsResetMultipleForAllRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "quest_ids": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ScoresResetMultipleForAllRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaderboard_ids": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
    };
    "resources": {
        "achievements": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "achievementId": {
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
                "resetAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "resetAllForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "achievementId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetMultipleForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "applications": {
            "methods": {
                "listHidden": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "applicationId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "events": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetAllForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetMultipleForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "players": {
            "methods": {
                "hide": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "applicationId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "playerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "unhide": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "applicationId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "playerId": {
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
        "quests": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "questId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetAllForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "questId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetMultipleForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "rooms": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
            };
        };
        "scores": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "leaderboardId": {
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
                "resetAll": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "resetAllForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "leaderboardId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "resetMultipleForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "turnBasedMatches": {
            "methods": {
                "reset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "resetForAllPlayers": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=gamesManagement-v1management.d.ts.map