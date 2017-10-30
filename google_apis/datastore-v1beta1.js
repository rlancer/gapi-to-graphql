module.exports = {"discoveryVersion":"v1","ownerName":"Google","version_module":true,"resources":{"projects":{"methods":{"export":{"request":{"$ref":"GoogleDatastoreAdminV1beta1ExportEntitiesRequest"},"description":"Exports a copy of all or a subset of entities from Google Cloud Datastore\nto another storage system, such as Google Cloud Storage. Recent updates to\nentities may not be reflected in the export. The export occurs in the\nbackground and its progress can be monitored and managed via the\nOperation resource that is created. The output of an export may only be\nused once the associated operation is done. If an export operation is\ncancelled before completion it may leave partial data behind in Google\nCloud Storage.","response":{"$ref":"GoogleLongrunningOperation"},"parameterOrder":["projectId"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"parameters":{"projectId":{"description":"Project ID against which to make the request.","type":"string","required":true,"location":"path"}},"flatPath":"v1beta1/projects/{projectId}:export","id":"datastore.projects.export","path":"v1beta1/projects/{projectId}:export"},"import":{"flatPath":"v1beta1/projects/{projectId}:import","id":"datastore.projects.import","path":"v1beta1/projects/{projectId}:import","description":"Imports entities into Google Cloud Datastore. Existing entities with the\nsame key are overwritten. The import occurs in the background and its\nprogress can be monitored and managed via the Operation resource that is\ncreated. If an ImportEntities operation is cancelled, it is possible\nthat a subset of the data has already been imported to Cloud Datastore.","request":{"$ref":"GoogleDatastoreAdminV1beta1ImportEntitiesRequest"},"response":{"$ref":"GoogleLongrunningOperation"},"parameterOrder":["projectId"],"httpMethod":"POST","parameters":{"projectId":{"description":"Project ID against which to make the request.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"]}}}},"parameters":{"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"description":"OAuth 2.0 token for the current user.","type":"string","location":"query"},"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"alt":{"enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string"}},"schemas":{"GoogleDatastoreAdminV1beta1ExportEntitiesRequest":{"description":"The request for\ngoogle.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.","type":"object","properties":{"outputUrlPrefix":{"description":"Location for the export metadata and data files.\n\nThe full resource URL of the external storage location. Currently, only\nGoogle Cloud Storage is supported. So output_url_prefix should be of the\nform: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the\nname of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud\nStorage namespace path (this is not a Cloud Datastore namespace). For more\ninformation about Cloud Storage namespace paths, see\n[Object name\nconsiderations](https://cloud.google.com/storage/docs/naming#object-considerations).\n\nThe resulting files will be nested deeper than the specified URL prefix.\nThe final output URL will be provided in the\ngoogle.datastore.admin.v1beta1.ExportEntitiesResponse.output_url\nfield. That value should be used for subsequent ImportEntities operations.\n\nBy nesting the data files deeper, the same Cloud Storage bucket can be used\nin multiple ExportEntities operations without conflict.","type":"string"},"entityFilter":{"description":"Description of what data from the project is included in the export.","$ref":"GoogleDatastoreAdminV1beta1EntityFilter"},"labels":{"description":"Client-assigned labels.","type":"object","additionalProperties":{"type":"string"}}},"id":"GoogleDatastoreAdminV1beta1ExportEntitiesRequest"},"GoogleDatastoreAdminV1beta1ExportEntitiesMetadata":{"description":"Metadata for ExportEntities operations.","type":"object","properties":{"common":{"$ref":"GoogleDatastoreAdminV1beta1CommonMetadata","description":"Metadata common to all Datastore Admin operations."},"progressBytes":{"$ref":"GoogleDatastoreAdminV1beta1Progress","description":"An estimate of the number of bytes processed."},"outputUrlPrefix":{"description":"Location for the export metadata and data files. This will be the same\nvalue as the\ngoogle.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix\nfield. The final output location is provided in\ngoogle.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.","type":"string"},"entityFilter":{"$ref":"GoogleDatastoreAdminV1beta1EntityFilter","description":"Description of which entities are being exported."},"progressEntities":{"description":"An estimate of the number of entities processed.","$ref":"GoogleDatastoreAdminV1beta1Progress"}},"id":"GoogleDatastoreAdminV1beta1ExportEntitiesMetadata"},"GoogleDatastoreAdminV1beta1ExportEntitiesResponse":{"description":"The response for\ngoogle.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.","type":"object","properties":{"outputUrl":{"description":"Location of the output metadata file. This can be used to begin an import\ninto Cloud Datastore (this project or another project). See\ngoogle.datastore.admin.v1beta1.ImportEntitiesRequest.input_url.\nOnly present if the operation completed successfully.","type":"string"}},"id":"GoogleDatastoreAdminV1beta1ExportEntitiesResponse"},"GoogleDatastoreAdminV1beta1ImportEntitiesMetadata":{"description":"Metadata for ImportEntities operations.","type":"object","properties":{"inputUrl":{"description":"The location of the import metadata file. This will be the same value as\nthe google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url\nfield.","type":"string"},"progressBytes":{"description":"An estimate of the number of bytes processed.","$ref":"GoogleDatastoreAdminV1beta1Progress"},"entityFilter":{"description":"Description of which entities are being imported.","$ref":"GoogleDatastoreAdminV1beta1EntityFilter"},"progressEntities":{"$ref":"GoogleDatastoreAdminV1beta1Progress","description":"An estimate of the number of entities processed."},"common":{"$ref":"GoogleDatastoreAdminV1beta1CommonMetadata","description":"Metadata common to all Datastore Admin operations."}},"id":"GoogleDatastoreAdminV1beta1ImportEntitiesMetadata"},"GoogleDatastoreAdminV1beta1ImportEntitiesRequest":{"description":"The request for\ngoogle.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.","type":"object","properties":{"labels":{"additionalProperties":{"type":"string"},"description":"Client-assigned labels.","type":"object"},"inputUrl":{"description":"The full resource URL of the external storage location. Currently, only\nGoogle Cloud Storage is supported. So input_url should be of the form:\n`gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where\n`BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is\nan optional Cloud Storage namespace path (this is not a Cloud Datastore\nnamespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written\nby the ExportEntities operation. For more information about Cloud Storage\nnamespace paths, see\n[Object name\nconsiderations](https://cloud.google.com/storage/docs/naming#object-considerations).\n\nFor more information, see\ngoogle.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.","type":"string"},"entityFilter":{"description":"Optionally specify which kinds/namespaces are to be imported. If provided,\nthe list must be a subset of the EntityFilter used in creating the export,\notherwise a FAILED_PRECONDITION error will be returned. If no filter is\nspecified then all entities from the export are imported.","$ref":"GoogleDatastoreAdminV1beta1EntityFilter"}},"id":"GoogleDatastoreAdminV1beta1ImportEntitiesRequest"},"GoogleDatastoreAdminV1beta1Progress":{"description":"Measures the progress of a particular metric.","type":"object","properties":{"workEstimated":{"format":"int64","description":"An estimate of how much work needs to be performed. May be zero if the\nwork estimate is unavailable.","type":"string"},"workCompleted":{"format":"int64","description":"The amount of work that has been completed. Note that this may be greater\nthan work_estimated.","type":"string"}},"id":"GoogleDatastoreAdminV1beta1Progress"},"GoogleDatastoreAdminV1beta1EntityFilter":{"description":"Identifies a subset of entities in a project. This is specified as\ncombinations of kinds and namespaces (either or both of which may be all, as\ndescribed in the following examples).\nExample usage:\n\nEntire project:\n  kinds=[], namespace_ids=[]\n\nKinds Foo and Bar in all namespaces:\n  kinds=['Foo', 'Bar'], namespace_ids=[]\n\nKinds Foo and Bar only in the default namespace:\n  kinds=['Foo', 'Bar'], namespace_ids=['']\n\nKinds Foo and Bar in both the default and Baz namespaces:\n  kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz']\n\nThe entire Baz namespace:\n  kinds=[], namespace_ids=['Baz']","type":"object","properties":{"kinds":{"description":"If empty, then this represents all kinds.","items":{"type":"string"},"type":"array"},"namespaceIds":{"description":"An empty list represents all namespaces. This is the preferred\nusage for projects that don't use namespaces.\n\nAn empty string element represents the default namespace. This should be\nused if the project has data in non-default namespaces, but doesn't want to\ninclude them.\nEach namespace in this list must be unique.","items":{"type":"string"},"type":"array"}},"id":"GoogleDatastoreAdminV1beta1EntityFilter"},"GoogleLongrunningOperation":{"properties":{"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.","type":"object"},"name":{"description":"The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.","type":"string"},"error":{"$ref":"Status","description":"The error result of the operation in case of failure or cancellation."},"metadata":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.","type":"object"},"done":{"description":"If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.","type":"boolean"}},"id":"GoogleLongrunningOperation","description":"This resource represents a long-running operation that is the result of a\nnetwork API call.","type":"object"},"GoogleDatastoreAdminV1beta1CommonMetadata":{"description":"Metadata common to all Datastore Admin operations.","type":"object","properties":{"labels":{"additionalProperties":{"type":"string"},"description":"The client-assigned labels which were provided when the operation was\ncreated. May also include additional labels.","type":"object"},"endTime":{"format":"google-datetime","description":"The time the operation ended, either successfully or otherwise.","type":"string"},"state":{"enum":["STATE_UNSPECIFIED","INITIALIZING","PROCESSING","CANCELLING","FINALIZING","SUCCESSFUL","FAILED","CANCELLED"],"description":"The current state of the Operation.","type":"string","enumDescriptions":["Unspecified.","Request is being prepared for processing.","Request is actively being processed.","Request is in the process of being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation on the operation.","Request has been processed and is in its finalization stage.","Request has completed successfully.","Request has finished being processed, but encountered an error.","Request has finished being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation."]},"operationType":{"description":"The type of the operation. Can be used as a filter in\nListOperationsRequest.","type":"string","enumDescriptions":["Unspecified.","ExportEntities.","ImportEntities."],"enum":["OPERATION_TYPE_UNSPECIFIED","EXPORT_ENTITIES","IMPORT_ENTITIES"]},"startTime":{"format":"google-datetime","description":"The time that work began on the operation.","type":"string"}},"id":"GoogleDatastoreAdminV1beta1CommonMetadata"},"Status":{"description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object","properties":{"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"},"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"},"type":"array"},"code":{"format":"int32","description":"The status code, which should be an enum value of google.rpc.Code.","type":"integer"}},"id":"Status"}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","version":"v1beta1","baseUrl":"https://datastore.googleapis.com/","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/datastore":{"description":"View and manage your Google Cloud Datastore data"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"servicePath":"","description":"Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.\n","kind":"discovery#restDescription","rootUrl":"https://datastore.googleapis.com/","basePath":"","ownerDomain":"google.com","name":"datastore","batchPath":"batch","revision":"20171017","documentationLink":"https://cloud.google.com/datastore/","id":"datastore:v1beta1","title":"Google Cloud Datastore API"};