declare const _default: {
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "CreateContactGroupRequest": {
            "description": string;
            "type": string;
            "properties": {
                "contactGroup": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Address": {
            "description": string;
            "type": string;
            "properties": {
                "countryCode": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "type": string;
                    "description": string;
                };
                "city": {
                    "description": string;
                    "type": string;
                };
                "formattedValue": {
                    "description": string;
                    "type": string;
                };
                "country": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "extendedAddress": {
                    "description": string;
                    "type": string;
                };
                "poBox": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "description": string;
                    "type": string;
                };
                "region": {
                    "description": string;
                    "type": string;
                };
                "streetAddress": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ContactGroupMembership": {
            "description": string;
            "type": string;
            "properties": {
                "contactGroupId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Status": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "message": {
                    "description": string;
                    "type": string;
                };
                "details": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "additionalProperties": {
                            "description": string;
                            "type": string;
                        };
                    };
                };
            };
        };
        "PersonMetadata": {
            "type": string;
            "properties": {
                "objectType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "linkedPeopleResourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "sources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "previousResourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "deleted": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ModifyContactGroupMembersRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "resourceNamesToAdd": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "resourceNamesToRemove": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
        };
        "ContactGroupResponse": {
            "description": string;
            "type": string;
            "properties": {
                "status": {
                    "description": string;
                    "$ref": string;
                };
                "requestedResourceName": {
                    "description": string;
                    "type": string;
                };
                "contactGroup": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Url": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ImClient": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "protocol": {
                    "description": string;
                    "type": string;
                };
                "username": {
                    "description": string;
                    "type": string;
                };
                "formattedProtocol": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "DomainMembership": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "inViewerDomain": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Membership": {
            "description": string;
            "type": string;
            "properties": {
                "contactGroupMembership": {
                    "$ref": string;
                    "description": string;
                };
                "domainMembership": {
                    "$ref": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BatchGetContactGroupsResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "RelationshipStatus": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BraggingRights": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SipAddress": {
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Organization": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "type": string;
                };
                "current": {
                    "description": string;
                    "type": string;
                };
                "startDate": {
                    "description": string;
                    "$ref": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
                "domain": {
                    "description": string;
                    "type": string;
                };
                "department": {
                    "description": string;
                    "type": string;
                };
                "phoneticName": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
                "jobDescription": {
                    "description": string;
                    "type": string;
                };
                "endDate": {
                    "description": string;
                    "$ref": string;
                };
                "symbol": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AgeRangeType": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "ageRange": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListContactGroupsResponse": {
            "properties": {
                "contactGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "description": string;
                    "type": string;
                };
                "totalItems": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "nextSyncToken": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PersonResponse": {
            "type": string;
            "properties": {
                "person": {
                    "$ref": string;
                    "description": string;
                };
                "status": {
                    "description": string;
                    "$ref": string;
                };
                "httpStatusCode": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "requestedResourceName": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Relation": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "person": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Occupation": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "ContactGroup": {
            "type": string;
            "properties": {
                "etag": {
                    "description": string;
                    "type": string;
                };
                "formattedName": {
                    "description": string;
                    "type": string;
                };
                "groupType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "memberResourceNames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "memberCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "resourceName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Person": {
            "description": string;
            "type": string;
            "properties": {
                "nicknames": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "relations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "names": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "occupations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "emailAddresses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "organizations": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "braggingRights": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "residences": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "genders": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "interests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "resourceName": {
                    "description": string;
                    "type": string;
                };
                "biographies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "skills": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "relationshipStatuses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "photos": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "ageRange": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "taglines": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "ageRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sipAddresses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "addresses": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "events": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "memberships": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "phoneNumbers": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "coverPhotos": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "imClients": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "birthdays": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "userDefined": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "locales": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "relationshipInterests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "urls": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "UpdateContactGroupRequest": {
            "type": string;
            "properties": {
                "contactGroup": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ContactGroupMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "updateTime": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "deleted": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Residence": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "current": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Event": {
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "date": {
                    "$ref": string;
                    "description": string;
                };
                "formattedType": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ModifyContactGroupMembersResponse": {
            "description": string;
            "type": string;
            "properties": {
                "notFoundResourceNames": {
                    "type": string;
                    "items": {
                        "type": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "ProfileMetadata": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "userTypes": {
                    "description": string;
                    "type": string;
                    "items": {
                        "enum": string[];
                        "type": string;
                    };
                    "enumDescriptions": string[];
                };
                "objectType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
        };
        "Gender": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedValue": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CoverPhoto": {
            "type": string;
            "properties": {
                "url": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "default": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Interest": {
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Nickname": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "EmailAddress": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "type": string;
                    "description": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Skill": {
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "type": string;
                    "description": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Date": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "year": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "day": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "month": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "Tagline": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Name": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "phoneticMiddleName": {
                    "description": string;
                    "type": string;
                };
                "phoneticFullName": {
                    "description": string;
                    "type": string;
                };
                "displayNameLastFirst": {
                    "description": string;
                    "type": string;
                };
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "honorificSuffix": {
                    "description": string;
                    "type": string;
                };
                "honorificPrefix": {
                    "description": string;
                    "type": string;
                };
                "phoneticHonorificSuffix": {
                    "description": string;
                    "type": string;
                };
                "givenName": {
                    "description": string;
                    "type": string;
                };
                "middleName": {
                    "description": string;
                    "type": string;
                };
                "phoneticHonorificPrefix": {
                    "description": string;
                    "type": string;
                };
                "phoneticGivenName": {
                    "description": string;
                    "type": string;
                };
                "phoneticFamilyName": {
                    "description": string;
                    "type": string;
                };
                "familyName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Locale": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Empty": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "UserDefined": {
            "description": string;
            "type": string;
            "properties": {
                "key": {
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Biography": {
            "description": string;
            "type": string;
            "properties": {
                "contentType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FieldMetadata": {
            "type": string;
            "properties": {
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "verified": {
                    "description": string;
                    "type": string;
                };
                "primary": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Source": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "etag": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "profileMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "updateTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "RelationshipInterest": {
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GetPeopleResponse": {
            "type": string;
            "properties": {
                "responses": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PhoneNumber": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "type": string;
                };
                "formattedType": {
                    "description": string;
                    "type": string;
                };
                "canonicalForm": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Photo": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "default": {
                    "type": string;
                    "description": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ListConnectionsResponse": {
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "connections": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextSyncToken": {
                    "description": string;
                    "type": string;
                };
                "totalItems": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalPeople": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Birthday": {
            "description": string;
            "type": string;
            "properties": {
                "metadata": {
                    "description": string;
                    "$ref": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "date": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x16": string;
        "x32": string;
    };
    "protocol": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/user.phonenumbers.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.email": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/user.birthday.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/contacts.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/plus.login": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/userinfo.profile": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/user.emails.read": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/contacts": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/user.addresses.read": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "title": string;
    "ownerName": string;
    "resources": {
        "people": {
            "methods": {
                "updateContact": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "resourceName": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                        "updatePersonFields": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "createContact": {
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "parent": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "deleteContact": {
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "resourceName": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "getBatchGet": {
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "personFields": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "requestMask.includeField": {
                            "location": string;
                            "description": string;
                            "format": string;
                            "type": string;
                        };
                        "resourceNames": {
                            "location": string;
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                };
                "get": {
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "resourceName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                        "personFields": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "requestMask.includeField": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
            };
            "resources": {
                "connections": {
                    "methods": {
                        "list": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "requestMask.includeField": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "pageSize": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                };
                                "syncToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "personFields": {
                                    "description": string;
                                    "format": string;
                                    "type": string;
                                    "location": string;
                                };
                                "sortOrder": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "requestSyncToken": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "pageToken": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                };
                                "resourceName": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                        };
                    };
                };
            };
        };
        "contactGroups": {
            "methods": {
                "create": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {};
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "request": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "get": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "maxMembers": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "resourceName": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "update": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "resourceName": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "delete": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "parameters": {
                        "resourceName": {
                            "location": string;
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                        };
                        "deleteContacts": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "batchGet": {
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {
                        "maxMembers": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                        "resourceNames": {
                            "location": string;
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                    "description": string;
                };
                "list": {
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "httpMethod": string;
                    "parameterOrder": never[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "parameters": {
                        "syncToken": {
                            "description": string;
                            "type": string;
                            "location": string;
                        };
                        "pageToken": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "pageSize": {
                            "description": string;
                            "format": string;
                            "type": string;
                            "location": string;
                        };
                    };
                };
            };
            "resources": {
                "members": {
                    "methods": {
                        "modify": {
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "resourceName": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "pattern": string;
                                    "location": string;
                                };
                            };
                            "flatPath": string;
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "key": {
            "description": string;
            "type": string;
            "location": string;
        };
        "upload_protocol": {
            "description": string;
            "type": string;
            "location": string;
        };
        "quotaUser": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "fields": {
            "description": string;
            "type": string;
            "location": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
        "oauth_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "enum": string[];
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
        };
    };
};
export default _default;
//# sourceMappingURL=people-v1.d.ts.map