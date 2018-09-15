"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "rootUrl": "https://cloudresourcemanager.googleapis.com/", "ownerDomain": "google.com", "name": "cloudresourcemanager", "batchPath": "batch", "fullyEncodeReservedExpansion": true, "title": "Cloud Resource Manager API", "ownerName": "Google", "resources": { "operations": { "methods": { "get": { "response": { "$ref": "Operation" }, "parameterOrder": ["name"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only"], "parameters": { "name": { "pattern": "^operations/.+$", "location": "path", "description": "The name of the operation resource.", "required": true, "type": "string" } }, "flatPath": "v1/operations/{operationsId}", "path": "v1/{+name}", "id": "cloudresourcemanager.operations.get", "description": "Gets the latest state of a long-running operation.  Clients can use this\nmethod to poll the operation result at intervals as recommended by the API\nservice." } } }, "folders": { "methods": { "move": { "description": "Moves a Folder under a new resource parent.\nReturns an Operation which can be used to track the progress of the\nfolder move workflow.\nUpon success the Operation.response field will be populated with the\nmoved Folder.\nUpon failure, a FolderOperationError categorizing the failure cause will\nbe returned - if the failure occurs synchronously then the\nFolderOperationError will be returned via the Status.details field\nand if it occurs asynchronously then the FolderOperation will be returned\nvia the the Operation.error field.\nIn addition, the Operation.metadata field will be populated with a\nFolderOperation message as an aid to stateless clients.\nFolder moves will be rejected if they violate either the naming, height\nor fanout constraints described in the\nCreateFolder documentation.\nThe caller must have `resourcemanager.folders.move` permission on the\nfolder's current and proposed new parent.", "request": { "$ref": "MoveFolderRequest" }, "httpMethod": "POST", "parameterOrder": ["name"], "response": { "$ref": "Operation" }, "parameters": { "name": { "description": "The resource name of the Folder to move.\nMust be of the form folders/{folder_id}", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v2/folders/{foldersId}:move", "id": "cloudresourcemanager.folders.move", "path": "v2/{+name}:move" }, "testIamPermissions": { "response": { "$ref": "TestIamPermissionsResponse" }, "parameterOrder": ["resource"], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } }, "flatPath": "v2/folders/{foldersId}:testIamPermissions", "path": "v2/{+resource}:testIamPermissions", "id": "cloudresourcemanager.folders.testIamPermissions", "request": { "$ref": "TestIamPermissionsRequest" }, "description": "Returns permissions that a caller has on the specified Folder.\nThe `resource` field should be the Folder's resource name,\ne.g. \"folders/1234\".\n\nThere are no permissions required for making this API call." }, "delete": { "description": "Requests deletion of a Folder. The Folder is moved into the\nDELETE_REQUESTED state\nimmediately, and is deleted approximately 30 days later. This method may\nonly be called on an empty Folder in the\nACTIVE state, where a Folder is empty if\nit doesn't contain any Folders or Projects in the\nACTIVE state.\nThe caller must have `resourcemanager.folders.delete` permission on the\nidentified folder.", "httpMethod": "DELETE", "parameterOrder": ["name"], "response": { "$ref": "Folder" }, "parameters": { "name": { "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path", "description": "the resource name of the Folder to be deleted.\nMust be of the form `folders/{folder_id}`." } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v2/folders/{foldersId}", "id": "cloudresourcemanager.folders.delete", "path": "v2/{+name}" }, "list": { "response": { "$ref": "ListFoldersResponse" }, "parameterOrder": [], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only"], "parameters": { "parent": { "location": "query", "description": "The resource name of the Organization or Folder whose Folders are\nbeing listed.\nMust be of the form `folders/{folder_id}` or `organizations/{org_id}`.\nAccess to this method is controlled by checking the\n`resourcemanager.folders.list` permission on the `parent`.", "type": "string" }, "showDeleted": { "location": "query", "description": "Controls whether Folders in the\nDELETE_REQUESTED\nstate should be returned. Defaults to false. This field is optional.", "type": "boolean" }, "pageToken": { "location": "query", "description": "A pagination token returned from a previous call to `ListFolders`\nthat indicates where this listing should continue from.\nThis field is optional.", "type": "string" }, "pageSize": { "location": "query", "description": "The maximum number of Folders to return in the response.\nThis field is optional.", "format": "int32", "type": "integer" } }, "flatPath": "v2/folders", "path": "v2/folders", "id": "cloudresourcemanager.folders.list", "description": "Lists the Folders that are direct descendants of supplied parent resource.\nList provides a strongly consistent view of the Folders underneath\nthe specified parent resource.\nList returns Folders sorted based upon the (ascending) lexical ordering\nof their display_name.\nThe caller must have `resourcemanager.folders.list` permission on the\nidentified parent." }, "setIamPolicy": { "flatPath": "v2/folders/{foldersId}:setIamPolicy", "id": "cloudresourcemanager.folders.setIamPolicy", "path": "v2/{+resource}:setIamPolicy", "description": "Sets the access control policy on a Folder, replacing any existing policy.\nThe `resource` field should be the Folder's resource name, e.g.\n\"folders/1234\".\nThe caller must have `resourcemanager.folders.setIamPolicy` permission\non the identified folder.", "request": { "$ref": "SetIamPolicyRequest" }, "httpMethod": "POST", "parameterOrder": ["resource"], "response": { "$ref": "Policy" }, "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"] }, "create": { "request": { "$ref": "Folder" }, "description": "Creates a Folder in the resource hierarchy.\nReturns an Operation which can be used to track the progress of the\nfolder creation workflow.\nUpon success the Operation.response field will be populated with the\ncreated Folder.\n\nIn order to succeed, the addition of this new Folder must not violate\nthe Folder naming, height or fanout constraints.\n\n+ The Folder's display_name must be distinct from all other Folder's that\nshare its parent.\n+ The addition of the Folder must not cause the active Folder hierarchy\nto exceed a height of 4. Note, the full active + deleted Folder hierarchy\nis allowed to reach a height of 8; this provides additional headroom when\nmoving folders that contain deleted folders.\n+ The addition of the Folder must not cause the total number of Folders\nunder its parent to exceed 100.\n\nIf the operation fails due to a folder constraint violation, some errors\nmay be returned by the CreateFolder request, with status code\nFAILED_PRECONDITION and an error description. Other folder constraint\nviolations will be communicated in the Operation, with the specific\nPreconditionFailure returned via the details list in the Operation.error\nfield.\n\nThe caller must have `resourcemanager.folders.create` permission on the\nidentified parent.", "response": { "$ref": "Operation" }, "parameterOrder": [], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "parent": { "location": "query", "description": "The resource name of the new Folder's parent.\nMust be of the form `folders/{folder_id}` or `organizations/{org_id}`.", "type": "string" } }, "flatPath": "v2/folders", "path": "v2/folders", "id": "cloudresourcemanager.folders.create" }, "getIamPolicy": { "request": { "$ref": "GetIamPolicyRequest" }, "description": "Gets the access control policy for a Folder. The returned policy may be\nempty if no such policy or resource exists. The `resource` field should\nbe the Folder's resource name, e.g. \"folders/1234\".\nThe caller must have `resourcemanager.folders.getIamPolicy` permission\non the identified folder.", "response": { "$ref": "Policy" }, "parameterOrder": ["resource"], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only"], "parameters": { "resource": { "location": "path", "description": "REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^folders/[^/]+$" } }, "flatPath": "v2/folders/{foldersId}:getIamPolicy", "path": "v2/{+resource}:getIamPolicy", "id": "cloudresourcemanager.folders.getIamPolicy" }, "search": { "path": "v2/folders:search", "id": "cloudresourcemanager.folders.search", "description": "Search for folders that match specific filter criteria.\nSearch provides an eventually consistent view of the folders a user has\naccess to which meet the specified filter criteria.\n\nThis will only return folders on which the caller has the\npermission `resourcemanager.folders.get`.", "request": { "$ref": "SearchFoldersRequest" }, "response": { "$ref": "SearchFoldersResponse" }, "parameterOrder": [], "httpMethod": "POST", "parameters": {}, "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only"], "flatPath": "v2/folders:search" }, "patch": { "flatPath": "v2/folders/{foldersId}", "path": "v2/{+name}", "id": "cloudresourcemanager.folders.patch", "request": { "$ref": "Folder" }, "description": "Updates a Folder, changing its display_name.\nChanges to the folder display_name will be rejected if they violate either\nthe display_name formatting rules or naming constraints described in\nthe CreateFolder documentation.\n\nThe Folder's display name must start and end with a letter or digit,\nmay contain letters, digits, spaces, hyphens and underscores and can be\nno longer than 30 characters. This is captured by the regular expression:\n[\\p{L}\\p{N}]([\\p{L}\\p{N}_- ]{0,28}[\\p{L}\\p{N}])?.\nThe caller must have `resourcemanager.folders.update` permission on the\nidentified folder.\n\nIf the update fails due to the unique name constraint then a\nPreconditionFailure explaining this violation will be returned\nin the Status.details field.", "response": { "$ref": "Folder" }, "parameterOrder": ["name"], "httpMethod": "PATCH", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "updateMask": { "description": "Fields to be updated.\nOnly the `display_name` can be updated.", "format": "google-fieldmask", "type": "string", "location": "query" }, "name": { "description": "Output only. The resource name of the Folder.\nIts format is `folders/{folder_id}`, for example: \"folders/1234\".", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } } }, "get": { "parameters": { "name": { "description": "The resource name of the Folder to retrieve.\nMust be of the form `folders/{folder_id}`.", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only"], "flatPath": "v2/folders/{foldersId}", "id": "cloudresourcemanager.folders.get", "path": "v2/{+name}", "description": "Retrieves a Folder identified by the supplied resource name.\nValid Folder resource names have the format `folders/{folder_id}`\n(for example, `folders/1234`).\nThe caller must have `resourcemanager.folders.get` permission on the\nidentified folder.", "httpMethod": "GET", "response": { "$ref": "Folder" }, "parameterOrder": ["name"] }, "undelete": { "flatPath": "v2/folders/{foldersId}:undelete", "path": "v2/{+name}:undelete", "id": "cloudresourcemanager.folders.undelete", "description": "Cancels the deletion request for a Folder. This method may only be\ncalled on a Folder in the\nDELETE_REQUESTED state.\nIn order to succeed, the Folder's parent must be in the\nACTIVE state.\nIn addition, reintroducing the folder into the tree must not violate\nfolder naming, height and fanout constraints described in the\nCreateFolder documentation.\nThe caller must have `resourcemanager.folders.undelete` permission on the\nidentified folder.", "request": { "$ref": "UndeleteFolderRequest" }, "response": { "$ref": "Folder" }, "parameterOrder": ["name"], "httpMethod": "POST", "parameters": { "name": { "description": "The resource name of the Folder to undelete.\nMust be of the form `folders/{folder_id}`.", "required": true, "type": "string", "pattern": "^folders/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"] } } } }, "parameters": { "alt": { "enum": ["json", "media", "proto"], "type": "string", "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"], "location": "query", "description": "Data format for response.", "default": "json" }, "key": { "location": "query", "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "type": "string" }, "access_token": { "description": "OAuth access token.", "type": "string", "location": "query" }, "upload_protocol": { "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").", "type": "string", "location": "query" }, "quotaUser": { "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.", "type": "string", "location": "query" }, "prettyPrint": { "description": "Returns response with indentations and line breaks.", "type": "boolean", "default": "true", "location": "query" }, "uploadType": { "type": "string", "location": "query", "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")." }, "fields": { "location": "query", "description": "Selector specifying which fields to include in a partial response.", "type": "string" }, "callback": { "description": "JSONP", "type": "string", "location": "query" }, "oauth_token": { "description": "OAuth 2.0 token for the current user.", "type": "string", "location": "query" }, "$.xgafv": { "enumDescriptions": ["v1 error format", "v2 error format"], "location": "query", "enum": ["1", "2"], "description": "V1 error format.", "type": "string" } }, "version": "v2beta1", "baseUrl": "https://cloudresourcemanager.googleapis.com/", "kind": "discovery#restDescription", "description": "The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.", "servicePath": "", "basePath": "", "id": "cloudresourcemanager:v2beta1", "documentationLink": "https://cloud.google.com/resource-manager", "revision": "20180910", "discoveryVersion": "v1", "schemas": { "MoveFolderRequest": { "description": "The MoveFolder request message.", "type": "object", "properties": { "destinationParent": { "description": "The resource name of the Folder or Organization to reparent\nthe folder under.\nMust be of the form `folders/{folder_id}` or `organizations/{org_id}`.", "type": "string" } }, "id": "MoveFolderRequest" }, "SearchFoldersResponse": { "properties": { "folders": { "description": "A possibly paginated folder search results.\nthe specified parent resource.", "type": "array", "items": { "$ref": "Folder" } }, "nextPageToken": { "description": "A pagination token returned from a previous call to `SearchFolders`\nthat indicates from where searching should continue.\nThis field is optional.", "type": "string" } }, "id": "SearchFoldersResponse", "description": "The response message for searching folders.", "type": "object" }, "SetIamPolicyRequest": { "description": "Request message for `SetIamPolicy` method.", "type": "object", "properties": { "policy": { "$ref": "Policy", "description": "REQUIRED: The complete policy to be applied to the `resource`. The size of\nthe policy is limited to a few 10s of KB. An empty policy is a\nvalid policy but certain Cloud Platform services (such as Projects)\nmight reject them." }, "updateMask": { "description": "OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only\nthe fields in the mask will be modified. If no mask is provided, the\nfollowing default mask is used:\npaths: \"bindings, etag\"\nThis field is only used by Cloud IAM.", "format": "google-fieldmask", "type": "string" } }, "id": "SetIamPolicyRequest" }, "Status": { "description": "The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.", "type": "object", "properties": { "code": { "type": "integer", "description": "The status code, which should be an enum value of google.rpc.Code.", "format": "int32" }, "message": { "description": "A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.", "type": "string" }, "details": { "description": "A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.", "type": "array", "items": { "additionalProperties": { "type": "any", "description": "Properties of the object. Contains field @type with type URL." }, "type": "object" } } }, "id": "Status" }, "Binding": { "description": "Associates `members` with a `role`.", "type": "object", "properties": { "role": { "description": "Role that is assigned to `members`.\nFor example, `roles/viewer`, `roles/editor`, or `roles/owner`.", "type": "string" }, "condition": { "$ref": "Expr", "description": "Unimplemented. The condition that is associated with this binding.\nNOTE: an unsatisfied condition will not allow user access via current\nbinding. Different bindings, including their conditions, are examined\nindependently." }, "members": { "description": "Specifies the identities requesting access for a Cloud Platform resource.\n`members` can have the following values:\n\n* `allUsers`: A special identifier that represents anyone who is\n   on the internet; with or without a Google account.\n\n* `allAuthenticatedUsers`: A special identifier that represents anyone\n   who is authenticated with a Google account or a service account.\n\n* `user:{emailid}`: An email address that represents a specific Google\n   account. For example, `alice@gmail.com` .\n\n\n* `serviceAccount:{emailid}`: An email address that represents a service\n   account. For example, `my-other-app@appspot.gserviceaccount.com`.\n\n* `group:{emailid}`: An email address that represents a Google group.\n   For example, `admins@example.com`.\n\n\n* `domain:{domain}`: A Google Apps domain name that represents all the\n   users of that domain. For example, `google.com` or `example.com`.\n\n", "type": "array", "items": { "type": "string" } } }, "id": "Binding" }, "Expr": { "description": "Represents an expression text. Example:\n\n    title: \"User account presence\"\n    description: \"Determines whether the request has a user account\"\n    expression: \"size(request.user) > 0\"", "type": "object", "properties": { "title": { "description": "An optional title for the expression, i.e. a short string describing\nits purpose. This can be used e.g. in UIs which allow to enter the\nexpression.", "type": "string" }, "location": { "description": "An optional string indicating the location of the expression for error\nreporting, e.g. a file name and a position in the file.", "type": "string" }, "description": { "description": "An optional description of the expression. This is a longer text which\ndescribes the expression, e.g. when hovered over it in a UI.", "type": "string" }, "expression": { "description": "Textual representation of an expression in\nCommon Expression Language syntax.\n\nThe application context of the containing message determines which\nwell-known feature set of CEL is supported.", "type": "string" } }, "id": "Expr" }, "SearchFoldersRequest": { "description": "The request message for searching folders.", "type": "object", "properties": { "pageToken": { "description": "A pagination token returned from a previous call to `SearchFolders`\nthat indicates from where search should continue.\nThis field is optional.", "type": "string" }, "pageSize": { "description": "The maximum number of folders to return in the response.\nThis field is optional.", "format": "int32", "type": "integer" }, "query": { "description": "Search criteria used to select the Folders to return.\nIf no search criteria is specified then all accessible folders will be\nreturned.\n\nQuery expressions can be used to restrict results based upon displayName,\nlifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR`\ncan be used along with the suffix wildcard symbol `*`.\n\nThe displayName field in a query expression should use escaped quotes\nfor values that include whitespace to prevent unexpected behavior.\n\nSome example queries are:\n\n|Query | Description|\n|----- | -----------|\n|displayName=Test* | Folders whose display name starts with \"Test\".|\n|lifecycleState=ACTIVE | Folders whose lifecycleState is ACTIVE.|\n|parent=folders/123 | Folders whose parent is \"folders/123\".|\n|parent=folders/123 AND lifecycleState=ACTIVE | Active folders whose parent is \"folders/123\".|\n|displayName=\\\\\"Test String\\\\\"|Folders whose display name includes both \"Test\" and \"String\".|", "type": "string" } }, "id": "SearchFoldersRequest" }, "ProjectCreationStatus": { "description": "A status object which is used as the `metadata` field for the Operation\nreturned by CreateProject. It provides insight for when significant phases of\nProject creation have completed.", "type": "object", "properties": { "ready": { "description": "True if the project creation process is complete.", "type": "boolean" }, "createTime": { "description": "Creation time of the project creation workflow.", "format": "google-datetime", "type": "string" }, "gettable": { "description": "True if the project can be retrieved using GetProject. No other operations\non the project are guaranteed to work until the project creation is\ncomplete.", "type": "boolean" } }, "id": "ProjectCreationStatus" }, "Folder": { "description": "A Folder in an Organization's resource hierarchy, used to\norganize that Organization's resources.", "type": "object", "properties": { "parent": { "description": "The Folder’s parent's resource name.\nUpdates to the folder's parent must be performed via\nMoveFolder.", "type": "string" }, "createTime": { "description": "Output only. Timestamp when the Folder was created. Assigned by the server.", "format": "google-datetime", "type": "string" }, "lifecycleState": { "description": "Output only.  The lifecycle state of the folder.\nUpdates to the lifecycle_state must be performed via\nDeleteFolder and\nUndeleteFolder.", "type": "string", "enumDescriptions": ["Unspecified state.", "The normal and active state.", "The folder has been marked for deletion by the user."], "enum": ["LIFECYCLE_STATE_UNSPECIFIED", "ACTIVE", "DELETE_REQUESTED"] }, "name": { "description": "Output only. The resource name of the Folder.\nIts format is `folders/{folder_id}`, for example: \"folders/1234\".", "type": "string" }, "displayName": { "description": "The folder’s display name.\nA folder’s display name must be unique amongst its siblings, e.g.\nno two folders with the same parent can share the same display name.\nThe display name must start and end with a letter or digit, may contain\nletters, digits, spaces, hyphens and underscores and can be no longer\nthan 30 characters. This is captured by the regular expression:\n[\\p{L}\\p{N}]([\\p{L}\\p{N}_- ]{0,28}[\\p{L}\\p{N}])?.", "type": "string" } }, "id": "Folder" }, "TestIamPermissionsResponse": { "properties": { "permissions": { "description": "A subset of `TestPermissionsRequest.permissions` that the caller is\nallowed.", "type": "array", "items": { "type": "string" } } }, "id": "TestIamPermissionsResponse", "description": "Response message for `TestIamPermissions` method.", "type": "object" }, "GetIamPolicyRequest": { "type": "object", "properties": {}, "id": "GetIamPolicyRequest", "description": "Request message for `GetIamPolicy` method." }, "UndeleteFolderRequest": { "description": "The UndeleteFolder request message.", "type": "object", "properties": {}, "id": "UndeleteFolderRequest" }, "AuditLogConfig": { "description": "Provides the configuration for logging a type of permissions.\nExample:\n\n    {\n      \"audit_log_configs\": [\n        {\n          \"log_type\": \"DATA_READ\",\n          \"exempted_members\": [\n            \"user:foo@gmail.com\"\n          ]\n        },\n        {\n          \"log_type\": \"DATA_WRITE\",\n        }\n      ]\n    }\n\nThis enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting\nfoo@gmail.com from DATA_READ logging.", "type": "object", "properties": { "exemptedMembers": { "description": "Specifies the identities that do not cause logging for this type of\npermission.\nFollows the same format of Binding.members.", "type": "array", "items": { "type": "string" } }, "logType": { "enumDescriptions": ["Default case. Should never be this.", "Admin reads. Example: CloudIAM getIamPolicy", "Data writes. Example: CloudSQL Users create", "Data reads. Example: CloudSQL Users list"], "enum": ["LOG_TYPE_UNSPECIFIED", "ADMIN_READ", "DATA_WRITE", "DATA_READ"], "description": "The log type that this config enables.", "type": "string" } }, "id": "AuditLogConfig" }, "TestIamPermissionsRequest": { "type": "object", "properties": { "permissions": { "description": "The set of permissions to check for the `resource`. Permissions with\nwildcards (such as '*' or 'storage.*') are not allowed. For more\ninformation see\n[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).", "type": "array", "items": { "type": "string" } } }, "id": "TestIamPermissionsRequest", "description": "Request message for `TestIamPermissions` method." }, "Policy": { "description": "Defines an Identity and Access Management (IAM) policy. It is used to\nspecify access control policies for Cloud Platform resources.\n\n\nA `Policy` consists of a list of `bindings`. A `binding` binds a list of\n`members` to a `role`, where the members can be user accounts, Google groups,\nGoogle domains, and service accounts. A `role` is a named list of permissions\ndefined by IAM.\n\n**JSON Example**\n\n    {\n      \"bindings\": [\n        {\n          \"role\": \"roles/owner\",\n          \"members\": [\n            \"user:mike@example.com\",\n            \"group:admins@example.com\",\n            \"domain:google.com\",\n            \"serviceAccount:my-other-app@appspot.gserviceaccount.com\"\n          ]\n        },\n        {\n          \"role\": \"roles/viewer\",\n          \"members\": [\"user:sean@example.com\"]\n        }\n      ]\n    }\n\n**YAML Example**\n\n    bindings:\n    - members:\n      - user:mike@example.com\n      - group:admins@example.com\n      - domain:google.com\n      - serviceAccount:my-other-app@appspot.gserviceaccount.com\n      role: roles/owner\n    - members:\n      - user:sean@example.com\n      role: roles/viewer\n\n\nFor a description of IAM and its features, see the\n[IAM developer's guide](https://cloud.google.com/iam/docs).", "type": "object", "properties": { "etag": { "type": "string", "description": "`etag` is used for optimistic concurrency control as a way to help\nprevent simultaneous updates of a policy from overwriting each other.\nIt is strongly suggested that systems make use of the `etag` in the\nread-modify-write cycle to perform policy updates in order to avoid race\nconditions: An `etag` is returned in the response to `getIamPolicy`, and\nsystems are expected to put that etag in the request to `setIamPolicy` to\nensure that their change will be applied to the same version of the policy.\n\nIf no `etag` is provided in the call to `setIamPolicy`, then the existing\npolicy is overwritten blindly.", "format": "byte" }, "version": { "type": "integer", "description": "Deprecated.", "format": "int32" }, "auditConfigs": { "description": "Specifies cloud audit logging configuration for this policy.", "type": "array", "items": { "$ref": "AuditConfig" } }, "bindings": { "description": "Associates a list of `members` to a `role`.\n`bindings` with no members will result in an error.", "type": "array", "items": { "$ref": "Binding" } } }, "id": "Policy" }, "FolderOperation": { "description": "Metadata describing a long running folder operation", "type": "object", "properties": { "operationType": { "type": "string", "enumDescriptions": ["Operation type not specified.", "A create folder operation.", "A move folder operation."], "enum": ["OPERATION_TYPE_UNSPECIFIED", "CREATE", "MOVE"], "description": "The type of this operation." }, "displayName": { "description": "The display name of the folder.", "type": "string" }, "sourceParent": { "type": "string", "description": "The resource name of the folder's parent.\nOnly applicable when the operation_type is MOVE." }, "destinationParent": { "description": "The resource name of the folder or organization we are either creating\nthe folder under or moving the folder to.", "type": "string" } }, "id": "FolderOperation" }, "FolderOperationError": { "description": "A classification of the Folder Operation error.", "type": "object", "properties": { "errorMessageId": { "enumDescriptions": ["The error type was unrecognized or unspecified.", "The attempted action would violate the max folder depth constraint.", "The attempted action would violate the max child folders constraint.", "The attempted action would violate the locally-unique folder\ndisplay_name constraint.", "The resource being moved has been deleted.", "The resource a folder was being added to has been deleted.", "The attempted action would introduce cycle in resource path.", "The attempted action would move a folder that is already being moved.", "The folder the caller is trying to delete contains active resources.", "The attempted action would violate the max deleted folder depth\nconstraint."], "enum": ["ERROR_TYPE_UNSPECIFIED", "ACTIVE_FOLDER_HEIGHT_VIOLATION", "MAX_CHILD_FOLDERS_VIOLATION", "FOLDER_NAME_UNIQUENESS_VIOLATION", "RESOURCE_DELETED_VIOLATION", "PARENT_DELETED_VIOLATION", "CYCLE_INTRODUCED_VIOLATION", "FOLDER_BEING_MOVED_VIOLATION", "FOLDER_TO_DELETE_NON_EMPTY_VIOLATION", "DELETED_FOLDER_HEIGHT_VIOLATION"], "description": "The type of operation error experienced.", "type": "string" } }, "id": "FolderOperationError" }, "Operation": { "description": "This resource represents a long-running operation that is the result of a\nnetwork API call.", "type": "object", "properties": { "metadata": { "additionalProperties": { "description": "Properties of the object. Contains field @type with type URL.", "type": "any" }, "description": "Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.", "type": "object" }, "done": { "description": "If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.", "type": "boolean" }, "response": { "additionalProperties": { "description": "Properties of the object. Contains field @type with type URL.", "type": "any" }, "description": "The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.", "type": "object" }, "name": { "description": "The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.", "type": "string" }, "error": { "$ref": "Status", "description": "The error result of the operation in case of failure or cancellation." } }, "id": "Operation" }, "AuditConfig": { "description": "Specifies the audit configuration for a service.\nThe configuration determines which permission types are logged, and what\nidentities, if any, are exempted from logging.\nAn AuditConfig must have one or more AuditLogConfigs.\n\nIf there are AuditConfigs for both `allServices` and a specific service,\nthe union of the two AuditConfigs is used for that service: the log_types\nspecified in each AuditConfig are enabled, and the exempted_members in each\nAuditLogConfig are exempted.\n\nExample Policy with multiple AuditConfigs:\n\n    {\n      \"audit_configs\": [\n        {\n          \"service\": \"allServices\"\n          \"audit_log_configs\": [\n            {\n              \"log_type\": \"DATA_READ\",\n              \"exempted_members\": [\n                \"user:foo@gmail.com\"\n              ]\n            },\n            {\n              \"log_type\": \"DATA_WRITE\",\n            },\n            {\n              \"log_type\": \"ADMIN_READ\",\n            }\n          ]\n        },\n        {\n          \"service\": \"fooservice.googleapis.com\"\n          \"audit_log_configs\": [\n            {\n              \"log_type\": \"DATA_READ\",\n            },\n            {\n              \"log_type\": \"DATA_WRITE\",\n              \"exempted_members\": [\n                \"user:bar@gmail.com\"\n              ]\n            }\n          ]\n        }\n      ]\n    }\n\nFor fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ\nlogging. It also exempts foo@gmail.com from DATA_READ logging, and\nbar@gmail.com from DATA_WRITE logging.", "type": "object", "properties": { "service": { "description": "Specifies a service that will be enabled for audit logging.\nFor example, `storage.googleapis.com`, `cloudsql.googleapis.com`.\n`allServices` is a special value that covers all services.", "type": "string" }, "auditLogConfigs": { "description": "The configuration for logging of each type of permission.", "type": "array", "items": { "$ref": "AuditLogConfig" } } }, "id": "AuditConfig" }, "ListFoldersResponse": { "description": "The ListFolders response message.", "type": "object", "properties": { "nextPageToken": { "description": "A pagination token returned from a previous call to `ListFolders`\nthat indicates from where listing should continue.\nThis field is optional.", "type": "string" }, "folders": { "description": "A possibly paginated list of Folders that are direct descendants of\nthe specified parent resource.", "type": "array", "items": { "$ref": "Folder" } } }, "id": "ListFoldersResponse" } }, "protocol": "rest", "icons": { "x32": "http://www.google.com/images/icons/product/search-32.gif", "x16": "http://www.google.com/images/icons/product/search-16.gif" }, "canonicalName": "Cloud Resource Manager", "auth": { "oauth2": { "scopes": { "https://www.googleapis.com/auth/cloud-platform": { "description": "View and manage your data across Google Cloud Platform services" }, "https://www.googleapis.com/auth/cloud-platform.read-only": { "description": "View your data across Google Cloud Platform services" } } } } };
//# sourceMappingURL=cloudresourcemanager-v2beta1.js.map