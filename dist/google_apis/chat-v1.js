"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "basePath": "", "revision": "20180910", "documentationLink": "https://developers.google.com/hangouts/chat", "id": "chat:v1", "discoveryVersion": "v1", "version_module": true, "schemas": { "TextButton": { "description": "A button with text and onclick action.", "type": "object", "properties": { "onClick": { "$ref": "OnClick", "description": "The onclick action of the button." }, "text": { "description": "The text of the button.", "type": "string" } }, "id": "TextButton" }, "Empty": { "description": "A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.", "type": "object", "properties": {}, "id": "Empty" }, "KeyValue": { "description": "A UI element contains a key (label) and a value (content). And this\nelement may also contain some actions such as onclick button.", "type": "object", "properties": { "topLabel": { "description": "The text of the top label. Formatted text supported.", "type": "string" }, "iconUrl": { "description": "The icon specified by a URL.", "type": "string" }, "button": { "$ref": "Button", "description": "A button that can be clicked to trigger an action." }, "content": { "description": "The text of the content. Formatted text supported and always required.", "type": "string" }, "bottomLabel": { "description": "The text of the bottom label. Formatted text supported.", "type": "string" }, "icon": { "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], "enum": ["ICON_UNSPECIFIED", "AIRPLANE", "BOOKMARK", "BUS", "CAR", "CLOCK", "CONFIRMATION_NUMBER_ICON", "DOLLAR", "DESCRIPTION", "EMAIL", "EVENT_PERFORMER", "EVENT_SEAT", "FLIGHT_ARRIVAL", "FLIGHT_DEPARTURE", "HOTEL", "HOTEL_ROOM_TYPE", "INVITE", "MAP_PIN", "MEMBERSHIP", "MULTIPLE_PEOPLE", "OFFER", "PERSON", "PHONE", "RESTAURANT_ICON", "SHOPPING_CART", "STAR", "STORE", "TICKET", "TRAIN", "VIDEO_CAMERA", "VIDEO_PLAY"], "description": "An enum value that will be replaced by the Chat API with the\ncorresponding icon image.", "type": "string" }, "contentMultiline": { "description": "If the content should be multiline.", "type": "boolean" }, "onClick": { "description": "The onclick action. Only the top label, bottom label and content region\nare clickable.", "$ref": "OnClick" } }, "id": "KeyValue" }, "Thread": { "description": "A thread in Hangouts Chat.", "type": "object", "properties": { "name": { "description": "Resource name, in the form \"spaces/*/threads/*\".\n\nExample: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4", "type": "string" } }, "id": "Thread" }, "Section": { "description": "A section contains a collection of widgets that are rendered\n(vertically) in the order that they are specified. Across all platforms,\ncards have a narrow fixed width, so\nthere is currently no need for layout properties (e.g. float).", "type": "object", "properties": { "header": { "description": "The header of the section, text formatted supported.", "type": "string" }, "widgets": { "description": "A section must contain at least 1 widget.", "type": "array", "items": { "$ref": "WidgetMarkup" } } }, "id": "Section" }, "Button": { "description": "A button. Can be a text button or an image button.", "type": "object", "properties": { "textButton": { "description": "A button with text and onclick action.", "$ref": "TextButton" }, "imageButton": { "description": "A button with image and onclick action.", "$ref": "ImageButton" } }, "id": "Button" }, "OpenLink": { "description": "A link that opens a new window.", "type": "object", "properties": { "url": { "description": "The URL to open.", "type": "string" } }, "id": "OpenLink" }, "ListMembershipsResponse": { "type": "object", "properties": { "memberships": { "description": "List of memberships in the requested (or first) page.", "type": "array", "items": { "$ref": "Membership" } }, "nextPageToken": { "description": "Continuation token to retrieve the next page of results. It will be empty\nfor the last page of results.", "type": "string" } }, "id": "ListMembershipsResponse" }, "UserMentionMetadata": { "description": "Annotation metadata for user mentions (@).", "type": "object", "properties": { "type": { "enumDescriptions": ["Default value for the enum. DO NOT USE.", "Add user to space.", "Mention user in space."], "enum": ["TYPE_UNSPECIFIED", "ADD", "MENTION"], "description": "The type of user mention.", "type": "string" }, "user": { "$ref": "User", "description": "The user mentioned." } }, "id": "UserMentionMetadata" }, "CardAction": { "description": "A card action is\nthe action associated with the card. For an invoice card, a\ntypical action would be: delete invoice, email invoice or open the\ninvoice in browser.", "type": "object", "properties": { "onClick": { "description": "The onclick action for this action item.", "$ref": "OnClick" }, "actionLabel": { "description": "The label used to be displayed in the action menu item.", "type": "string" } }, "id": "CardAction" }, "FormAction": { "description": "A form action describes the behavior when the form is submitted.\nFor example, an Apps Script can be invoked to handle the form.", "type": "object", "properties": { "actionMethodName": { "description": "Apps Script function to invoke when the containing element is\nclicked/activated.", "type": "string" }, "parameters": { "description": "List of action parameters.", "type": "array", "items": { "$ref": "ActionParameter" } } }, "id": "FormAction" }, "Image": { "description": "An image that is specified by a URL and can have an onclick action.", "type": "object", "properties": { "onClick": { "$ref": "OnClick", "description": "The onclick action." }, "aspectRatio": { "description": "The aspect ratio of this image (width/height).", "format": "double", "type": "number" }, "imageUrl": { "description": "The URL of the image.", "type": "string" } }, "id": "Image" }, "Annotation": { "description": "Annotations associated with the plain-text body of the message.\n\nExample plain-text message body:\n```\nHello @FooBot how are you!\"\n```\n\nThe corresponding annotations metadata:\n```\n\"annotations\":[{\n  \"type\":\"USER_MENTION\",\n  \"startIndex\":6,\n  \"length\":7,\n  \"userMention\": {\n    \"user\": {\n      \"name\":\"users/107946847022116401880\",\n      \"displayName\":\"FooBot\",\n      \"avatarUrl\":\"https://goo.gl/aeDtrS\",\n      \"type\":\"BOT\"\n    },\n    \"type\":\"MENTION\"\n   }\n}]\n```", "type": "object", "properties": { "length": { "description": "Length of the substring in the plain-text message body this annotation\ncorresponds to.", "format": "int32", "type": "integer" }, "startIndex": { "description": "Start index (0-based, inclusive) in the plain-text message body this\nannotation corresponds to.", "format": "int32", "type": "integer" }, "userMention": { "description": "The metadata of user mention.", "$ref": "UserMentionMetadata" }, "type": { "description": "The type of this annotation.", "type": "string", "enumDescriptions": ["Default value for the enum. DO NOT USE.", "A user is mentioned."], "enum": ["ANNOTATION_TYPE_UNSPECIFIED", "USER_MENTION"] } }, "id": "Annotation" }, "WidgetMarkup": { "description": "A widget is a UI element that presents texts, images, etc.", "type": "object", "properties": { "image": { "$ref": "Image", "description": "Display an image in this widget." }, "buttons": { "description": "A list of buttons. Buttons is also oneof data and only one of these\nfields should be set.", "type": "array", "items": { "$ref": "Button" } }, "textParagraph": { "description": "Display a text paragraph in this widget.", "$ref": "TextParagraph" }, "keyValue": { "description": "Display a key value item in this widget.", "$ref": "KeyValue" } }, "id": "WidgetMarkup" }, "ActionResponse": { "description": "Parameters that a bot can use to configure how it's response is posted.", "type": "object", "properties": { "type": { "description": "The type of bot response.", "type": "string", "enumDescriptions": ["Default type; will be handled as NEW_MESSAGE.", "Post as a new message in the topic.", "Update the bot's own message. (Only after CARD_CLICKED events.)", "Privately ask the user for additional auth or config."], "enum": ["TYPE_UNSPECIFIED", "NEW_MESSAGE", "UPDATE_MESSAGE", "REQUEST_CONFIG"] }, "url": { "description": "URL for users to auth or config. (Only for REQUEST_CONFIG response types.)", "type": "string" } }, "id": "ActionResponse" }, "Space": { "description": "A room or DM in Hangouts Chat.", "type": "object", "properties": { "displayName": { "description": "Output only. The display name (only if the space is a room).", "type": "string" }, "type": { "description": "Output only. The type of a space.", "type": "string", "enumDescriptions": ["", "A chat space where memberships are free to change. Messages in rooms are\nthreaded.", "1:1 Direct Message between a human and a bot, where all messages are\nflat."], "enum": ["TYPE_UNSPECIFIED", "ROOM", "DM"] }, "name": { "description": "Resource name of the space, in the form \"spaces/*\".\n\nExample: spaces/AAAAMpdlehYs", "type": "string" } }, "id": "Space" }, "Card": { "description": "A card is a UI element that can contain UI widgets such as texts, images.", "type": "object", "properties": { "name": { "description": "Name of the card.", "type": "string" }, "sections": { "description": "Sections are separated by a line divider.", "type": "array", "items": { "$ref": "Section" } }, "cardActions": { "description": "The actions of this card.", "type": "array", "items": { "$ref": "CardAction" } }, "header": { "$ref": "CardHeader", "description": "The header of the card. A header usually contains a title and an image." } }, "id": "Card" }, "Message": { "description": "A message in Hangouts Chat.", "type": "object", "properties": { "name": { "description": "Resource name, in the form \"spaces/*/messages/*\".\n\nExample: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4", "type": "string" }, "previewText": { "description": "Text for generating preview chips. This text will not be displayed to the\nuser, but any links to images, web pages, videos, etc. included here will\ngenerate preview chips.", "type": "string" }, "text": { "description": "Plain-text body of the message.", "type": "string" }, "space": { "$ref": "Space", "description": "The space the message belongs to." }, "argumentText": { "description": "Plain-text body of the message with all bot mentions stripped out.", "type": "string" }, "fallbackText": { "description": "A plain-text description of the message's cards, used when the actual cards\ncannot be displayed (e.g. mobile notifications).", "type": "string" }, "actionResponse": { "$ref": "ActionResponse", "description": "Input only. Parameters that a bot can use to configure how its response is\nposted." }, "createTime": { "description": "Output only. The time at which the message was created in Hangouts Chat\nserver.", "format": "google-datetime", "type": "string" }, "sender": { "description": "The user who created the message.", "$ref": "User" }, "cards": { "description": "Rich, formatted and interactive cards that can be used to display UI\nelements such as: formatted texts, buttons, clickable images. Cards are\nnormally displayed below the plain-text body of the message.", "type": "array", "items": { "$ref": "Card" } }, "thread": { "description": "The thread the message belongs to.", "$ref": "Thread" }, "annotations": { "description": "Output only. Annotations associated with the text in this message.", "type": "array", "items": { "$ref": "Annotation" } } }, "id": "Message" }, "DeprecatedEvent": { "description": "Hangouts Chat events.", "type": "object", "properties": { "threadKey": { "description": "The bot-defined key for the thread related to the event. See the\nthread_key field of the\n`spaces.message.create` request for more information.", "type": "string" }, "token": { "description": "A secret value that bots can use to verify if a request is from Google. The\ntoken is randomly generated by Google, remains static, and can be obtained\nfrom the Hangouts Chat API configuration page in the Cloud Console.\nDevelopers can revoke/regenerate it if needed from the same page.", "type": "string" }, "eventTime": { "description": "The timestamp indicating when the event was dispatched.", "format": "google-datetime", "type": "string" }, "message": { "$ref": "Message", "description": "The message that triggered the event, if applicable." }, "action": { "description": "The form action data associated with an interactive card that was clicked.\nOnly populated for\nCARD_CLICKED events.\nSee the [Interactive Cards guide](/hangouts/chat/how-tos/cards-onclick) for\nmore information.", "$ref": "FormAction" }, "user": { "description": "The user that triggered the event.", "$ref": "User" }, "space": { "description": "The room or DM in which the event occurred.", "$ref": "Space" }, "type": { "description": "The type of the event.", "type": "string", "enumDescriptions": ["Default value for the enum. DO NOT USE.", "A message was sent in a room or direct message.", "The bot was added to a room or DM.", "The bot was removed from a room or DM.", "The bot's interactive card was clicked."], "enum": ["UNSPECIFIED", "MESSAGE", "ADDED_TO_SPACE", "REMOVED_FROM_SPACE", "CARD_CLICKED"] }, "configCompleteRedirectUrl": { "description": "The URL the bot should redirect the user to after they have completed an\nauthorization or configuration flow outside of Hangouts Chat. See the\n[Authorizing access to 3p services guide](/hangouts/chat/how-tos/auth-3p)\nfor more information.", "type": "string" } }, "id": "DeprecatedEvent" }, "OnClick": { "description": "An onclick action (e.g. open a link).", "type": "object", "properties": { "openLink": { "$ref": "OpenLink", "description": "This onclick triggers an open link action if specified." }, "action": { "$ref": "FormAction", "description": "A form action will be trigger by this onclick if specified." } }, "id": "OnClick" }, "ActionParameter": { "description": "List of string parameters to supply when the action method is invoked.\nFor example, consider three snooze buttons: snooze now, snooze 1 day,\nsnooze next week. You might use action method = snooze(), passing the\nsnooze type and snooze time in the list of string parameters.", "type": "object", "properties": { "key": { "description": "The name of the parameter for the action script.", "type": "string" }, "value": { "description": "The value of the parameter.", "type": "string" } }, "id": "ActionParameter" }, "User": { "description": "A user in Hangouts Chat.", "type": "object", "properties": { "displayName": { "description": "The user's display name.", "type": "string" }, "type": { "description": "User type.", "type": "string", "enumDescriptions": ["Default value for the enum. DO NOT USE.", "Human user.", "Bot user."], "enum": ["TYPE_UNSPECIFIED", "HUMAN", "BOT"] }, "name": { "description": "Resource name, in the format \"users/*\".", "type": "string" } }, "id": "User" }, "TextParagraph": { "description": "A paragraph of text. Formatted text supported.", "type": "object", "properties": { "text": { "type": "string" } }, "id": "TextParagraph" }, "Membership": { "description": "Represents a membership relation in Hangouts Chat.", "type": "object", "properties": { "createTime": { "description": "The creation time of the membership a.k.a the time at which the member\njoined the space, if applicable.", "format": "google-datetime", "type": "string" }, "state": { "description": "State of the membership.", "type": "string", "enumDescriptions": ["Default, do not use.", "The user has joined the space.", "The user has been invited, is able to join the space, but currently has\nnot joined.", "The user is not a member of the space, has not been invited and is not\nable to join the space."], "enum": ["MEMBERSHIP_STATE_UNSPECIFIED", "JOINED", "INVITED", "NOT_A_MEMBER"] }, "name": { "description": "Resource name of the membership, in the form \"spaces/*/members/*\".\n\nExample: spaces/AAAAMpdlehY/members/105115627578887013105", "type": "string" }, "member": { "description": "Member details.", "$ref": "User" } }, "id": "Membership" }, "ImageButton": { "description": "An image button with an onclick action.", "type": "object", "properties": { "icon": { "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], "enum": ["ICON_UNSPECIFIED", "AIRPLANE", "BOOKMARK", "BUS", "CAR", "CLOCK", "CONFIRMATION_NUMBER_ICON", "DOLLAR", "DESCRIPTION", "EMAIL", "EVENT_PERFORMER", "EVENT_SEAT", "FLIGHT_ARRIVAL", "FLIGHT_DEPARTURE", "HOTEL", "HOTEL_ROOM_TYPE", "INVITE", "MAP_PIN", "MEMBERSHIP", "MULTIPLE_PEOPLE", "OFFER", "PERSON", "PHONE", "RESTAURANT_ICON", "SHOPPING_CART", "STAR", "STORE", "TICKET", "TRAIN", "VIDEO_CAMERA", "VIDEO_PLAY"], "description": "The icon specified by an enum that indices to an icon provided by Chat\nAPI.", "type": "string" }, "onClick": { "description": "The onclick action.", "$ref": "OnClick" }, "iconUrl": { "description": "The icon specified by a URL.", "type": "string" }, "name": { "description": "The name of this image_button which will be used for accessibility.\nDefault value will be provided if developers don't specify.", "type": "string" } }, "id": "ImageButton" }, "CardHeader": { "type": "object", "properties": { "imageUrl": { "description": "The URL of the image in the card header.", "type": "string" }, "imageStyle": { "description": "The image's type (e.g. square border or circular border).", "type": "string", "enumDescriptions": ["", "Square border.", "Circular border."], "enum": ["IMAGE_STYLE_UNSPECIFIED", "IMAGE", "AVATAR"] }, "title": { "description": "The title must be specified. The header has a fixed height: if both a\ntitle and subtitle is specified, each will take up 1 line. If only the\ntitle is specified, it will take up both lines.", "type": "string" }, "subtitle": { "description": "The subtitle of the card header.", "type": "string" } }, "id": "CardHeader" }, "ListSpacesResponse": { "type": "object", "properties": { "spaces": { "description": "List of spaces in the requested (or first) page.", "type": "array", "items": { "$ref": "Space" } }, "nextPageToken": { "description": "Continuation token to retrieve the next page of results. It will be empty\nfor the last page of results. Tokens expire in an hour. An error is thrown\nif an expired token is passed.", "type": "string" } }, "id": "ListSpacesResponse" } }, "icons": { "x16": "http://www.google.com/images/icons/product/search-16.gif", "x32": "http://www.google.com/images/icons/product/search-32.gif" }, "protocol": "rest", "canonicalName": "Hangouts Chat", "rootUrl": "https://chat.googleapis.com/", "ownerDomain": "google.com", "name": "chat", "batchPath": "batch", "fullyEncodeReservedExpansion": true, "title": "Hangouts Chat API", "ownerName": "Google", "resources": { "spaces": { "methods": { "list": { "response": { "$ref": "ListSpacesResponse" }, "parameterOrder": [], "httpMethod": "GET", "parameters": { "pageSize": { "location": "query", "description": "Requested page size. The value is capped at 1000.\nServer may return fewer results than requested.\nIf unspecified, server will default to 100.", "format": "int32", "type": "integer" }, "pageToken": { "description": "A token identifying a page of results the server should return.", "type": "string", "location": "query" } }, "flatPath": "v1/spaces", "path": "v1/spaces", "id": "chat.spaces.list", "description": "Lists spaces the caller is a member of." }, "get": { "description": "Returns a space.", "httpMethod": "GET", "parameterOrder": ["name"], "response": { "$ref": "Space" }, "parameters": { "name": { "description": "Required. Resource name of the space, in the form \"spaces/*\".\n\nExample: spaces/AAAAMpdlehY", "required": true, "type": "string", "pattern": "^spaces/[^/]+$", "location": "path" } }, "flatPath": "v1/spaces/{spacesId}", "id": "chat.spaces.get", "path": "v1/{+name}" } }, "resources": { "members": { "methods": { "list": { "response": { "$ref": "ListMembershipsResponse" }, "parameterOrder": ["parent"], "httpMethod": "GET", "parameters": { "pageToken": { "location": "query", "description": "A token identifying a page of results the server should return.", "type": "string" }, "pageSize": { "description": "Requested page size. The value is capped at 1000.\nServer may return fewer results than requested.\nIf unspecified, server will default to 100.", "format": "int32", "type": "integer", "location": "query" }, "parent": { "description": "Required. The resource name of the space for which membership list is to be\nfetched, in the form \"spaces/*\".\n\nExample: spaces/AAAAMpdlehY", "required": true, "type": "string", "pattern": "^spaces/[^/]+$", "location": "path" } }, "flatPath": "v1/spaces/{spacesId}/members", "path": "v1/{+parent}/members", "id": "chat.spaces.members.list", "description": "Lists human memberships in a space." }, "get": { "httpMethod": "GET", "parameterOrder": ["name"], "response": { "$ref": "Membership" }, "parameters": { "name": { "location": "path", "description": "Required. Resource name of the membership to be retrieved, in the form\n\"spaces/*/members/*\".\n\nExample: spaces/AAAAMpdlehY/members/105115627578887013105", "required": true, "type": "string", "pattern": "^spaces/[^/]+/members/[^/]+$" } }, "flatPath": "v1/spaces/{spacesId}/members/{membersId}", "id": "chat.spaces.members.get", "path": "v1/{+name}", "description": "Returns a membership." } } }, "messages": { "methods": { "delete": { "response": { "$ref": "Empty" }, "parameterOrder": ["name"], "httpMethod": "DELETE", "parameters": { "name": { "location": "path", "description": "Required. Resource name of the message to be deleted, in the form\n\"spaces/*/messages/*\"\n\nExample: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4", "required": true, "type": "string", "pattern": "^spaces/[^/]+/messages/[^/]+$" } }, "flatPath": "v1/spaces/{spacesId}/messages/{messagesId}", "path": "v1/{+name}", "id": "chat.spaces.messages.delete", "description": "Deletes a message." }, "get": { "description": "Returns a message.", "response": { "$ref": "Message" }, "parameterOrder": ["name"], "httpMethod": "GET", "parameters": { "name": { "location": "path", "description": "Required. Resource name of the message to be retrieved, in the form\n\"spaces/*/messages/*\".\n\nExample: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4", "required": true, "type": "string", "pattern": "^spaces/[^/]+/messages/[^/]+$" } }, "flatPath": "v1/spaces/{spacesId}/messages/{messagesId}", "path": "v1/{+name}", "id": "chat.spaces.messages.get" }, "update": { "response": { "$ref": "Message" }, "parameterOrder": ["name"], "httpMethod": "PUT", "parameters": { "updateMask": { "description": "Required. The field paths to be updated.\n\nCurrently supported field paths: \"text\", \"cards\".", "format": "google-fieldmask", "type": "string", "location": "query" }, "name": { "location": "path", "description": "Resource name, in the form \"spaces/*/messages/*\".\n\nExample: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4", "required": true, "type": "string", "pattern": "^spaces/[^/]+/messages/[^/]+$" } }, "flatPath": "v1/spaces/{spacesId}/messages/{messagesId}", "path": "v1/{+name}", "id": "chat.spaces.messages.update", "request": { "$ref": "Message" }, "description": "Updates a message." }, "create": { "flatPath": "v1/spaces/{spacesId}/messages", "path": "v1/{+parent}/messages", "id": "chat.spaces.messages.create", "request": { "$ref": "Message" }, "description": "Creates a message.", "response": { "$ref": "Message" }, "parameterOrder": ["parent"], "httpMethod": "POST", "parameters": { "parent": { "location": "path", "description": "Required. Space resource name, in the form \"spaces/*\".\nExample: spaces/AAAAMpdlehY", "required": true, "type": "string", "pattern": "^spaces/[^/]+$" }, "threadKey": { "location": "query", "description": "Opaque thread identifier string that can be specified to group messages\ninto a single thread. If this is the first message with a given thread\nidentifier, a new thread is created. Subsequent messages with the same\nthread identifier will be posted into the same thread. This relieves bots\nand webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post\nfurther updates to it.\n\nHas no effect if thread field,\ncorresponding to an existing thread, is set in message.", "type": "string" } } } } } } } }, "parameters": { "callback": { "description": "JSONP", "type": "string", "location": "query" }, "oauth_token": { "location": "query", "description": "OAuth 2.0 token for the current user.", "type": "string" }, "$.xgafv": { "enumDescriptions": ["v1 error format", "v2 error format"], "location": "query", "enum": ["1", "2"], "description": "V1 error format.", "type": "string" }, "alt": { "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"], "location": "query", "description": "Data format for response.", "default": "json", "enum": ["json", "media", "proto"], "type": "string" }, "access_token": { "description": "OAuth access token.", "type": "string", "location": "query" }, "key": { "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "type": "string", "location": "query" }, "upload_protocol": { "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").", "type": "string", "location": "query" }, "quotaUser": { "location": "query", "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.", "type": "string" }, "prettyPrint": { "location": "query", "description": "Returns response with indentations and line breaks.", "type": "boolean", "default": "true" }, "fields": { "location": "query", "description": "Selector specifying which fields to include in a partial response.", "type": "string" }, "uploadType": { "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").", "type": "string", "location": "query" } }, "version": "v1", "baseUrl": "https://chat.googleapis.com/", "kind": "discovery#restDescription", "description": "Enables bots to fetch information and perform actions in Hangouts Chat.", "servicePath": "" };
//# sourceMappingURL=chat-v1.js.map