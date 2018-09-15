export default {"id":"oslogin:v1alpha","documentationLink":"https://cloud.google.com/compute/docs/oslogin/rest/","revision":"20180908","discoveryVersion":"v1","version_module":true,"schemas":{"LoginProfile":{"properties":{"name":{"description":"A unique user ID.","type":"string"},"posixAccounts":{"description":"The list of POSIX accounts associated with the user.","type":"array","items":{"$ref":"PosixAccount"}},"sshPublicKeys":{"additionalProperties":{"$ref":"SshPublicKey"},"description":"A map from SSH public key fingerprint to the associated key object.","type":"object"}},"id":"LoginProfile","description":"The user profile information used for logging in to a virtual machine on\nGoogle Compute Engine.","type":"object"},"Empty":{"description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.","type":"object","properties":{},"id":"Empty"},"SshPublicKey":{"properties":{"key":{"description":"Public key text in SSH format, defined by\n<a href=\"https://www.ietf.org/rfc/rfc4253.txt\" target=\"_blank\">RFC4253</a>\nsection 6.6.","type":"string"},"expirationTimeUsec":{"description":"An expiration time in microseconds since epoch.","format":"int64","type":"string"},"fingerprint":{"description":"Output only. The SHA-256 fingerprint of the SSH public key.","type":"string"}},"id":"SshPublicKey","description":"The SSH public key information associated with a Google account.","type":"object"},"ImportSshPublicKeyResponse":{"description":"A response message from importing an SSH public key.","type":"object","properties":{"loginProfile":{"description":"The login profile information for the user.","$ref":"LoginProfile"}},"id":"ImportSshPublicKeyResponse"},"PosixAccount":{"description":"The POSIX account information associated with a Google account.","type":"object","properties":{"uid":{"description":"The user ID.","format":"int64","type":"string"},"username":{"description":"The username of the POSIX account.","type":"string"},"shell":{"description":"The path to the logic shell for this account.","type":"string"},"homeDirectory":{"description":"The path to the home directory for this account.","type":"string"},"systemId":{"description":"System identifier for which account the username or uid applies to.\nBy default, the empty value is used.","type":"string"},"gecos":{"description":"The GECOS (user information) entry for this account.","type":"string"},"primary":{"description":"Only one POSIX account can be marked as primary.","type":"boolean"},"accountId":{"description":"Output only. A POSIX account identifier.","type":"string"},"operatingSystemType":{"enum":["OPERATING_SYSTEM_TYPE_UNSPECIFIED","LINUX","WINDOWS"],"description":"The operating system type where this account applies.","type":"string","enumDescriptions":["The operating system type associated with the user account information is\nunspecified.","Linux user account information.","Windows user account information."]},"gid":{"description":"The default group ID.","format":"int64","type":"string"}},"id":"PosixAccount"}},"icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"protocol":"rest","canonicalName":"Cloud OS Login","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/compute.readonly":{"description":"View your Google Compute Engine resources"},"https://www.googleapis.com/auth/compute":{"description":"View and manage your Google Compute Engine resources"},"https://www.googleapis.com/auth/cloud-platform.read-only":{"description":"View your data across Google Cloud Platform services"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://oslogin.googleapis.com/","ownerDomain":"google.com","name":"oslogin","batchPath":"batch","fullyEncodeReservedExpansion":true,"title":"Cloud OS Login API","ownerName":"Google","resources":{"users":{"resources":{"sshPublicKeys":{"methods":{"delete":{"id":"oslogin.users.sshPublicKeys.delete","path":"v1alpha/{+name}","description":"Deletes an SSH public key.","httpMethod":"DELETE","parameterOrder":["name"],"response":{"$ref":"Empty"},"parameters":{"name":{"pattern":"^users/[^/]+/sshPublicKeys/[^/]+$","location":"path","description":"The fingerprint of the public key to update. Public keys are identified by\ntheir SHA-256 fingerprint. The fingerprint of the public key is in format\n`users/{user}/sshPublicKeys/{fingerprint}`.","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/compute"],"flatPath":"v1alpha/users/{usersId}/sshPublicKeys/{sshPublicKeysId}"},"get":{"description":"Retrieves an SSH public key.","httpMethod":"GET","parameterOrder":["name"],"response":{"$ref":"SshPublicKey"},"parameters":{"name":{"pattern":"^users/[^/]+/sshPublicKeys/[^/]+$","location":"path","description":"The fingerprint of the public key to retrieve. Public keys are identified\nby their SHA-256 fingerprint. The fingerprint of the public key is in\nformat `users/{user}/sshPublicKeys/{fingerprint}`.","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/compute"],"flatPath":"v1alpha/users/{usersId}/sshPublicKeys/{sshPublicKeysId}","id":"oslogin.users.sshPublicKeys.get","path":"v1alpha/{+name}"},"patch":{"path":"v1alpha/{+name}","id":"oslogin.users.sshPublicKeys.patch","request":{"$ref":"SshPublicKey"},"description":"Updates an SSH public key and returns the profile information. This method\nsupports patch semantics.","response":{"$ref":"SshPublicKey"},"parameterOrder":["name"],"httpMethod":"PATCH","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/compute"],"parameters":{"updateMask":{"location":"query","description":"Mask to control which fields get updated. Updates all if not present.","format":"google-fieldmask","type":"string"},"name":{"pattern":"^users/[^/]+/sshPublicKeys/[^/]+$","location":"path","description":"The fingerprint of the public key to update. Public keys are identified by\ntheir SHA-256 fingerprint. The fingerprint of the public key is in format\n`users/{user}/sshPublicKeys/{fingerprint}`.","required":true,"type":"string"}},"flatPath":"v1alpha/users/{usersId}/sshPublicKeys/{sshPublicKeysId}"}}},"projects":{"methods":{"delete":{"description":"Deletes a POSIX account.","httpMethod":"DELETE","parameterOrder":["name"],"response":{"$ref":"Empty"},"parameters":{"name":{"description":"A reference to the POSIX account to update. POSIX accounts are identified\nby the project ID they are associated with. A reference to the POSIX\naccount is in format `users/{user}/projects/{project}`.","required":true,"type":"string","pattern":"^users/[^/]+/projects/[^/]+$","location":"path"},"operatingSystemType":{"enum":["OPERATING_SYSTEM_TYPE_UNSPECIFIED","LINUX","WINDOWS"],"description":"The type of operating system associated with the account.","type":"string","location":"query"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/compute"],"flatPath":"v1alpha/users/{usersId}/projects/{projectsId}","id":"oslogin.users.projects.delete","path":"v1alpha/{+name}"}}}},"methods":{"importSshPublicKey":{"path":"v1alpha/{+parent}:importSshPublicKey","id":"oslogin.users.importSshPublicKey","request":{"$ref":"SshPublicKey"},"description":"Adds an SSH public key and returns the profile information. Default POSIX\naccount information is set when no username and UID exist as part of the\nlogin profile.","response":{"$ref":"ImportSshPublicKeyResponse"},"parameterOrder":["parent"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/compute"],"parameters":{"parent":{"pattern":"^users/[^/]+$","location":"path","description":"The unique ID for the user in format `users/{user}`.","required":true,"type":"string"},"projectId":{"location":"query","description":"The project ID of the Google Cloud Platform project.","type":"string"}},"flatPath":"v1alpha/users/{usersId}:importSshPublicKey"},"getLoginProfile":{"description":"Retrieves the profile information used for logging in to a virtual machine\non Google Compute Engine.","response":{"$ref":"LoginProfile"},"parameterOrder":["name"],"httpMethod":"GET","parameters":{"name":{"pattern":"^users/[^/]+$","location":"path","description":"The unique ID for the user in format `users/{user}`.","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud-platform.read-only","https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/compute.readonly"],"flatPath":"v1alpha/users/{usersId}/loginProfile","path":"v1alpha/{+name}/loginProfile","id":"oslogin.users.getLoginProfile"}}}},"parameters":{"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","type":"boolean","default":"true"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"$.xgafv":{"enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"alt":{"description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query"}},"version":"v1alpha","baseUrl":"https://oslogin.googleapis.com/","servicePath":"","description":"Manages OS login configuration for Google account users.","kind":"discovery#restDescription","basePath":""};