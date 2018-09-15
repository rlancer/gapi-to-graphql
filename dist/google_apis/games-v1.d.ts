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
                "https://www.googleapis.com/auth/drive.appdata": {
                    "description": string;
                };
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
        "AchievementDefinition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievementType": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "experiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "formattedTotalSteps": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "initialState": {
                    "type": string;
                    "description": string;
                };
                "isRevealedIconUrlDefault": {
                    "type": string;
                    "description": string;
                };
                "isUnlockedIconUrlDefault": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "revealedIconUrl": {
                    "type": string;
                    "description": string;
                };
                "totalSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "unlockedIconUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AchievementDefinitionsListResponse": {
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
        "AchievementIncrementResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newlyUnlocked": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AchievementRevealResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentState": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "AchievementSetStepsAtLeastResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newlyUnlocked": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AchievementUnlockResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newlyUnlocked": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AchievementUpdateMultipleRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AchievementUpdateMultipleResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updatedAchievements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AchievementUpdateRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievementId": {
                    "type": string;
                    "description": string;
                };
                "incrementPayload": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "setStepsAtLeastPayload": {
                    "$ref": string;
                    "description": string;
                };
                "updateType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AchievementUpdateResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievementId": {
                    "type": string;
                    "description": string;
                };
                "currentState": {
                    "type": string;
                    "description": string;
                };
                "currentSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newlyUnlocked": {
                    "type": string;
                    "description": string;
                };
                "updateOccurred": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AggregateStats": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "max": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "min": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sum": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AnonymousPlayer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "avatarImageUrl": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Application": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievement_count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "assets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "author": {
                    "type": string;
                    "description": string;
                };
                "category": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "enabledFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "instances": {
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
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "leaderboard_count": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "themeColor": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ApplicationCategory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "secondary": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ApplicationVerifyResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alternate_player_id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "player_id": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Category": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "category": {
                    "type": string;
                    "description": string;
                };
                "experiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "CategoryListResponse": {
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
        "EventBatchRecordFailure": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "failureCause": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "EventChild": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "childId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "EventDefinition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "childEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "imageUrl": {
                    "type": string;
                    "description": string;
                };
                "isDefaultImageUrl": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "visibility": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EventDefinitionListResponse": {
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
        "EventPeriodRange": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "periodEndMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "periodStartMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EventPeriodUpdate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "timePeriod": {
                    "$ref": string;
                    "description": string;
                };
                "updates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "EventRecordFailure": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "eventId": {
                    "type": string;
                    "description": string;
                };
                "failureCause": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "EventRecordRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentTimeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "requestId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timePeriods": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "EventUpdateRequest": {
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
                "updateCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EventUpdateResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "batchFailures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "eventFailures": {
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
                "playerEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GamesAchievementIncrement": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "requestId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "steps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GamesAchievementSetStepsAtLeast": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "steps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ImageAsset": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Instance": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acquisitionUri": {
                    "type": string;
                    "description": string;
                };
                "androidInstance": {
                    "$ref": string;
                    "description": string;
                };
                "iosInstance": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "platformType": {
                    "type": string;
                    "description": string;
                };
                "realtimePlay": {
                    "type": string;
                    "description": string;
                };
                "turnBasedPlay": {
                    "type": string;
                    "description": string;
                };
                "webInstance": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InstanceAndroidDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enablePiracyCheck": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "packageName": {
                    "type": string;
                    "description": string;
                };
                "preferred": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InstanceIosDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bundleIdentifier": {
                    "type": string;
                    "description": string;
                };
                "itunesAppId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "preferredForIpad": {
                    "type": string;
                    "description": string;
                };
                "preferredForIphone": {
                    "type": string;
                    "description": string;
                };
                "supportIpad": {
                    "type": string;
                    "description": string;
                };
                "supportIphone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InstanceWebDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "launchUrl": {
                    "type": string;
                    "description": string;
                };
                "preferred": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Leaderboard": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "iconUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isIconUrlDefault": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "order": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LeaderboardEntry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "formattedScore": {
                    "type": string;
                    "description": string;
                };
                "formattedScoreRank": {
                    "type": string;
                    "description": string;
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
                "scoreRank": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scoreTag": {
                    "type": string;
                    "description": string;
                };
                "scoreValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeSpan": {
                    "type": string;
                    "description": string;
                };
                "writeTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "LeaderboardListResponse": {
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
        "LeaderboardScoreRank": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "formattedNumScores": {
                    "type": string;
                    "description": string;
                };
                "formattedRank": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numScores": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rank": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "LeaderboardScores": {
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
                "numScores": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "playerScore": {
                    "$ref": string;
                    "description": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MetagameConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "currentVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "playerLevels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "NetworkDiagnostics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidNetworkSubtype": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "androidNetworkType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iosNetworkType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "networkOperatorCode": {
                    "type": string;
                    "description": string;
                };
                "networkOperatorName": {
                    "type": string;
                    "description": string;
                };
                "registrationLatencyMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ParticipantResult": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "participantId": {
                    "type": string;
                    "description": string;
                };
                "placing": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "result": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PeerChannelDiagnostics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bytesReceived": {
                    "$ref": string;
                    "description": string;
                };
                "bytesSent": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numMessagesLost": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numMessagesReceived": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numMessagesSent": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numSendFailures": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "roundtripLatencyMillis": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PeerSessionDiagnostics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "connectedTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "participantId": {
                    "type": string;
                    "description": string;
                };
                "reliableChannel": {
                    "$ref": string;
                    "description": string;
                };
                "unreliableChannel": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Played": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatched": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "timeMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
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
        "PlayerAchievement": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "achievementState": {
                    "type": string;
                    "description": string;
                };
                "currentSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "experiencePoints": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "formattedCurrentStepsString": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PlayerAchievementListResponse": {
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
        "PlayerEvent": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "definitionId": {
                    "type": string;
                    "description": string;
                };
                "formattedNumEvents": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numEvents": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "playerId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlayerEventListResponse": {
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
        "PlayerExperienceInfo": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
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
        "PlayerLeaderboardScore": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaderboard_id": {
                    "type": string;
                    "description": string;
                };
                "publicRank": {
                    "$ref": string;
                    "description": string;
                };
                "scoreString": {
                    "type": string;
                    "description": string;
                };
                "scoreTag": {
                    "type": string;
                    "description": string;
                };
                "scoreValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "socialRank": {
                    "$ref": string;
                    "description": string;
                };
                "timeSpan": {
                    "type": string;
                    "description": string;
                };
                "writeTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PlayerLeaderboardScoreListResponse": {
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
                "player": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PlayerLevel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
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
        "PlayerListResponse": {
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
        "PlayerScore": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "formattedScore": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scoreTag": {
                    "type": string;
                    "description": string;
                };
                "timeSpan": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlayerScoreListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "submittedScores": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlayerScoreResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "beatenScoreTimeSpans": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "formattedScore": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaderboardId": {
                    "type": string;
                    "description": string;
                };
                "scoreTag": {
                    "type": string;
                    "description": string;
                };
                "unbeatenScores": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlayerScoreSubmissionList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "scores": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
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
        "PushToken": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clientRevision": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PushTokenId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ios": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "apns_device_token": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "apns_environment": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Quest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acceptedTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "applicationId": {
                    "type": string;
                    "description": string;
                };
                "bannerUrl": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "endTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iconUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "isDefaultBannerUrl": {
                    "type": string;
                    "description": string;
                };
                "isDefaultIconUrl": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastUpdatedTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "milestones": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "notifyTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "QuestContribution": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "formattedValue": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "QuestCriterion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "completionContribution": {
                    "$ref": string;
                    "description": string;
                };
                "currentContribution": {
                    "$ref": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
                "initialPlayerProgress": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "QuestListResponse": {
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
        "QuestMilestone": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "completionRewardData": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "criteria": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RevisionCheckResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "apiVersion": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "revisionStatus": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Room": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "applicationId": {
                    "type": string;
                    "description": string;
                };
                "autoMatchingCriteria": {
                    "$ref": string;
                    "description": string;
                };
                "autoMatchingStatus": {
                    "$ref": string;
                    "description": string;
                };
                "creationDetails": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "inviterId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastUpdateDetails": {
                    "$ref": string;
                    "description": string;
                };
                "participants": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "roomId": {
                    "type": string;
                    "description": string;
                };
                "roomStatusVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "variant": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RoomAutoMatchStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "waitEstimateSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RoomAutoMatchingCriteria": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exclusiveBitmask": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxAutoMatchingPlayers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minAutoMatchingPlayers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RoomClientAddress": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "xmppAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoomCreateRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatchingCriteria": {
                    "$ref": string;
                    "description": string;
                };
                "capabilities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "clientAddress": {
                    "$ref": string;
                    "description": string;
                };
                "invitedPlayerIds": {
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
                "networkDiagnostics": {
                    "$ref": string;
                    "description": string;
                };
                "requestId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "variant": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RoomJoinRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "capabilities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "clientAddress": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "networkDiagnostics": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "RoomLeaveDiagnostics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidNetworkSubtype": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "androidNetworkType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iosNetworkType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "networkOperatorCode": {
                    "type": string;
                    "description": string;
                };
                "networkOperatorName": {
                    "type": string;
                    "description": string;
                };
                "peerSession": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "socketsUsed": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoomLeaveRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaveDiagnostics": {
                    "$ref": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoomList": {
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
        "RoomModification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "modifiedTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "participantId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoomP2PStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "connectionSetupLatencyMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "error": {
                    "type": string;
                    "description": string;
                };
                "error_reason": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "participantId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "unreliableRoundtripLatencyMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RoomP2PStatuses": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "RoomParticipant": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatched": {
                    "type": string;
                    "description": string;
                };
                "autoMatchedPlayer": {
                    "$ref": string;
                    "description": string;
                };
                "capabilities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "clientAddress": {
                    "$ref": string;
                    "description": string;
                };
                "connected": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaveReason": {
                    "type": string;
                    "description": string;
                };
                "player": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RoomStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatchingStatus": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "participants": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "roomId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "statusVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ScoreSubmission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "leaderboardId": {
                    "type": string;
                    "description": string;
                };
                "score": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scoreTag": {
                    "type": string;
                    "description": string;
                    "pattern": string;
                };
                "signature": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Snapshot": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "coverImage": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "driveId": {
                    "type": string;
                    "description": string;
                };
                "durationMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "progressValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "uniqueName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SnapshotImage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mime_type": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SnapshotListResponse": {
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
        "TurnBasedAutoMatchingCriteria": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exclusiveBitmask": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "maxAutoMatchingPlayers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minAutoMatchingPlayers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TurnBasedMatch": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "applicationId": {
                    "type": string;
                    "description": string;
                };
                "autoMatchingCriteria": {
                    "$ref": string;
                    "description": string;
                };
                "creationDetails": {
                    "$ref": string;
                    "description": string;
                };
                "data": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "inviterId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastUpdateDetails": {
                    "$ref": string;
                    "description": string;
                };
                "matchId": {
                    "type": string;
                    "description": string;
                };
                "matchNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "matchVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "participants": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pendingParticipantId": {
                    "type": string;
                    "description": string;
                };
                "previousMatchData": {
                    "$ref": string;
                    "description": string;
                };
                "rematchId": {
                    "type": string;
                    "description": string;
                };
                "results": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "userMatchStatus": {
                    "type": string;
                    "description": string;
                };
                "variant": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "withParticipantId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TurnBasedMatchCreateRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatchingCriteria": {
                    "$ref": string;
                    "description": string;
                };
                "invitedPlayerIds": {
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
                "requestId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "variant": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TurnBasedMatchData": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dataAvailable": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TurnBasedMatchDataRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "TurnBasedMatchList": {
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
        "TurnBasedMatchModification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "modifiedTimestampMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "participantId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TurnBasedMatchParticipant": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoMatched": {
                    "type": string;
                    "description": string;
                };
                "autoMatchedPlayer": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
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
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TurnBasedMatchRematch": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "previousMatch": {
                    "$ref": string;
                    "description": string;
                };
                "rematch": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TurnBasedMatchResults": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "data": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "matchVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
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
        "TurnBasedMatchSync": {
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
                "moreAvailable": {
                    "type": string;
                    "description": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TurnBasedMatchTurn": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "data": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "matchVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pendingParticipantId": {
                    "type": string;
                    "description": string;
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
    };
    "resources": {
        "achievementDefinitions": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
            };
        };
        "achievements": {
            "methods": {
                "increment": {
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
                        "requestId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "stepsToIncrement": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
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
                        "language": {
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
                        "playerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "state": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "reveal": {
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
                "setStepsAtLeast": {
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
                        "steps": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "unlock": {
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
                "updateMultiple": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
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
        "applications": {
            "methods": {
                "get": {
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
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "platformType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "played": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "scopes": string[];
                };
                "verify": {
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
                "listByPlayer": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
                "listDefinitions": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
                "record": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
            };
        };
        "leaderboards": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
            };
        };
        "metagame": {
            "methods": {
                "getMetagameConfig": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listCategoriesByPlayer": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "language": {
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
                        "playerId": {
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
        "players": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
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
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "language": {
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
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "pushtokens": {
            "methods": {
                "remove": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "update": {
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
        "questMilestones": {
            "methods": {
                "claim": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "milestoneId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "questId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "requestId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                "accept": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "questId": {
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
                        "language": {
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
                        "playerId": {
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
        "revisions": {
            "methods": {
                "check": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "clientRevision": {
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
        "rooms": {
            "methods": {
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
                "decline": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roomId": {
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
                "dismiss": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "roomId": {
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
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roomId": {
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
                "join": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roomId": {
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
                "leave": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roomId": {
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
                        "language": {
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
                "reportStatus": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roomId": {
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
        "scores": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeRankType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "leaderboardId": {
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
                        "playerId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "timeSpan": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "leaderboardId": {
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
                        "timeSpan": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listWindow": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "collection": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "leaderboardId": {
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
                        "resultsAbove": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "returnTopIfAbsent": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timeSpan": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "leaderboardId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "score": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "scoreTag": {
                            "type": string;
                            "description": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "submitMultiple": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
            };
        };
        "snapshots": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "snapshotId": {
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
                        "language": {
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
                        "playerId": {
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
        "turnBasedMatches": {
            "methods": {
                "cancel": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "matchId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "create": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
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
                "decline": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
                "dismiss": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "matchId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "finish": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeMatchData": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
                "join": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
                "leave": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
                "leaveTurn": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "matchVersion": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "pendingParticipantId": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeMatchData": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxCompletedMatches": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
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
                "rematch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "requestId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "sync": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "includeMatchData": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxCompletedMatches": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
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
                "takeTurn": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "language": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "matchId": {
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
//# sourceMappingURL=games-v1.d.ts.map