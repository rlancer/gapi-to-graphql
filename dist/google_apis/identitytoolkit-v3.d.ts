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
                "https://www.googleapis.com/auth/cloud-platform": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/firebase": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "CreateAuthUriResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allProviders": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "authUri": {
                    "type": string;
                    "description": string;
                };
                "captchaRequired": {
                    "type": string;
                    "description": string;
                };
                "forExistingProvider": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "providerId": {
                    "type": string;
                    "description": string;
                };
                "registered": {
                    "type": string;
                    "description": string;
                };
                "sessionId": {
                    "type": string;
                    "description": string;
                };
                "signinMethods": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "DeleteAccountResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "DownloadAccountResponse": {
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
                "users": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "EmailLinkSigninResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "isNewUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "EmailTemplate": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "body": {
                    "type": string;
                    "description": string;
                };
                "format": {
                    "type": string;
                    "description": string;
                };
                "from": {
                    "type": string;
                    "description": string;
                };
                "fromDisplayName": {
                    "type": string;
                    "description": string;
                };
                "replyTo": {
                    "type": string;
                    "description": string;
                };
                "subject": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GetAccountInfoResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "users": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "GetOobConfirmationCodeResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "oobCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GetRecaptchaParamResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "recaptchaSiteKey": {
                    "type": string;
                    "description": string;
                };
                "recaptchaStoken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyCreateAuthUriRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "appId": {
                    "type": string;
                    "description": string;
                };
                "authFlowType": {
                    "type": string;
                    "description": string;
                };
                "clientId": {
                    "type": string;
                    "description": string;
                };
                "context": {
                    "type": string;
                    "description": string;
                };
                "continueUri": {
                    "type": string;
                    "description": string;
                };
                "customParameter": {
                    "type": string;
                    "description": string;
                    "additionalProperties": {
                        "type": string;
                        "description": string;
                    };
                };
                "hostedDomain": {
                    "type": string;
                    "description": string;
                };
                "identifier": {
                    "type": string;
                    "description": string;
                };
                "oauthConsumerKey": {
                    "type": string;
                    "description": string;
                };
                "oauthScope": {
                    "type": string;
                    "description": string;
                };
                "openidRealm": {
                    "type": string;
                    "description": string;
                };
                "otaApp": {
                    "type": string;
                    "description": string;
                };
                "providerId": {
                    "type": string;
                    "description": string;
                };
                "sessionId": {
                    "type": string;
                    "description": string;
                };
                "tenantId": {
                    "type": string;
                    "description": string;
                };
                "tenantProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyDeleteAccountRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyDownloadAccountRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxResults": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "targetProjectId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyEmailLinkSigninRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "oobCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyGetAccountInfoRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "IdentitytoolkitRelyingpartyGetProjectConfigResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowPasswordUser": {
                    "type": string;
                    "description": string;
                };
                "apiKey": {
                    "type": string;
                    "description": string;
                };
                "authorizedDomains": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "changeEmailTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "dynamicLinksDomain": {
                    "type": string;
                };
                "enableAnonymousUser": {
                    "type": string;
                    "description": string;
                };
                "idpConfig": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "legacyResetPasswordTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                };
                "resetPasswordTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "useEmailSending": {
                    "type": string;
                    "description": string;
                };
                "verifyEmailTemplate": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyGetPublicKeysResponse": {
            "id": string;
            "type": string;
            "description": string;
            "additionalProperties": {
                "type": string;
            };
        };
        "IdentitytoolkitRelyingpartyResetPasswordRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "newPassword": {
                    "type": string;
                    "description": string;
                };
                "oldPassword": {
                    "type": string;
                    "description": string;
                };
                "oobCode": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySendVerificationCodeRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "iosReceipt": {
                    "type": string;
                    "description": string;
                };
                "iosSecret": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "recaptchaToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySendVerificationCodeResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "sessionInfo": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySetAccountInfoRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "captchaChallenge": {
                    "type": string;
                    "description": string;
                };
                "captchaResponse": {
                    "type": string;
                    "description": string;
                };
                "createdAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "customAttributes": {
                    "type": string;
                    "description": string;
                };
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "deleteAttribute": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "deleteProvider": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "disableUser": {
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
                "emailVerified": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "lastLoginAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "oobCode": {
                    "type": string;
                    "description": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "provider": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "returnSecureToken": {
                    "type": string;
                    "description": string;
                };
                "upgradeToFederatedLogin": {
                    "type": string;
                    "description": string;
                };
                "validSince": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySetProjectConfigRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowPasswordUser": {
                    "type": string;
                    "description": string;
                };
                "apiKey": {
                    "type": string;
                    "description": string;
                };
                "authorizedDomains": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "changeEmailTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "enableAnonymousUser": {
                    "type": string;
                    "description": string;
                };
                "idpConfig": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "legacyResetPasswordTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "resetPasswordTemplate": {
                    "$ref": string;
                    "description": string;
                };
                "useEmailSending": {
                    "type": string;
                    "description": string;
                };
                "verifyEmailTemplate": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySetProjectConfigResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "projectId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySignOutUserRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySignOutUserResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "localId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartySignupNewUserRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "captchaChallenge": {
                    "type": string;
                    "description": string;
                };
                "captchaResponse": {
                    "type": string;
                    "description": string;
                };
                "disabled": {
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
                "emailVerified": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "tenantId": {
                    "type": string;
                    "description": string;
                };
                "tenantProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyUploadAccountRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "allowOverwrite": {
                    "type": string;
                    "description": string;
                };
                "blockSize": {
                    "type": string;
                    "format": string;
                };
                "cpuMemCost": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "dkLen": {
                    "type": string;
                    "format": string;
                };
                "hashAlgorithm": {
                    "type": string;
                    "description": string;
                };
                "memoryCost": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "parallelization": {
                    "type": string;
                    "format": string;
                };
                "rounds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "saltSeparator": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "sanityCheck": {
                    "type": string;
                    "description": string;
                };
                "signerKey": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "targetProjectId": {
                    "type": string;
                    "description": string;
                };
                "users": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "IdentitytoolkitRelyingpartyVerifyAssertionRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "autoCreate": {
                    "type": string;
                    "description": string;
                };
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "pendingIdToken": {
                    "type": string;
                    "description": string;
                };
                "postBody": {
                    "type": string;
                    "description": string;
                };
                "requestUri": {
                    "type": string;
                    "description": string;
                };
                "returnIdpCredential": {
                    "type": string;
                    "description": string;
                };
                "returnRefreshToken": {
                    "type": string;
                    "description": string;
                };
                "returnSecureToken": {
                    "type": string;
                    "description": string;
                };
                "sessionId": {
                    "type": string;
                    "description": string;
                };
                "tenantId": {
                    "type": string;
                    "description": string;
                };
                "tenantProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyVerifyCustomTokenRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "returnSecureToken": {
                    "type": string;
                    "description": string;
                };
                "token": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyVerifyPasswordRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "captchaChallenge": {
                    "type": string;
                    "description": string;
                };
                "captchaResponse": {
                    "type": string;
                    "description": string;
                };
                "delegatedProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "instanceId": {
                    "type": string;
                    "description": string;
                };
                "password": {
                    "type": string;
                    "description": string;
                };
                "pendingIdToken": {
                    "type": string;
                    "description": string;
                };
                "returnSecureToken": {
                    "type": string;
                    "description": string;
                };
                "tenantId": {
                    "type": string;
                    "description": string;
                };
                "tenantProjectNumber": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                };
                "idToken": {
                    "type": string;
                };
                "operation": {
                    "type": string;
                };
                "phoneNumber": {
                    "type": string;
                };
                "sessionInfo": {
                    "type": string;
                    "description": string;
                };
                "temporaryProof": {
                    "type": string;
                };
                "verificationProof": {
                    "type": string;
                };
            };
        };
        "IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expiresIn": {
                    "type": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                };
                "isNewUser": {
                    "type": string;
                };
                "localId": {
                    "type": string;
                };
                "phoneNumber": {
                    "type": string;
                };
                "refreshToken": {
                    "type": string;
                };
                "temporaryProof": {
                    "type": string;
                };
                "temporaryProofExpiresIn": {
                    "type": string;
                    "format": string;
                };
                "verificationProof": {
                    "type": string;
                };
                "verificationProofExpiresIn": {
                    "type": string;
                    "format": string;
                };
            };
        };
        "IdpConfig": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "clientId": {
                    "type": string;
                    "description": string;
                };
                "enabled": {
                    "type": string;
                    "description": string;
                };
                "experimentPercent": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "provider": {
                    "type": string;
                    "description": string;
                };
                "secret": {
                    "type": string;
                    "description": string;
                };
                "whitelistedAudiences": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "Relyingparty": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidInstallApp": {
                    "type": string;
                    "description": string;
                };
                "androidMinimumVersion": {
                    "type": string;
                    "description": string;
                };
                "androidPackageName": {
                    "type": string;
                    "description": string;
                };
                "canHandleCodeInApp": {
                    "type": string;
                    "description": string;
                };
                "captchaResp": {
                    "type": string;
                    "description": string;
                };
                "challenge": {
                    "type": string;
                    "description": string;
                };
                "continueUrl": {
                    "type": string;
                    "description": string;
                };
                "email": {
                    "type": string;
                    "description": string;
                };
                "iOSAppStoreId": {
                    "type": string;
                    "description": string;
                };
                "iOSBundleId": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newEmail": {
                    "type": string;
                    "description": string;
                };
                "requestType": {
                    "type": string;
                    "description": string;
                };
                "userIp": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ResetPasswordResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "newEmail": {
                    "type": string;
                    "description": string;
                };
                "requestType": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SetAccountInfoResponse": {
            "id": string;
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
                "emailVerified": {
                    "type": string;
                    "description": string;
                };
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "newEmail": {
                    "type": string;
                    "description": string;
                };
                "passwordHash": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "providerUserInfo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "displayName": {
                                "type": string;
                                "description": string;
                            };
                            "federatedId": {
                                "type": string;
                                "description": string;
                            };
                            "photoUrl": {
                                "type": string;
                                "description": string;
                            };
                            "providerId": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "SignupNewUserResponse": {
            "id": string;
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
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UploadAccountResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "error": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "index": {
                                "type": string;
                                "description": string;
                                "format": string;
                            };
                            "message": {
                                "type": string;
                                "description": string;
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
        "UserInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "createdAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "customAttributes": {
                    "type": string;
                    "description": string;
                };
                "customAuth": {
                    "type": string;
                    "description": string;
                };
                "disabled": {
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
                "emailVerified": {
                    "type": string;
                    "description": string;
                };
                "lastLoginAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "passwordHash": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "passwordUpdatedAt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "providerUserInfo": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "properties": {
                            "displayName": {
                                "type": string;
                                "description": string;
                            };
                            "email": {
                                "type": string;
                                "description": string;
                            };
                            "federatedId": {
                                "type": string;
                                "description": string;
                            };
                            "phoneNumber": {
                                "type": string;
                                "description": string;
                            };
                            "photoUrl": {
                                "type": string;
                                "description": string;
                            };
                            "providerId": {
                                "type": string;
                                "description": string;
                            };
                            "rawId": {
                                "type": string;
                                "description": string;
                            };
                            "screenName": {
                                "type": string;
                                "description": string;
                            };
                        };
                    };
                };
                "rawPassword": {
                    "type": string;
                    "description": string;
                };
                "salt": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "screenName": {
                    "type": string;
                    "description": string;
                };
                "validSince": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "VerifyAssertionResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "action": {
                    "type": string;
                    "description": string;
                };
                "appInstallationUrl": {
                    "type": string;
                    "description": string;
                };
                "appScheme": {
                    "type": string;
                    "description": string;
                };
                "context": {
                    "type": string;
                    "description": string;
                };
                "dateOfBirth": {
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
                "emailRecycled": {
                    "type": string;
                    "description": string;
                };
                "emailVerified": {
                    "type": string;
                    "description": string;
                };
                "errorMessage": {
                    "type": string;
                    "description": string;
                };
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "federatedId": {
                    "type": string;
                    "description": string;
                };
                "firstName": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "inputEmail": {
                    "type": string;
                    "description": string;
                };
                "isNewUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "language": {
                    "type": string;
                    "description": string;
                };
                "lastName": {
                    "type": string;
                    "description": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "needConfirmation": {
                    "type": string;
                    "description": string;
                };
                "needEmail": {
                    "type": string;
                    "description": string;
                };
                "nickName": {
                    "type": string;
                    "description": string;
                };
                "oauthAccessToken": {
                    "type": string;
                    "description": string;
                };
                "oauthAuthorizationCode": {
                    "type": string;
                    "description": string;
                };
                "oauthExpireIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "oauthIdToken": {
                    "type": string;
                    "description": string;
                };
                "oauthRequestToken": {
                    "type": string;
                    "description": string;
                };
                "oauthScope": {
                    "type": string;
                    "description": string;
                };
                "oauthTokenSecret": {
                    "type": string;
                    "description": string;
                };
                "originalEmail": {
                    "type": string;
                    "description": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "providerId": {
                    "type": string;
                    "description": string;
                };
                "rawUserInfo": {
                    "type": string;
                    "description": string;
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
                "screenName": {
                    "type": string;
                    "description": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
                "verifiedProvider": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "VerifyCustomTokenResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "isNewUser": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "VerifyPasswordResponse": {
            "id": string;
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
                "expiresIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "idToken": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "localId": {
                    "type": string;
                    "description": string;
                };
                "oauthAccessToken": {
                    "type": string;
                    "description": string;
                };
                "oauthAuthorizationCode": {
                    "type": string;
                    "description": string;
                };
                "oauthExpireIn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "photoUrl": {
                    "type": string;
                    "description": string;
                };
                "refreshToken": {
                    "type": string;
                    "description": string;
                };
                "registered": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "relyingparty": {
            "methods": {
                "createAuthUri": {
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
                "deleteAccount": {
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
                "downloadAccount": {
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
                "emailLinkSignin": {
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
                "getAccountInfo": {
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
                "getOobConfirmationCode": {
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
                "getProjectConfig": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "delegatedProjectNumber": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "projectNumber": {
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
                "getPublicKeys": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "getRecaptchaParam": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "resetPassword": {
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
                "sendVerificationCode": {
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
                "setAccountInfo": {
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
                "setProjectConfig": {
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
                "signOutUser": {
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
                "signupNewUser": {
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
                "uploadAccount": {
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
                "verifyAssertion": {
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
                "verifyCustomToken": {
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
                "verifyPassword": {
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
                "verifyPhoneNumber": {
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
    };
};
export default _default;
//# sourceMappingURL=identitytoolkit-v3.d.ts.map