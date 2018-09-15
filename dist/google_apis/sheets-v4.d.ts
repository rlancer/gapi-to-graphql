declare const _default: {
    "title": string;
    "ownerName": string;
    "resources": {
        "spreadsheets": {
            "methods": {
                "get": {
                    "description": string;
                    "httpMethod": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "parameters": {
                        "ranges": {
                            "description": string;
                            "type": string;
                            "repeated": boolean;
                            "location": string;
                        };
                        "includeGridData": {
                            "location": string;
                            "description": string;
                            "type": string;
                        };
                        "spreadsheetId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                };
                "getByDataFilter": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "spreadsheetId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
                "create": {
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                    "flatPath": string;
                    "path": string;
                    "id": string;
                };
                "batchUpdate": {
                    "httpMethod": string;
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "parameters": {
                        "spreadsheetId": {
                            "required": boolean;
                            "type": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                    "id": string;
                    "path": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                };
            };
            "resources": {
                "developerMetadata": {
                    "methods": {
                        "search": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "spreadsheetId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "get": {
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "metadataId": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                    };
                };
                "values": {
                    "methods": {
                        "batchGetByDataFilter": {
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "spreadsheetId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "batchClear": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "spreadsheetId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                        };
                        "get": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "scopes": string[];
                            "parameters": {
                                "majorDimension": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "range": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "valueRenderOption": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "dateTimeRenderOption": {
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                };
                            };
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                        };
                        "batchUpdateByDataFilter": {
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "spreadsheetId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "update": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "responseValueRenderOption": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "valueInputOption": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "responseDateTimeRenderOption": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "range": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "includeValuesInResponse": {
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "batchUpdate": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                        };
                        "batchGet": {
                            "description": string;
                            "httpMethod": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "parameters": {
                                "ranges": {
                                    "description": string;
                                    "type": string;
                                    "repeated": boolean;
                                    "location": string;
                                };
                                "majorDimension": {
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                };
                                "spreadsheetId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "valueRenderOption": {
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                };
                                "dateTimeRenderOption": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                        };
                        "clear": {
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "parameters": {
                                "range": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "path": string;
                            "id": string;
                        };
                        "batchClearByDataFilter": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "spreadsheetId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                        "append": {
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "includeValuesInResponse": {
                                    "location": string;
                                    "description": string;
                                    "type": string;
                                };
                                "range": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "responseValueRenderOption": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "insertDataOption": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "valueInputOption": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "responseDateTimeRenderOption": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "request": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                };
                "sheets": {
                    "methods": {
                        "copyTo": {
                            "httpMethod": string;
                            "parameterOrder": string[];
                            "response": {
                                "$ref": string;
                            };
                            "parameters": {
                                "sheetId": {
                                    "location": string;
                                    "description": string;
                                    "format": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "spreadsheetId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "scopes": string[];
                            "flatPath": string;
                            "id": string;
                            "path": string;
                            "description": string;
                            "request": {
                                "$ref": string;
                            };
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "oauth_token": {
            "description": string;
            "type": string;
            "location": string;
        };
        "callback": {
            "type": string;
            "location": string;
            "description": string;
        };
        "alt": {
            "type": string;
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "location": string;
            "description": string;
            "type": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "servicePath": string;
    "description": string;
    "kind": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "PivotTable": {
            "description": string;
            "type": string;
            "properties": {
                "criteria": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "rows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "valueLayout": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "source": {
                    "description": string;
                    "$ref": string;
                };
                "columns": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "ChartSourceRange": {
            "description": string;
            "type": string;
            "properties": {
                "sources": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "SearchDeveloperMetadataResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "matchedDeveloperMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "ValueRange": {
            "properties": {
                "range": {
                    "description": string;
                    "type": string;
                };
                "majorDimension": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AppendCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "rows": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddBandingRequest": {
            "properties": {
                "bandedRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Response": {
            "description": string;
            "type": string;
            "properties": {
                "addNamedRange": {
                    "$ref": string;
                    "description": string;
                };
                "deleteDeveloperMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "addFilterView": {
                    "description": string;
                    "$ref": string;
                };
                "addBanding": {
                    "$ref": string;
                    "description": string;
                };
                "addProtectedRange": {
                    "$ref": string;
                    "description": string;
                };
                "duplicateSheet": {
                    "description": string;
                    "$ref": string;
                };
                "deleteConditionalFormatRule": {
                    "description": string;
                    "$ref": string;
                };
                "updateEmbeddedObjectPosition": {
                    "$ref": string;
                    "description": string;
                };
                "deleteDimensionGroup": {
                    "$ref": string;
                    "description": string;
                };
                "addDimensionGroup": {
                    "$ref": string;
                    "description": string;
                };
                "duplicateFilterView": {
                    "description": string;
                    "$ref": string;
                };
                "addChart": {
                    "$ref": string;
                    "description": string;
                };
                "updateDeveloperMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "findReplace": {
                    "$ref": string;
                    "description": string;
                };
                "addSheet": {
                    "description": string;
                    "$ref": string;
                };
                "updateConditionalFormatRule": {
                    "$ref": string;
                    "description": string;
                };
                "createDeveloperMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "EmbeddedChart": {
            "description": string;
            "type": string;
            "properties": {
                "position": {
                    "description": string;
                    "$ref": string;
                };
                "spec": {
                    "description": string;
                    "$ref": string;
                };
                "chartId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextFormatRun": {
            "description": string;
            "type": string;
            "properties": {
                "startIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "format": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "InsertRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "shiftDimension": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AddNamedRangeResponse": {
            "description": string;
            "type": string;
            "properties": {
                "namedRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "BatchUpdateValuesByDataFilterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "totalUpdatedSheets": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalUpdatedCells": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalUpdatedColumns": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "totalUpdatedRows": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "responses": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
            };
            "id": string;
        };
        "RowData": {
            "description": string;
            "type": string;
            "properties": {
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "Border": {
            "type": string;
            "properties": {
                "style": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "color": {
                    "description": string;
                    "$ref": string;
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "GridData": {
            "description": string;
            "type": string;
            "properties": {
                "rowData": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startRow": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "startColumn": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rowMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "UpdateNamedRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "namedRange": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "FindReplaceRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sheetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "matchCase": {
                    "description": string;
                    "type": string;
                };
                "allSheets": {
                    "type": string;
                    "description": string;
                };
                "includeFormulas": {
                    "description": string;
                    "type": string;
                };
                "matchEntireCell": {
                    "description": string;
                    "type": string;
                };
                "find": {
                    "description": string;
                    "type": string;
                };
                "searchByRegex": {
                    "description": string;
                    "type": string;
                };
                "replacement": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AddSheetRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "properties": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "UpdateCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "rows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "start": {
                    "description": string;
                    "$ref": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "RandomizeRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DeleteConditionalFormatRuleResponse": {
            "description": string;
            "type": string;
            "properties": {
                "rule": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "DeleteRangeRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "shiftDimension": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "GridCoordinate": {
            "description": string;
            "type": string;
            "properties": {
                "rowIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateSheetPropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "properties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "GridProperties": {
            "properties": {
                "frozenRowCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "frozenColumnCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnGroupControlAfter": {
                    "description": string;
                    "type": string;
                };
                "rowGroupControlAfter": {
                    "description": string;
                    "type": string;
                };
                "rowCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "hideGridlines": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UnmergeCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "SortSpec": {
            "description": string;
            "type": string;
            "properties": {
                "dimensionIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sortOrder": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Sheet": {
            "description": string;
            "type": string;
            "properties": {
                "properties": {
                    "$ref": string;
                    "description": string;
                };
                "developerMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "protectedRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "conditionalFormats": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "columnGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "basicFilter": {
                    "description": string;
                    "$ref": string;
                };
                "merges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "bandedRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "charts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "filterViews": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rowGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "data": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "UpdateEmbeddedObjectPositionResponse": {
            "description": string;
            "type": string;
            "properties": {
                "position": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BooleanRule": {
            "description": string;
            "type": string;
            "properties": {
                "condition": {
                    "$ref": string;
                    "description": string;
                };
                "format": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "FilterCriteria": {
            "description": string;
            "type": string;
            "properties": {
                "hiddenValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "condition": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "PivotGroupValueMetadata": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "collapsed": {
                    "description": string;
                    "type": string;
                };
                "value": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "WaterfallChartSpec": {
            "description": string;
            "type": string;
            "properties": {
                "stackedType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "hideConnectorLines": {
                    "description": string;
                    "type": string;
                };
                "series": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "connectorLineStyle": {
                    "description": string;
                    "$ref": string;
                };
                "domain": {
                    "$ref": string;
                    "description": string;
                };
                "firstValueIsTotal": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Editors": {
            "description": string;
            "type": string;
            "properties": {
                "users": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "groups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "domainUsersCanEdit": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateConditionalFormatRuleRequest": {
            "description": string;
            "type": string;
            "properties": {
                "rule": {
                    "description": string;
                    "$ref": string;
                };
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "newIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BasicChartDomain": {
            "properties": {
                "domain": {
                    "$ref": string;
                    "description": string;
                };
                "reversed": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DataValidationRule": {
            "description": string;
            "type": string;
            "properties": {
                "showCustomUi": {
                    "description": string;
                    "type": string;
                };
                "strict": {
                    "description": string;
                    "type": string;
                };
                "inputMessage": {
                    "description": string;
                    "type": string;
                };
                "condition": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "PasteDataRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "coordinate": {
                    "$ref": string;
                    "description": string;
                };
                "data": {
                    "description": string;
                    "type": string;
                };
                "delimiter": {
                    "description": string;
                    "type": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "html": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "UpdateDeveloperMetadataResponse": {
            "properties": {
                "developerMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AppendDimensionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "dimension": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "length": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddNamedRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "namedRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CreateDeveloperMetadataResponse": {
            "description": string;
            "type": string;
            "properties": {
                "developerMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdateEmbeddedObjectPositionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "newPosition": {
                    "description": string;
                    "$ref": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextRotation": {
            "type": string;
            "properties": {
                "angle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "vertical": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DeleteDimensionGroupResponse": {
            "description": string;
            "type": string;
            "properties": {
                "dimensionGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PieChartSpec": {
            "description": string;
            "type": string;
            "properties": {
                "series": {
                    "description": string;
                    "$ref": string;
                };
                "legendPosition": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "pieHole": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "domain": {
                    "$ref": string;
                    "description": string;
                };
                "threeDimensional": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateDeveloperMetadataRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "developerMetadata": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "WaterfallChartColumnStyle": {
            "type": string;
            "properties": {
                "color": {
                    "description": string;
                    "$ref": string;
                };
                "label": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "UpdateFilterViewRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ConditionalFormatRule": {
            "description": string;
            "type": string;
            "properties": {
                "booleanRule": {
                    "description": string;
                    "$ref": string;
                };
                "ranges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "gradientRule": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CopyPasteRequest": {
            "description": string;
            "type": string;
            "properties": {
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "pasteType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "destination": {
                    "$ref": string;
                    "description": string;
                };
                "pasteOrientation": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "BooleanCondition": {
            "properties": {
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Request": {
            "type": string;
            "properties": {
                "appendCells": {
                    "$ref": string;
                    "description": string;
                };
                "autoResizeDimensions": {
                    "$ref": string;
                    "description": string;
                };
                "cutPaste": {
                    "$ref": string;
                    "description": string;
                };
                "mergeCells": {
                    "description": string;
                    "$ref": string;
                };
                "updateNamedRange": {
                    "$ref": string;
                    "description": string;
                };
                "updateSheetProperties": {
                    "description": string;
                    "$ref": string;
                };
                "deleteDimension": {
                    "description": string;
                    "$ref": string;
                };
                "autoFill": {
                    "$ref": string;
                    "description": string;
                };
                "sortRange": {
                    "description": string;
                    "$ref": string;
                };
                "deleteDimensionGroup": {
                    "$ref": string;
                    "description": string;
                };
                "deleteProtectedRange": {
                    "$ref": string;
                    "description": string;
                };
                "duplicateFilterView": {
                    "$ref": string;
                    "description": string;
                };
                "addChart": {
                    "description": string;
                    "$ref": string;
                };
                "findReplace": {
                    "$ref": string;
                    "description": string;
                };
                "updateChartSpec": {
                    "$ref": string;
                    "description": string;
                };
                "textToColumns": {
                    "description": string;
                    "$ref": string;
                };
                "updateProtectedRange": {
                    "description": string;
                    "$ref": string;
                };
                "addSheet": {
                    "$ref": string;
                    "description": string;
                };
                "copyPaste": {
                    "$ref": string;
                    "description": string;
                };
                "deleteFilterView": {
                    "description": string;
                    "$ref": string;
                };
                "insertDimension": {
                    "description": string;
                    "$ref": string;
                };
                "deleteRange": {
                    "$ref": string;
                    "description": string;
                };
                "deleteBanding": {
                    "description": string;
                    "$ref": string;
                };
                "addFilterView": {
                    "$ref": string;
                    "description": string;
                };
                "setDataValidation": {
                    "description": string;
                    "$ref": string;
                };
                "updateBorders": {
                    "description": string;
                    "$ref": string;
                };
                "deleteConditionalFormatRule": {
                    "description": string;
                    "$ref": string;
                };
                "clearBasicFilter": {
                    "description": string;
                    "$ref": string;
                };
                "repeatCell": {
                    "$ref": string;
                    "description": string;
                };
                "appendDimension": {
                    "$ref": string;
                    "description": string;
                };
                "createDeveloperMetadata": {
                    "description": string;
                    "$ref": string;
                };
                "updateConditionalFormatRule": {
                    "description": string;
                    "$ref": string;
                };
                "insertRange": {
                    "$ref": string;
                    "description": string;
                };
                "moveDimension": {
                    "$ref": string;
                    "description": string;
                };
                "deleteDeveloperMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "randomizeRange": {
                    "$ref": string;
                    "description": string;
                };
                "updateBanding": {
                    "$ref": string;
                    "description": string;
                };
                "addProtectedRange": {
                    "description": string;
                    "$ref": string;
                };
                "deleteNamedRange": {
                    "$ref": string;
                    "description": string;
                };
                "duplicateSheet": {
                    "$ref": string;
                    "description": string;
                };
                "deleteSheet": {
                    "description": string;
                    "$ref": string;
                };
                "unmergeCells": {
                    "$ref": string;
                    "description": string;
                };
                "updateEmbeddedObjectPosition": {
                    "$ref": string;
                    "description": string;
                };
                "addDimensionGroup": {
                    "description": string;
                    "$ref": string;
                };
                "updateDeveloperMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "updateDimensionProperties": {
                    "description": string;
                    "$ref": string;
                };
                "updateDimensionGroup": {
                    "$ref": string;
                    "description": string;
                };
                "pasteData": {
                    "$ref": string;
                    "description": string;
                };
                "setBasicFilter": {
                    "$ref": string;
                    "description": string;
                };
                "addConditionalFormatRule": {
                    "$ref": string;
                    "description": string;
                };
                "updateCells": {
                    "description": string;
                    "$ref": string;
                };
                "addNamedRange": {
                    "$ref": string;
                    "description": string;
                };
                "updateSpreadsheetProperties": {
                    "$ref": string;
                    "description": string;
                };
                "deleteEmbeddedObject": {
                    "$ref": string;
                    "description": string;
                };
                "updateFilterView": {
                    "description": string;
                    "$ref": string;
                };
                "addBanding": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "WaterfallChartDomain": {
            "description": string;
            "type": string;
            "properties": {
                "data": {
                    "description": string;
                    "$ref": string;
                };
                "reversed": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "GridRange": {
            "description": string;
            "type": string;
            "properties": {
                "startRowIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "startColumnIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endRowIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endColumnIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BasicChartSpec": {
            "type": string;
            "properties": {
                "stackedType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "threeDimensional": {
                    "description": string;
                    "type": string;
                };
                "axis": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "interpolateNulls": {
                    "description": string;
                    "type": string;
                };
                "chartType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "series": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "legendPosition": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "compareMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "domains": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lineSmoothing": {
                    "description": string;
                    "type": string;
                };
                "headerCount": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AddDimensionGroupRequest": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DeleteDimensionGroupRequest": {
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "SetDataValidationRequest": {
            "properties": {
                "rule": {
                    "$ref": string;
                    "description": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "BubbleChartSpec": {
            "properties": {
                "domain": {
                    "$ref": string;
                    "description": string;
                };
                "bubbleOpacity": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bubbleSizes": {
                    "$ref": string;
                    "description": string;
                };
                "bubbleBorderColor": {
                    "$ref": string;
                    "description": string;
                };
                "bubbleTextStyle": {
                    "$ref": string;
                    "description": string;
                };
                "groupIds": {
                    "$ref": string;
                    "description": string;
                };
                "bubbleLabels": {
                    "description": string;
                    "$ref": string;
                };
                "bubbleMinRadiusSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bubbleMaxRadiusSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "series": {
                    "description": string;
                    "$ref": string;
                };
                "legendPosition": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CellData": {
            "type": string;
            "properties": {
                "formattedValue": {
                    "description": string;
                    "type": string;
                };
                "textFormatRuns": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "hyperlink": {
                    "description": string;
                    "type": string;
                };
                "pivotTable": {
                    "description": string;
                    "$ref": string;
                };
                "userEnteredFormat": {
                    "description": string;
                    "$ref": string;
                };
                "note": {
                    "description": string;
                    "type": string;
                };
                "effectiveFormat": {
                    "$ref": string;
                    "description": string;
                };
                "userEnteredValue": {
                    "$ref": string;
                    "description": string;
                };
                "dataValidation": {
                    "description": string;
                    "$ref": string;
                };
                "effectiveValue": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "TextPosition": {
            "description": string;
            "type": string;
            "properties": {
                "horizontalAlignment": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "BatchUpdateValuesByDataFilterRequest": {
            "properties": {
                "responseValueRenderOption": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "includeValuesInResponse": {
                    "description": string;
                    "type": string;
                };
                "valueInputOption": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "data": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseDateTimeRenderOption": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "BatchUpdateSpreadsheetRequest": {
            "description": string;
            "type": string;
            "properties": {
                "includeSpreadsheetInResponse": {
                    "type": string;
                    "description": string;
                };
                "responseRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "responseIncludeGridData": {
                    "description": string;
                    "type": string;
                };
                "requests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "BasicChartAxis": {
            "description": string;
            "type": string;
            "properties": {
                "titleTextPosition": {
                    "$ref": string;
                    "description": string;
                };
                "format": {
                    "$ref": string;
                    "description": string;
                };
                "position": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "title": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Padding": {
            "description": string;
            "type": string;
            "properties": {
                "right": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bottom": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "top": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "left": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteDimensionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdateChartSpecRequest": {
            "description": string;
            "type": string;
            "properties": {
                "chartId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "spec": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "UpdateDimensionGroupRequest": {
            "description": string;
            "type": string;
            "properties": {
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dimensionGroup": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "DeleteFilterViewRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filterId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteDeveloperMetadataResponse": {
            "description": string;
            "type": string;
            "properties": {
                "deletedDeveloperMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "BatchGetValuesByDataFilterRequest": {
            "description": string;
            "type": string;
            "properties": {
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "valueRenderOption": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "dateTimeRenderOption": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "majorDimension": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchUpdateValuesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "totalUpdatedRows": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "responses": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "totalUpdatedSheets": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalUpdatedCells": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "totalUpdatedColumns": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SortRangeRequest": {
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "sortSpecs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "MergeCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "mergeType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "MatchedDeveloperMetadata": {
            "type": string;
            "properties": {
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "developerMetadata": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AddProtectedRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "protectedRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "BatchClearValuesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "ranges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "DuplicateFilterViewResponse": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DeveloperMetadata": {
            "description": string;
            "type": string;
            "properties": {
                "metadataKey": {
                    "description": string;
                    "type": string;
                };
                "metadataId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "location": {
                    "description": string;
                    "$ref": string;
                };
                "visibility": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "metadataValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DuplicateSheetResponse": {
            "properties": {
                "properties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DimensionGroup": {
            "type": string;
            "properties": {
                "collapsed": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "depth": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ClearBasicFilterRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextToColumnsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "delimiterType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "delimiter": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteBandingRequest": {
            "description": string;
            "type": string;
            "properties": {
                "bandedRangeId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchUpdateSpreadsheetResponse": {
            "description": string;
            "type": string;
            "properties": {
                "replies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "updatedSpreadsheet": {
                    "$ref": string;
                    "description": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AppendValuesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "updates": {
                    "description": string;
                    "$ref": string;
                };
                "tableRange": {
                    "description": string;
                    "type": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "PivotFilterCriteria": {
            "description": string;
            "type": string;
            "properties": {
                "visibleValues": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "AddFilterViewRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "MoveDimensionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "destinationIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "source": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AddConditionalFormatRuleRequest": {
            "description": string;
            "type": string;
            "properties": {
                "rule": {
                    "description": string;
                    "$ref": string;
                };
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ChartSpec": {
            "description": string;
            "type": string;
            "properties": {
                "maximized": {
                    "description": string;
                    "type": string;
                };
                "treemapChart": {
                    "description": string;
                    "$ref": string;
                };
                "hiddenDimensionStrategy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "subtitleTextFormat": {
                    "$ref": string;
                    "description": string;
                };
                "subtitle": {
                    "description": string;
                    "type": string;
                };
                "backgroundColor": {
                    "description": string;
                    "$ref": string;
                };
                "subtitleTextPosition": {
                    "$ref": string;
                    "description": string;
                };
                "basicChart": {
                    "description": string;
                    "$ref": string;
                };
                "orgChart": {
                    "$ref": string;
                    "description": string;
                };
                "pieChart": {
                    "description": string;
                    "$ref": string;
                };
                "titleTextFormat": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "altText": {
                    "type": string;
                    "description": string;
                };
                "titleTextPosition": {
                    "$ref": string;
                    "description": string;
                };
                "histogramChart": {
                    "$ref": string;
                    "description": string;
                };
                "candlestickChart": {
                    "$ref": string;
                    "description": string;
                };
                "bubbleChart": {
                    "$ref": string;
                    "description": string;
                };
                "waterfallChart": {
                    "description": string;
                    "$ref": string;
                };
                "fontName": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateDeveloperMetadataRequest": {
            "description": string;
            "type": string;
            "properties": {
                "developerMetadata": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "BatchGetValuesByDataFilterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "valueRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "LineStyle": {
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "width": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DataFilterValueRange": {
            "description": string;
            "type": string;
            "properties": {
                "dataFilter": {
                    "$ref": string;
                    "description": string;
                };
                "majorDimension": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "values": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
            };
            "id": string;
        };
        "NumberFormat": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "pattern": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CandlestickDomain": {
            "description": string;
            "type": string;
            "properties": {
                "data": {
                    "description": string;
                    "$ref": string;
                };
                "reversed": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SheetProperties": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "tabColor": {
                    "$ref": string;
                    "description": string;
                };
                "sheetId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "rightToLeft": {
                    "description": string;
                    "type": string;
                };
                "hidden": {
                    "description": string;
                    "type": string;
                };
                "sheetType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "gridProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdateDimensionPropertiesRequest": {
            "type": string;
            "properties": {
                "properties": {
                    "$ref": string;
                    "description": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "SourceAndDestination": {
            "type": string;
            "properties": {
                "fillLength": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "dimension": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "OrgChartSpec": {
            "description": string;
            "type": string;
            "properties": {
                "tooltips": {
                    "$ref": string;
                    "description": string;
                };
                "selectedNodeColor": {
                    "description": string;
                    "$ref": string;
                };
                "parentLabels": {
                    "$ref": string;
                    "description": string;
                };
                "nodeSize": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "labels": {
                    "description": string;
                    "$ref": string;
                };
                "nodeColor": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "FilterView": {
            "description": string;
            "type": string;
            "properties": {
                "criteria": {
                    "description": string;
                    "type": string;
                    "additionalProperties": {
                        "$ref": string;
                    };
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
                "sortSpecs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "namedRangeId": {
                    "description": string;
                    "type": string;
                };
                "filterViewId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SearchDeveloperMetadataRequest": {
            "description": string;
            "type": string;
            "properties": {
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "BandingProperties": {
            "description": string;
            "type": string;
            "properties": {
                "footerColor": {
                    "$ref": string;
                    "description": string;
                };
                "headerColor": {
                    "$ref": string;
                    "description": string;
                };
                "firstBandColor": {
                    "$ref": string;
                    "description": string;
                };
                "secondBandColor": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AddProtectedRangeResponse": {
            "description": string;
            "type": string;
            "properties": {
                "protectedRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BasicFilter": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "criteria": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
                "sortSpecs": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CandlestickSeries": {
            "properties": {
                "data": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "HistogramChartSpec": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "outlierPercentile": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "showItemDividers": {
                    "description": string;
                    "type": string;
                };
                "series": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "legendPosition": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "bucketSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "UpdateValuesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "updatedData": {
                    "$ref": string;
                    "description": string;
                };
                "updatedRows": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updatedColumns": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "updatedRange": {
                    "description": string;
                    "type": string;
                };
                "updatedCells": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ErrorValue": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "PivotValue": {
            "description": string;
            "type": string;
            "properties": {
                "sourceColumnOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
                "formula": {
                    "description": string;
                    "type": string;
                };
                "calculatedDisplayType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "summarizeFunction": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CopySheetToAnotherSpreadsheetRequest": {
            "description": string;
            "type": string;
            "properties": {
                "destinationSpreadsheetId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "PivotGroupSortValueBucket": {
            "description": string;
            "type": string;
            "properties": {
                "valuesIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "buckets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "WaterfallChartSeries": {
            "description": string;
            "type": string;
            "properties": {
                "customSubtotals": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "subtotalColumnsStyle": {
                    "description": string;
                    "$ref": string;
                };
                "positiveColumnsStyle": {
                    "$ref": string;
                    "description": string;
                };
                "data": {
                    "description": string;
                    "$ref": string;
                };
                "negativeColumnsStyle": {
                    "description": string;
                    "$ref": string;
                };
                "hideTrailingSubtotal": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteDeveloperMetadataRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "dataFilter": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "CandlestickChartSpec": {
            "properties": {
                "domain": {
                    "$ref": string;
                    "description": string;
                };
                "data": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "BatchClearValuesByDataFilterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "clearedRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "spreadsheetId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TreemapChartColorScale": {
            "description": string;
            "type": string;
            "properties": {
                "midValueColor": {
                    "$ref": string;
                    "description": string;
                };
                "maxValueColor": {
                    "$ref": string;
                    "description": string;
                };
                "minValueColor": {
                    "description": string;
                    "$ref": string;
                };
                "noDataColor": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CandlestickData": {
            "description": string;
            "type": string;
            "properties": {
                "lowSeries": {
                    "$ref": string;
                    "description": string;
                };
                "closeSeries": {
                    "description": string;
                    "$ref": string;
                };
                "openSeries": {
                    "description": string;
                    "$ref": string;
                };
                "highSeries": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "EmbeddedObjectPosition": {
            "description": string;
            "type": string;
            "properties": {
                "newSheet": {
                    "description": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "overlayPosition": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DeleteProtectedRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "protectedRangeId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeveloperMetadataLookup": {
            "properties": {
                "metadataKey": {
                    "description": string;
                    "type": string;
                };
                "metadataId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "visibility": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "metadataValue": {
                    "type": string;
                    "description": string;
                };
                "metadataLocation": {
                    "description": string;
                    "$ref": string;
                };
                "locationMatchingStrategy": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "locationType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AutoFillRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "useAlternateSeries": {
                    "description": string;
                    "type": string;
                };
                "sourceAndDestination": {
                    "description": string;
                    "$ref": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "GradientRule": {
            "description": string;
            "type": string;
            "properties": {
                "minpoint": {
                    "$ref": string;
                    "description": string;
                };
                "maxpoint": {
                    "$ref": string;
                    "description": string;
                };
                "midpoint": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "SetBasicFilterRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ClearValuesRequest": {
            "description": string;
            "type": string;
            "properties": {};
            "id": string;
        };
        "BatchClearValuesByDataFilterRequest": {
            "description": string;
            "type": string;
            "properties": {
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "InterpolationPoint": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "value": {
                    "description": string;
                    "type": string;
                };
                "color": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
        };
        "GetSpreadsheetByDataFilterRequest": {
            "description": string;
            "type": string;
            "properties": {
                "includeGridData": {
                    "description": string;
                    "type": string;
                };
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "FindReplaceResponse": {
            "properties": {
                "valuesChanged": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "occurrencesChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "rowsChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetsChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "formulasChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DeleteEmbeddedObjectRequest": {
            "properties": {
                "objectId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UpdateValuesByDataFilterResponse": {
            "description": string;
            "type": string;
            "properties": {
                "updatedColumns": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "updatedRange": {
                    "description": string;
                    "type": string;
                };
                "updatedCells": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dataFilter": {
                    "$ref": string;
                    "description": string;
                };
                "updatedData": {
                    "description": string;
                    "$ref": string;
                };
                "updatedRows": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DuplicateFilterViewRequest": {
            "description": string;
            "type": string;
            "properties": {
                "filterId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteSheetRequest": {
            "description": string;
            "type": string;
            "properties": {
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeveloperMetadataLocation": {
            "description": string;
            "type": string;
            "properties": {
                "dimensionRange": {
                    "description": string;
                    "$ref": string;
                };
                "spreadsheet": {
                    "description": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "locationType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MatchedValueRange": {
            "type": string;
            "properties": {
                "valueRange": {
                    "$ref": string;
                    "description": string;
                };
                "dataFilters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "UpdateConditionalFormatRuleResponse": {
            "description": string;
            "type": string;
            "properties": {
                "newIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "oldIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "newRule": {
                    "$ref": string;
                    "description": string;
                };
                "oldRule": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DuplicateSheetRequest": {
            "description": string;
            "type": string;
            "properties": {
                "newSheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "insertSheetIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "newSheetName": {
                    "description": string;
                    "type": string;
                };
                "sourceSheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ConditionValue": {
            "description": string;
            "type": string;
            "properties": {
                "relativeDate": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "userEnteredValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TreemapChartSpec": {
            "properties": {
                "textFormat": {
                    "description": string;
                    "$ref": string;
                };
                "headerColor": {
                    "$ref": string;
                    "description": string;
                };
                "parentLabels": {
                    "$ref": string;
                    "description": string;
                };
                "labels": {
                    "description": string;
                    "$ref": string;
                };
                "colorData": {
                    "description": string;
                    "$ref": string;
                };
                "maxValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "colorScale": {
                    "$ref": string;
                    "description": string;
                };
                "hideTooltips": {
                    "description": string;
                    "type": string;
                };
                "hintedLevels": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "levels": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "minValue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sizeData": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DateTimeRule": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "ExtendedValue": {
            "description": string;
            "type": string;
            "properties": {
                "numberValue": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errorValue": {
                    "description": string;
                    "$ref": string;
                };
                "stringValue": {
                    "description": string;
                    "type": string;
                };
                "boolValue": {
                    "type": string;
                    "description": string;
                };
                "formulaValue": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddChartRequest": {
            "description": string;
            "type": string;
            "properties": {
                "chart": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BandedRange": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "bandedRangeId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "rowProperties": {
                    "description": string;
                    "$ref": string;
                };
                "columnProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Spreadsheet": {
            "description": string;
            "type": string;
            "properties": {
                "properties": {
                    "description": string;
                    "$ref": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "namedRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "developerMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "sheets": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "spreadsheetUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "BatchClearValuesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "clearedRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "HistogramSeries": {
            "description": string;
            "type": string;
            "properties": {
                "barColor": {
                    "$ref": string;
                    "description": string;
                };
                "data": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "UpdateProtectedRangeRequest": {
            "description": string;
            "type": string;
            "properties": {
                "protectedRange": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "HistogramRule": {
            "properties": {
                "start": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "end": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "interval": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DataFilter": {
            "properties": {
                "developerMetadataLookup": {
                    "$ref": string;
                    "description": string;
                };
                "a1Range": {
                    "description": string;
                    "type": string;
                };
                "gridRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "TextFormat": {
            "description": string;
            "type": string;
            "properties": {
                "fontSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "underline": {
                    "description": string;
                    "type": string;
                };
                "foregroundColor": {
                    "$ref": string;
                    "description": string;
                };
                "bold": {
                    "description": string;
                    "type": string;
                };
                "fontFamily": {
                    "description": string;
                    "type": string;
                };
                "italic": {
                    "description": string;
                    "type": string;
                };
                "strikethrough": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddSheetResponse": {
            "type": string;
            "properties": {
                "properties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "PivotGroupRule": {
            "type": string;
            "properties": {
                "histogramRule": {
                    "$ref": string;
                    "description": string;
                };
                "dateTimeRule": {
                    "$ref": string;
                    "description": string;
                };
                "manualRule": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "AddFilterViewResponse": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "filter": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "IterativeCalculationSettings": {
            "description": string;
            "type": string;
            "properties": {
                "convergenceThreshold": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "maxIterations": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SpreadsheetProperties": {
            "description": string;
            "type": string;
            "properties": {
                "autoRecalc": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "defaultFormat": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "timeZone": {
                    "type": string;
                    "description": string;
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "iterativeCalculationSettings": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "OverlayPosition": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "offsetXPixels": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "anchorCell": {
                    "description": string;
                    "$ref": string;
                };
                "offsetYPixels": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "heightPixels": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "widthPixels": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "RepeatCellRequest": {
            "description": string;
            "type": string;
            "properties": {
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cell": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "AddChartResponse": {
            "type": string;
            "properties": {
                "chart": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "InsertDimensionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "inheritFromBefore": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "UpdateSpreadsheetPropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "properties": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ProtectedRange": {
            "description": string;
            "type": string;
            "properties": {
                "unprotectedRanges": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                };
                "namedRangeId": {
                    "description": string;
                    "type": string;
                };
                "protectedRangeId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "warningOnly": {
                    "description": string;
                    "type": string;
                };
                "requestingUserCanEdit": {
                    "description": string;
                    "type": string;
                };
                "editors": {
                    "$ref": string;
                    "description": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "BatchUpdateValuesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "responseValueRenderOption": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "includeValuesInResponse": {
                    "description": string;
                    "type": string;
                };
                "valueInputOption": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "data": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "responseDateTimeRenderOption": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "DimensionProperties": {
            "description": string;
            "type": string;
            "properties": {
                "pixelSize": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "hiddenByFilter": {
                    "description": string;
                    "type": string;
                };
                "hiddenByUser": {
                    "description": string;
                    "type": string;
                };
                "developerMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "DimensionRange": {
            "description": string;
            "type": string;
            "properties": {
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dimension": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "startIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "NamedRange": {
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "type": string;
                    "description": string;
                };
                "namedRangeId": {
                    "description": string;
                    "type": string;
                };
                "range": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CutPasteRequest": {
            "type": string;
            "properties": {
                "source": {
                    "$ref": string;
                    "description": string;
                };
                "pasteType": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "destination": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "BasicChartSeries": {
            "properties": {
                "color": {
                    "description": string;
                    "$ref": string;
                };
                "lineStyle": {
                    "$ref": string;
                    "description": string;
                };
                "series": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "targetAxis": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Borders": {
            "description": string;
            "type": string;
            "properties": {
                "top": {
                    "description": string;
                    "$ref": string;
                };
                "left": {
                    "$ref": string;
                    "description": string;
                };
                "right": {
                    "description": string;
                    "$ref": string;
                };
                "bottom": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "AutoResizeDimensionsRequest": {
            "properties": {
                "dimensions": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ManualRule": {
            "description": string;
            "type": string;
            "properties": {
                "groups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "UpdateBordersRequest": {
            "description": string;
            "type": string;
            "properties": {
                "bottom": {
                    "description": string;
                    "$ref": string;
                };
                "innerVertical": {
                    "$ref": string;
                    "description": string;
                };
                "right": {
                    "$ref": string;
                    "description": string;
                };
                "range": {
                    "description": string;
                    "$ref": string;
                };
                "innerHorizontal": {
                    "$ref": string;
                    "description": string;
                };
                "top": {
                    "description": string;
                    "$ref": string;
                };
                "left": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "CellFormat": {
            "properties": {
                "numberFormat": {
                    "$ref": string;
                    "description": string;
                };
                "horizontalAlignment": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "hyperlinkDisplayType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "textFormat": {
                    "$ref": string;
                    "description": string;
                };
                "backgroundColor": {
                    "$ref": string;
                    "description": string;
                };
                "verticalAlignment": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "padding": {
                    "description": string;
                    "$ref": string;
                };
                "textDirection": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "borders": {
                    "description": string;
                    "$ref": string;
                };
                "wrapStrategy": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "textRotation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ClearValuesResponse": {
            "type": string;
            "properties": {
                "spreadsheetId": {
                    "type": string;
                    "description": string;
                };
                "clearedRange": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DeleteConditionalFormatRuleRequest": {
            "description": string;
            "type": string;
            "properties": {
                "index": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sheetId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteNamedRangeRequest": {
            "properties": {
                "namedRangeId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AddBandingResponse": {
            "description": string;
            "type": string;
            "properties": {
                "bandedRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "WaterfallChartCustomSubtotal": {
            "description": string;
            "type": string;
            "properties": {
                "subtotalIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "dataIsSubtotal": {
                    "description": string;
                    "type": string;
                };
                "label": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AddDimensionGroupResponse": {
            "type": string;
            "properties": {
                "dimensionGroups": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
            "description": string;
        };
        "ChartData": {
            "description": string;
            "type": string;
            "properties": {
                "sourceRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "BatchGetValuesResponse": {
            "description": string;
            "type": string;
            "properties": {
                "spreadsheetId": {
                    "type": string;
                    "description": string;
                };
                "valueRanges": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "UpdateBandingRequest": {
            "description": string;
            "type": string;
            "properties": {
                "bandedRange": {
                    "description": string;
                    "$ref": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Color": {
            "properties": {
                "green": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "blue": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "alpha": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "red": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ManualRuleGroup": {
            "description": string;
            "type": string;
            "properties": {
                "items": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "groupName": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "PivotGroup": {
            "description": string;
            "type": string;
            "properties": {
                "valueMetadata": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "showTotals": {
                    "description": string;
                    "type": string;
                };
                "groupRule": {
                    "$ref": string;
                    "description": string;
                };
                "label": {
                    "description": string;
                    "type": string;
                };
                "repeatHeadings": {
                    "description": string;
                    "type": string;
                };
                "sourceColumnOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "sortOrder": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "valueBucket": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
    };
    "icons": {
        "x32": string;
        "x16": string;
    };
    "protocol": string;
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/drive.file": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/spreadsheets.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/spreadsheets": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
};
export default _default;
//# sourceMappingURL=sheets-v4.d.ts.map