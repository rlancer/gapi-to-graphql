module.exports = {"discoveryVersion":"v1","version_module":true,"schemas":{"GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress":{"properties":{"annotationProgress":{"description":"Progress metadata for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress","description":"Video annotation progress. Included in the `metadata`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object"},"GoogleCloudVideointelligenceV1_VideoAnnotationProgress":{"description":"Annotation progress for a single video.","type":"object","properties":{"updateTime":{"format":"google-datetime","description":"Time of the most recent update.","type":"string"},"startTime":{"format":"google-datetime","description":"Time when the request was received.","type":"string"},"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"},"progressPercent":{"format":"int32","description":"Approximate percentage processed thus far.\nGuaranteed to be 100 when fully processed.","type":"integer"}},"id":"GoogleCloudVideointelligenceV1_VideoAnnotationProgress"},"GoogleCloudVideointelligenceV1_AnnotateVideoProgress":{"properties":{"annotationProgress":{"description":"Progress metadata for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1_VideoAnnotationProgress"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1_AnnotateVideoProgress","description":"Video annotation progress. Included in the `metadata`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object"},"GoogleLongrunning_Operation":{"description":"This resource represents a long-running operation that is the result of a\nnetwork API call.","type":"object","properties":{"done":{"description":"If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.","type":"boolean"},"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.","type":"object"},"name":{"description":"The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.","type":"string"},"error":{"description":"The error result of the operation in case of failure or cancellation.","$ref":"GoogleRpc_Status"},"metadata":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.","type":"object"}},"id":"GoogleLongrunning_Operation"},"GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults":{"properties":{"error":{"description":"If set, indicates an error. Note that for a single `AnnotateVideoRequest`\nsome videos may succeed and some may fail.","$ref":"GoogleRpc_Status"},"shotAnnotations":{"description":"Shot annotations. Each shot is represented as a video segment.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_VideoSegment"},"type":"array"},"safeSearchAnnotations":{"description":"Safe search annotations.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation"},"type":"array"},"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"},"labelAnnotations":{"description":"Label annotations. There is exactly one element for each unique label.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_LabelAnnotation"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults","description":"Annotation results for a single video.","type":"object"},"GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress":{"description":"Annotation progress for a single video.","type":"object","properties":{"updateTime":{"format":"google-datetime","description":"Time of the most recent update.","type":"string"},"startTime":{"format":"google-datetime","description":"Time when the request was received.","type":"string"},"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"},"progressPercent":{"format":"int32","description":"Approximate percentage processed thus far.\nGuaranteed to be 100 when fully processed.","type":"integer"}},"id":"GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress"},"GoogleCloudVideointelligenceV1_AnnotateVideoResponse":{"description":"Video annotation response. Included in the `response`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object","properties":{"annotationResults":{"description":"Annotation results for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1_VideoAnnotationResults"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1_AnnotateVideoResponse"},"GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse":{"description":"Video annotation response. Included in the `response`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object","properties":{"annotationResults":{"description":"Annotation results for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse"},"GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress":{"description":"Annotation progress for a single video.","type":"object","properties":{"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"},"progressPercent":{"format":"int32","description":"Approximate percentage processed thus far.\nGuaranteed to be 100 when fully processed.","type":"integer"},"updateTime":{"format":"google-datetime","description":"Time of the most recent update.","type":"string"},"startTime":{"format":"google-datetime","description":"Time when the request was received.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress"},"GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame":{"properties":{"pornographyLikelihood":{"enumDescriptions":["Unspecified likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."],"enum":["LIKELIHOOD_UNSPECIFIED","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of the pornography content..","type":"string"},"timeOffset":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video, corresponding to the\nvideo frame for this location.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame","description":"Video frame level annotation results for explicit content.","type":"object"},"GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest":{"properties":{"videoContext":{"$ref":"GoogleCloudVideointelligenceV1beta1_VideoContext","description":"Additional video context and/or feature-specific parameters."},"locationId":{"description":"Optional cloud region where annotation should take place. Supported cloud\nregions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region\nis specified, a region will be determined based on video file location.","type":"string"},"inputUri":{"description":"Input video location. Currently, only\n[Google Cloud Storage](https://cloud.google.com/storage/) URIs are\nsupported, which must be specified in the following format:\n`gs://bucket-id/object-id` (other URI formats return\ngoogle.rpc.Code.INVALID_ARGUMENT). For more information, see\n[Request URIs](/storage/docs/reference-uris).\nA video URI may include wildcards in `object-id`, and thus identify\nmultiple videos. Supported wildcards: '*' to match 0 or more characters;\n'?' to match 1 character. If unset, the input video should be embedded\nin the request as `input_content`. If set, `input_content` should be unset.","type":"string"},"inputContent":{"description":"The video data bytes. Encoding: base64. If unset, the input video(s)\nshould be specified via `input_uri`. If set, `input_uri` should be unset.","type":"string"},"features":{"enumDescriptions":["Unspecified.","Label detection. Detect objects, such as dog or flower.","Shot change detection.","Safe search detection."],"description":"Requested video annotation features.","items":{"enum":["FEATURE_UNSPECIFIED","LABEL_DETECTION","SHOT_CHANGE_DETECTION","SAFE_SEARCH_DETECTION"],"type":"string"},"type":"array"},"outputUri":{"description":"Optional location where the output (in JSON format) should be stored.\nCurrently, only [Google Cloud Storage](https://cloud.google.com/storage/)\nURIs are supported, which must be specified in the following format:\n`gs://bucket-id/object-id` (other URI formats return\ngoogle.rpc.Code.INVALID_ARGUMENT). For more information, see\n[Request URIs](/storage/docs/reference-uris).","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest","description":"Video annotation request.","type":"object"},"GoogleCloudVideointelligenceV1beta1_VideoSegment":{"description":"Video segment.","type":"object","properties":{"endTimeOffset":{"format":"int64","description":"End offset in microseconds (inclusive). Unset means 0.","type":"string"},"startTimeOffset":{"format":"int64","description":"Start offset in microseconds (inclusive). Unset means 0.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_VideoSegment"},"GoogleCloudVideointelligenceV1beta2_LabelSegment":{"description":"Video segment level annotation results for label detection.","type":"object","properties":{"confidence":{"format":"float","description":"Confidence that the label is accurate. Range: [0, 1].","type":"number"},"segment":{"$ref":"GoogleCloudVideointelligenceV1beta2_VideoSegment","description":"Video segment where a label was detected."}},"id":"GoogleCloudVideointelligenceV1beta2_LabelSegment"},"GoogleCloudVideointelligenceV1_SafeSearchAnnotation":{"properties":{"time":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video,\ncorresponding to the video frame for this annotation.","type":"string"},"adult":{"enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."],"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of adult content.","type":"string"}},"id":"GoogleCloudVideointelligenceV1_SafeSearchAnnotation","description":"Safe search annotation (based on per-frame visual signals only).\nIf no unsafe content has been detected in a frame, no annotations\nare present for that frame.","type":"object"},"GoogleCloudVideointelligenceV1beta2_LabelAnnotation":{"properties":{"categoryEntities":{"description":"Common categories for the detected entity.\nE.g. when the label is `Terrier` the category is likely `dog`. And in some\ncases there might be more than one categories e.g. `Terrier` could also be\na `pet`.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_Entity"},"type":"array"},"entity":{"$ref":"GoogleCloudVideointelligenceV1beta2_Entity","description":"Detected entity."},"frames":{"description":"All video frames where a label was detected.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_LabelFrame"},"type":"array"},"segments":{"description":"All video segments where a label was detected.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_LabelSegment"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta2_LabelAnnotation","description":"Label annotation.","type":"object"},"GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation":{"description":"Safe search annotation (based on per-frame visual signals only).\nIf no unsafe content has been detected in a frame, no annotations\nare present for that frame. If only some types of unsafe content\nhave been detected in a frame, the likelihood is set to `UNKNOWN`\nfor all other types of unsafe content.","type":"object","properties":{"racy":{"enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."],"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of racy content.","type":"string"},"timeOffset":{"format":"int64","description":"Video time offset in microseconds.","type":"string"},"spoof":{"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood that an obvious modification was made to the original\nversion to make it appear funny or offensive.","type":"string","enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."]},"violent":{"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of violent content.","type":"string","enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."]},"medical":{"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of medical content.","type":"string","enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."]},"adult":{"enumDescriptions":["Unknown likelihood.","Very unlikely.","Unlikely.","Possible.","Likely.","Very likely."],"enum":["UNKNOWN","VERY_UNLIKELY","UNLIKELY","POSSIBLE","LIKELY","VERY_LIKELY"],"description":"Likelihood of adult content.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation"},"GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress":{"properties":{"annotationProgress":{"description":"Progress metadata for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress","description":"Video annotation progress. Included in the `metadata`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object"},"GoogleCloudVideointelligenceV1beta2_Entity":{"description":"Detected entity from video analysis.","type":"object","properties":{"entityId":{"description":"Opaque entity ID. Some IDs may be available in\n[Google Knowledge Graph Search\nAPI](https://developers.google.com/knowledge-graph/).","type":"string"},"description":{"description":"Textual description, e.g. `Fixed-gear bicycle`.","type":"string"},"languageCode":{"description":"Language code for `description` in BCP-47 format.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta2_Entity"},"GoogleCloudVideointelligenceV1beta2_VideoSegment":{"properties":{"endTimeOffset":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video,\ncorresponding to the end of the segment (inclusive).","type":"string"},"startTimeOffset":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video,\ncorresponding to the start of the segment (inclusive).","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta2_VideoSegment","description":"Video segment.","type":"object"},"GoogleCloudVideointelligenceV1_VideoAnnotationResults":{"properties":{"safeSearchAnnotations":{"description":"Safe search annotations.","items":{"$ref":"GoogleCloudVideointelligenceV1_SafeSearchAnnotation"},"type":"array"},"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"},"labelAnnotations":{"description":"Label annotations. There is exactly one element for each unique label.","items":{"$ref":"GoogleCloudVideointelligenceV1_LabelAnnotation"},"type":"array"},"error":{"description":"If set, indicates an error. Note that for a single `AnnotateVideoRequest`\nsome videos may succeed and some may fail.","$ref":"GoogleRpc_Status"},"shotAnnotations":{"description":"Shot annotations. Each shot is represented as a video segment.","items":{"$ref":"GoogleCloudVideointelligenceV1_VideoSegment"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1_VideoAnnotationResults","description":"Annotation results for a single video.","type":"object"},"GoogleCloudVideointelligenceV1_LabelLocation":{"properties":{"confidence":{"format":"float","description":"Confidence that the label is accurate. Range: [0, 1].","type":"number"},"segment":{"$ref":"GoogleCloudVideointelligenceV1_VideoSegment","description":"Video segment. Unset for video-level labels.\nSet to a frame timestamp for frame-level labels.\nOtherwise, corresponds to one of `AnnotateSpec.segments`\n(if specified) or to shot boundaries (if requested)."},"level":{"enumDescriptions":["Unspecified.","Video-level. Corresponds to the whole video.","Segment-level. Corresponds to one of `AnnotateSpec.segments`.","Shot-level. Corresponds to a single shot (i.e. a series of frames\nwithout a major camera position or background change).","Frame-level. Corresponds to a single video frame."],"enum":["LABEL_LEVEL_UNSPECIFIED","VIDEO_LEVEL","SEGMENT_LEVEL","SHOT_LEVEL","FRAME_LEVEL"],"description":"Label level.","type":"string"}},"id":"GoogleCloudVideointelligenceV1_LabelLocation","description":"Label location.","type":"object"},"GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse":{"properties":{"annotationResults":{"description":"Annotation results for all videos specified in `AnnotateVideoRequest`.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse","description":"Video annotation response. Included in the `response`\nfield of the `Operation` returned by the `GetOperation`\ncall of the `google::longrunning::Operations` service.","type":"object"},"GoogleCloudVideointelligenceV1beta1_LabelAnnotation":{"description":"Label annotation.","type":"object","properties":{"locations":{"description":"Where the label was detected and with what confidence.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_LabelLocation"},"type":"array"},"languageCode":{"description":"Language code for `description` in BCP-47 format.","type":"string"},"description":{"description":"Textual description, e.g. `Fixed-gear bicycle`.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_LabelAnnotation"},"GoogleCloudVideointelligenceV1_LabelAnnotation":{"description":"Label annotation.","type":"object","properties":{"locations":{"description":"Where the label was detected and with what confidence.","items":{"$ref":"GoogleCloudVideointelligenceV1_LabelLocation"},"type":"array"},"languageCode":{"description":"Language code for `description` in BCP-47 format.","type":"string"},"description":{"description":"Textual description, e.g. `Fixed-gear bicycle`.","type":"string"}},"id":"GoogleCloudVideointelligenceV1_LabelAnnotation"},"GoogleCloudVideointelligenceV1beta1_VideoContext":{"properties":{"labelDetectionMode":{"enum":["LABEL_DETECTION_MODE_UNSPECIFIED","SHOT_MODE","FRAME_MODE","SHOT_AND_FRAME_MODE"],"description":"If label detection has been requested, what labels should be detected\nin addition to video-level labels or segment-level labels. If unspecified,\ndefaults to `SHOT_MODE`.","type":"string","enumDescriptions":["Unspecified.","Detect shot-level labels.","Detect frame-level labels.","Detect both shot-level and frame-level labels."]},"stationaryCamera":{"description":"Whether the video has been shot from a stationary (i.e. non-moving) camera.\nWhen set to true, might improve detection accuracy for moving objects.","type":"boolean"},"safeSearchDetectionModel":{"description":"Model to use for safe search detection.\nSupported values: \"latest\" and \"stable\" (the default).","type":"string"},"segments":{"description":"Video segments to annotate. The segments may overlap and are not required\nto be contiguous or span the whole video. If unspecified, each video\nis treated as a single segment.","items":{"$ref":"GoogleCloudVideointelligenceV1beta1_VideoSegment"},"type":"array"},"labelDetectionModel":{"description":"Model to use for label detection.\nSupported values: \"latest\" and \"stable\" (the default).","type":"string"},"shotChangeDetectionModel":{"description":"Model to use for shot change detection.\nSupported values: \"latest\" and \"stable\" (the default).","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_VideoContext","description":"Video context and/or feature-specific parameters.","type":"object"},"GoogleRpc_Status":{"properties":{"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"},"type":"array"},"code":{"format":"int32","description":"The status code, which should be an enum value of google.rpc.Code.","type":"integer"},"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"}},"id":"GoogleRpc_Status","description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object"},"GoogleCloudVideointelligenceV1_VideoSegment":{"properties":{"endTime":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video,\ncorresponding to the end of the segment (inclusive).","type":"string"},"startTime":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video,\ncorresponding to the start of the segment (inclusive).","type":"string"}},"id":"GoogleCloudVideointelligenceV1_VideoSegment","description":"Video segment.","type":"object"},"GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults":{"description":"Annotation results for a single video.","type":"object","properties":{"explicitAnnotation":{"description":"Explicit content annotation.","$ref":"GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation"},"segmentLabelAnnotations":{"description":"Label annotations on video level or user specified segment level.\nThere is exactly one element for each unique label.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_LabelAnnotation"},"type":"array"},"shotAnnotations":{"description":"Shot annotations. Each shot is represented as a video segment.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_VideoSegment"},"type":"array"},"shotLabelAnnotations":{"description":"Label annotations on shot level.\nThere is exactly one element for each unique label.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_LabelAnnotation"},"type":"array"},"error":{"description":"If set, indicates an error. Note that for a single `AnnotateVideoRequest`\nsome videos may succeed and some may fail.","$ref":"GoogleRpc_Status"},"frameLabelAnnotations":{"description":"Label annotations on frame level.\nThere is exactly one element for each unique label.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_LabelAnnotation"},"type":"array"},"inputUri":{"description":"Video file location in\n[Google Cloud Storage](https://cloud.google.com/storage/).","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults"},"GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation":{"description":"Explicit content annotation (based on per-frame visual signals only).\nIf no explicit content has been detected in a frame, no annotations are\npresent for that frame.","type":"object","properties":{"frames":{"description":"All video frames where explicit content was detected.","items":{"$ref":"GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame"},"type":"array"}},"id":"GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation"},"GoogleCloudVideointelligenceV1beta1_LabelLocation":{"description":"Label location.","type":"object","properties":{"confidence":{"format":"float","description":"Confidence that the label is accurate. Range: [0, 1].","type":"number"},"segment":{"description":"Video segment. Set to [-1, -1] for video-level labels.\nSet to [timestamp, timestamp] for frame-level labels.\nOtherwise, corresponds to one of `AnnotateSpec.segments`\n(if specified) or to shot boundaries (if requested).","$ref":"GoogleCloudVideointelligenceV1beta1_VideoSegment"},"level":{"enumDescriptions":["Unspecified.","Video-level. Corresponds to the whole video.","Segment-level. Corresponds to one of `AnnotateSpec.segments`.","Shot-level. Corresponds to a single shot (i.e. a series of frames\nwithout a major camera position or background change).","Frame-level. Corresponds to a single video frame."],"enum":["LABEL_LEVEL_UNSPECIFIED","VIDEO_LEVEL","SEGMENT_LEVEL","SHOT_LEVEL","FRAME_LEVEL"],"description":"Label level.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta1_LabelLocation"},"GoogleCloudVideointelligenceV1beta2_LabelFrame":{"properties":{"confidence":{"format":"float","description":"Confidence that the label is accurate. Range: [0, 1].","type":"number"},"timeOffset":{"format":"google-duration","description":"Time-offset, relative to the beginning of the video, corresponding to the\nvideo frame for this location.","type":"string"}},"id":"GoogleCloudVideointelligenceV1beta2_LabelFrame","description":"Video frame level annotation results for label detection.","type":"object"}},"icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"protocol":"rest","canonicalName":"Cloud Video Intelligence","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://videointelligence.googleapis.com/","ownerDomain":"google.com","name":"videointelligence","batchPath":"batch","title":"Cloud Video Intelligence API","ownerName":"Google","resources":{"videos":{"methods":{"annotate":{"response":{"$ref":"GoogleLongrunning_Operation"},"parameterOrder":[],"httpMethod":"POST","parameters":{},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1beta1/videos:annotate","id":"videointelligence.videos.annotate","path":"v1beta1/videos:annotate","description":"Performs asynchronous video annotation. Progress and results can be\nretrieved through the `google.longrunning.Operations` interface.\n`Operation.metadata` contains `AnnotateVideoProgress` (progress).\n`Operation.response` contains `AnnotateVideoResponse` (results).","request":{"$ref":"GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest"}}}}},"parameters":{"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","default":"true","type":"boolean"},"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"$.xgafv":{"enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query"},"callback":{"location":"query","description":"JSONP","type":"string"},"alt":{"enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"}},"version":"v1beta1","baseUrl":"https://videointelligence.googleapis.com/","servicePath":"","description":"Cloud Video Intelligence API.","kind":"discovery#restDescription","basePath":"","documentationLink":"https://cloud.google.com/video-intelligence/docs/","revision":"20171004","id":"videointelligence:v1beta1"};