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
            };
        };
    };
    "schemas": {
        "AndroidAppInfo": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "packageName": {
                    "type": string;
                    "description": string;
                };
                "versionCode": {
                    "type": string;
                    "description": string;
                };
                "versionName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AndroidInstrumentationTest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "testPackageId": {
                    "type": string;
                    "description": string;
                };
                "testRunnerClass": {
                    "type": string;
                    "description": string;
                };
                "testTargets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "useOrchestrator": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "AndroidRoboTest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "appInitialActivity": {
                    "type": string;
                    "description": string;
                };
                "bootstrapPackageId": {
                    "type": string;
                    "description": string;
                };
                "bootstrapRunnerClass": {
                    "type": string;
                    "description": string;
                };
                "maxDepth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "maxSteps": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AndroidTest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidAppInfo": {
                    "$ref": string;
                    "description": string;
                };
                "androidInstrumentationTest": {
                    "$ref": string;
                    "description": string;
                };
                "androidRoboTest": {
                    "$ref": string;
                    "description": string;
                };
                "testTimeout": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Any": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "typeUrl": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "AppStartTime": {
            "id": string;
            "type": string;
            "properties": {
                "fullyDrawnTime": {
                    "$ref": string;
                    "description": string;
                };
                "initialDisplayTime": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "BasicPerfSampleSeries": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "perfMetricType": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "perfUnit": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "sampleSeriesLabel": {
                    "type": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "BatchCreatePerfSamplesRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "perfSamples": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "BatchCreatePerfSamplesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "perfSamples": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "CPUInfo": {
            "id": string;
            "type": string;
            "properties": {
                "cpuProcessor": {
                    "type": string;
                    "description": string;
                };
                "cpuSpeedInGhz": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "numberOfCores": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Duration": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "seconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Execution": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "completionTime": {
                    "$ref": string;
                    "description": string;
                };
                "creationTime": {
                    "$ref": string;
                    "description": string;
                };
                "executionId": {
                    "type": string;
                    "description": string;
                };
                "outcome": {
                    "$ref": string;
                    "description": string;
                };
                "specification": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "testExecutionMatrixId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FailureDetail": {
            "id": string;
            "type": string;
            "properties": {
                "crashed": {
                    "type": string;
                    "description": string;
                };
                "notInstalled": {
                    "type": string;
                    "description": string;
                };
                "otherNativeCrash": {
                    "type": string;
                    "description": string;
                };
                "timedOut": {
                    "type": string;
                    "description": string;
                };
                "unableToCrawl": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "FileReference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fileUri": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "GraphicsStats": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "buckets": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "highInputLatencyCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "jankyFrames": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "missedVsyncCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "p50Millis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "p90Millis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "p95Millis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "p99Millis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "slowBitmapUploadCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "slowDrawCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "slowUiThreadCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalFrames": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "GraphicsStatsBucket": {
            "id": string;
            "type": string;
            "properties": {
                "frameCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "renderMillis": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "History": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "displayName": {
                    "type": string;
                    "description": string;
                };
                "historyId": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Image": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "error": {
                    "$ref": string;
                    "description": string;
                };
                "sourceImage": {
                    "$ref": string;
                    "description": string;
                };
                "stepId": {
                    "type": string;
                    "description": string;
                };
                "thumbnail": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "InconclusiveDetail": {
            "id": string;
            "type": string;
            "properties": {
                "abortedByUser": {
                    "type": string;
                    "description": string;
                };
                "infrastructureFailure": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListExecutionsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListHistoriesResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "histories": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ListPerfSampleSeriesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "perfSampleSeries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListPerfSamplesResponse": {
            "id": string;
            "type": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "perfSamples": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListScreenshotClustersResponse": {
            "id": string;
            "type": string;
            "properties": {
                "clusters": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListStepThumbnailsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "thumbnails": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ListStepsResponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "steps": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "MemoryInfo": {
            "id": string;
            "type": string;
            "properties": {
                "memoryCapInKibibyte": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "memoryTotalInKibibyte": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Outcome": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "failureDetail": {
                    "$ref": string;
                    "description": string;
                };
                "inconclusiveDetail": {
                    "$ref": string;
                    "description": string;
                };
                "skippedDetail": {
                    "$ref": string;
                    "description": string;
                };
                "successDetail": {
                    "$ref": string;
                    "description": string;
                };
                "summary": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
            };
        };
        "PerfEnvironment": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "cpuInfo": {
                    "$ref": string;
                    "description": string;
                };
                "memoryInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "PerfMetricsSummary": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "appStartTime": {
                    "$ref": string;
                };
                "executionId": {
                    "type": string;
                    "description": string;
                };
                "graphicsStats": {
                    "$ref": string;
                    "description": string;
                };
                "historyId": {
                    "type": string;
                    "description": string;
                };
                "perfEnvironment": {
                    "$ref": string;
                    "description": string;
                };
                "perfMetrics": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "enum": string[];
                        "enumDescriptions": string[];
                    };
                };
                "projectId": {
                    "type": string;
                    "description": string;
                };
                "stepId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PerfSample": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "sampleTime": {
                    "$ref": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "PerfSampleSeries": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "basicPerfSampleSeries": {
                    "$ref": string;
                    "description": string;
                };
                "executionId": {
                    "type": string;
                    "description": string;
                };
                "historyId": {
                    "type": string;
                    "description": string;
                };
                "projectId": {
                    "type": string;
                    "description": string;
                };
                "sampleSeriesId": {
                    "type": string;
                    "description": string;
                };
                "stepId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ProjectSettings": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "defaultBucket": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "PublishXunitXmlFilesRequest": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "xunitXmlFiles": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "Screen": {
            "id": string;
            "type": string;
            "properties": {
                "fileReference": {
                    "type": string;
                    "description": string;
                };
                "locale": {
                    "type": string;
                    "description": string;
                };
                "model": {
                    "type": string;
                    "description": string;
                };
                "version": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ScreenshotCluster": {
            "id": string;
            "type": string;
            "properties": {
                "activity": {
                    "type": string;
                    "description": string;
                };
                "clusterId": {
                    "type": string;
                    "description": string;
                };
                "keyScreen": {
                    "$ref": string;
                    "description": string;
                };
                "screens": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "SkippedDetail": {
            "id": string;
            "type": string;
            "properties": {
                "incompatibleAppVersion": {
                    "type": string;
                    "description": string;
                };
                "incompatibleArchitecture": {
                    "type": string;
                    "description": string;
                };
                "incompatibleDevice": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Specification": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "androidTest": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "StackTrace": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "exception": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Status": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "details": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Step": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "completionTime": {
                    "$ref": string;
                    "description": string;
                };
                "creationTime": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "deviceUsageDuration": {
                    "$ref": string;
                    "description": string;
                };
                "dimensionValue": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "hasImages": {
                    "type": string;
                    "description": string;
                };
                "labels": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "outcome": {
                    "$ref": string;
                    "description": string;
                };
                "runDuration": {
                    "$ref": string;
                    "description": string;
                };
                "state": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "stepId": {
                    "type": string;
                    "description": string;
                };
                "testExecutionStep": {
                    "$ref": string;
                    "description": string;
                };
                "toolExecutionStep": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "StepDimensionValueEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "StepLabelsEntry": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                };
                "value": {
                    "type": string;
                };
            };
        };
        "SuccessDetail": {
            "id": string;
            "type": string;
            "properties": {
                "otherNativeCrash": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TestCaseReference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "className": {
                    "type": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "testSuiteName": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TestExecutionStep": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "testIssues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "testSuiteOverviews": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "testTiming": {
                    "$ref": string;
                    "description": string;
                };
                "toolExecution": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestIssue": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "category": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "errorMessage": {
                    "type": string;
                    "description": string;
                };
                "severity": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "stackTrace": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "enum": string[];
                    "enumDescriptions": string[];
                };
                "warning": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestSuiteOverview": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "errorCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "failureCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "skippedCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "totalCount": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "xmlSource": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestTiming": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "testProcessDuration": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Thumbnail": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "contentType": {
                    "type": string;
                    "description": string;
                };
                "data": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "heightPx": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "widthPx": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Timestamp": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "nanos": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "seconds": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ToolExecution": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "commandLineArguments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "exitCode": {
                    "$ref": string;
                    "description": string;
                };
                "toolLogs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "toolOutputs": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ToolExecutionStep": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "toolExecution": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ToolExitCode": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "number": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "ToolOutputReference": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "creationTime": {
                    "$ref": string;
                    "description": string;
                };
                "output": {
                    "$ref": string;
                    "description": string;
                };
                "testCase": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "projects": {
            "methods": {
                "getSettings": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
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
                "initializeSettings": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "projectId": {
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
            };
            "resources": {
                "histories": {
                    "methods": {
                        "create": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "projectId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "requestId": {
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
                        "get": {
                            "id": string;
                            "path": string;
                            "httpMethod": string;
                            "description": string;
                            "parameters": {
                                "historyId": {
                                    "type": string;
                                    "description": string;
                                    "required": boolean;
                                    "location": string;
                                };
                                "projectId": {
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
                                "filterByName": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "pageSize": {
                                    "type": string;
                                    "description": string;
                                    "format": string;
                                    "location": string;
                                };
                                "pageToken": {
                                    "type": string;
                                    "description": string;
                                    "location": string;
                                };
                                "projectId": {
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
                    };
                    "resources": {
                        "executions": {
                            "methods": {
                                "create": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "historyId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "projectId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "requestId": {
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
                                "get": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "executionId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "historyId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "projectId": {
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
                                        "historyId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "pageSize": {
                                            "type": string;
                                            "description": string;
                                            "format": string;
                                            "location": string;
                                        };
                                        "pageToken": {
                                            "type": string;
                                            "description": string;
                                            "location": string;
                                        };
                                        "projectId": {
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
                                "patch": {
                                    "id": string;
                                    "path": string;
                                    "httpMethod": string;
                                    "description": string;
                                    "parameters": {
                                        "executionId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "historyId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "projectId": {
                                            "type": string;
                                            "description": string;
                                            "required": boolean;
                                            "location": string;
                                        };
                                        "requestId": {
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
                            };
                            "resources": {
                                "clusters": {
                                    "methods": {
                                        "get": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "clusterId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
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
                                        };
                                        "list": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
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
                                        };
                                    };
                                };
                                "steps": {
                                    "methods": {
                                        "create": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "requestId": {
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
                                        "get": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "stepId": {
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
                                        "getPerfMetricsSummary": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "stepId": {
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
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "pageSize": {
                                                    "type": string;
                                                    "description": string;
                                                    "format": string;
                                                    "location": string;
                                                };
                                                "pageToken": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "projectId": {
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
                                        "patch": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "requestId": {
                                                    "type": string;
                                                    "description": string;
                                                    "location": string;
                                                };
                                                "stepId": {
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
                                        "publishXunitXmlFiles": {
                                            "id": string;
                                            "path": string;
                                            "httpMethod": string;
                                            "description": string;
                                            "parameters": {
                                                "executionId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "historyId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "projectId": {
                                                    "type": string;
                                                    "description": string;
                                                    "required": boolean;
                                                    "location": string;
                                                };
                                                "stepId": {
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
                                    "resources": {
                                        "perfMetricsSummary": {
                                            "methods": {
                                                "create": {
                                                    "id": string;
                                                    "path": string;
                                                    "httpMethod": string;
                                                    "description": string;
                                                    "parameters": {
                                                        "executionId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "historyId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "projectId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "stepId": {
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
                                        "perfSampleSeries": {
                                            "methods": {
                                                "create": {
                                                    "id": string;
                                                    "path": string;
                                                    "httpMethod": string;
                                                    "description": string;
                                                    "parameters": {
                                                        "executionId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "historyId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "projectId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "stepId": {
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
                                                "get": {
                                                    "id": string;
                                                    "path": string;
                                                    "httpMethod": string;
                                                    "description": string;
                                                    "parameters": {
                                                        "executionId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "historyId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "projectId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "sampleSeriesId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "stepId": {
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
                                                        "executionId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "filter": {
                                                            "type": string;
                                                            "description": string;
                                                            "enum": string[];
                                                            "enumDescriptions": string[];
                                                            "repeated": boolean;
                                                            "location": string;
                                                        };
                                                        "historyId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "projectId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "stepId": {
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
                                            };
                                            "resources": {
                                                "samples": {
                                                    "methods": {
                                                        "batchCreate": {
                                                            "id": string;
                                                            "path": string;
                                                            "httpMethod": string;
                                                            "description": string;
                                                            "parameters": {
                                                                "executionId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "historyId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "projectId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "sampleSeriesId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "stepId": {
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
                                                        "list": {
                                                            "id": string;
                                                            "path": string;
                                                            "httpMethod": string;
                                                            "description": string;
                                                            "parameters": {
                                                                "executionId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "historyId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "pageSize": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "format": string;
                                                                    "location": string;
                                                                };
                                                                "pageToken": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "location": string;
                                                                };
                                                                "projectId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "sampleSeriesId": {
                                                                    "type": string;
                                                                    "description": string;
                                                                    "required": boolean;
                                                                    "location": string;
                                                                };
                                                                "stepId": {
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
                                                    };
                                                };
                                            };
                                        };
                                        "thumbnails": {
                                            "methods": {
                                                "list": {
                                                    "id": string;
                                                    "path": string;
                                                    "httpMethod": string;
                                                    "description": string;
                                                    "parameters": {
                                                        "executionId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "historyId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "pageSize": {
                                                            "type": string;
                                                            "description": string;
                                                            "format": string;
                                                            "location": string;
                                                        };
                                                        "pageToken": {
                                                            "type": string;
                                                            "description": string;
                                                            "location": string;
                                                        };
                                                        "projectId": {
                                                            "type": string;
                                                            "description": string;
                                                            "required": boolean;
                                                            "location": string;
                                                        };
                                                        "stepId": {
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
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=toolresults-v1beta3.d.ts.map