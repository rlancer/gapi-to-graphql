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
                "https://www.googleapis.com/auth/adexchange.buyer": {
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
                "applyPretargetingToNonGuaranteedDeals": {
                    "type": string;
                    "description": string;
                };
                "bidderLocation": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "bidProtocol": {
                                "type": string;
                                "description": string;
                            };
                            "maximumQps": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "region": {
                                "type": string;
                                "description": string;
                            };
                            "url": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "cookieMatchingNid": {
                    "type": string;
                    "description": string;
                };
                "cookieMatchingUrl": {
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
                "maximumActiveCreatives": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maximumTotalQps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numberActiveCreatives": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AccountsList": {
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
            };
        };
        "AddOrderDealsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updateAction": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AddOrderDealsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AddOrderNotesRequest": {
            "id": string;
            "type": string;
            "properties": {
                "notes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AddOrderNotesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "notes": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "BillingInfo": {
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
                "billingId": {
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
        "BillingInfoList": {
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
            };
        };
        "Budget": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "billingId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "budgetAmount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
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
            };
        };
        "Buyer": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ContactInformation": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreateOrdersRequest": {
            "id": string;
            "type": string;
            "properties": {
                "proposals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "webPropertyCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreateOrdersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "proposals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Creative": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "HTMLSnippet": {
                    "type": string;
                    "description": string;
                };
                "accountId": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "adChoicesDestinationUrl": {
                    "type": string;
                    "description": string;
                };
                "advertiserId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "advertiserName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "agencyId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "apiUploadTimestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "attribute": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "buyerCreativeId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "clickThroughUrl": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "corrections": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "contexts": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "auctionType": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                        "contextType": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "geoCriteriaId": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                                "format": string;
                                            };
                                        };
                                        "platform": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                    };
                                };
                            };
                            "details": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                            };
                            "reason": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "creativeStatusIdentityType": {
                    "type": string;
                    "description": string;
                };
                "dealsStatus": {
                    "type": string;
                    "description": string;
                };
                "detectedDomains": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "filteringReasons": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "date": {
                            "type": string;
                            "description": string;
                        };
                        "reasons": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "filteringCount": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                    "filteringStatus": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                };
                            };
                        };
                    };
                };
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "impressionTrackingUrl": {
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
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "nativeAd": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "advertiser": {
                            "type": string;
                        };
                        "appIcon": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "body": {
                            "type": string;
                            "description": string;
                        };
                        "callToAction": {
                            "type": string;
                            "description": string;
                        };
                        "clickLinkUrl": {
                            "type": string;
                            "description": string;
                        };
                        "clickTrackingUrl": {
                            "type": string;
                            "description": string;
                        };
                        "headline": {
                            "type": string;
                            "description": string;
                        };
                        "image": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "impressionTrackingUrl": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                            };
                        };
                        "logo": {
                            "type": string;
                            "description": string;
                            "properties": {
                                "height": {
                                    "type": string;
                                    "format": string;
                                };
                                "url": {
                                    "type": string;
                                };
                                "width": {
                                    "type": string;
                                    "format": string;
                                };
                            };
                        };
                        "price": {
                            "type": string;
                            "description": string;
                        };
                        "starRating": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "store": {
                            "type": string;
                            "description": string;
                        };
                        "videoURL": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "openAuctionStatus": {
                    "type": string;
                    "description": string;
                };
                "productCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "restrictedCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "sensitiveCategories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "servingRestrictions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "contexts": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "auctionType": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                        "contextType": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "geoCriteriaId": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                                "format": string;
                                            };
                                        };
                                        "platform": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                    };
                                };
                            };
                            "disapprovalReasons": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "details": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                            };
                                        };
                                        "reason": {
                                            "type": string;
                                            "description": string;
                                        };
                                    };
                                };
                            };
                            "reason": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "vendorType": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "videoURL": {
                    "type": string;
                    "description": string;
                };
                "videoVastXML": {
                    "type": string;
                    "description": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "CreativeDealIds": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dealStatuses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "arcStatus": {
                                "type": string;
                                "description": string;
                            };
                            "dealId": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "webPropertyId": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
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
        "CreativesList": {
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
        "DealServingMetadata": {
            "id": string;
            "type": string;
            "properties": {
                "alcoholAdsAllowed": {
                    "type": string;
                    "description": string;
                };
                "dealPauseStatus": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DealServingMetadataDealPauseStatus": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buyerPauseReason": {
                    "type": string;
                };
                "firstPausedBy": {
                    "type": string;
                    "description": string;
                };
                "hasBuyerPaused": {
                    "type": string;
                };
                "hasSellerPaused": {
                    "type": string;
                };
                "sellerPauseReason": {
                    "type": string;
                };
            };
        };
        "DealTerms": {
            "id": string;
            "type": string;
            "properties": {
                "brandingType": {
                    "type": string;
                    "description": string;
                };
                "crossListedExternalDealIdType": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "estimatedGrossSpend": {
                    "$ref": string;
                    "description": string;
                };
                "estimatedImpressionsPerDay": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "guaranteedFixedPriceTerms": {
                    "$ref": string;
                    "description": string;
                };
                "nonGuaranteedAuctionTerms": {
                    "$ref": string;
                    "description": string;
                };
                "nonGuaranteedFixedPriceTerms": {
                    "$ref": string;
                    "description": string;
                };
                "rubiconNonGuaranteedTerms": {
                    "$ref": string;
                    "description": string;
                };
                "sellerTimeZone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DealTermsGuaranteedFixedPriceTerms": {
            "id": string;
            "type": string;
            "properties": {
                "billingInfo": {
                    "$ref": string;
                    "description": string;
                };
                "fixedPrices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "guaranteedImpressions": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "guaranteedLooks": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "minimumDailyLooks": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DealTermsGuaranteedFixedPriceTermsBillingInfo": {
            "id": string;
            "type": string;
            "properties": {
                "currencyConversionTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dfpLineItemId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "originalContractedQuantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DealTermsNonGuaranteedAuctionTerms": {
            "id": string;
            "type": string;
            "properties": {
                "autoOptimizePrivateAuction": {
                    "type": string;
                    "description": string;
                };
                "reservePricePerBuyers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DealTermsNonGuaranteedFixedPriceTerms": {
            "id": string;
            "type": string;
            "properties": {
                "fixedPrices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DealTermsRubiconNonGuaranteedTerms": {
            "id": string;
            "type": string;
            "properties": {
                "priorityPrice": {
                    "$ref": string;
                    "description": string;
                };
                "standardPrice": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "DeleteOrderDealsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "dealIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updateAction": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "DeleteOrderDealsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "DeliveryControl": {
            "id": string;
            "type": string;
            "properties": {
                "creativeBlockingLevel": {
                    "type": string;
                };
                "deliveryRateType": {
                    "type": string;
                };
                "frequencyCaps": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DeliveryControlFrequencyCap": {
            "id": string;
            "type": string;
            "properties": {
                "maxImpressions": {
                    "type": string;
                    "format": string;
                };
                "numTimeUnits": {
                    "type": string;
                    "format": string;
                };
                "timeUnitType": {
                    "type": string;
                };
            };
        };
        "Dimension": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensionType": {
                    "type": string;
                };
                "dimensionValues": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DimensionDimensionValue": {
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
                "percentage": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "EditAllOrderDealsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "proposal": {
                    "$ref": string;
                    "description": string;
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updateAction": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EditAllOrderDealsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "orderRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GetOffersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "products": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetOrderDealsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "deals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetOrderNotesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "notes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetOrdersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "proposals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetPublisherProfilesByAccountIdResponse": {
            "id": string;
            "type": string;
            "properties": {
                "profiles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MarketplaceDeal": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buyerPrivateData": {
                    "$ref": string;
                    "description": string;
                };
                "creationTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creativePreApprovalPolicy": {
                    "type": string;
                    "description": string;
                };
                "creativeSafeFrameCompatibility": {
                    "type": string;
                    "description": string;
                };
                "dealId": {
                    "type": string;
                    "description": string;
                };
                "dealServingMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "deliveryControl": {
                    "$ref": string;
                    "description": string;
                };
                "externalDealId": {
                    "type": string;
                    "description": string;
                };
                "flightEndTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "flightStartTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "inventoryDescription": {
                    "type": string;
                    "description": string;
                };
                "isRfpTemplate": {
                    "type": string;
                    "description": string;
                };
                "isSetupComplete": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lastUpdateTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "productRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "programmaticCreativeSource": {
                    "type": string;
                    "description": string;
                };
                "proposalId": {
                    "type": string;
                };
                "sellerContacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sharedTargetings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "syndicationProduct": {
                    "type": string;
                    "description": string;
                };
                "terms": {
                    "$ref": string;
                    "description": string;
                };
                "webPropertyCode": {
                    "type": string;
                };
            };
        };
        "MarketplaceDealParty": {
            "id": string;
            "type": string;
            "properties": {
                "buyer": {
                    "$ref": string;
                    "description": string;
                };
                "seller": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "MarketplaceLabel": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "createTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deprecatedMarketplaceDealParty": {
                    "$ref": string;
                    "description": string;
                };
                "label": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "MarketplaceNote": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creatorRole": {
                    "type": string;
                    "description": string;
                };
                "dealId": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "note": {
                    "type": string;
                    "description": string;
                };
                "noteId": {
                    "type": string;
                    "description": string;
                };
                "proposalId": {
                    "type": string;
                    "description": string;
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timestampMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PerformanceReport": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "bidRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "bidRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "calloutStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "cookieMatcherStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "creativeStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "filteredBidRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hostedMatchStatusRate": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "inventoryMatchRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "latency50thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latency85thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "latency95thPercentile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "noQuotaInRegion": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "outOfQuota": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pixelMatchRequests": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pixelMatchResponses": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaConfiguredLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quotaThrottledLimit": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "successfulRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timestamp": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "unsuccessfulRequestRate": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PerformanceReportList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "performanceReport": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PretargetingConfig": {
            "id": string;
            "type": string;
            "properties": {
                "billingId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "configId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "configName": {
                    "type": string;
                    "description": string;
                };
                "creativeType": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "dimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "height": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "width": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
                "excludedContentLabels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedGeoCriteriaIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedPlacements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "token": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "excludedUserLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "excludedVerticals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "geoCriteriaIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "isActive": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "languages": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "minimumViewabilityDecile": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "mobileCarriers": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "mobileDevices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "mobileOperatingSystemVersions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "placements": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "token": {
                                "type": string;
                                "description": string;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "platforms": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "supportedCreativeAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "userIdentifierDataRequired": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "userLists": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "vendorTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "verticals": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "videoPlayerSizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "aspectRatio": {
                                "type": string;
                                "description": string;
                            };
                            "minHeight": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "minWidth": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                        };
                    };
                };
            };
        };
        "PretargetingConfigList": {
            "id": string;
            "type": string;
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
            };
        };
        "Price": {
            "id": string;
            "type": string;
            "properties": {
                "amountMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "currencyCode": {
                    "type": string;
                    "description": string;
                };
                "expectedCpmMicros": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "pricingType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PricePerBuyer": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "auctionTier": {
                    "type": string;
                    "description": string;
                };
                "billedBuyer": {
                    "$ref": string;
                    "description": string;
                };
                "buyer": {
                    "$ref": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PrivateData": {
            "id": string;
            "type": string;
            "properties": {
                "referenceId": {
                    "type": string;
                };
                "referencePayload": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "Product": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "billedBuyer": {
                    "$ref": string;
                    "description": string;
                };
                "buyer": {
                    "$ref": string;
                    "description": string;
                };
                "creationTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creatorContacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creatorRole": {
                    "type": string;
                    "description": string;
                };
                "deliveryControl": {
                    "$ref": string;
                    "description": string;
                };
                "flightEndTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "flightStartTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "hasCreatorSignedOff": {
                    "type": string;
                    "description": string;
                };
                "inventorySource": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lastUpdateTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "legacyOfferId": {
                    "type": string;
                    "description": string;
                };
                "marketplacePublisherProfileId": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "privateAuctionId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "publisherProfileId": {
                    "type": string;
                    "description": string;
                };
                "publisherProvidedForecast": {
                    "$ref": string;
                    "description": string;
                };
                "revisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "seller": {
                    "$ref": string;
                    "description": string;
                };
                "sharedTargetings": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "syndicationProduct": {
                    "type": string;
                    "description": string;
                };
                "terms": {
                    "$ref": string;
                    "description": string;
                };
                "webPropertyCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Proposal": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "billedBuyer": {
                    "$ref": string;
                    "description": string;
                };
                "buyer": {
                    "$ref": string;
                    "description": string;
                };
                "buyerContacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "buyerPrivateData": {
                    "$ref": string;
                    "description": string;
                };
                "dbmAdvertiserIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "hasBuyerSignedOff": {
                    "type": string;
                    "description": string;
                };
                "hasSellerSignedOff": {
                    "type": string;
                    "description": string;
                };
                "inventorySource": {
                    "type": string;
                    "description": string;
                };
                "isRenegotiating": {
                    "type": string;
                    "description": string;
                };
                "isSetupComplete": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lastUpdaterOrCommentorRole": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "negotiationId": {
                    "type": string;
                    "description": string;
                };
                "originatorRole": {
                    "type": string;
                    "description": string;
                };
                "privateAuctionId": {
                    "type": string;
                    "description": string;
                };
                "proposalId": {
                    "type": string;
                    "description": string;
                };
                "proposalState": {
                    "type": string;
                    "description": string;
                };
                "revisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "revisionTimeMs": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "seller": {
                    "$ref": string;
                    "description": string;
                };
                "sellerContacts": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "PublisherProfileApiProto": {
            "id": string;
            "type": string;
            "properties": {
                "audience": {
                    "type": string;
                    "description": string;
                };
                "buyerPitchStatement": {
                    "type": string;
                    "description": string;
                };
                "directContact": {
                    "type": string;
                    "description": string;
                };
                "exchange": {
                    "type": string;
                    "description": string;
                };
                "googlePlusLink": {
                    "type": string;
                    "description": string;
                };
                "isParent": {
                    "type": string;
                    "description": string;
                };
                "isPublished": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "logoUrl": {
                    "type": string;
                    "description": string;
                };
                "mediaKitLink": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                };
                "overview": {
                    "type": string;
                    "description": string;
                };
                "profileId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "programmaticContact": {
                    "type": string;
                    "description": string;
                };
                "publisherDomains": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "publisherProfileId": {
                    "type": string;
                    "description": string;
                };
                "publisherProvidedForecast": {
                    "$ref": string;
                    "description": string;
                };
                "rateCardInfoLink": {
                    "type": string;
                    "description": string;
                };
                "samplePageLink": {
                    "type": string;
                    "description": string;
                };
                "seller": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "topHeadlines": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "PublisherProvidedForecast": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "dimensions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "weeklyImpressions": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "weeklyUniques": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Seller": {
            "id": string;
            "type": string;
            "properties": {
                "accountId": {
                    "type": string;
                    "description": string;
                };
                "subAccountId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SharedTargeting": {
            "id": string;
            "type": string;
            "properties": {
                "exclusions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "inclusions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "key": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TargetingValue": {
            "id": string;
            "type": string;
            "properties": {
                "creativeSizeValue": {
                    "$ref": string;
                    "description": string;
                };
                "dayPartTargetingValue": {
                    "$ref": string;
                    "description": string;
                };
                "demogAgeCriteriaValue": {
                    "$ref": string;
                };
                "demogGenderCriteriaValue": {
                    "$ref": string;
                };
                "longValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "stringValue": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TargetingValueCreativeSize": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowedFormats": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "companionSizes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "creativeSizeType": {
                    "type": string;
                    "description": string;
                };
                "nativeTemplate": {
                    "type": string;
                    "description": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "skippableAdType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TargetingValueDayPartTargeting": {
            "id": string;
            "type": string;
            "properties": {
                "dayParts": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timeZoneType": {
                    "type": string;
                };
            };
        };
        "TargetingValueDayPartTargetingDayPart": {
            "id": string;
            "type": string;
            "properties": {
                "dayOfWeek": {
                    "type": string;
                };
                "endHour": {
                    "type": string;
                    "format": string;
                };
                "endMinute": {
                    "type": string;
                    "format": string;
                };
                "startHour": {
                    "type": string;
                    "format": string;
                };
                "startMinute": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "TargetingValueDemogAgeCriteria": {
            "id": string;
            "type": string;
            "properties": {
                "demogAgeCriteriaIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "TargetingValueDemogGenderCriteria": {
            "id": string;
            "type": string;
            "properties": {
                "demogGenderCriteriaIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "TargetingValueSize": {
            "id": string;
            "type": string;
            "properties": {
                "height": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "width": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "UpdatePrivateAuctionProposalRequest": {
            "id": string;
            "type": string;
            "properties": {
                "externalDealId": {
                    "type": string;
                    "description": string;
                };
                "note": {
                    "$ref": string;
                    "description": string;
                };
                "proposalRevisionNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "updateAction": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "confirmUnsafeAccountChange": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
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
                        "confirmUnsafeAccountChange": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "id": {
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
        "billingInfo": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
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
        "budget": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "billingId": {
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
                "addDeal": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "buyerCreativeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "dealId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "buyerCreativeId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "buyerCreativeId": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "dealsStatusFilter": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                        "openAuctionStatusFilter": {
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
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "listDeals": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "buyerCreativeId": {
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
                "removeDeal": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "buyerCreativeId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "dealId": {
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
        "marketplacedeals": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "proposalId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "proposalId": {
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
                        "pqlQuery": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "proposalId": {
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
                        "proposalId": {
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
        "marketplacenotes": {
            "methods": {
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "proposalId": {
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
                        "pqlQuery": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "proposalId": {
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
        "marketplaceprivateauction": {
            "methods": {
                "updateproposal": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "privateAuctionId": {
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
                    "scopes": string[];
                };
            };
        };
        "performanceReport": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "endDateTime": {
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
                        "startDateTime": {
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
        "pretargetingConfig": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                        "accountId": {
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
                        "accountId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
                        "accountId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "configId": {
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
        "products": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "productId": {
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
                "search": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "pqlQuery": {
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
        "proposals": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "proposalId": {
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
                        "proposalId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revisionNumber": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "updateAction": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
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
                "search": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "pqlQuery": {
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
                "setupcomplete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "proposalId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
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
                        "proposalId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "revisionNumber": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "updateAction": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
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
        "pubprofiles": {
            "methods": {
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "accountId": {
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
//# sourceMappingURL=adexchangebuyer-v1~4.d.ts.map