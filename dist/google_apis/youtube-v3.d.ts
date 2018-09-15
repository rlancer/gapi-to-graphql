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
                "https://www.googleapis.com/auth/youtube": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtube.force-ssl": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtube.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtube.upload": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtubepartner": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/youtubepartner-channel-audit": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "AccessPolicy": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowed": {
                    "type": string;
                    "description": string;
                };
                "exception": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Activity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bulletin": {
                    "$ref": string;
                    "description": string;
                };
                "channelItem": {
                    "$ref": string;
                    "description": string;
                };
                "comment": {
                    "$ref": string;
                    "description": string;
                };
                "favorite": {
                    "$ref": string;
                    "description": string;
                };
                "like": {
                    "$ref": string;
                    "description": string;
                };
                "playlistItem": {
                    "$ref": string;
                    "description": string;
                };
                "promotedItem": {
                    "$ref": string;
                    "description": string;
                };
                "recommendation": {
                    "$ref": string;
                    "description": string;
                };
                "social": {
                    "$ref": string;
                    "description": string;
                };
                "subscription": {
                    "$ref": string;
                    "description": string;
                };
                "upload": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsBulletin": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsChannelItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsComment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsFavorite": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsLike": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsPlaylistItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "playlistId": {
                    "type": string;
                    "description": string;
                };
                "playlistItemId": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsPromotedItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adTag": {
                    "type": string;
                    "description": string;
                };
                "clickTrackingUrl": {
                    "type": string;
                    "description": string;
                };
                "creativeViewUrl": {
                    "type": string;
                    "description": string;
                };
                "ctaType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "customCtaButtonText": {
                    "type": string;
                    "description": string;
                };
                "descriptionText": {
                    "type": string;
                    "description": string;
                };
                "destinationUrl": {
                    "type": string;
                    "description": string;
                };
                "forecastingUrl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "impressionUrl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsRecommendation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "reason": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
                "seedResourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsSocial": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "author": {
                    "type": string;
                    "description": string;
                };
                "imageUrl": {
                    "type": string;
                    "description": string;
                };
                "referenceUrl": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ActivityContentDetailsSubscription": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resourceId": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ActivityContentDetailsUpload": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ActivityListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ActivitySnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "groupId": {
                    "type": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Caption": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CaptionListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CaptionSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "audioTrackType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "failureReason": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "isAutoSynced": {
                    "type": string;
                    "description": string;
                };
                "isCC": {
                    "type": string;
                    "description": string;
                };
                "isDraft": {
                    "type": string;
                    "description": string;
                };
                "isEasyReader": {
                    "type": string;
                    "description": string;
                };
                "isLarge": {
                    "type": string;
                    "description": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "lastUpdated": {
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
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "trackKind": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "videoId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "CdnSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "format": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "frameRate": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "ingestionInfo": {
                    "$ref": string;
                    "description": string;
                };
                "ingestionType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "resolution": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Channel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "auditDetails": {
                    "$ref": string;
                    "description": string;
                };
                "brandingSettings": {
                    "$ref": string;
                    "description": string;
                };
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "contentOwnerDetails": {
                    "$ref": string;
                    "description": string;
                };
                "conversionPings": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "invideoPromotion": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "localizations": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "statistics": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
                "topicDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ChannelAuditDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "communityGuidelinesGoodStanding": {
                    "type": string;
                    "description": string;
                };
                "contentIdClaimsGoodStanding": {
                    "type": string;
                    "description": string;
                };
                "copyrightStrikesGoodStanding": {
                    "type": string;
                    "description": string;
                };
                "overallGoodStanding": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelBannerResource": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelBrandingSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channel": {
                    "$ref": string;
                    "description": string;
                };
                "hints": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "watch": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ChannelContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "relatedPlaylists": {
                    "type": string;
                    "properties": {
                        "favorites": {
                            "type": string;
                            "description": string;
                        };
                        "likes": {
                            "type": string;
                            "description": string;
                        };
                        "uploads": {
                            "type": string;
                            "description": string;
                        };
                        "watchHistory": {
                            "type": string;
                            "description": string;
                        };
                        "watchLater": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "ChannelContentOwnerDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentOwner": {
                    "type": string;
                    "description": string;
                };
                "timeLinked": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ChannelConversionPing": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "context": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "conversionUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelConversionPings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "pings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ChannelListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelLocalization": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelProfileDetails": {
            "id": string;
            "type": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelUrl": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "profileImageUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelSection": {
            "id": string;
            "type": string;
            "properties": {
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "localizations": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "targeting": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ChannelSectionContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "playlists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ChannelSectionListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelSectionLocalization": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelSectionSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "localized": {
                    "$ref": string;
                    "description": string;
                };
                "position": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "style": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ChannelSectionTargeting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "regions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ChannelSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                };
                "defaultTab": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "featuredChannelsTitle": {
                    "type": string;
                    "description": string;
                };
                "featuredChannelsUrls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "keywords": {
                    "type": string;
                    "description": string;
                };
                "moderateComments": {
                    "type": string;
                    "description": string;
                };
                "profileColor": {
                    "type": string;
                    "description": string;
                };
                "showBrowseView": {
                    "type": string;
                    "description": string;
                };
                "showRelatedChannels": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "trackingAnalyticsAccountId": {
                    "type": string;
                    "description": string;
                };
                "unsubscribedTrailer": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "customUrl": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "localized": {
                    "$ref": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChannelStatistics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "commentCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hiddenSubscriberCount": {
                    "type": string;
                    "description": string;
                };
                "subscriberCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "viewCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ChannelStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "isLinked": {
                    "type": string;
                    "description": string;
                };
                "longUploadsStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "privacyStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "ChannelTopicDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "topicCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "topicIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Comment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CommentListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CommentSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authorChannelId": {
                    "type": string;
                    "description": string;
                };
                "authorChannelUrl": {
                    "type": string;
                    "description": string;
                };
                "authorDisplayName": {
                    "type": string;
                    "description": string;
                };
                "authorProfileImageUrl": {
                    "type": string;
                    "description": string;
                };
                "canRate": {
                    "type": string;
                    "description": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "likeCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "moderationStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "parentId": {
                    "type": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "textDisplay": {
                    "type": string;
                    "description": string;
                };
                "textOriginal": {
                    "type": string;
                    "description": string;
                };
                "updatedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
                "viewerRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "CommentThread": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "replies": {
                    "$ref": string;
                    "description": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CommentThreadListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CommentThreadReplies": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "comments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CommentThreadSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "canReply": {
                    "type": string;
                    "description": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "isPublic": {
                    "type": string;
                    "description": string;
                };
                "topLevelComment": {
                    "$ref": string;
                    "description": string;
                };
                "totalReplyCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ContentRating": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "acbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "agcomRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "anatelRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "bbfcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "bfvcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "bmukkRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "catvRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "catvfrRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cbfcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cccRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cceRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "chfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "chvrsRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cicfRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cnaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cncRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "csaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "cscfRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "czfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "djctqRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "djctqRatingReasons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "ecbmctRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "eefilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "egfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "eirinRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "fcbmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "fcoRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "fmocRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "fpbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "fpbRatingReasons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "fskRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "grfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "icaaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "ifcoRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "ilfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "incaaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kfcbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kijkwijzerRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kmrbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "lsfRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mccaaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mccypRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mcstRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mdaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "medietilsynetRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mekuRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "menaMpaaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mibacRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mocRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "moctwRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mpaaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mpaatRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mtrcbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nbcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nbcplRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nfrcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nfvcbRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "nkclvRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "oflcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "pefilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "rcnofRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "resorteviolenciaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "rtcRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "rteRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "russiaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "skfilmRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "smaisRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "smsaRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "tvpgRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "ytRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "GeoPoint": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "altitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "longitude": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GuideCategory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "GuideCategoryListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GuideCategorySnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "default": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "I18nLanguage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "I18nLanguageListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "I18nLanguageSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hl": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "I18nRegion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "I18nRegionListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "I18nRegionSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "gl": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ImageSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backgroundImageUrl": {
                    "$ref": string;
                    "description": string;
                };
                "bannerExternalUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerMobileExtraHdImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerMobileHdImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerMobileImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerMobileLowImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerMobileMediumHdImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTabletExtraHdImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTabletHdImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTabletImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTabletLowImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTvHighImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTvImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTvLowImageUrl": {
                    "type": string;
                    "description": string;
                };
                "bannerTvMediumImageUrl": {
                    "type": string;
                    "description": string;
                };
                "largeBrandedBannerImageImapScript": {
                    "$ref": string;
                    "description": string;
                };
                "largeBrandedBannerImageUrl": {
                    "$ref": string;
                    "description": string;
                };
                "smallBrandedBannerImageImapScript": {
                    "$ref": string;
                    "description": string;
                };
                "smallBrandedBannerImageUrl": {
                    "$ref": string;
                    "description": string;
                };
                "trackingImageUrl": {
                    "type": string;
                    "description": string;
                };
                "watchIconImageUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IngestionInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backupIngestionAddress": {
                    "type": string;
                    "description": string;
                };
                "ingestionAddress": {
                    "type": string;
                    "description": string;
                };
                "streamName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InvideoBranding": {
            "id": string;
            "type": string;
            "properties": {
                "imageBytes": {
                    "type": string;
                    "format": string;
                };
                "imageUrl": {
                    "type": string;
                };
                "position": {
                    "$ref": string;
                };
                "targetChannelId": {
                    "type": string;
                };
                "timing": {
                    "$ref": string;
                };
            };
        };
        "InvideoPosition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cornerPosition": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "InvideoPromotion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "defaultTiming": {
                    "$ref": string;
                    "description": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "position": {
                    "$ref": string;
                    "description": string;
                };
                "useSmartTiming": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InvideoTiming": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "durationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "offsetMs": {
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
        "LanguageTag": {
            "id": string;
            "type": string;
            "properties": {
                "value": {
                    "type": string;
                };
            };
        };
        "LiveBroadcast": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "statistics": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveBroadcastContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "boundStreamId": {
                    "type": string;
                    "description": string;
                };
                "boundStreamLastUpdateTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "closedCaptionsType": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "enableAutoStart": {
                    "type": string;
                    "description": string;
                };
                "enableClosedCaptions": {
                    "type": string;
                    "description": string;
                };
                "enableContentEncryption": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "enableDvr": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "enableEmbed": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "enableLowLatency": {
                    "type": string;
                    "description": string;
                };
                "latencyPreference": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "mesh": {
                    "type": string;
                    "format": string;
                };
                "monitorStream": {
                    "$ref": string;
                    "description": string;
                };
                "projection": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "recordFromStart": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "startWithSlate": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "stereoLayout": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LiveBroadcastListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveBroadcastSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "actualEndTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "actualStartTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "isDefaultBroadcast": {
                    "type": string;
                };
                "liveChatId": {
                    "type": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduledEndTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduledStartTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "LiveBroadcastStatistics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "concurrentViewers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalChatCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "LiveBroadcastStatus": {
            "id": string;
            "type": string;
            "properties": {
                "lifeCycleStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "liveBroadcastPriority": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "privacyStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "recordingStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LiveChatBan": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveChatBanSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "banDurationSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "bannedUserDetails": {
                    "$ref": string;
                };
                "liveChatId": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LiveChatFanFundingEventDetails": {
            "id": string;
            "type": string;
            "properties": {
                "amountDisplayString": {
                    "type": string;
                    "description": string;
                };
                "amountMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currency": {
                    "type": string;
                    "description": string;
                };
                "userComment": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatMessage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "authorDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveChatMessageAuthorDetails": {
            "id": string;
            "type": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelUrl": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "isChatModerator": {
                    "type": string;
                    "description": string;
                };
                "isChatOwner": {
                    "type": string;
                    "description": string;
                };
                "isChatSponsor": {
                    "type": string;
                    "description": string;
                };
                "isVerified": {
                    "type": string;
                    "description": string;
                };
                "profileImageUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatMessageDeletedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "deletedMessageId": {
                    "type": string;
                };
            };
        };
        "LiveChatMessageListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "offlineAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pageInfo": {
                    "$ref": string;
                };
                "pollingIntervalMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatMessageRetractedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "retractedMessageId": {
                    "type": string;
                };
            };
        };
        "LiveChatMessageSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "authorChannelId": {
                    "type": string;
                    "description": string;
                };
                "displayMessage": {
                    "type": string;
                    "description": string;
                };
                "fanFundingEventDetails": {
                    "$ref": string;
                    "description": string;
                };
                "hasDisplayContent": {
                    "type": string;
                    "description": string;
                };
                "liveChatId": {
                    "type": string;
                };
                "messageDeletedDetails": {
                    "$ref": string;
                };
                "messageRetractedDetails": {
                    "$ref": string;
                };
                "pollClosedDetails": {
                    "$ref": string;
                };
                "pollEditedDetails": {
                    "$ref": string;
                };
                "pollOpenedDetails": {
                    "$ref": string;
                };
                "pollVotedDetails": {
                    "$ref": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "superChatDetails": {
                    "$ref": string;
                    "description": string;
                };
                "textMessageDetails": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "userBannedDetails": {
                    "$ref": string;
                };
            };
        };
        "LiveChatModerator": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveChatModeratorListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatModeratorSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "liveChatId": {
                    "type": string;
                    "description": string;
                };
                "moderatorDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveChatPollClosedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "pollId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatPollEditedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                };
                "items": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "prompt": {
                    "type": string;
                };
            };
        };
        "LiveChatPollItem": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "itemId": {
                    "type": string;
                };
            };
        };
        "LiveChatPollOpenedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                };
                "items": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "prompt": {
                    "type": string;
                };
            };
        };
        "LiveChatPollVotedDetails": {
            "id": string;
            "type": string;
            "properties": {
                "itemId": {
                    "type": string;
                    "description": string;
                };
                "pollId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatSuperChatDetails": {
            "id": string;
            "type": string;
            "properties": {
                "amountDisplayString": {
                    "type": string;
                    "description": string;
                };
                "amountMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currency": {
                    "type": string;
                    "description": string;
                };
                "tier": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userComment": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatTextMessageDetails": {
            "id": string;
            "type": string;
            "properties": {
                "messageText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveChatUserBannedMessageDetails": {
            "id": string;
            "type": string;
            "properties": {
                "banDurationSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "banType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "bannedUserDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveStream": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cdn": {
                    "$ref": string;
                    "description": string;
                };
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "LiveStreamConfigurationIssue": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LiveStreamContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "closedCaptionsIngestionUrl": {
                    "type": string;
                    "description": string;
                };
                "isReusable": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveStreamHealthStatus": {
            "id": string;
            "type": string;
            "properties": {
                "configurationIssues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lastUpdateTimeSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LiveStreamListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LiveStreamSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "isDefaultStream": {
                    "type": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "LiveStreamStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "healthStatus": {
                    "$ref": string;
                    "description": string;
                };
                "streamStatus": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "LocalizedProperty": {
            "id": string;
            "type": string;
            "properties": {
                "default": {
                    "type": string;
                };
                "defaultLanguage": {
                    "$ref": string;
                    "description": string;
                };
                "localized": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LocalizedString": {
            "id": string;
            "type": string;
            "properties": {
                "language": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "MonitorStreamInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "broadcastStreamDelayMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "embedHtml": {
                    "type": string;
                    "description": string;
                };
                "enableMonitorStream": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Nonprofit": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nonprofitId": {
                    "$ref": string;
                    "description": string;
                };
                "nonprofitLegalName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "NonprofitId": {
            "id": string;
            "type": string;
            "properties": {
                "value": {
                    "type": string;
                };
            };
        };
        "PageInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "resultsPerPage": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalResults": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Playlist": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "localizations": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "player": {
                    "$ref": string;
                    "description": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PlaylistContentDetails": {
            "id": string;
            "type": string;
            "properties": {
                "itemCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PlaylistItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PlaylistItemContentDetails": {
            "id": string;
            "type": string;
            "properties": {
                "endAt": {
                    "type": string;
                    "description": string;
                };
                "note": {
                    "type": string;
                    "description": string;
                };
                "startAt": {
                    "type": string;
                    "description": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
                "videoPublishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PlaylistItemListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlaylistItemSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "playlistId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "position": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resourceId": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlaylistItemStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "privacyStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "PlaylistListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlaylistLocalization": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlaylistPlayer": {
            "id": string;
            "type": string;
            "properties": {
                "embedHtml": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlaylistSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "localized": {
                    "$ref": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "PlaylistStatus": {
            "id": string;
            "type": string;
            "properties": {
                "privacyStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "PromotedItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customMessage": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "$ref": string;
                    "description": string;
                };
                "promotedByContentOwner": {
                    "type": string;
                    "description": string;
                };
                "timing": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PromotedItemId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "recentlyUploadedBy": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
                "websiteUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PropertyValue": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "property": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResourceId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                };
                "playlistId": {
                    "type": string;
                    "description": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SearchListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "regionCode": {
                    "type": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SearchResult": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SearchResultSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "liveBroadcastContent": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Sponsor": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SponsorListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SponsorSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "cumulativeDurationMonths": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sponsorDetails": {
                    "$ref": string;
                    "description": string;
                };
                "sponsorSince": {
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
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "subscriberSnippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SubscriptionContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activityType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "newItemCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalItemCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SubscriptionListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SubscriptionSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "resourceId": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SubscriptionSubscriberSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SuperChatEvent": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "SuperChatEventListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SuperChatEventSnippet": {
            "id": string;
            "type": string;
            "properties": {
                "amountMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "commentText": {
                    "type": string;
                    "description": string;
                };
                "createdAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currency": {
                    "type": string;
                    "description": string;
                };
                "displayString": {
                    "type": string;
                    "description": string;
                };
                "isSuperChatForGood": {
                    "type": string;
                    "description": string;
                };
                "messageType": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nonprofit": {
                    "$ref": string;
                    "description": string;
                };
                "supporterDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Thumbnail": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
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
        "ThumbnailDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "default": {
                    "$ref": string;
                    "description": string;
                };
                "high": {
                    "$ref": string;
                    "description": string;
                };
                "maxres": {
                    "$ref": string;
                    "description": string;
                };
                "medium": {
                    "$ref": string;
                    "description": string;
                };
                "standard": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ThumbnailSetResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TokenPagination": {
            "id": string;
            "type": string;
            "description": string;
        };
        "Video": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ageGating": {
                    "$ref": string;
                    "description": string;
                };
                "contentDetails": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fileDetails": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "liveStreamingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "localizations": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "monetizationDetails": {
                    "$ref": string;
                    "description": string;
                };
                "player": {
                    "$ref": string;
                    "description": string;
                };
                "processingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "projectDetails": {
                    "$ref": string;
                    "description": string;
                };
                "recordingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
                "statistics": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
                "suggestions": {
                    "$ref": string;
                    "description": string;
                };
                "topicDetails": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VideoAbuseReport": {
            "id": string;
            "type": string;
            "properties": {
                "comments": {
                    "type": string;
                    "description": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "reasonId": {
                    "type": string;
                    "description": string;
                };
                "secondaryReasonId": {
                    "type": string;
                    "description": string;
                };
                "videoId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoAbuseReportReason": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VideoAbuseReportReasonListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoAbuseReportReasonSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "label": {
                    "type": string;
                    "description": string;
                };
                "secondaryReasons": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VideoAbuseReportSecondaryReason": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "label": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoAgeGating": {
            "id": string;
            "type": string;
            "properties": {
                "alcoholContent": {
                    "type": string;
                    "description": string;
                };
                "restricted": {
                    "type": string;
                    "description": string;
                };
                "videoGameRating": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "VideoCategory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
                "snippet": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VideoCategoryListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoCategorySnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "assignable": {
                    "type": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoContentDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "caption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "contentRating": {
                    "$ref": string;
                    "description": string;
                };
                "countryRestriction": {
                    "$ref": string;
                    "description": string;
                };
                "definition": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "dimension": {
                    "type": string;
                    "description": string;
                };
                "duration": {
                    "type": string;
                    "description": string;
                };
                "hasCustomThumbnail": {
                    "type": string;
                    "description": string;
                };
                "licensedContent": {
                    "type": string;
                    "description": string;
                };
                "projection": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "regionRestriction": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VideoContentDetailsRegionRestriction": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowed": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "blocked": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "VideoFileDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "audioStreams": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bitrateBps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "container": {
                    "type": string;
                    "description": string;
                };
                "creationTime": {
                    "type": string;
                    "description": string;
                };
                "durationMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fileName": {
                    "type": string;
                    "description": string;
                };
                "fileSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fileType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "videoStreams": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VideoFileDetailsAudioStream": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bitrateBps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "channelCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "codec": {
                    "type": string;
                    "description": string;
                };
                "vendor": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoFileDetailsVideoStream": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "aspectRatio": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "bitrateBps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "codec": {
                    "type": string;
                    "description": string;
                };
                "frameRateFps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "heightPixels": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rotation": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "vendor": {
                    "type": string;
                    "description": string;
                };
                "widthPixels": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoGetRatingResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "etag": {
                    "type": string;
                    "description": string;
                };
                "eventId": {
                    "type": string;
                    "description": string;
                };
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
                "pageInfo": {
                    "$ref": string;
                };
                "prevPageToken": {
                    "type": string;
                    "description": string;
                };
                "tokenPagination": {
                    "$ref": string;
                };
                "visitorId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoLiveStreamingDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activeLiveChatId": {
                    "type": string;
                    "description": string;
                };
                "actualEndTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "actualStartTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "concurrentViewers": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduledEndTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "scheduledStartTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoLocalization": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoMonetizationDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "access": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "VideoPlayer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "embedHeight": {
                    "type": string;
                    "format": string;
                };
                "embedHtml": {
                    "type": string;
                    "description": string;
                };
                "embedWidth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoProcessingDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "editorSuggestionsAvailability": {
                    "type": string;
                    "description": string;
                };
                "fileDetailsAvailability": {
                    "type": string;
                    "description": string;
                };
                "processingFailureReason": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "processingIssuesAvailability": {
                    "type": string;
                    "description": string;
                };
                "processingProgress": {
                    "$ref": string;
                    "description": string;
                };
                "processingStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "tagSuggestionsAvailability": {
                    "type": string;
                    "description": string;
                };
                "thumbnailsAvailability": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoProcessingDetailsProcessingProgress": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "partsProcessed": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "partsTotal": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeLeftMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoProjectDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "tags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "VideoRating": {
            "id": string;
            "type": string;
            "properties": {
                "rating": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "videoId": {
                    "type": string;
                };
            };
        };
        "VideoRecordingDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "location": {
                    "$ref": string;
                    "description": string;
                };
                "locationDescription": {
                    "type": string;
                    "description": string;
                };
                "recordingDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoSnippet": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "categoryId": {
                    "type": string;
                    "description": string;
                };
                "channelId": {
                    "type": string;
                    "description": string;
                };
                "channelTitle": {
                    "type": string;
                    "description": string;
                };
                "defaultAudioLanguage": {
                    "type": string;
                    "description": string;
                };
                "defaultLanguage": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "liveBroadcastContent": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "localized": {
                    "$ref": string;
                    "description": string;
                };
                "publishedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "thumbnails": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoStatistics": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "commentCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dislikeCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "favoriteCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "likeCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "viewCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "embeddable": {
                    "type": string;
                    "description": string;
                };
                "failureReason": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "license": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "privacyStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "publicStatsViewable": {
                    "type": string;
                    "description": string;
                };
                "publishAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rejectionReason": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "uploadStatus": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "VideoSuggestions": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "editorSuggestions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "processingErrors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "processingHints": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "processingWarnings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "tagSuggestions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VideoSuggestionsTagSuggestion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "categoryRestricts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "tag": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VideoTopicDetails": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "relevantTopicIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "topicCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "topicIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "WatchSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "backgroundColor": {
                    "type": string;
                    "description": string;
                };
                "featuredPlaylistId": {
                    "type": string;
                    "description": string;
                };
                "textColor": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "activities": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "home": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "publishedAfter": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "publishedBefore": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "regionCode": {
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
        "captions": {
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
                        "onBehalfOf": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "download": {
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
                        "onBehalfOf": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tfmt": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "tlang": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOf": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sync": {
                            "type": string;
                            "description": string;
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
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOf": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "videoId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOf": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sync": {
                            "type": string;
                            "description": string;
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
        "channelBanners": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
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
        "channelSections": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "channels": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "categoryId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "forUsername": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "managedByMe": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "mySubscribers": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "commentThreads": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "allThreadsRelatedToChannelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "moderationStatus": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "order": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "searchTerms": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "textFormat": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
        "comments": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "parentId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "textFormat": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                "markAsSpam": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "setModerationStatus": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "banAuthor": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "moderationStatus": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
        "guideCategories": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "regionCode": {
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
        "i18nLanguages": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "part": {
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
        "i18nRegions": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "part": {
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
        "liveBroadcasts": {
            "methods": {
                "bind": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "streamId": {
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
                "control": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "displaySlate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "offsetTimeMs": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "walltime": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                        "broadcastStatus": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "broadcastType": {
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
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "transition": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "broadcastStatus": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "liveChatBans": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
        "liveChatMessages": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "liveChatId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "profileImageSize": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
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
        "liveChatModerators": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "liveChatId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "part": {
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
        "liveStreams": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "playlistItems": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "playlistId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "videoId": {
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
                    "supportsSubscription": boolean;
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "playlists": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "search": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "channelType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "eventType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "forContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "forDeveloper": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "forMine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "location": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "locationRadius": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "order": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "publishedAfter": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "publishedBefore": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "regionCode": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "relatedToVideoId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "relevanceLanguage": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "safeSearch": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "topicId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "videoCaption": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoCategoryId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "videoDefinition": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoDimension": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoDuration": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoEmbeddable": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoLicense": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoSyndicated": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "videoType": {
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
            };
        };
        "sponsors": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "filter": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "part": {
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
        "subscriptions": {
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
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "part": {
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
                        "channelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "forChannelId": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "mine": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "myRecentSubscribers": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "mySubscribers": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "order": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "superChatEvents": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                        "part": {
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
        "thumbnails": {
            "methods": {
                "set": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "videoId": {
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
        "videoAbuseReportReasons": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "part": {
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
        "videoCategories": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hl": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "regionCode": {
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
        "videos": {
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
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "getRating": {
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
                        "onBehalfOfContentOwner": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "autoLevels": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "notifySubscribers": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "onBehalfOfContentOwnerChannel": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "stabilize": {
                            "type": string;
                            "description": string;
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
                        "chart": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "hl": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "locale": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxHeight": {
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
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "maxWidth": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "myRating": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "regionCode": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "videoCategoryId": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "rate": {
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
                        "rating": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "reportAbuse": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
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
                    "parameters": {
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "part": {
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
        "watermarks": {
            "methods": {
                "set": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "channelId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
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
                "unset": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "channelId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "onBehalfOfContentOwner": {
                            "type": string;
                            "description": string;
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
export default _default;
//# sourceMappingURL=youtube-v3.d.ts.map