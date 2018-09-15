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
    "schemas": {
        "AdministrationRegion": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "electionAdministrationBody": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "local_jurisdiction": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "sources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "AdministrativeBody": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "absenteeVotingInfoUrl": {
                    "type": string;
                    "description": string;
                };
                "addressLines": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "ballotInfoUrl": {
                    "type": string;
                    "description": string;
                };
                "correspondenceAddress": {
                    "$ref": string;
                    "description": string;
                };
                "electionInfoUrl": {
                    "type": string;
                    "description": string;
                };
                "electionOfficials": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "electionRegistrationConfirmationUrl": {
                    "type": string;
                    "description": string;
                };
                "electionRegistrationUrl": {
                    "type": string;
                    "description": string;
                };
                "electionRulesUrl": {
                    "type": string;
                    "description": string;
                };
                "hoursOfOperation": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "physicalAddress": {
                    "$ref": string;
                    "description": string;
                };
                "voter_services": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "votingLocationFinderUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Candidate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "candidateUrl": {
                    "type": string;
                    "description": string;
                };
                "channels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "orderOnBallot": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "party": {
                    "type": string;
                    "description": string;
                };
                "phone": {
                    "type": string;
                    "description": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Channel": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Contest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "ballotPlacement": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "ballotTitle": {
                    "type": string;
                    "description": string;
                };
                "candidates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "district": {
                    "$ref": string;
                    "description": string;
                };
                "electorateSpecifications": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "level": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "numberElected": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numberVotingFor": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "office": {
                    "type": string;
                    "description": string;
                };
                "primaryParty": {
                    "type": string;
                    "description": string;
                };
                "referendumBallotResponses": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "referendumBrief": {
                    "type": string;
                    "description": string;
                };
                "referendumConStatement": {
                    "type": string;
                    "description": string;
                };
                "referendumEffectOfAbstain": {
                    "type": string;
                    "description": string;
                };
                "referendumPassageThreshold": {
                    "type": string;
                    "description": string;
                };
                "referendumProStatement": {
                    "type": string;
                    "description": string;
                };
                "referendumSubtitle": {
                    "type": string;
                    "description": string;
                };
                "referendumText": {
                    "type": string;
                    "description": string;
                };
                "referendumTitle": {
                    "type": string;
                    "description": string;
                };
                "referendumUrl": {
                    "type": string;
                    "description": string;
                };
                "roles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "sources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "special": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ContextParams": {
            "id": string;
            "type": string;
            "properties": {
                "clientProfile": {
                    "type": string;
                };
            };
        };
        "DivisionRepresentativeInfoRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contextParams": {
                    "$ref": string;
                };
            };
        };
        "DivisionSearchRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contextParams": {
                    "$ref": string;
                };
            };
        };
        "DivisionSearchResponse": {
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
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "DivisionSearchResult": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "aliases": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "ocdId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Election": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "electionDay": {
                    "type": string;
                    "description": string;
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
                "ocdDivisionId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ElectionOfficial": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "emailAddress": {
                    "type": string;
                    "description": string;
                };
                "faxNumber": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "officePhoneNumber": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ElectionsQueryRequest": {
            "id": string;
            "type": string;
            "properties": {
                "contextParams": {
                    "$ref": string;
                };
            };
        };
        "ElectionsQueryResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "elections": {
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
        "ElectoralDistrict": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
                "kgForeignKey": {
                    "type": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "scope": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FieldMetadataProto": {
            "id": string;
            "type": string;
            "properties": {
                "internal": {
                    "$ref": string;
                };
            };
        };
        "GeographicDivision": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "alsoKnownAs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "officeIndices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
            };
        };
        "InternalFieldMetadataProto": {
            "id": string;
            "type": string;
            "properties": {
                "isAuto": {
                    "type": string;
                };
                "sourceSummary": {
                    "$ref": string;
                };
            };
        };
        "InternalSourceSummaryProto": {
            "id": string;
            "type": string;
            "properties": {
                "dataset": {
                    "type": string;
                };
                "provider": {
                    "type": string;
                };
            };
        };
        "LivegraphBacktraceRecordInfo": {
            "id": string;
            "type": string;
            "properties": {
                "dataSourcePublishMsec": {
                    "type": string;
                    "format": string;
                };
                "expId": {
                    "type": string;
                };
                "expInfo": {
                    "$ref": string;
                };
                "isRecon": {
                    "type": string;
                };
                "isWlmThrottled": {
                    "type": string;
                };
                "numberOfTriples": {
                    "type": string;
                    "format": string;
                };
                "priority": {
                    "type": string;
                };
                "process": {
                    "type": string;
                };
                "proxyReceiveMsec": {
                    "type": string;
                    "format": string;
                };
                "proxySentMsec": {
                    "type": string;
                    "format": string;
                };
                "recordId": {
                    "type": string;
                };
                "shouldMonitorLatency": {
                    "type": string;
                };
                "subscriberReceiveMsec": {
                    "type": string;
                    "format": string;
                };
                "topicBuildFinishMsec": {
                    "type": string;
                    "format": string;
                };
                "topicBuildStartMsec": {
                    "type": string;
                    "format": string;
                };
                "version": {
                    "type": string;
                };
            };
        };
        "LivegraphBacktraceRecordInfoExpInfo": {
            "id": string;
            "type": string;
            "properties": {
                "deletedIns": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "MessageSet": {
            "id": string;
            "type": string;
            "properties": {
                "recordMessageSetExt": {
                    "$ref": string;
                };
            };
        };
        "Office": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "divisionId": {
                    "type": string;
                    "description": string;
                };
                "levels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "officialIndices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "roles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "sources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Official": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "channels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "emails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "party": {
                    "type": string;
                    "description": string;
                };
                "phones": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "urls": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "PointProto": {
            "id": string;
            "type": string;
            "properties": {
                "latE7": {
                    "type": string;
                    "format": string;
                };
                "lngE7": {
                    "type": string;
                    "format": string;
                };
                "metadata": {
                    "$ref": string;
                };
                "temporaryData": {
                    "$ref": string;
                };
            };
        };
        "PollingLocation": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "address": {
                    "$ref": string;
                    "description": string;
                };
                "endDate": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
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
                "pollingHours": {
                    "type": string;
                    "description": string;
                };
                "sources": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startDate": {
                    "type": string;
                    "description": string;
                };
                "voterServices": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PostalAddress": {
            "id": string;
            "type": string;
            "properties": {
                "addressLines": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "administrativeAreaName": {
                    "type": string;
                };
                "countryName": {
                    "type": string;
                };
                "countryNameCode": {
                    "type": string;
                };
                "dependentLocalityName": {
                    "type": string;
                };
                "dependentThoroughfareName": {
                    "type": string;
                };
                "firmName": {
                    "type": string;
                };
                "isDisputed": {
                    "type": string;
                };
                "languageCode": {
                    "type": string;
                };
                "localityName": {
                    "type": string;
                };
                "postBoxNumber": {
                    "type": string;
                };
                "postalCodeNumber": {
                    "type": string;
                };
                "postalCodeNumberExtension": {
                    "type": string;
                };
                "premiseName": {
                    "type": string;
                };
                "recipientName": {
                    "type": string;
                };
                "sortingCode": {
                    "type": string;
                };
                "subAdministrativeAreaName": {
                    "type": string;
                };
                "subPremiseName": {
                    "type": string;
                };
                "thoroughfareName": {
                    "type": string;
                };
                "thoroughfareNumber": {
                    "type": string;
                };
            };
        };
        "Provenance": {
            "id": string;
            "type": string;
            "properties": {
                "collidedSegmentSource": {
                    "$ref": string;
                };
                "ctclContestUuid": {
                    "type": string;
                };
                "ctclOfficeUuid": {
                    "type": string;
                };
                "datasetId": {
                    "type": string;
                    "format": string;
                };
                "precinctId": {
                    "type": string;
                    "format": string;
                };
                "precinctSplitId": {
                    "type": string;
                    "format": string;
                };
                "tsStreetSegmentId": {
                    "type": string;
                };
                "vip5PrecinctId": {
                    "type": string;
                };
                "vip5StreetSegmentId": {
                    "type": string;
                };
                "vipStreetSegmentId": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "RepresentativeInfoData": {
            "id": string;
            "type": string;
            "properties": {
                "divisions": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "offices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "officials": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "RepresentativeInfoRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contextParams": {
                    "$ref": string;
                };
            };
        };
        "RepresentativeInfoResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "divisions": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "normalizedInput": {
                    "$ref": string;
                    "description": string;
                };
                "offices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "officials": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SimpleAddressType": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "city": {
                    "type": string;
                    "description": string;
                };
                "line1": {
                    "type": string;
                    "description": string;
                };
                "line2": {
                    "type": string;
                    "description": string;
                };
                "line3": {
                    "type": string;
                    "description": string;
                };
                "locationName": {
                    "type": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                };
                "zip": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Source": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "official": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "StreetSegment": {
            "id": string;
            "type": string;
            "properties": {
                "administrationRegionIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "beforeGeocodeId": {
                    "type": string;
                };
                "catalistUniquePrecinctCode": {
                    "type": string;
                };
                "city": {
                    "type": string;
                };
                "cityCouncilDistrict": {
                    "type": string;
                };
                "congressionalDistrict": {
                    "type": string;
                };
                "contestIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "countyCouncilDistrict": {
                    "type": string;
                };
                "countyFips": {
                    "type": string;
                };
                "datasetId": {
                    "type": string;
                    "format": string;
                };
                "earlyVoteSiteByIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "endHouseNumber": {
                    "type": string;
                    "format": string;
                };
                "geocodedPoint": {
                    "$ref": string;
                };
                "geographicDivisionOcdIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "id": {
                    "type": string;
                };
                "judicialDistrict": {
                    "type": string;
                };
                "mailOnly": {
                    "type": string;
                };
                "municipalDistrict": {
                    "type": string;
                };
                "ncoaAddress": {
                    "type": string;
                };
                "oddOrEvens": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "originalId": {
                    "type": string;
                };
                "pollinglocationByIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "precinctName": {
                    "type": string;
                };
                "precinctOcdId": {
                    "type": string;
                };
                "provenances": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "published": {
                    "type": string;
                };
                "schoolDistrict": {
                    "type": string;
                };
                "startHouseNumber": {
                    "type": string;
                    "format": string;
                };
                "startLatE7": {
                    "type": string;
                    "format": string;
                };
                "startLngE7": {
                    "type": string;
                    "format": string;
                };
                "state": {
                    "type": string;
                };
                "stateHouseDistrict": {
                    "type": string;
                };
                "stateSenateDistrict": {
                    "type": string;
                };
                "streetName": {
                    "type": string;
                };
                "subAdministrativeAreaName": {
                    "type": string;
                };
                "surrogateId": {
                    "type": string;
                    "format": string;
                };
                "targetsmartUniquePrecinctCode": {
                    "type": string;
                };
                "townshipDistrict": {
                    "type": string;
                };
                "unitNumber": {
                    "type": string;
                };
                "unitType": {
                    "type": string;
                };
                "vanPrecinctCode": {
                    "type": string;
                };
                "voterGeographicDivisionOcdIds": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "wardDistrict": {
                    "type": string;
                };
                "wildcard": {
                    "type": string;
                };
                "zip": {
                    "type": string;
                };
            };
        };
        "StreetSegmentList": {
            "id": string;
            "type": string;
            "properties": {
                "segments": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VoterInfoRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contextParams": {
                    "$ref": string;
                };
                "voterInfoSegmentResult": {
                    "$ref": string;
                };
            };
        };
        "VoterInfoResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contests": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "dropOffLocations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "earlyVoteSites": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "election": {
                    "$ref": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "mailOnly": {
                    "type": string;
                    "description": string;
                };
                "normalizedInput": {
                    "$ref": string;
                    "description": string;
                };
                "otherElections": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pollingLocations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "precinctId": {
                    "type": string;
                };
                "segments": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "state": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "VoterInfoSegmentResult": {
            "id": string;
            "type": string;
            "properties": {
                "generatedMillis": {
                    "type": string;
                    "format": string;
                };
                "postalAddress": {
                    "$ref": string;
                };
                "request": {
                    "$ref": string;
                };
                "response": {
                    "$ref": string;
                };
            };
        };
    };
    "resources": {
        "divisions": {
            "methods": {
                "search": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "query": {
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
                };
            };
        };
        "elections": {
            "methods": {
                "electionQuery": {
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
                };
                "voterInfoQuery": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "address": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "electionId": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "location": string;
                        };
                        "officialOnly": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "returnAllAvailableData": {
                            "type": string;
                            "description": string;
                            "default": string;
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
                };
            };
        };
        "representatives": {
            "methods": {
                "representativeInfoByAddress": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "address": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "includeOffices": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "location": string;
                        };
                        "levels": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "roles": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                };
                "representativeInfoByDivision": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "levels": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                        "ocdId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "recursive": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "roles": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
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
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=civicinfo-v2.d.ts.map