"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "rootUrl": "https://binaryauthorization.googleapis.com/", "ownerDomain": "google.com", "name": "binaryauthorization", "batchPath": "batch", "fullyEncodeReservedExpansion": true, "title": "Binary Authorization API", "ownerName": "Google", "resources": { "projects": { "methods": { "getPolicy": { "description": "Gets the policy for this project. Returns a default\npolicy if the project does not have one.", "response": { "$ref": "Policy" }, "parameterOrder": ["name"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "name": { "location": "path", "description": "Required. The resource name of the policy to retrieve,\nin the format `projects/*/policy`.", "required": true, "type": "string", "pattern": "^projects/[^/]+/policy$" } }, "flatPath": "v1beta1/projects/{projectsId}/policy", "path": "v1beta1/{+name}", "id": "binaryauthorization.projects.getPolicy" }, "updatePolicy": { "description": "Creates or updates a project's policy, and returns a copy of the\nnew policy. A policy is always updated as a whole, to avoid race\nconditions with concurrent policy enforcement (or management!)\nrequests. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT\nif the request is malformed.", "request": { "$ref": "Policy" }, "httpMethod": "PUT", "parameterOrder": ["name"], "response": { "$ref": "Policy" }, "parameters": { "name": { "description": "Output only. The resource name, in the format `projects/*/policy`. There is\nat most one policy per project.", "required": true, "type": "string", "pattern": "^projects/[^/]+/policy$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/policy", "id": "binaryauthorization.projects.updatePolicy", "path": "v1beta1/{+name}" } }, "resources": { "attestors": { "methods": { "update": { "description": "Updates an attestor.\nReturns NOT_FOUND if the attestor does not exist.", "request": { "$ref": "Attestor" }, "httpMethod": "PUT", "parameterOrder": ["name"], "response": { "$ref": "Attestor" }, "parameters": { "name": { "description": "Required. The resource name, in the format:\n`projects/*/attestors/*`. This field may not be updated.", "required": true, "type": "string", "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}", "id": "binaryauthorization.projects.attestors.update", "path": "v1beta1/{+name}" }, "testIamPermissions": { "response": { "$ref": "TestIamPermissionsResponse" }, "parameterOrder": ["resource"], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path" } }, "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}:testIamPermissions", "path": "v1beta1/{+resource}:testIamPermissions", "id": "binaryauthorization.projects.attestors.testIamPermissions", "request": { "$ref": "TestIamPermissionsRequest" }, "description": "Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay \"fail open\" without warning." }, "delete": { "description": "Deletes an attestor. Returns NOT_FOUND if the\nattestor does not exist.", "response": { "$ref": "Empty" }, "parameterOrder": ["name"], "httpMethod": "DELETE", "parameters": { "name": { "description": "Required. The name of the attestors to delete, in the format\n`projects/*/attestors/*`.", "required": true, "type": "string", "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}", "path": "v1beta1/{+name}", "id": "binaryauthorization.projects.attestors.delete" }, "list": { "path": "v1beta1/{+parent}/attestors", "id": "binaryauthorization.projects.attestors.list", "description": "Lists attestors.\nReturns INVALID_ARGUMENT if the project does not exist.", "response": { "$ref": "ListAttestorsResponse" }, "parameterOrder": ["parent"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "pageSize": { "location": "query", "description": "Requested page size. The server may return fewer results than requested. If\nunspecified, the server will pick an appropriate default.", "format": "int32", "type": "integer" }, "parent": { "pattern": "^projects/[^/]+$", "location": "path", "description": "Required. The resource name of the project associated with the\nattestors, in the format `projects/*`.", "required": true, "type": "string" }, "pageToken": { "location": "query", "description": "A token identifying a page of results the server should return. Typically,\nthis is the value of ListAttestorsResponse.next_page_token returned\nfrom the previous call to the `ListAttestors` method.", "type": "string" } }, "flatPath": "v1beta1/projects/{projectsId}/attestors" }, "setIamPolicy": { "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}:setIamPolicy", "id": "binaryauthorization.projects.attestors.setIamPolicy", "path": "v1beta1/{+resource}:setIamPolicy", "description": "Sets the access control policy on the specified resource. Replaces any\nexisting policy.", "request": { "$ref": "SetIamPolicyRequest" }, "httpMethod": "POST", "parameterOrder": ["resource"], "response": { "$ref": "IamPolicy" }, "parameters": { "resource": { "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path", "description": "REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"] }, "create": { "response": { "$ref": "Attestor" }, "parameterOrder": ["parent"], "httpMethod": "POST", "parameters": { "parent": { "location": "path", "description": "Required. The parent of this attestor.", "required": true, "type": "string", "pattern": "^projects/[^/]+$" }, "attestorId": { "location": "query", "description": "Required. The attestors ID.", "type": "string" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/attestors", "path": "v1beta1/{+parent}/attestors", "id": "binaryauthorization.projects.attestors.create", "description": "Creates an attestor, and returns a copy of the new\nattestor. Returns NOT_FOUND if the project does not exist,\nINVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the\nattestor already exists.", "request": { "$ref": "Attestor" } }, "getIamPolicy": { "response": { "$ref": "IamPolicy" }, "parameterOrder": ["resource"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path" } }, "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}:getIamPolicy", "path": "v1beta1/{+resource}:getIamPolicy", "id": "binaryauthorization.projects.attestors.getIamPolicy", "description": "Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset." }, "get": { "response": { "$ref": "Attestor" }, "parameterOrder": ["name"], "httpMethod": "GET", "parameters": { "name": { "description": "Required. The name of the attestor to retrieve, in the format\n`projects/*/attestors/*`.", "required": true, "type": "string", "pattern": "^projects/[^/]+/attestors/[^/]+$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/attestors/{attestorsId}", "path": "v1beta1/{+name}", "id": "binaryauthorization.projects.attestors.get", "description": "Gets an attestor.\nReturns NOT_FOUND if the attestor does not exist." } } }, "policy": { "methods": { "setIamPolicy": { "httpMethod": "POST", "parameterOrder": ["resource"], "response": { "$ref": "IamPolicy" }, "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^projects/[^/]+/policy$", "location": "path" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "flatPath": "v1beta1/projects/{projectsId}/policy:setIamPolicy", "id": "binaryauthorization.projects.policy.setIamPolicy", "path": "v1beta1/{+resource}:setIamPolicy", "description": "Sets the access control policy on the specified resource. Replaces any\nexisting policy.", "request": { "$ref": "SetIamPolicyRequest" } }, "testIamPermissions": { "request": { "$ref": "TestIamPermissionsRequest" }, "description": "Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay \"fail open\" without warning.", "response": { "$ref": "TestIamPermissionsResponse" }, "parameterOrder": ["resource"], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "resource": { "location": "path", "description": "REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^projects/[^/]+/policy$" } }, "flatPath": "v1beta1/projects/{projectsId}/policy:testIamPermissions", "path": "v1beta1/{+resource}:testIamPermissions", "id": "binaryauthorization.projects.policy.testIamPermissions" }, "getIamPolicy": { "flatPath": "v1beta1/projects/{projectsId}/policy:getIamPolicy", "path": "v1beta1/{+resource}:getIamPolicy", "id": "binaryauthorization.projects.policy.getIamPolicy", "description": "Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset.", "response": { "$ref": "IamPolicy" }, "parameterOrder": ["resource"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform"], "parameters": { "resource": { "description": "REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.", "required": true, "type": "string", "pattern": "^projects/[^/]+/policy$", "location": "path" } } } } } } } }, "parameters": { "key": { "location": "query", "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "type": "string" }, "access_token": { "location": "query", "description": "OAuth access token.", "type": "string" }, "upload_protocol": { "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").", "type": "string", "location": "query" }, "prettyPrint": { "description": "Returns response with indentations and line breaks.", "type": "boolean", "default": "true", "location": "query" }, "quotaUser": { "location": "query", "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.", "type": "string" }, "uploadType": { "location": "query", "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").", "type": "string" }, "fields": { "location": "query", "description": "Selector specifying which fields to include in a partial response.", "type": "string" }, "$.xgafv": { "enumDescriptions": ["v1 error format", "v2 error format"], "location": "query", "enum": ["1", "2"], "description": "V1 error format.", "type": "string" }, "oauth_token": { "location": "query", "description": "OAuth 2.0 token for the current user.", "type": "string" }, "callback": { "description": "JSONP", "type": "string", "location": "query" }, "alt": { "type": "string", "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"], "location": "query", "description": "Data format for response.", "default": "json", "enum": ["json", "media", "proto"] } }, "version": "v1beta1", "baseUrl": "https://binaryauthorization.googleapis.com/", "kind": "discovery#restDescription", "description": "The management interface for Binary Authorization, a system providing policy control for images deployed to Kubernetes Engine clusters.\n", "servicePath": "", "basePath": "", "id": "binaryauthorization:v1beta1", "documentationLink": "https://cloud.google.com/binary-authorization/", "revision": "20180911", "discoveryVersion": "v1", "version_module": true, "schemas": { "UserOwnedDrydockNote": { "description": "An user owned drydock note references a Drydock\nATTESTATION_AUTHORITY Note created by the user.", "type": "object", "properties": { "noteReference": { "description": "Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note,\ncreated by the user, in the format: `projects/*/notes/*` (or the legacy\n`providers/*/notes/*`). This field may not be updated.\n\nAn attestation by this attestor is stored as a Drydock\nATTESTATION_AUTHORITY Occurrence that names a container image and that\nlinks to this Note. Drydock is an external dependency.", "type": "string" }, "delegationServiceAccountEmail": { "description": "Output only. This field will contain the service account email address\nthat this Attestor will use as the principal when querying Container\nAnalysis. Attestor administrators must grant this service account the\nIAM role needed to read attestations from the note_reference in\nContainer Analysis (`containeranalysis.notes.occurrences.viewer`).\n\nThis email address is fixed for the lifetime of the Attestor, but callers\nshould not make any other assumptions about the service account email;\nfuture versions may use an email based on a different naming pattern.", "type": "string" }, "publicKeys": { "description": "Optional. Public keys that verify attestations signed by this\nattestor.  This field may be updated.\n\nIf this field is non-empty, one of the specified public keys must\nverify that an attestation was signed by this attestor for the\nimage specified in the admission request.\n\nIf this field is empty, this attestor always returns that no\nvalid attestations exist.", "type": "array", "items": { "$ref": "AttestorPublicKey" } } }, "id": "UserOwnedDrydockNote" }, "TestIamPermissionsResponse": { "description": "Response message for `TestIamPermissions` method.", "type": "object", "properties": { "permissions": { "description": "A subset of `TestPermissionsRequest.permissions` that the caller is\nallowed.", "type": "array", "items": { "type": "string" } } }, "id": "TestIamPermissionsResponse" }, "ListAttestorsResponse": { "description": "Response message for BinauthzManagementService.ListAttestors.", "type": "object", "properties": { "attestors": { "description": "The list of attestors.", "type": "array", "items": { "$ref": "Attestor" } }, "nextPageToken": { "description": "A token to retrieve the next page of results. Pass this value in the\nListAttestorsRequest.page_token field in the subsequent call to the\n`ListAttestors` method to retrieve the next page of results.", "type": "string" } }, "id": "ListAttestorsResponse" }, "TestIamPermissionsRequest": { "properties": { "permissions": { "description": "The set of permissions to check for the `resource`. Permissions with\nwildcards (such as '*' or 'storage.*') are not allowed. For more\ninformation see\n[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).", "type": "array", "items": { "type": "string" } } }, "id": "TestIamPermissionsRequest", "description": "Request message for `TestIamPermissions` method.", "type": "object" }, "Policy": { "description": "A policy for container image binary authorization.", "type": "object", "properties": { "admissionWhitelistPatterns": { "description": "Optional. Admission policy whitelisting. A matching admission request will\nalways be permitted. This feature is typically used to exclude Google or\nthird-party infrastructure images from Binary Authorization policies.", "type": "array", "items": { "$ref": "AdmissionWhitelistPattern" } }, "updateTime": { "description": "Output only. Time when the policy was last updated.", "format": "google-datetime", "type": "string" }, "name": { "description": "Output only. The resource name, in the format `projects/*/policy`. There is\nat most one policy per project.", "type": "string" }, "defaultAdmissionRule": { "$ref": "AdmissionRule", "description": "Required. Default admission rule for a cluster without a per-cluster\nadmission rule." }, "clusterAdmissionRules": { "additionalProperties": { "$ref": "AdmissionRule" }, "description": "Optional. Per-cluster admission rules. Cluster spec format:\n`location.clusterId`. There can be at most one admission rule per cluster\nspec.\nA `location` is either a compute zone (e.g. us-central1-a) or a region\n(e.g. us-central1).\nFor `clusterId` syntax restrictions see\nhttps://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.", "type": "object" }, "description": { "description": "Optional. A descriptive comment.", "type": "string" } }, "id": "Policy" }, "AdmissionRule": { "description": "An admission rule specifies either that all container images\nused in a pod creation request must be attested to by one or more\nattestors, that all pod creations will be allowed, or that all\npod creations will be denied.\n\nImages matching an admission whitelist pattern\nare exempted from admission rules and will never block a pod creation.", "type": "object", "properties": { "requireAttestationsBy": { "description": "Optional. The resource names of the attestors that must attest to\na container image, in the format `projects/*/attestors/*`. Each\nattestor must exist before a policy can reference it.  To add an attestor\nto a policy the principal issuing the policy change request must be able\nto read the attestor resource.\n\nNote: this field must be non-empty when the evaluation_mode field specifies\nREQUIRE_ATTESTATION, otherwise it must be empty.", "type": "array", "items": { "type": "string" } }, "evaluationMode": { "enumDescriptions": ["Mandatory.", "This rule allows all all pod creations.", "This rule allows a pod creation if all the attestors listed in\n'require_attestations_by' have valid attestations for all of the\nimages in the pod spec.", "This rule denies all pod creations."], "enum": ["EVALUATION_MODE_UNSPECIFIED", "ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"], "description": "Required. How this admission rule will be evaluated.", "type": "string" }, "enforcementMode": { "description": "Required. The action when a pod creation is denied by the admission rule.", "type": "string", "enumDescriptions": ["Mandatory.", "Enforce the admission rule by blocking the pod creation."], "enum": ["ENFORCEMENT_MODE_UNSPECIFIED", "ENFORCED_BLOCK_AND_AUDIT_LOG"] } }, "id": "AdmissionRule" }, "SetIamPolicyRequest": { "description": "Request message for `SetIamPolicy` method.", "type": "object", "properties": { "policy": { "description": "REQUIRED: The complete policy to be applied to the `resource`. The size of\nthe policy is limited to a few 10s of KB. An empty policy is a\nvalid policy but certain Cloud Platform services (such as Projects)\nmight reject them.", "$ref": "IamPolicy" } }, "id": "SetIamPolicyRequest" }, "IamPolicy": { "description": "Defines an Identity and Access Management (IAM) policy. It is used to\nspecify access control policies for Cloud Platform resources.\n\n\nA `Policy` consists of a list of `bindings`. A `binding` binds a list of\n`members` to a `role`, where the members can be user accounts, Google groups,\nGoogle domains, and service accounts. A `role` is a named list of permissions\ndefined by IAM.\n\n**JSON Example**\n\n    {\n      \"bindings\": [\n        {\n          \"role\": \"roles/owner\",\n          \"members\": [\n            \"user:mike@example.com\",\n            \"group:admins@example.com\",\n            \"domain:google.com\",\n            \"serviceAccount:my-other-app@appspot.gserviceaccount.com\"\n          ]\n        },\n        {\n          \"role\": \"roles/viewer\",\n          \"members\": [\"user:sean@example.com\"]\n        }\n      ]\n    }\n\n**YAML Example**\n\n    bindings:\n    - members:\n      - user:mike@example.com\n      - group:admins@example.com\n      - domain:google.com\n      - serviceAccount:my-other-app@appspot.gserviceaccount.com\n      role: roles/owner\n    - members:\n      - user:sean@example.com\n      role: roles/viewer\n\n\nFor a description of IAM and its features, see the\n[IAM developer's guide](https://cloud.google.com/iam/docs).", "type": "object", "properties": { "bindings": { "description": "Associates a list of `members` to a `role`.\n`bindings` with no members will result in an error.", "type": "array", "items": { "$ref": "Binding" } }, "etag": { "description": "`etag` is used for optimistic concurrency control as a way to help\nprevent simultaneous updates of a policy from overwriting each other.\nIt is strongly suggested that systems make use of the `etag` in the\nread-modify-write cycle to perform policy updates in order to avoid race\nconditions: An `etag` is returned in the response to `getIamPolicy`, and\nsystems are expected to put that etag in the request to `setIamPolicy` to\nensure that their change will be applied to the same version of the policy.\n\nIf no `etag` is provided in the call to `setIamPolicy`, then the existing\npolicy is overwritten blindly.", "format": "byte", "type": "string" }, "version": { "description": "Deprecated.", "format": "int32", "type": "integer" } }, "id": "IamPolicy" }, "Binding": { "description": "Associates `members` with a `role`.", "type": "object", "properties": { "members": { "description": "Specifies the identities requesting access for a Cloud Platform resource.\n`members` can have the following values:\n\n* `allUsers`: A special identifier that represents anyone who is\n   on the internet; with or without a Google account.\n\n* `allAuthenticatedUsers`: A special identifier that represents anyone\n   who is authenticated with a Google account or a service account.\n\n* `user:{emailid}`: An email address that represents a specific Google\n   account. For example, `alice@gmail.com` .\n\n\n* `serviceAccount:{emailid}`: An email address that represents a service\n   account. For example, `my-other-app@appspot.gserviceaccount.com`.\n\n* `group:{emailid}`: An email address that represents a Google group.\n   For example, `admins@example.com`.\n\n\n* `domain:{domain}`: A Google Apps domain name that represents all the\n   users of that domain. For example, `google.com` or `example.com`.\n\n", "type": "array", "items": { "type": "string" } }, "role": { "description": "Role that is assigned to `members`.\nFor example, `roles/viewer`, `roles/editor`, or `roles/owner`.", "type": "string" }, "condition": { "$ref": "Expr", "description": "Unimplemented. The condition that is associated with this binding.\nNOTE: an unsatisfied condition will not allow user access via current\nbinding. Different bindings, including their conditions, are examined\nindependently." } }, "id": "Binding" }, "Expr": { "properties": { "title": { "description": "An optional title for the expression, i.e. a short string describing\nits purpose. This can be used e.g. in UIs which allow to enter the\nexpression.", "type": "string" }, "location": { "description": "An optional string indicating the location of the expression for error\nreporting, e.g. a file name and a position in the file.", "type": "string" }, "description": { "description": "An optional description of the expression. This is a longer text which\ndescribes the expression, e.g. when hovered over it in a UI.", "type": "string" }, "expression": { "description": "Textual representation of an expression in\nCommon Expression Language syntax.\n\nThe application context of the containing message determines which\nwell-known feature set of CEL is supported.", "type": "string" } }, "id": "Expr", "description": "Represents an expression text. Example:\n\n    title: \"User account presence\"\n    description: \"Determines whether the request has a user account\"\n    expression: \"size(request.user) > 0\"", "type": "object" }, "Empty": { "description": "A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.", "type": "object", "properties": {}, "id": "Empty" }, "AttestorPublicKey": { "properties": { "comment": { "description": "Optional. A descriptive comment. This field may be updated.", "type": "string" }, "id": { "description": "Output only. This field will be overwritten with key ID information, for\nexample, an identifier extracted from a PGP public key. This field may not\nbe updated.", "type": "string" }, "asciiArmoredPgpPublicKey": { "description": "ASCII-armored representation of a PGP public key, as the entire output by\nthe command `gpg --export --armor foo@example.com` (either LF or CRLF\nline endings).", "type": "string" } }, "id": "AttestorPublicKey", "description": "An attestator public key that will be used to\nverify attestations signed by this attestor.", "type": "object" }, "AdmissionWhitelistPattern": { "description": "An admission whitelist pattern exempts images\nfrom checks by admission rules.", "type": "object", "properties": { "namePattern": { "description": "An image name pattern to whitelist, in the form `registry/path/to/image`.\nThis supports a trailing `*` as a wildcard, but this is allowed only in\ntext after the `registry/` part.", "type": "string" } }, "id": "AdmissionWhitelistPattern" }, "Attestor": { "description": "An attestor that attests to container image\nartifacts. An existing attestor cannot be modified except where\nindicated.", "type": "object", "properties": { "updateTime": { "description": "Output only. Time when the attestor was last updated.", "format": "google-datetime", "type": "string" }, "name": { "description": "Required. The resource name, in the format:\n`projects/*/attestors/*`. This field may not be updated.", "type": "string" }, "description": { "description": "Optional. A descriptive comment.  This field may be updated.\nThe field may be displayed in chooser dialogs.", "type": "string" }, "userOwnedDrydockNote": { "description": "A Drydock ATTESTATION_AUTHORITY Note, created by the user.", "$ref": "UserOwnedDrydockNote" } }, "id": "Attestor" } }, "icons": { "x32": "http://www.google.com/images/icons/product/search-32.gif", "x16": "http://www.google.com/images/icons/product/search-16.gif" }, "protocol": "rest", "canonicalName": "Binary Authorization", "auth": { "oauth2": { "scopes": { "https://www.googleapis.com/auth/cloud-platform": { "description": "View and manage your data across Google Cloud Platform services" } } } } };
//# sourceMappingURL=binaryauthorization-v1beta1.js.map