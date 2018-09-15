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
                "https://www.googleapis.com/auth/ddmconversions": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/dfareporting": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/dfatrafficking": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Account": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountPermissionIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "accountProfile": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "activeAdsLimitTier": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "activeViewOptOut": {
                    "type": string;
                    "description": string;
                };
                "availablePermissionIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "countryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "defaultCreativeSizeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "locale": {
                    "type": string;
                    "description": string;
                };
                "maximumImageSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "nielsenOcrEnabled": {
                    "type": string;
                    "description": string;
                };
                "reportsConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "shareReportsWithTwitter": {
                    "type": string;
                    "description": string;
                };
                "teaserSizeLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountActiveAdSummary": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "activeAds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "activeAdsLimitTier": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "availableAds": {
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
        "AccountPermission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountProfiles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "level": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "permissionGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountPermissionGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
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
            };
        };
        "AccountPermissionGroupsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountPermissionGroups": {
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
            };
        };
        "AccountPermissionsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountPermissions": {
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
            };
        };
        "AccountUserProfile": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "advertiserFilter": {
                    "$ref": string;
                    "description": string;
                };
                "campaignFilter": {
                    "$ref": string;
                    "description": string;
                };
                "comments": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "locale": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "siteFilter": {
                    "$ref": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "traffickerType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "userAccessType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "userRoleFilter": {
                    "$ref": string;
                    "description": string;
                };
                "userRoleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountUserProfilesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountUserProfiles": {
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
        "AccountsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accounts": {
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
        "Activities": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "filters": {
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
                "metricNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Ad": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "audienceSegmentId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "campaignId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "campaignIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "clickThroughUrl": {
                    "$ref": string;
                    "description": string;
                };
                "clickThroughUrlSuffixProperties": {
                    "$ref": string;
                    "description": string;
                };
                "comments": {
                    "type": string;
                    "description": string;
                };
                "compatibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "createInfo": {
                    "$ref": string;
                    "description": string;
                };
                "creativeGroupAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeRotation": {
                    "$ref": string;
                    "description": string;
                };
                "dayPartTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "defaultClickThroughEventTagProperties": {
                    "$ref": string;
                    "description": string;
                };
                "deliverySchedule": {
                    "$ref": string;
                    "description": string;
                };
                "dynamicClickTracker": {
                    "type": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "eventTagOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "geoTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "keyValueTargetingExpression": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languageTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "placementAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "remarketingListExpression": {
                    "$ref": string;
                    "description": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "sslRequired": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetingTemplateId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "technologyTargeting": {
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
        "AdBlockingConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickThroughUrl": {
                    "type": string;
                    "description": string;
                };
                "creativeBundleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "overrideClickThroughUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AdSlot": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "comment": {
                    "type": string;
                    "description": string;
                };
                "compatibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "linkedPlacementId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "paymentSourceType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "primary": {
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
        "AdsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ads": {
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
        "Advertiser": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "clickThroughUrlSuffix": {
                    "type": string;
                    "description": string;
                };
                "defaultClickThroughEventTagId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "defaultEmail": {
                    "type": string;
                    "description": string;
                };
                "floodlightConfigurationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightConfigurationIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
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
                "originalFloodlightConfigurationId": {
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
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "suspended": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AdvertiserGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
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
            };
        };
        "AdvertiserGroupsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "advertiserGroups": {
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
        "AdvertisersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "advertisers": {
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
        "AudienceSegment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allocation": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AudienceSegmentGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "audienceSegments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Browser": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "browserVersionId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "majorVersion": {
                    "type": string;
                    "description": string;
                };
                "minorVersion": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "BrowsersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "browsers": {
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
            };
        };
        "Campaign": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "adBlockingConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "additionalCreativeOptimizationConfigurations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "advertiserGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "audienceSegmentGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "billingInvoiceCode": {
                    "type": string;
                    "description": string;
                };
                "clickThroughUrlSuffixProperties": {
                    "$ref": string;
                    "description": string;
                };
                "comment": {
                    "type": string;
                    "description": string;
                };
                "createInfo": {
                    "$ref": string;
                    "description": string;
                };
                "creativeGroupIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "creativeOptimizationConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "defaultClickThroughEventTagProperties": {
                    "$ref": string;
                    "description": string;
                };
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "eventTagOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "externalId": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "lookbackConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "nielsenOcrEnabled": {
                    "type": string;
                    "description": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "traffickerEmails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "CampaignCreativeAssociation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeId": {
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
        "CampaignCreativeAssociationsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "campaignCreativeAssociations": {
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
        "CampaignsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "campaigns": {
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
        "ChangeLog": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "action": {
                    "type": string;
                    "description": string;
                };
                "changeTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "fieldName": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newValue": {
                    "type": string;
                    "description": string;
                };
                "objectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "objectType": {
                    "type": string;
                    "description": string;
                };
                "oldValue": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "transactionId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userProfileId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "userProfileName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ChangeLogsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "changeLogs": {
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
        "CitiesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cities": {
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
            };
        };
        "City": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "countryDartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "metroCode": {
                    "type": string;
                    "description": string;
                };
                "metroDmaId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "regionCode": {
                    "type": string;
                    "description": string;
                };
                "regionDartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ClickTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "eventName": {
                    "type": string;
                    "description": string;
                };
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
        "ClickThroughUrl": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "computedClickThroughUrl": {
                    "type": string;
                    "description": string;
                };
                "customClickThroughUrl": {
                    "type": string;
                    "description": string;
                };
                "defaultLandingPage": {
                    "type": string;
                    "description": string;
                };
                "landingPageId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ClickThroughUrlSuffixProperties": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickThroughUrlSuffix": {
                    "type": string;
                    "description": string;
                };
                "overrideInheritedSuffix": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CompanionClickThroughOverride": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickThroughUrl": {
                    "$ref": string;
                    "description": string;
                };
                "creativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CompanionSetting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "companionsDisabled": {
                    "type": string;
                    "description": string;
                };
                "enabledSizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imageOnly": {
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
        "CompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "crossDimensionReachReportCompatibleFields": {
                    "$ref": string;
                    "description": string;
                };
                "floodlightReportCompatibleFields": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "pathToConversionReportCompatibleFields": {
                    "$ref": string;
                    "description": string;
                };
                "reachReportCompatibleFields": {
                    "$ref": string;
                    "description": string;
                };
                "reportCompatibleFields": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ConnectionType": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
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
            };
        };
        "ConnectionTypesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "connectionTypes": {
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
            };
        };
        "ContentCategoriesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentCategories": {
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
        "ContentCategory": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
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
            };
        };
        "Conversion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "childDirectedTreatment": {
                    "type": string;
                    "description": string;
                };
                "customVariables": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "encryptedUserId": {
                    "type": string;
                    "description": string;
                };
                "encryptedUserIdCandidates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "floodlightActivityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightConfigurationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "gclid": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "limitAdTracking": {
                    "type": string;
                    "description": string;
                };
                "mobileDeviceId": {
                    "type": string;
                    "description": string;
                };
                "ordinal": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timestampMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ConversionError": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ConversionStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "conversion": {
                    "$ref": string;
                    "description": string;
                };
                "errors": {
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
            };
        };
        "ConversionsBatchInsertRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "conversions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "encryptionInfo": {
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
        "ConversionsBatchInsertResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hasFailures": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ConversionsBatchUpdateRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "conversions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "encryptionInfo": {
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
        "ConversionsBatchUpdateResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "hasFailures": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CountriesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countries": {
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
            };
        };
        "Country": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "dartId": {
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
                "sslEnabled": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Creative": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "adParameters": {
                    "type": string;
                    "description": string;
                };
                "adTagKeys": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "allowScriptAccess": {
                    "type": string;
                    "description": string;
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "artworkType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "authoringSource": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "authoringTool": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "autoAdvanceImages": {
                    "type": string;
                    "description": string;
                };
                "backgroundColor": {
                    "type": string;
                    "description": string;
                };
                "backupImageClickThroughUrl": {
                    "type": string;
                    "description": string;
                };
                "backupImageFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "backupImageReportingLabel": {
                    "type": string;
                    "description": string;
                };
                "backupImageTargetWindow": {
                    "$ref": string;
                    "description": string;
                };
                "clickTags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "commercialId": {
                    "type": string;
                    "description": string;
                };
                "companionCreatives": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "compatibility": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "convertFlashToHtml5": {
                    "type": string;
                    "description": string;
                };
                "counterCustomEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeAssetSelection": {
                    "$ref": string;
                    "description": string;
                };
                "creativeAssets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeFieldAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customKeyValues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "dynamicAssetSelection": {
                    "type": string;
                    "description": string;
                };
                "exitCustomEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fsCommand": {
                    "$ref": string;
                    "description": string;
                };
                "htmlCode": {
                    "type": string;
                    "description": string;
                };
                "htmlCodeLocked": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "latestTraffickedCreativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "overrideCss": {
                    "type": string;
                    "description": string;
                };
                "progressOffset": {
                    "$ref": string;
                    "description": string;
                };
                "redirectUrl": {
                    "type": string;
                    "description": string;
                };
                "renderingId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "renderingIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "requiredFlashPluginVersion": {
                    "type": string;
                    "description": string;
                };
                "requiredFlashVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "skipOffset": {
                    "$ref": string;
                    "description": string;
                };
                "skippable": {
                    "type": string;
                    "description": string;
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "sslOverride": {
                    "type": string;
                    "description": string;
                };
                "studioAdvertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "studioCreativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "studioTraffickedCreativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "thirdPartyBackupImageImpressionsUrl": {
                    "type": string;
                    "description": string;
                };
                "thirdPartyRichMediaImpressionsUrl": {
                    "type": string;
                    "description": string;
                };
                "thirdPartyUrls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timerCustomEvents": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "totalFileSize": {
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
                "universalAdId": {
                    "$ref": string;
                    "description": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoDescription": {
                    "type": string;
                    "description": string;
                };
                "videoDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CreativeAsset": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "actionScript3": {
                    "type": string;
                    "description": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "alignment": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "artworkType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "assetIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "backupImageExit": {
                    "$ref": string;
                    "description": string;
                };
                "bitRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "childAssetType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "collapsedSize": {
                    "$ref": string;
                    "description": string;
                };
                "companionCreativeIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "customStartTimeValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "detectedFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "displayType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "duration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "durationType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "expandedDimension": {
                    "$ref": string;
                    "description": string;
                };
                "fileSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "flashVersion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hideFlashObjects": {
                    "type": string;
                    "description": string;
                };
                "hideSelectionBoxes": {
                    "type": string;
                    "description": string;
                };
                "horizontallyLocked": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "offset": {
                    "$ref": string;
                    "description": string;
                };
                "originalBackup": {
                    "type": string;
                    "description": string;
                };
                "position": {
                    "$ref": string;
                    "description": string;
                };
                "positionLeftUnit": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "positionTopUnit": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "progressiveServingUrl": {
                    "type": string;
                    "description": string;
                };
                "pushdown": {
                    "type": string;
                    "description": string;
                };
                "pushdownDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "role": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "startTimeType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "streamingServingUrl": {
                    "type": string;
                    "description": string;
                };
                "transparency": {
                    "type": string;
                    "description": string;
                };
                "verticallyLocked": {
                    "type": string;
                    "description": string;
                };
                "videoDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "windowMode": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "zIndex": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "zipFilename": {
                    "type": string;
                    "description": string;
                };
                "zipFilesize": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreativeAssetId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
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
        "CreativeAssetMetadata": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "assetIdentifier": {
                    "$ref": string;
                    "description": string;
                };
                "clickTags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "detectedFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "warnedValidationRules": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
            };
        };
        "CreativeAssetSelection": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "defaultAssetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rules": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CreativeAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "active": {
                    "type": string;
                    "description": string;
                };
                "applyEventTags": {
                    "type": string;
                    "description": string;
                };
                "clickThroughUrl": {
                    "$ref": string;
                    "description": string;
                };
                "companionCreativeOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeGroupAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creativeIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "endTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "richMediaExitOverrides": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sequence": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "startTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "weight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CreativeCustomEvent": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "advertiserCustomEventId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserCustomEventName": {
                    "type": string;
                    "description": string;
                };
                "advertiserCustomEventType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "artworkLabel": {
                    "type": string;
                    "description": string;
                };
                "artworkType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "exitUrl": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "popupWindowProperties": {
                    "$ref": string;
                    "description": string;
                };
                "targetType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "videoReportingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreativeField": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
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
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CreativeFieldAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeFieldId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creativeFieldValueId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CreativeFieldValue": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreativeFieldValuesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeFieldValues": {
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
        "CreativeFieldsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeFields": {
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
        "CreativeGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "groupNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
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
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "CreativeGroupAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creativeGroupNumber": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "CreativeGroupsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeGroups": {
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
        "CreativeOptimizationConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "optimizationActivitys": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "optimizationModel": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "CreativeRotation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creativeAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeOptimizationConfigurationId": {
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
                "weightCalculationStrategy": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "CreativeSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "iFrameFooter": {
                    "type": string;
                    "description": string;
                };
                "iFrameHeader": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreativesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creatives": {
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
        "CrossDimensionReachReportCompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "breakdown": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dimensionFilters": {
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
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "overlapMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CustomFloodlightVariable": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CustomRichMediaEvents": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "filteredEventIds": {
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
            };
        };
        "DateRange": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "relativeDateRange": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DayPartTargeting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "daysOfWeek": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "hoursOfDay": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "userLocalTime": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DefaultClickThroughEventTagProperties": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "defaultClickThroughEventTagId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "overrideInheritedEventTag": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DeliverySchedule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "frequencyCap": {
                    "$ref": string;
                    "description": string;
                };
                "hardCutoff": {
                    "type": string;
                    "description": string;
                };
                "impressionRatio": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "priority": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DfpSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dfpNetworkCode": {
                    "type": string;
                    "description": string;
                };
                "dfpNetworkName": {
                    "type": string;
                    "description": string;
                };
                "programmaticPlacementAccepted": {
                    "type": string;
                    "description": string;
                };
                "pubPaidPlacementAccepted": {
                    "type": string;
                    "description": string;
                };
                "publisherPortalOnly": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Dimension": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DimensionFilter": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionName": {
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
                };
            };
        };
        "DimensionValue": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionName": {
                    "type": string;
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
                "matchType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DimensionValueList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
            };
        };
        "DimensionValueRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "filters": {
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
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "DirectorySite": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "active": {
                    "type": string;
                    "description": string;
                };
                "contactAssignments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "countryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "inpageTagFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "interstitialTagFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
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
                "parentId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "settings": {
                    "$ref": string;
                    "description": string;
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DirectorySiteContact": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "firstName": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastName": {
                    "type": string;
                    "description": string;
                };
                "phone": {
                    "type": string;
                    "description": string;
                };
                "role": {
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
        "DirectorySiteContactAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contactId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "visibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DirectorySiteContactsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "directorySiteContacts": {
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
        "DirectorySiteSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activeViewOptOut": {
                    "type": string;
                    "description": string;
                };
                "dfpSettings": {
                    "$ref": string;
                    "description": string;
                };
                "instreamVideoPlacementAccepted": {
                    "type": string;
                    "description": string;
                };
                "interstitialPlacementAccepted": {
                    "type": string;
                    "description": string;
                };
                "nielsenOcrOptOut": {
                    "type": string;
                    "description": string;
                };
                "verificationTagOptOut": {
                    "type": string;
                    "description": string;
                };
                "videoActiveViewOptOut": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DirectorySitesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "directorySites": {
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
        "DynamicTargetingKey": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "objectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "objectType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "DynamicTargetingKeysListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dynamicTargetingKeys": {
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
            };
        };
        "EncryptionInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "encryptionEntityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "encryptionEntityType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "encryptionSource": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "EventTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "campaignId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "campaignIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "enabledByDefault": {
                    "type": string;
                    "description": string;
                };
                "excludeFromAdxRequests": {
                    "type": string;
                    "description": string;
                };
                "id": {
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
                "siteFilterType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "siteIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "subaccountId": {
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
                "url": {
                    "type": string;
                    "description": string;
                };
                "urlEscapeLevels": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EventTagOverride": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EventTagsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "eventTags": {
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
            };
        };
        "File": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dateRange": {
                    "$ref": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fileName": {
                    "type": string;
                    "description": string;
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reportId": {
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
                "urls": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "apiUrl": {
                            "type": string;
                            "description": string;
                        };
                        "browserUrl": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "FileList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
            };
        };
        "Flight": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rateOrCost": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "units": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "FloodlightActivitiesGenerateTagResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightActivityTag": {
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
        "FloodlightActivitiesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightActivities": {
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
        "FloodlightActivity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "cacheBustingType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "countingMethod": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "defaultTags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "expectedUrl": {
                    "type": string;
                    "description": string;
                };
                "floodlightActivityGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightActivityGroupName": {
                    "type": string;
                    "description": string;
                };
                "floodlightActivityGroupTagString": {
                    "type": string;
                    "description": string;
                };
                "floodlightActivityGroupType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "floodlightConfigurationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightConfigurationIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "hidden": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "imageTagEnabled": {
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
                "notes": {
                    "type": string;
                    "description": string;
                };
                "publisherTags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "secure": {
                    "type": string;
                    "description": string;
                };
                "sslCompliant": {
                    "type": string;
                    "description": string;
                };
                "sslRequired": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagFormat": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "tagString": {
                    "type": string;
                    "description": string;
                };
                "userDefinedVariableTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
            };
        };
        "FloodlightActivityDynamicTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "tag": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FloodlightActivityGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "floodlightConfigurationId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightConfigurationIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
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
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagString": {
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
        "FloodlightActivityGroupsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightActivityGroups": {
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
        "FloodlightActivityPublisherDynamicTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickThrough": {
                    "type": string;
                    "description": string;
                };
                "directorySiteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dynamicTag": {
                    "$ref": string;
                    "description": string;
                };
                "siteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "siteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "viewThrough": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FloodlightConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "analyticsDataSharingEnabled": {
                    "type": string;
                    "description": string;
                };
                "exposureToConversionEnabled": {
                    "type": string;
                    "description": string;
                };
                "firstDayOfWeek": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "inAppAttributionTrackingEnabled": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lookbackConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "naturalSearchConversionAttributionOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "omnitureSettings": {
                    "$ref": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagSettings": {
                    "$ref": string;
                    "description": string;
                };
                "thirdPartyAuthenticationTokens": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "userDefinedVariableConfigurations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "FloodlightConfigurationsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightConfigurations": {
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
            };
        };
        "FloodlightReportCompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionFilters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dimensions": {
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
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "FrequencyCap": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "duration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "impressions": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "FsCommand": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "left": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "positionOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "top": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "windowHeight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "windowWidth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GeoTargeting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cities": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "countries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "excludeCountries": {
                    "type": string;
                    "description": string;
                };
                "metros": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "postalCodes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "regions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "InventoryItem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "adSlots": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "contentCategoryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "estimatedClickThroughRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "estimatedConversionRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inPlan": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "negotiationChannelId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "placementStrategyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricing": {
                    "$ref": string;
                    "description": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rfpId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "siteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subaccountId": {
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
        "InventoryItemsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "inventoryItems": {
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
        "KeyValueTargetingExpression": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expression": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LandingPage": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "default": {
                    "type": string;
                    "description": string;
                };
                "id": {
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
            };
        };
        "LandingPagesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "landingPages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Language": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languageCode": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LanguageTargeting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LanguagesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "LastModifiedInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "time": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ListPopulationClause": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "terms": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListPopulationRule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightActivityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightActivityName": {
                    "type": string;
                    "description": string;
                };
                "listPopulationClauses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListPopulationTerm": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contains": {
                    "type": string;
                    "description": string;
                };
                "negation": {
                    "type": string;
                    "description": string;
                };
                "operator": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "remarketingListId": {
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
                "value": {
                    "type": string;
                    "description": string;
                };
                "variableFriendlyName": {
                    "type": string;
                    "description": string;
                };
                "variableName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListTargetingExpression": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expression": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "LookbackConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "postImpressionActivitiesDuration": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Metric": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Metro": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "countryDartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dmaId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "metroCode": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MetrosListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "metros": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MobileCarrier": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "countryDartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
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
            };
        };
        "MobileCarriersListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mobileCarriers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ObjectFilter": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "objectIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "OffsetPosition": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "left": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "top": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OmnitureSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "omnitureCostDataEnabled": {
                    "type": string;
                    "description": string;
                };
                "omnitureIntegrationEnabled": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperatingSystem": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "desktop": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mobile": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OperatingSystemVersion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "majorVersion": {
                    "type": string;
                    "description": string;
                };
                "minorVersion": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "operatingSystem": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OperatingSystemVersionsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "operatingSystemVersions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OperatingSystemsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "operatingSystems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OptimizationActivity": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "floodlightActivityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "floodlightActivityIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "weight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Order": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "approverUserProfileIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "buyerInvoiceId": {
                    "type": string;
                    "description": string;
                };
                "buyerOrganizationName": {
                    "type": string;
                    "description": string;
                };
                "comments": {
                    "type": string;
                    "description": string;
                };
                "contacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "planningTermId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sellerOrderId": {
                    "type": string;
                    "description": string;
                };
                "sellerOrganizationName": {
                    "type": string;
                    "description": string;
                };
                "siteId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "siteNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "termsAndConditions": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderContact": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contactInfo": {
                    "type": string;
                    "description": string;
                };
                "contactName": {
                    "type": string;
                    "description": string;
                };
                "contactTitle": {
                    "type": string;
                    "description": string;
                };
                "contactType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "signatureUserProfileId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OrderDocument": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "amendedOrderDocumentId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "approvedByUserProfileIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "cancelled": {
                    "type": string;
                    "description": string;
                };
                "createdInfo": {
                    "$ref": string;
                    "description": string;
                };
                "effectiveDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastSentRecipients": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "lastSentTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "signed": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
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
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "OrderDocumentsListResponse": {
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
                "orderDocuments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersListResponse": {
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
                "orders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PathToConversionReportCompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "conversionDimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customFloodlightVariables": {
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
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "perInteractionDimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Placement": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "adBlockingOptOut": {
                    "type": string;
                    "description": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "campaignId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "campaignIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "comment": {
                    "type": string;
                    "description": string;
                };
                "compatibility": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "contentCategoryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "createInfo": {
                    "$ref": string;
                    "description": string;
                };
                "directorySiteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "directorySiteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "externalId": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "keyName": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "lookbackConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "paymentApproved": {
                    "type": string;
                    "description": string;
                };
                "paymentSource": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "placementGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "placementGroupIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "placementStrategyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricingSchedule": {
                    "$ref": string;
                    "description": string;
                };
                "primary": {
                    "type": string;
                    "description": string;
                };
                "publisherUpdateInfo": {
                    "$ref": string;
                    "description": string;
                };
                "siteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "siteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "sslRequired": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "tagSetting": {
                    "$ref": string;
                    "description": string;
                };
                "videoActiveViewOptOut": {
                    "type": string;
                    "description": string;
                };
                "videoSettings": {
                    "$ref": string;
                    "description": string;
                };
                "vpaidAdapterChoice": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "PlacementAssignment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "active": {
                    "type": string;
                    "description": string;
                };
                "placementId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "placementIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "sslRequired": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PlacementGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "archived": {
                    "type": string;
                    "description": string;
                };
                "campaignId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "campaignIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "childPlacementIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "comment": {
                    "type": string;
                    "description": string;
                };
                "contentCategoryId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "createInfo": {
                    "$ref": string;
                    "description": string;
                };
                "directorySiteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "directorySiteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "externalId": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "placementGroupType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "placementStrategyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricingSchedule": {
                    "$ref": string;
                    "description": string;
                };
                "primaryPlacementId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "primaryPlacementIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "siteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "siteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PlacementGroupsListResponse": {
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
                "placementGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlacementStrategiesListResponse": {
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
                "placementStrategies": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlacementStrategy": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
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
            };
        };
        "PlacementTag": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "placementId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tagDatas": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlacementsGenerateTagsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "placementTags": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlacementsListResponse": {
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
                "placements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PlatformType": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
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
            };
        };
        "PlatformTypesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "platformTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PopupWindowProperties": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimension": {
                    "$ref": string;
                    "description": string;
                };
                "offset": {
                    "$ref": string;
                    "description": string;
                };
                "positionType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "showAddressBar": {
                    "type": string;
                    "description": string;
                };
                "showMenuBar": {
                    "type": string;
                    "description": string;
                };
                "showScrollBar": {
                    "type": string;
                    "description": string;
                };
                "showStatusBar": {
                    "type": string;
                    "description": string;
                };
                "showToolBar": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PostalCode": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                };
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "countryDartId": {
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
            };
        };
        "PostalCodesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "postalCodes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Pricing": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "capCostType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "flights": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "groupType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "pricingType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PricingSchedule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "capCostOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "disregardOverdelivery": {
                    "type": string;
                    "description": string;
                };
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "flighted": {
                    "type": string;
                    "description": string;
                };
                "floodlightActivityId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricingPeriods": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pricingType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "testingStartDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PricingSchedulePricingPeriod": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricingComment": {
                    "type": string;
                    "description": string;
                };
                "rateOrCostNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "units": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Project": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "audienceAgeGroup": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "audienceGender": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "budget": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "clientBillingCode": {
                    "type": string;
                    "description": string;
                };
                "clientName": {
                    "type": string;
                    "description": string;
                };
                "endDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedInfo": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "overview": {
                    "type": string;
                    "description": string;
                };
                "startDate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetClicks": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetConversions": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetCpaNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetCpcNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetCpmActiveViewNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetCpmNanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetImpressions": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ProjectsListResponse": {
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
                "projects": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ReachReportCompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionFilters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dimensions": {
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
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pivotedActivityMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "reachByFrequencyMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Recipient": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "deliveryType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
                "email": {
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
            };
        };
        "Region": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "countryCode": {
                    "type": string;
                    "description": string;
                };
                "countryDartId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dartId": {
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
                "regionCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "RegionsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "regions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "RemarketingList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lifeSpan": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "listPopulationRule": {
                    "$ref": string;
                    "description": string;
                };
                "listSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "listSource": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RemarketingListShare": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "remarketingListId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sharedAccountIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "sharedAdvertiserIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
            };
        };
        "RemarketingListsListResponse": {
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
                "remarketingLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Report": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "criteria": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "activities": {
                            "$ref": string;
                            "description": string;
                        };
                        "customRichMediaEvents": {
                            "$ref": string;
                            "description": string;
                        };
                        "dateRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "dimensionFilters": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "metricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                    };
                };
                "crossDimensionReachCriteria": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "breakdown": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dateRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "dimension": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                        };
                        "dimensionFilters": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "metricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "overlapMetricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "pivoted": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "delivery": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "emailOwner": {
                            "type": string;
                            "description": string;
                        };
                        "emailOwnerDeliveryType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                        };
                        "message": {
                            "type": string;
                            "description": string;
                        };
                        "recipients": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "fileName": {
                    "type": string;
                    "description": string;
                };
                "floodlightCriteria": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "customRichMediaEvents": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dateRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "dimensionFilters": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "floodlightConfigId": {
                            "$ref": string;
                            "description": string;
                        };
                        "metricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "reportProperties": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "includeAttributedIPConversions": {
                                    "type": string;
                                    "description": string;
                                };
                                "includeUnattributedCookieConversions": {
                                    "type": string;
                                    "description": string;
                                };
                                "includeUnattributedIPConversions": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                    };
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastModifiedTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "ownerProfileId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "pathToConversionCriteria": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "activityFilters": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "conversionDimensions": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "customFloodlightVariables": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "customRichMediaEvents": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dateRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "floodlightConfigId": {
                            "$ref": string;
                            "description": string;
                        };
                        "metricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "perInteractionDimensions": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "reportProperties": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "clicksLookbackWindow": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "impressionsLookbackWindow": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "includeAttributedIPConversions": {
                                    "type": string;
                                    "description": string;
                                };
                                "includeUnattributedCookieConversions": {
                                    "type": string;
                                    "description": string;
                                };
                                "includeUnattributedIPConversions": {
                                    "type": string;
                                    "description": string;
                                };
                                "maximumClickInteractions": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "maximumImpressionInteractions": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "maximumInteractionGap": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                };
                                "pivotOnInteractionPath": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                        };
                    };
                };
                "reachCriteria": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "activities": {
                            "$ref": string;
                            "description": string;
                        };
                        "customRichMediaEvents": {
                            "$ref": string;
                            "description": string;
                        };
                        "dateRange": {
                            "$ref": string;
                            "description": string;
                        };
                        "dimensionFilters": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "dimensions": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "enableAllDimensionCombinations": {
                            "type": string;
                            "description": string;
                        };
                        "metricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "reachByFrequencyMetricNames": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                    };
                };
                "schedule": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "active": {
                            "type": string;
                            "description": string;
                            "annotations": {
                                "required": string[];
                            };
                        };
                        "every": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "expirationDate": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "annotations": {
                                "required": string[];
                            };
                        };
                        "repeats": {
                            "type": string;
                            "description": string;
                            "annotations": {
                                "required": string[];
                            };
                        };
                        "repeatsOnWeekDays": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "enum": string[];
                                "enumDescriptions": string[];
                            };
                        };
                        "runsOnDayOfMonth": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                        };
                        "startDate": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "annotations": {
                                "required": string[];
                            };
                        };
                    };
                };
                "subAccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "ReportCompatibleFields": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionFilters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dimensions": {
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
                "metrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pivotedActivityMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ReportList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
            };
        };
        "ReportsConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exposureToConversionEnabled": {
                    "type": string;
                    "description": string;
                };
                "lookbackConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "reportGenerationTimeZoneId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "RichMediaExitOverride": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clickThroughUrl": {
                    "$ref": string;
                    "description": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "exitId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Rule": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "assetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "targetingTemplateId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Site": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "approved": {
                    "type": string;
                    "description": string;
                };
                "directorySiteId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "directorySiteIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "keyName": {
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
                "siteContacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "siteSettings": {
                    "$ref": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SiteContact": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                };
                "contactType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "firstName": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastName": {
                    "type": string;
                    "description": string;
                };
                "phone": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SiteSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "activeViewOptOut": {
                    "type": string;
                    "description": string;
                };
                "adBlockingOptOut": {
                    "type": string;
                    "description": string;
                };
                "creativeSettings": {
                    "$ref": string;
                    "description": string;
                };
                "disableNewCookie": {
                    "type": string;
                    "description": string;
                };
                "lookbackConfiguration": {
                    "$ref": string;
                    "description": string;
                };
                "tagSetting": {
                    "$ref": string;
                    "description": string;
                };
                "videoActiveViewOptOutTemplate": {
                    "type": string;
                    "description": string;
                };
                "vpaidAdapterChoiceTemplate": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "SitesListResponse": {
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
                "sites": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Size": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "iab": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "SizesListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "sizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SkippableSetting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "progressOffset": {
                    "$ref": string;
                    "description": string;
                };
                "skipOffset": {
                    "$ref": string;
                    "description": string;
                };
                "skippable": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SortedDimension": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "sortOrder": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "Subaccount": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "availablePermissionIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "id": {
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
            };
        };
        "SubaccountsListResponse": {
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
                "subaccounts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TagData": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "adId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "clickTag": {
                    "type": string;
                    "description": string;
                };
                "creativeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "format": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "impressionTag": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TagSetting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "additionalKeyValues": {
                    "type": string;
                    "description": string;
                };
                "includeClickThroughUrls": {
                    "type": string;
                    "description": string;
                };
                "includeClickTracking": {
                    "type": string;
                    "description": string;
                };
                "keywordOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "TagSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dynamicTagEnabled": {
                    "type": string;
                    "description": string;
                };
                "imageTagEnabled": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TargetWindow": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "customHtml": {
                    "type": string;
                    "description": string;
                };
                "targetWindowOption": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "TargetableRemarketingList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "active": {
                    "type": string;
                    "description": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lifeSpan": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "listSize": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "listSource": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TargetableRemarketingListsListResponse": {
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
                "targetableRemarketingLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TargetingTemplate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "advertiserIdDimensionValue": {
                    "$ref": string;
                    "description": string;
                };
                "dayPartTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "geoTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "keyValueTargetingExpression": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languageTargeting": {
                    "$ref": string;
                    "description": string;
                };
                "listTargetingExpression": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "technologyTargeting": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TargetingTemplatesListResponse": {
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
                "targetingTemplates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TechnologyTargeting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "browsers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "connectionTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "mobileCarriers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operatingSystemVersions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operatingSystems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "platformTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ThirdPartyAuthenticationToken": {
            "id": string;
            "type": string;
            "description": string;
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
        "ThirdPartyTrackingUrl": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "thirdPartyUrlType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "url": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TranscodeSetting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "enabledVideoFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "UniversalAdId": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "registry": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserDefinedVariableConfiguration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dataType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "reportName": {
                    "type": string;
                    "description": string;
                };
                "variableType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "UserProfile": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "accountName": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "profileId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subAccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "subAccountName": {
                    "type": string;
                    "description": string;
                };
                "userName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UserProfileList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "etag": {
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
            };
        };
        "UserRole": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "defaultUserRole": {
                    "type": string;
                    "description": string;
                };
                "id": {
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
                "parentUserRoleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "permissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subaccountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "UserRolePermission": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "availability": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "id": {
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
                "permissionGroupId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "UserRolePermissionGroup": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
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
            };
        };
        "UserRolePermissionGroupsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "userRolePermissionGroups": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UserRolePermissionsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "userRolePermissions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UserRolesListResponse": {
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
                "userRoles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VideoFormat": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fileType": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "id": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "resolution": {
                    "$ref": string;
                    "description": string;
                };
                "targetBitRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoFormatsListResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "videoFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VideoOffset": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "offsetPercentage": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "offsetSeconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VideoSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "companionSettings": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "skippableSettings": {
                    "$ref": string;
                    "description": string;
                };
                "transcodeSettings": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "accountActiveAdSummaries": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "summaryAccountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "accountPermissionGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "accountPermissions": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "accountUserProfiles": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subaccountId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "userRoleId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "accounts": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "ads": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "archived": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "audienceSegmentIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "campaignIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "compatibility": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "creativeIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "creativeOptimizationConfigurationIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "dynamicClickTracker": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "landingPageIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "overriddenEventTagId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placementIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "remarketingListIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sizeIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sslCompliant": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sslRequired": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "type": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "advertiserGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "advertisers": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserGroupIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "floodlightConfigurationIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "includeAdvertisersWithoutGroupsOnly": {
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
                        "onlyParent": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "status": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subaccountId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "browsers": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "campaignCreativeAssociations": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "campaigns": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "defaultLandingPageName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "defaultLandingPageUrl": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserGroupIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "archived": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "atLeastOneOptimizationActivity": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "excludedIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "overriddenEventTagId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subaccountId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "changeLogs": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "action": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxChangeTime": {
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
                        "minChangeTime": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "objectIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "objectType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "userProfileIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
        "cities": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "countryDartIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "dartIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "namePrefix": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "regionDartIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
        "connectionTypes": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "contentCategories": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "conversions": {
            "methods": {
                "batchinsert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                "batchupdate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "countries": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dartId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "creativeAssets": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "creativeFieldValues": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "creativeFieldId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "creativeFields": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "creativeGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "groupNumber": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "creatives": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "archived": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "companionCreativeIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "creativeFieldIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "renderingIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sizeIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "studioCreativeId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "types": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "dimensionValues": {
            "methods": {
                "query": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "directorySiteContacts": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "directorySiteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "directorySites": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "acceptsInStreamVideoPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "acceptsInterstitialPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "acceptsPublisherPaidPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "countryId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "dfpNetworkCode": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "dynamicTargetingKeys": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "name": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "objectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "objectType": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "profileId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "names": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "objectId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "objectType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "eventTags": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "adId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "definitionsOnly": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "enabled": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "eventTagTypes": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "files": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "fileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "scope": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "floodlightActivities": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                "generatetag": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "floodlightActivityId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "floodlightActivityGroupIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "floodlightActivityGroupName": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "floodlightActivityGroupTagString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "floodlightActivityGroupType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "floodlightConfigurationId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "tagString": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "floodlightActivityGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "floodlightConfigurationId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "type": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "floodlightConfigurations": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "inventoryItems": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "inPlan": {
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
                        "orderId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "siteId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "type": {
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
        "landingPages": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "languages": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "metros": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "mobileCarriers": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "operatingSystemVersions": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "operatingSystems": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "dartId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "orderDocuments": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "approved": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "orderId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "siteId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "orders": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "projectId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "siteId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "placementGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "archived": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "campaignIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "contentCategoryIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "directorySiteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxEndDate": {
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
                        "maxStartDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "minEndDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "minStartDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placementGroupType": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "placementStrategyIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "pricingTypes": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "siteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "placementStrategies": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "placements": {
            "methods": {
                "generatetags": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "campaignId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "placementIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "tagFormats": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
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
                        "id": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "archived": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "campaignIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "compatibilities": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "contentCategoryIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "directorySiteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "groupIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "maxEndDate": {
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
                        "maxStartDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "minEndDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "minStartDate": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "paymentSource": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "placementStrategyIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "pricingTypes": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "siteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sizeIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "platformTypes": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "postalCodes": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "code": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "projects": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "advertiserIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "regions": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "remarketingListShares": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "remarketingListId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "remarketingListId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "remarketingLists": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "floodlightActivityId": {
                            "type": string;
                            "description": string;
                            "format": string;
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
                        "name": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "reports": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
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
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "scope": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                "run": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "synchronous": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "reportId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                "compatibleFields": {
                    "methods": {
                        "query": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "profileId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
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
                "files": {
                    "methods": {
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "fileId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "profileId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "reportId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                            };
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "supportsMediaDownload": boolean;
                        };
                        "list": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
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
                                "profileId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "reportId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "format": string;
                                    "location": string;
                                };
                                "sortField": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                    "enum": string[];
                                    "enumDescriptions": string[];
                                    "location": string;
                                };
                                "sortOrder": {
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
                    };
                };
            };
        };
        "sites": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "acceptsInStreamVideoPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "acceptsInterstitialPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "acceptsPublisherPaidPlacements": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "adWordsSite": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "approved": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "campaignIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "directorySiteIds": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subaccountId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "unmappedSite": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "sizes": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "height": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "iabStandard": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "width": {
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
        "subaccounts": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "targetableRemarketingLists": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "active": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "name": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
            };
        };
        "targetingTemplates": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "advertiserId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "userProfiles": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "userRolePermissionGroups": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "userRolePermissions": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
        "userRoles": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "accountUserRoleOnly": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "ids": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "searchString": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sortField": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "sortOrder": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "subaccountId": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
        "videoFormats": {
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
                            "format": string;
                            "location": string;
                        };
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "profileId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
            };
        };
    };
};
export default _default;
//# sourceMappingURL=dfareporting-v2~8.d.ts.map