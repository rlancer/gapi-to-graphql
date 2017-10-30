module.exports = {"canonicalName":"Cloud Build","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://cloudbuild.googleapis.com/","ownerDomain":"google.com","name":"cloudbuild","batchPath":"batch","title":"Google Cloud Container Builder API","ownerName":"Google","resources":{"projects":{"resources":{"triggers":{"methods":{"create":{"response":{"$ref":"BuildTrigger"},"parameterOrder":["projectId"],"httpMethod":"POST","parameters":{"projectId":{"location":"path","description":"ID of the project for which to configure automatic builds.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/triggers","id":"cloudbuild.projects.triggers.create","path":"v1/projects/{projectId}/triggers","description":"Creates a new BuildTrigger.\n\nThis API is experimental.","request":{"$ref":"BuildTrigger"}},"run":{"description":"Runs a BuildTrigger at a particular source revision.","request":{"$ref":"RepoSource"},"httpMethod":"POST","parameterOrder":["projectId","triggerId"],"response":{"$ref":"Operation"},"parameters":{"triggerId":{"description":"ID of the trigger.","type":"string","required":true,"location":"path"},"projectId":{"description":"ID of the project.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/triggers/{triggerId}:run","path":"v1/projects/{projectId}/triggers/{triggerId}:run","id":"cloudbuild.projects.triggers.run"},"get":{"response":{"$ref":"BuildTrigger"},"parameterOrder":["projectId","triggerId"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"triggerId":{"location":"path","description":"ID of the BuildTrigger to get.","type":"string","required":true},"projectId":{"location":"path","description":"ID of the project that owns the trigger.","type":"string","required":true}},"flatPath":"v1/projects/{projectId}/triggers/{triggerId}","id":"cloudbuild.projects.triggers.get","path":"v1/projects/{projectId}/triggers/{triggerId}","description":"Gets information about a BuildTrigger.\n\nThis API is experimental."},"patch":{"description":"Updates an BuildTrigger by its project ID and trigger ID.\n\nThis API is experimental.","request":{"$ref":"BuildTrigger"},"response":{"$ref":"BuildTrigger"},"parameterOrder":["projectId","triggerId"],"httpMethod":"PATCH","parameters":{"triggerId":{"location":"path","description":"ID of the BuildTrigger to update.","type":"string","required":true},"projectId":{"description":"ID of the project that owns the trigger.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/triggers/{triggerId}","id":"cloudbuild.projects.triggers.patch","path":"v1/projects/{projectId}/triggers/{triggerId}"},"delete":{"description":"Deletes an BuildTrigger by its project ID and trigger ID.\n\nThis API is experimental.","httpMethod":"DELETE","parameterOrder":["projectId","triggerId"],"response":{"$ref":"Empty"},"parameters":{"triggerId":{"description":"ID of the BuildTrigger to delete.","type":"string","required":true,"location":"path"},"projectId":{"location":"path","description":"ID of the project that owns the trigger.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/triggers/{triggerId}","path":"v1/projects/{projectId}/triggers/{triggerId}","id":"cloudbuild.projects.triggers.delete"},"list":{"flatPath":"v1/projects/{projectId}/triggers","id":"cloudbuild.projects.triggers.list","path":"v1/projects/{projectId}/triggers","description":"Lists existing BuildTrigger.\n\nThis API is experimental.","response":{"$ref":"ListBuildTriggersResponse"},"parameterOrder":["projectId"],"httpMethod":"GET","parameters":{"projectId":{"location":"path","description":"ID of the project for which to list BuildTriggers.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"]}}},"builds":{"methods":{"cancel":{"request":{"$ref":"CancelBuildRequest"},"description":"Cancels a requested build in progress.","response":{"$ref":"Build"},"parameterOrder":["projectId","id"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"id":{"location":"path","description":"ID of the build.","type":"string","required":true},"projectId":{"location":"path","description":"ID of the project.","type":"string","required":true}},"flatPath":"v1/projects/{projectId}/builds/{id}:cancel","id":"cloudbuild.projects.builds.cancel","path":"v1/projects/{projectId}/builds/{id}:cancel"},"retry":{"httpMethod":"POST","parameterOrder":["projectId","id"],"response":{"$ref":"Operation"},"parameters":{"projectId":{"description":"ID of the project.","type":"string","required":true,"location":"path"},"id":{"description":"Build ID of the original build.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/builds/{id}:retry","path":"v1/projects/{projectId}/builds/{id}:retry","id":"cloudbuild.projects.builds.retry","description":"Creates a new build based on the given build.\n\nThis API creates a new build using the original build request,  which may\nor may not result in an identical build.\n\nFor triggered builds:\n\n* Triggered builds resolve to a precise revision, so a retry of a triggered\nbuild will result in a build that uses the same revision.\n\nFor non-triggered builds that specify RepoSource:\n\n* If the original build built from the tip of a branch, the retried build\nwill build from the tip of that branch, which may not be the same revision\nas the original build.\n* If the original build specified a commit sha or revision ID, the retried\nbuild will use the identical source.\n\nFor builds that specify StorageSource:\n\n* If the original build pulled source from Cloud Storage without specifying\nthe generation of the object, the new build will use the current object,\nwhich may be different from the original build source.\n* If the original build pulled source from Cloud Storage and specified the\ngeneration of the object, the new build will attempt to use the same\nobject, which may or may not be available depending on the bucket's\nlifecycle management settings.","request":{"$ref":"RetryBuildRequest"}},"list":{"response":{"$ref":"ListBuildsResponse"},"parameterOrder":["projectId"],"httpMethod":"GET","parameters":{"filter":{"location":"query","description":"The raw filter text to constrain the results.","type":"string"},"pageToken":{"location":"query","description":"Token to provide to skip to a particular spot in the list.","type":"string"},"pageSize":{"location":"query","format":"int32","description":"Number of results to return in the list.","type":"integer"},"projectId":{"location":"path","description":"ID of the project.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/builds","id":"cloudbuild.projects.builds.list","path":"v1/projects/{projectId}/builds","description":"Lists previously requested builds.\n\nPreviously requested builds may still be in-progress, or may have finished\nsuccessfully or unsuccessfully."},"get":{"description":"Returns information about a previously requested build.\n\nThe Build that is returned includes its status (e.g., success or failure,\nor in-progress), and timing information.","httpMethod":"GET","response":{"$ref":"Build"},"parameterOrder":["projectId","id"],"parameters":{"id":{"location":"path","description":"ID of the build.","type":"string","required":true},"projectId":{"location":"path","description":"ID of the project.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectId}/builds/{id}","path":"v1/projects/{projectId}/builds/{id}","id":"cloudbuild.projects.builds.get"},"create":{"request":{"$ref":"Build"},"description":"Starts a build with the specified configuration.\n\nThe long-running Operation returned by this method will include the ID of\nthe build, which can be passed to GetBuild to determine its status (e.g.,\nsuccess or failure).","httpMethod":"POST","parameterOrder":["projectId"],"response":{"$ref":"Operation"},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"projectId":{"description":"ID of the project.","type":"string","required":true,"location":"path"}},"flatPath":"v1/projects/{projectId}/builds","path":"v1/projects/{projectId}/builds","id":"cloudbuild.projects.builds.create"}}}}},"operations":{"methods":{"cancel":{"httpMethod":"POST","parameterOrder":["name"],"response":{"$ref":"Empty"},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"name":{"location":"path","description":"The name of the operation resource to be cancelled.","type":"string","required":true,"pattern":"^operations/.+$"}},"flatPath":"v1/operations/{operationsId}:cancel","path":"v1/{+name}:cancel","id":"cloudbuild.operations.cancel","request":{"$ref":"CancelOperationRequest"},"description":"Starts asynchronous cancellation on a long-running operation.  The server\nmakes a best effort to cancel the operation, but success is not\nguaranteed.  If the server doesn't support this method, it returns\n`google.rpc.Code.UNIMPLEMENTED`.  Clients can use\nOperations.GetOperation or\nother methods to check whether the cancellation succeeded or whether the\noperation completed despite cancellation. On successful cancellation,\nthe operation is not deleted; instead, it becomes an operation with\nan Operation.error value with a google.rpc.Status.code of 1,\ncorresponding to `Code.CANCELLED`."},"get":{"response":{"$ref":"Operation"},"parameterOrder":["name"],"httpMethod":"GET","parameters":{"name":{"pattern":"^operations/.+$","location":"path","description":"The name of the operation resource.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/operations/{operationsId}","id":"cloudbuild.operations.get","path":"v1/{+name}","description":"Gets the latest state of a long-running operation.  Clients can use this\nmethod to poll the operation result at intervals as recommended by the API\nservice."},"list":{"response":{"$ref":"ListOperationsResponse"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"filter":{"description":"The standard list filter.","type":"string","location":"query"},"pageToken":{"description":"The standard list page token.","type":"string","location":"query"},"name":{"location":"path","description":"The name of the operation's parent resource.","type":"string","required":true,"pattern":"^operations$"},"pageSize":{"location":"query","format":"int32","description":"The standard list page size.","type":"integer"}},"flatPath":"v1/operations","id":"cloudbuild.operations.list","path":"v1/{+name}","description":"Lists operations that match the specified filter in the request. If the\nserver doesn't support this method, it returns `UNIMPLEMENTED`.\n\nNOTE: the `name` binding allows API services to override the binding\nto use different resource name schemes, such as `users/*/operations`. To\noverride the binding, API services can add a binding such as\n`\"/v1/{name=users/*}/operations\"` to their service configuration.\nFor backwards compatibility, the default name includes the operations\ncollection id, however overriding users must ensure the name binding\nis the parent resource, without the operations collection id."}}}},"parameters":{"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"default":"true","type":"boolean","location":"query","description":"Pretty-print response."},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"type":"string","location":"query","description":"OAuth 2.0 token for the current user."},"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"default":"true","type":"boolean","location":"query","description":"Returns response with indentations and line breaks."},"fields":{"type":"string","location":"query","description":"Selector specifying which fields to include in a partial response."},"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"$.xgafv":{"enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query"},"callback":{"type":"string","location":"query","description":"JSONP"}},"version":"v1","baseUrl":"https://cloudbuild.googleapis.com/","kind":"discovery#restDescription","description":"Builds container images in the cloud.","servicePath":"","basePath":"","id":"cloudbuild:v1","documentationLink":"https://cloud.google.com/container-builder/docs/","revision":"20171026","discoveryVersion":"v1","version_module":true,"schemas":{"BuildTrigger":{"id":"BuildTrigger","description":"Configuration for an automated build in response to source repository\nchanges.","type":"object","properties":{"substitutions":{"additionalProperties":{"type":"string"},"description":"Substitutions data for Build resource.","type":"object"},"description":{"description":"Human-readable description of this trigger.","type":"string"},"createTime":{"format":"google-datetime","description":"Time when the trigger was created.\n\n@OutputOnly","type":"string"},"disabled":{"description":"If true, the trigger will never result in a build.","type":"boolean"},"triggerTemplate":{"description":"Template describing the types of source changes to trigger a build.\n\nBranch and tag names in trigger templates are interpreted as regular\nexpressions. Any branch or tag change that matches that regular expression\nwill trigger a build.","$ref":"RepoSource"},"filename":{"description":"Path, from the source root, to a file whose contents is used for the\ntemplate.","type":"string"},"id":{"description":"Unique identifier of the trigger.\n\n@OutputOnly","type":"string"},"build":{"description":"Contents of the build template.","$ref":"Build"}}},"Build":{"properties":{"buildTriggerId":{"description":"The ID of the BuildTrigger that triggered this build, if it was\ntriggered automatically.\n@OutputOnly","type":"string"},"id":{"description":"Unique identifier of the build.\n@OutputOnly","type":"string"},"tags":{"description":"Tags for annotation of a Build. These are not docker tags.","items":{"type":"string"},"type":"array"},"startTime":{"format":"google-datetime","description":"Time at which execution of the build was started.\n@OutputOnly","type":"string"},"substitutions":{"additionalProperties":{"type":"string"},"description":"Substitutions data for Build resource.","type":"object"},"createTime":{"format":"google-datetime","description":"Time at which the request to create the build was received.\n@OutputOnly","type":"string"},"sourceProvenance":{"$ref":"SourceProvenance","description":"A permanent fixed identifier for source.\n@OutputOnly"},"images":{"description":"A list of images to be pushed upon the successful completion of all build\nsteps.\n\nThe images will be pushed using the builder service account's credentials.\n\nThe digests of the pushed images will be stored in the Build resource's\nresults field.\n\nIf any of the images fail to be pushed, the build is marked FAILURE.","items":{"type":"string"},"type":"array"},"projectId":{"description":"ID of the project.\n@OutputOnly.","type":"string"},"logUrl":{"description":"URL to logs for this build in Google Cloud Logging.\n@OutputOnly","type":"string"},"finishTime":{"format":"google-datetime","description":"Time at which execution of the build was finished.\n\nThe difference between finish_time and start_time is the duration of the\nbuild's execution.\n@OutputOnly","type":"string"},"source":{"description":"Describes where to find the source files to build.","$ref":"Source"},"options":{"$ref":"BuildOptions","description":"Special options for this build."},"timeout":{"format":"google-duration","description":"Amount of time that this build should be allowed to run, to second\ngranularity. If this amount of time elapses, work on the build will cease\nand the build status will be TIMEOUT.\n\nDefault time is ten minutes.","type":"string"},"status":{"enumDescriptions":["Status of the build is unknown.","Build is queued; work has not yet begun.","Build is being executed.","Build finished successfully.","Build failed to complete successfully.","Build failed due to an internal cause.","Build took longer than was allowed.","Build was canceled by a user."],"enum":["STATUS_UNKNOWN","QUEUED","WORKING","SUCCESS","FAILURE","INTERNAL_ERROR","TIMEOUT","CANCELLED"],"description":"Status of the build.\n@OutputOnly","type":"string"},"statusDetail":{"description":"Customer-readable message about the current status.\n@OutputOnly","type":"string"},"secrets":{"description":"Secrets to decrypt using Cloud KMS.","items":{"$ref":"Secret"},"type":"array"},"logsBucket":{"description":"Google Cloud Storage bucket where logs should be written (see\n[Bucket Name\nRequirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).\nLogs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.","type":"string"},"results":{"description":"Results of the build.\n@OutputOnly","$ref":"Results"},"steps":{"items":{"$ref":"BuildStep"},"type":"array","description":"Describes the operations to be performed on the workspace."}},"id":"Build","description":"A build resource in the Container Builder API.\n\nAt a high level, a Build describes where to find source code, how to build\nit (for example, the builder image to run on the source), and what tag to\napply to the built image when it is pushed to Google Container Registry.\n\nFields can include the following variables which will be expanded when the\nbuild is created:\n\n- $PROJECT_ID: the project ID of the build.\n- $BUILD_ID: the autogenerated ID of the build.\n- $REPO_NAME: the source repository name specified by RepoSource.\n- $BRANCH_NAME: the branch name specified by RepoSource.\n- $TAG_NAME: the tag name specified by RepoSource.\n- $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or\n  resolved from the specified branch or tag.\n- $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.","type":"object"},"CancelBuildRequest":{"description":"Request to cancel an ongoing build.","type":"object","properties":{},"id":"CancelBuildRequest"},"Volume":{"description":"Volume describes a Docker container volume which is mounted into build steps\nin order to persist files across build step execution.","type":"object","properties":{"path":{"description":"Path at which to mount the volume.\n\nPaths must be absolute and cannot conflict with other volume paths on the\nsame build step or with certain reserved volume paths.","type":"string"},"name":{"type":"string","description":"Name of the volume to mount.\n\nVolume names must be unique per build step and must be valid names for\nDocker volumes. Each named volume must be used by at least two build steps."}},"id":"Volume"},"ListBuildsResponse":{"description":"Response including listed builds.","type":"object","properties":{"builds":{"description":"Builds will be sorted by create_time, descending.","items":{"$ref":"Build"},"type":"array"},"nextPageToken":{"description":"Token to receive the next page of results.","type":"string"}},"id":"ListBuildsResponse"},"ListOperationsResponse":{"description":"The response message for Operations.ListOperations.","type":"object","properties":{"operations":{"description":"A list of operations that matches the specified filter in the request.","items":{"$ref":"Operation"},"type":"array"},"nextPageToken":{"description":"The standard List next-page token.","type":"string"}},"id":"ListOperationsResponse"},"BuildOptions":{"description":"Optional arguments to enable specific features of builds.","type":"object","properties":{"logStreamingOption":{"enumDescriptions":["Service may automatically determine build log streaming behavior.","Build logs should be streamed to Google Cloud Storage.","Build logs should not be streamed to Google Cloud Storage; they will be\nwritten when the build is completed."],"enum":["STREAM_DEFAULT","STREAM_ON","STREAM_OFF"],"description":"LogStreamingOption to define build log streaming behavior to Google Cloud\nStorage.","type":"string"},"substitutionOption":{"enumDescriptions":["Fails the build if error in substitutions checks, like missing\na substitution in the template or in the map.","Do not fail the build if error in substitutions checks."],"enum":["MUST_MATCH","ALLOW_LOOSE"],"description":"SubstitutionOption to allow unmatch substitutions.","type":"string"},"requestedVerifyOption":{"enum":["NOT_VERIFIED","VERIFIED"],"description":"Requested verifiability options.","type":"string","enumDescriptions":["Not a verifiable build. (default)","Verified build."]},"sourceProvenanceHash":{"description":"Requested hash for SourceProvenance.","items":{"type":"string","enum":["NONE","SHA256"]},"type":"array","enumDescriptions":["No hash requested.","Use a sha256 hash."]}},"id":"BuildOptions"},"StorageSource":{"description":"StorageSource describes the location of the source in an archive file in\nGoogle Cloud Storage.","type":"object","properties":{"generation":{"format":"int64","description":"Google Cloud Storage generation for the object. If the generation is\nomitted, the latest generation will be used.","type":"string"},"bucket":{"description":"Google Cloud Storage bucket containing source (see\n[Bucket Name\nRequirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).","type":"string"},"object":{"description":"Google Cloud Storage object containing source.\n\nThis object must be a gzipped archive file (.tar.gz) containing source to\nbuild.","type":"string"}},"id":"StorageSource"},"Results":{"description":"Results describes the artifacts created by the build pipeline.","type":"object","properties":{"buildStepImages":{"items":{"type":"string"},"type":"array","description":"List of build step digests, in order corresponding to build step indices."},"images":{"description":"Images that were built as a part of the build.","items":{"$ref":"BuiltImage"},"type":"array"}},"id":"Results"},"ListBuildTriggersResponse":{"description":"Response containing existing BuildTriggers.","type":"object","properties":{"triggers":{"description":"BuildTriggers for the project, sorted by create_time descending.","items":{"$ref":"BuildTrigger"},"type":"array"}},"id":"ListBuildTriggersResponse"},"BuiltImage":{"properties":{"name":{"description":"Name used to push the container image to Google Container Registry, as\npresented to `docker push`.","type":"string"},"digest":{"type":"string","description":"Docker Registry 2.0 digest."}},"id":"BuiltImage","description":"BuiltImage describes an image built by the pipeline.","type":"object"},"Hash":{"description":"Container message for hash values.","type":"object","properties":{"value":{"format":"byte","description":"The hash value.","type":"string"},"type":{"enumDescriptions":["No hash requested.","Use a sha256 hash."],"enum":["NONE","SHA256"],"description":"The type of hash that was performed.","type":"string"}},"id":"Hash"},"Secret":{"description":"Secret pairs a set of secret environment variables containing encrypted\nvalues with the Cloud KMS key to use to decrypt the value.","type":"object","properties":{"secretEnv":{"description":"Map of environment variable name to its encrypted value.\n\nSecret environment variables must be unique across all of a build's\nsecrets, and must be used by at least one build step. Values can be at most\n1 KB in size. There can be at most ten secret values across all of a\nbuild's secrets.","type":"object","additionalProperties":{"type":"string","format":"byte"}},"kmsKeyName":{"description":"Cloud KMS key name to use to decrypt these envs.","type":"string"}},"id":"Secret"},"Empty":{"type":"object","properties":{},"id":"Empty","description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`."},"Source":{"description":"Source describes the location of the source in a supported storage\nservice.","type":"object","properties":{"repoSource":{"$ref":"RepoSource","description":"If provided, get source from this location in a Cloud Repo."},"storageSource":{"description":"If provided, get the source from this location in Google Cloud Storage.","$ref":"StorageSource"}},"id":"Source"},"RetryBuildRequest":{"description":"RetryBuildRequest specifies a build to retry.","type":"object","properties":{},"id":"RetryBuildRequest"},"BuildOperationMetadata":{"id":"BuildOperationMetadata","description":"Metadata for build operations.","type":"object","properties":{"build":{"description":"The build that the operation is tracking.","$ref":"Build"}}},"SourceProvenance":{"properties":{"fileHashes":{"description":"Hash(es) of the build source, which can be used to verify that the original\nsource integrity was maintained in the build. Note that FileHashes will\nonly be populated if BuildOptions has requested a SourceProvenanceHash.\n\nThe keys to this map are file paths used as build source and the values\ncontain the hash values for those files.\n\nIf the build source came in a single package such as a gzipped tarfile\n(.tar.gz), the FileHash will be for the single path to that file.\n@OutputOnly","type":"object","additionalProperties":{"$ref":"FileHashes"}},"resolvedRepoSource":{"$ref":"RepoSource","description":"A copy of the build's source.repo_source, if exists, with any\nrevisions resolved."},"resolvedStorageSource":{"description":"A copy of the build's source.storage_source, if exists, with any\ngenerations resolved.","$ref":"StorageSource"}},"id":"SourceProvenance","description":"Provenance of the source. Ways to find the original source, or verify that\nsome source was used for this build.","type":"object"},"CancelOperationRequest":{"description":"The request message for Operations.CancelOperation.","type":"object","properties":{},"id":"CancelOperationRequest"},"Operation":{"type":"object","properties":{"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.","type":"object"},"name":{"description":"The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.","type":"string"},"error":{"$ref":"Status","description":"The error result of the operation in case of failure or cancellation."},"metadata":{"description":"Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.","type":"object","additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"}},"done":{"description":"If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.","type":"boolean"}},"id":"Operation","description":"This resource represents a long-running operation that is the result of a\nnetwork API call."},"BuildStep":{"description":"BuildStep describes a step to perform in the build pipeline.","type":"object","properties":{"entrypoint":{"description":"Optional entrypoint to be used instead of the build step image's default\nIf unset, the image's default will be used.","type":"string"},"id":{"description":"Optional unique identifier for this build step, used in wait_for to\nreference this build step as a dependency.","type":"string"},"secretEnv":{"items":{"type":"string"},"type":"array","description":"A list of environment variables which are encrypted using a Cloud KMS\ncrypto key. These values must be specified in the build's secrets."},"volumes":{"description":"List of volumes to mount into the build step.\n\nEach volume will be created as an empty volume prior to execution of the\nbuild step. Upon completion of the build, volumes and their contents will\nbe discarded.\n\nUsing a named volume in only one step is not valid as it is indicative\nof a mis-configured build request.","items":{"$ref":"Volume"},"type":"array"},"dir":{"description":"Working directory (relative to project source root) to use when running\nthis operation's container.","type":"string"},"env":{"description":"A list of environment variable definitions to be used when running a step.\n\nThe elements are of the form \"KEY=VALUE\" for the environment variable \"KEY\"\nbeing given the value \"VALUE\".","items":{"type":"string"},"type":"array"},"waitFor":{"description":"The ID(s) of the step(s) that this build step depends on.\nThis build step will not start until all the build steps in wait_for\nhave completed successfully. If wait_for is empty, this build step will\nstart when all previous build steps in the Build.Steps list have completed\nsuccessfully.","items":{"type":"string"},"type":"array"},"args":{"description":"A list of arguments that will be presented to the step when it is started.\n\nIf the image used to run the step's container has an entrypoint, these args\nwill be used as arguments to that entrypoint. If the image does not define\nan entrypoint, the first element in args will be used as the entrypoint,\nand the remainder will be used as arguments.","items":{"type":"string"},"type":"array"},"name":{"description":"The name of the container image that will run this particular build step.\n\nIf the image is already available in the host's Docker daemon's cache, it\nwill be run directly. If not, the host will attempt to pull the image\nfirst, using the builder service account's credentials if necessary.\n\nThe Docker daemon's cache will already have the latest versions of all of\nthe officially supported build steps\n([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).\nThe Docker daemon will also have cached many of the layers for some popular\nimages, like \"ubuntu\", \"debian\", but they will be refreshed at the time you\nattempt to use them.\n\nIf you built an image in a previous build step, it will be stored in the\nhost's Docker daemon's cache and is available to use as the name for a\nlater build step.","type":"string"}},"id":"BuildStep"},"RepoSource":{"description":"RepoSource describes the location of the source in a Google Cloud Source\nRepository.","type":"object","properties":{"commitSha":{"type":"string","description":"Explicit commit SHA to build."},"tagName":{"description":"Name of the tag to build.","type":"string"},"branchName":{"description":"Name of the branch to build.","type":"string"},"repoName":{"description":"Name of the repo. If omitted, the name \"default\" is assumed.","type":"string"},"projectId":{"description":"ID of the project that owns the repo. If omitted, the project ID requesting\nthe build is assumed.","type":"string"}},"id":"RepoSource"},"FileHashes":{"description":"Container message for hashes of byte content of files, used in\nSourceProvenance messages to verify integrity of source input to the build.","type":"object","properties":{"fileHash":{"description":"Collection of file hashes.","items":{"$ref":"Hash"},"type":"array"}},"id":"FileHashes"},"Status":{"description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object","properties":{"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"},"type":"array"},"code":{"format":"int32","description":"The status code, which should be an enum value of google.rpc.Code.","type":"integer"},"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"}},"id":"Status"}},"protocol":"rest","icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"}};