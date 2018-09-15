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
                "https://www.googleapis.com/auth/calendar": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/calendar.events": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/calendar.events.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/calendar.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/calendar.settings.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Acl": {
            "id": string;
            "type": string;
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
                "nextSyncToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AclRule": {
            "id": string;
            "type": string;
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
                "role": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "scope": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "type": {
                            "type": string;
                            "description": string;
                            "annotations": {
                                "required": string[];
                            };
                        };
                        "value": {
                            "type": string;
                            "description": string;
                        };
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "Calendar": {
            "id": string;
            "type": string;
            "properties": {
                "conferenceProperties": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
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
                "location": {
                    "type": string;
                    "description": string;
                };
                "summary": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CalendarList": {
            "id": string;
            "type": string;
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
                "nextSyncToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CalendarListEntry": {
            "id": string;
            "type": string;
            "properties": {
                "accessRole": {
                    "type": string;
                    "description": string;
                };
                "backgroundColor": {
                    "type": string;
                    "description": string;
                };
                "colorId": {
                    "type": string;
                    "description": string;
                };
                "conferenceProperties": {
                    "$ref": string;
                    "description": string;
                };
                "defaultReminders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "deleted": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "foregroundColor": {
                    "type": string;
                    "description": string;
                };
                "hidden": {
                    "type": string;
                    "description": string;
                    "default": string;
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
                "location": {
                    "type": string;
                    "description": string;
                };
                "notificationSettings": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "notifications": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "primary": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "selected": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "summary": {
                    "type": string;
                    "description": string;
                };
                "summaryOverride": {
                    "type": string;
                    "description": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CalendarNotification": {
            "id": string;
            "type": string;
            "properties": {
                "method": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Channel": {
            "id": string;
            "type": string;
            "properties": {
                "address": {
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
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "params": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "payload": {
                    "type": string;
                    "description": string;
                };
                "resourceId": {
                    "type": string;
                    "description": string;
                };
                "resourceUri": {
                    "type": string;
                    "description": string;
                };
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
        "ColorDefinition": {
            "id": string;
            "type": string;
            "properties": {
                "background": {
                    "type": string;
                    "description": string;
                };
                "foreground": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Colors": {
            "id": string;
            "type": string;
            "properties": {
                "calendar": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "event": {
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
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ConferenceData": {
            "id": string;
            "type": string;
            "properties": {
                "conferenceId": {
                    "type": string;
                    "description": string;
                };
                "conferenceSolution": {
                    "$ref": string;
                    "description": string;
                };
                "createRequest": {
                    "$ref": string;
                    "description": string;
                };
                "entryPoints": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "notes": {
                    "type": string;
                    "description": string;
                };
                "parameters": {
                    "$ref": string;
                    "description": string;
                };
                "signature": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ConferenceParameters": {
            "id": string;
            "type": string;
            "properties": {
                "addOnParameters": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ConferenceParametersAddOnParameters": {
            "id": string;
            "type": string;
            "properties": {
                "parameters": {
                    "type": string;
                    "additionalProperties": {
                        "type": string;
                    };
                };
            };
        };
        "ConferenceProperties": {
            "id": string;
            "type": string;
            "properties": {
                "allowedConferenceSolutionTypes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "ConferenceRequestStatus": {
            "id": string;
            "type": string;
            "properties": {
                "statusCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ConferenceSolution": {
            "id": string;
            "type": string;
            "properties": {
                "iconUri": {
                    "type": string;
                    "description": string;
                };
                "key": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ConferenceSolutionKey": {
            "id": string;
            "type": string;
            "properties": {
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "CreateConferenceRequest": {
            "id": string;
            "type": string;
            "properties": {
                "conferenceSolutionKey": {
                    "$ref": string;
                    "description": string;
                };
                "requestId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "EntryPoint": {
            "id": string;
            "type": string;
            "properties": {
                "accessCode": {
                    "type": string;
                    "description": string;
                };
                "entryPointFeatures": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "entryPointType": {
                    "type": string;
                    "description": string;
                };
                "label": {
                    "type": string;
                    "description": string;
                };
                "meetingCode": {
                    "type": string;
                    "description": string;
                };
                "passcode": {
                    "type": string;
                    "description": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "pin": {
                    "type": string;
                    "description": string;
                };
                "regionCode": {
                    "type": string;
                    "description": string;
                };
                "uri": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Error": {
            "id": string;
            "type": string;
            "properties": {
                "domain": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Event": {
            "id": string;
            "type": string;
            "properties": {
                "anyoneCanAddSelf": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "attachments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "attendees": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "attendeesOmitted": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "colorId": {
                    "type": string;
                    "description": string;
                };
                "conferenceData": {
                    "$ref": string;
                    "description": string;
                };
                "created": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "creator": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "displayName": {
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
                        };
                        "self": {
                            "type": string;
                            "description": string;
                            "default": string;
                        };
                    };
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "end": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "endTimeUnspecified": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "etag": {
                    "type": string;
                    "description": string;
                };
                "extendedProperties": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "private": {
                            "type": string;
                            "description": string;
                            "additionalProperties": {
                                "type": string;
                                "description": string;
                            };
                        };
                        "shared": {
                            "type": string;
                            "description": string;
                            "additionalProperties": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "gadget": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "display": {
                            "type": string;
                            "description": string;
                        };
                        "height": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "iconLink": {
                            "type": string;
                            "description": string;
                        };
                        "link": {
                            "type": string;
                            "description": string;
                        };
                        "preferences": {
                            "type": string;
                            "description": string;
                            "additionalProperties": {
                                "type": string;
                                "description": string;
                            };
                        };
                        "title": {
                            "type": string;
                            "description": string;
                        };
                        "type": {
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
                "guestsCanInviteOthers": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "guestsCanModify": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "guestsCanSeeOtherGuests": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "hangoutLink": {
                    "type": string;
                    "description": string;
                };
                "htmlLink": {
                    "type": string;
                    "description": string;
                };
                "iCalUID": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
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
                "location": {
                    "type": string;
                    "description": string;
                };
                "locked": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "organizer": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "displayName": {
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
                        };
                        "self": {
                            "type": string;
                            "description": string;
                            "default": string;
                        };
                    };
                };
                "originalStartTime": {
                    "$ref": string;
                    "description": string;
                };
                "privateCopy": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "recurrence": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "recurringEventId": {
                    "type": string;
                    "description": string;
                };
                "reminders": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "overrides": {
                            "type": string;
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                        };
                        "useDefault": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "sequence": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "source": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "title": {
                            "type": string;
                            "description": string;
                        };
                        "url": {
                            "type": string;
                            "description": string;
                        };
                    };
                };
                "start": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "summary": {
                    "type": string;
                    "description": string;
                };
                "transparency": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "visibility": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "EventAttachment": {
            "id": string;
            "type": string;
            "properties": {
                "fileId": {
                    "type": string;
                    "description": string;
                };
                "fileUrl": {
                    "type": string;
                    "description": string;
                };
                "iconLink": {
                    "type": string;
                    "description": string;
                };
                "mimeType": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EventAttendee": {
            "id": string;
            "type": string;
            "properties": {
                "additionalGuests": {
                    "type": string;
                    "description": string;
                    "default": string;
                    "format": string;
                };
                "comment": {
                    "type": string;
                    "description": string;
                };
                "displayName": {
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
                };
                "optional": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "organizer": {
                    "type": string;
                    "description": string;
                };
                "resource": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "responseStatus": {
                    "type": string;
                    "description": string;
                };
                "self": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "EventDateTime": {
            "id": string;
            "type": string;
            "properties": {
                "date": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dateTime": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EventReminder": {
            "id": string;
            "type": string;
            "properties": {
                "method": {
                    "type": string;
                    "description": string;
                };
                "minutes": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Events": {
            "id": string;
            "type": string;
            "properties": {
                "accessRole": {
                    "type": string;
                    "description": string;
                };
                "defaultReminders": {
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
                "nextSyncToken": {
                    "type": string;
                    "description": string;
                };
                "summary": {
                    "type": string;
                    "description": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
                "updated": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "FreeBusyCalendar": {
            "id": string;
            "type": string;
            "properties": {
                "busy": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "FreeBusyGroup": {
            "id": string;
            "type": string;
            "properties": {
                "calendars": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "FreeBusyRequest": {
            "id": string;
            "type": string;
            "properties": {
                "calendarExpansionMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "groupExpansionMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "timeMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeMin": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "FreeBusyRequestItem": {
            "id": string;
            "type": string;
            "properties": {
                "id": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FreeBusyResponse": {
            "id": string;
            "type": string;
            "properties": {
                "calendars": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "$ref": string;
                        "description": string;
                    };
                };
                "groups": {
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
                "timeMax": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "timeMin": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Setting": {
            "id": string;
            "type": string;
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
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Settings": {
            "id": string;
            "type": string;
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
                "nextSyncToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TimePeriod": {
            "id": string;
            "type": string;
            "properties": {
                "end": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
    };
    "resources": {
        "acl": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ruleId": {
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
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ruleId": {
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
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
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
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
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
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ruleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
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
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "ruleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
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
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
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
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
        "calendarList": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
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
                        "calendarId": {
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
                    "parameters": {
                        "colorRgbFormat": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "minAccessRole": {
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
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showHidden": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "colorRgbFormat": {
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
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "colorRgbFormat": {
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
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "minAccessRole": {
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
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showHidden": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
        "calendars": {
            "methods": {
                "clear": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
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
                        "calendarId": {
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
                        "calendarId": {
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
                        "calendarId": {
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
                "stop": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "colors": {
            "methods": {
                "get": {
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
        "events": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
                            "type": string;
                            "description": string;
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
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "timeZone": {
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
                "import": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "conferenceDataVersion": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "supportsAttachments": {
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
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "conferenceDataVersion": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "sendNotifications": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsAttachments": {
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
                };
                "instances": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "originalStart": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timeMax": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeMin": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeZone": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "iCalUID": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
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
                        "privateExtendedProperty": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sharedExtendedProperty": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showHiddenInvitations": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "singleEvents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timeMax": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeMin": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeZone": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "updatedMin": {
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
                    "supportsSubscription": boolean;
                };
                "move": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "destination": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
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
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "conferenceDataVersion": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "sendNotifications": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsAttachments": {
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
                };
                "quickAdd": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "sendNotifications": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "text": {
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
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "conferenceDataVersion": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "maximum": string;
                            "location": string;
                        };
                        "eventId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "sendNotifications": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "supportsAttachments": {
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
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "alwaysIncludeEmail": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "calendarId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "iCalUID": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxAttendees": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "default": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "orderBy": {
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
                        "privateExtendedProperty": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "q": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sharedExtendedProperty": {
                            "type": string;
                            "description": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "showDeleted": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "showHiddenInvitations": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "singleEvents": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "timeMax": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeMin": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "timeZone": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "updatedMin": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
        "freebusy": {
            "methods": {
                "query": {
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
        "settings": {
            "methods": {
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "setting": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
                "watch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "syncToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "request": {
                        "$ref": string;
                        "parameterName": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsSubscription": boolean;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=calendar-v3.d.ts.map