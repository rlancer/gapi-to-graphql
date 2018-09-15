declare const _default: {
    "ownerDomain": string;
    "name": string;
    "batchPath": string;
    "title": string;
    "ownerName": string;
    "resources": {
        "presentations": {
            "methods": {
                "get": {
                    "path": string;
                    "id": string;
                    "description": string;
                    "response": {
                        "$ref": string;
                    };
                    "parameterOrder": string[];
                    "httpMethod": string;
                    "scopes": string[];
                    "parameters": {
                        "presentationId": {
                            "required": boolean;
                            "type": string;
                            "pattern": string;
                            "location": string;
                            "description": string;
                        };
                    };
                    "flatPath": string;
                };
                "create": {
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
                    "parameterOrder": never[];
                    "httpMethod": string;
                    "parameters": {};
                    "scopes": string[];
                };
                "batchUpdate": {
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
                        "presentationId": {
                            "description": string;
                            "required": boolean;
                            "type": string;
                            "location": string;
                        };
                    };
                    "scopes": string[];
                    "flatPath": string;
                };
            };
            "resources": {
                "pages": {
                    "methods": {
                        "getThumbnail": {
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "pageObjectId": {
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                };
                                "thumbnailProperties.mimeType": {
                                    "description": string;
                                    "type": string;
                                    "location": string;
                                    "enum": string[];
                                };
                                "thumbnailProperties.thumbnailSize": {
                                    "location": string;
                                    "enum": string[];
                                    "description": string;
                                    "type": string;
                                };
                                "presentationId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                            };
                            "flatPath": string;
                        };
                        "get": {
                            "flatPath": string;
                            "path": string;
                            "id": string;
                            "description": string;
                            "response": {
                                "$ref": string;
                            };
                            "parameterOrder": string[];
                            "httpMethod": string;
                            "scopes": string[];
                            "parameters": {
                                "pageObjectId": {
                                    "location": string;
                                    "description": string;
                                    "required": boolean;
                                    "type": string;
                                };
                                "presentationId": {
                                    "required": boolean;
                                    "type": string;
                                    "location": string;
                                    "description": string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "parameters": {
        "callback": {
            "description": string;
            "type": string;
            "location": string;
        };
        "oauth_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "$.xgafv": {
            "enumDescriptions": string[];
            "location": string;
            "enum": string[];
            "description": string;
            "type": string;
        };
        "alt": {
            "enumDescriptions": string[];
            "location": string;
            "description": string;
            "default": string;
            "enum": string[];
            "type": string;
        };
        "key": {
            "location": string;
            "description": string;
            "type": string;
        };
        "access_token": {
            "type": string;
            "location": string;
            "description": string;
        };
        "upload_protocol": {
            "location": string;
            "description": string;
            "type": string;
        };
        "quotaUser": {
            "description": string;
            "type": string;
            "location": string;
        };
        "prettyPrint": {
            "location": string;
            "description": string;
            "type": string;
            "default": string;
        };
        "uploadType": {
            "description": string;
            "type": string;
            "location": string;
        };
        "fields": {
            "location": string;
            "description": string;
            "type": string;
        };
    };
    "version": string;
    "baseUrl": string;
    "kind": string;
    "description": string;
    "servicePath": string;
    "basePath": string;
    "revision": string;
    "documentationLink": string;
    "id": string;
    "discoveryVersion": string;
    "version_module": boolean;
    "schemas": {
        "CreateParagraphBulletsRequest": {
            "type": string;
            "properties": {
                "bulletPreset": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "textRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Size": {
            "description": string;
            "type": string;
            "properties": {
                "height": {
                    "description": string;
                    "$ref": string;
                };
                "width": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "TextStyle": {
            "description": string;
            "type": string;
            "properties": {
                "backgroundColor": {
                    "$ref": string;
                    "description": string;
                };
                "underline": {
                    "type": string;
                    "description": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
                "foregroundColor": {
                    "description": string;
                    "$ref": string;
                };
                "bold": {
                    "description": string;
                    "type": string;
                };
                "fontFamily": {
                    "type": string;
                    "description": string;
                };
                "italic": {
                    "description": string;
                    "type": string;
                };
                "strikethrough": {
                    "description": string;
                    "type": string;
                };
                "fontSize": {
                    "$ref": string;
                    "description": string;
                };
                "baselineOffset": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "weightedFontFamily": {
                    "description": string;
                    "$ref": string;
                };
                "smallCaps": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateVideoPropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "videoProperties": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Request": {
            "type": string;
            "properties": {
                "deleteObject": {
                    "$ref": string;
                    "description": string;
                };
                "updateParagraphStyle": {
                    "$ref": string;
                    "description": string;
                };
                "deleteTableColumn": {
                    "$ref": string;
                    "description": string;
                };
                "duplicateObject": {
                    "$ref": string;
                    "description": string;
                };
                "updateVideoProperties": {
                    "description": string;
                    "$ref": string;
                };
                "createLine": {
                    "$ref": string;
                    "description": string;
                };
                "createImage": {
                    "$ref": string;
                    "description": string;
                };
                "createParagraphBullets": {
                    "$ref": string;
                    "description": string;
                };
                "createVideo": {
                    "description": string;
                    "$ref": string;
                };
                "createSheetsChart": {
                    "description": string;
                    "$ref": string;
                };
                "replaceAllShapesWithSheetsChart": {
                    "$ref": string;
                    "description": string;
                };
                "unmergeTableCells": {
                    "description": string;
                    "$ref": string;
                };
                "updatePageElementTransform": {
                    "description": string;
                    "$ref": string;
                };
                "updateTextStyle": {
                    "description": string;
                    "$ref": string;
                };
                "updateTableRowProperties": {
                    "$ref": string;
                    "description": string;
                };
                "replaceAllShapesWithImage": {
                    "$ref": string;
                    "description": string;
                };
                "replaceAllText": {
                    "$ref": string;
                    "description": string;
                };
                "updateImageProperties": {
                    "$ref": string;
                    "description": string;
                };
                "insertTableRows": {
                    "$ref": string;
                    "description": string;
                };
                "createSlide": {
                    "$ref": string;
                    "description": string;
                };
                "updateLineProperties": {
                    "description": string;
                    "$ref": string;
                };
                "replaceImage": {
                    "$ref": string;
                    "description": string;
                };
                "updateSlidesPosition": {
                    "$ref": string;
                    "description": string;
                };
                "deleteTableRow": {
                    "$ref": string;
                    "description": string;
                };
                "updateShapeProperties": {
                    "description": string;
                    "$ref": string;
                };
                "ungroupObjects": {
                    "$ref": string;
                    "description": string;
                };
                "groupObjects": {
                    "description": string;
                    "$ref": string;
                };
                "insertText": {
                    "$ref": string;
                    "description": string;
                };
                "updateTableColumnProperties": {
                    "$ref": string;
                    "description": string;
                };
                "deleteText": {
                    "$ref": string;
                    "description": string;
                };
                "updatePageProperties": {
                    "description": string;
                    "$ref": string;
                };
                "deleteParagraphBullets": {
                    "description": string;
                    "$ref": string;
                };
                "createShape": {
                    "description": string;
                    "$ref": string;
                };
                "updateTableBorderProperties": {
                    "description": string;
                    "$ref": string;
                };
                "updatePageElementAltText": {
                    "$ref": string;
                    "description": string;
                };
                "insertTableColumns": {
                    "$ref": string;
                    "description": string;
                };
                "mergeTableCells": {
                    "$ref": string;
                    "description": string;
                };
                "refreshSheetsChart": {
                    "description": string;
                    "$ref": string;
                };
                "updateTableCellProperties": {
                    "$ref": string;
                    "description": string;
                };
                "createTable": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "UpdateImagePropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "imageProperties": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ParagraphStyle": {
            "properties": {
                "spaceAbove": {
                    "description": string;
                    "$ref": string;
                };
                "alignment": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "lineSpacing": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "indentFirstLine": {
                    "description": string;
                    "$ref": string;
                };
                "spaceBelow": {
                    "description": string;
                    "$ref": string;
                };
                "direction": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "spacingMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "indentEnd": {
                    "$ref": string;
                    "description": string;
                };
                "indentStart": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UpdateTableRowPropertiesRequest": {
            "properties": {
                "tableRowProperties": {
                    "description": string;
                    "$ref": string;
                };
                "objectId": {
                    "type": string;
                    "description": string;
                };
                "rowIndices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ReplaceAllShapesWithSheetsChartResponse": {
            "description": string;
            "type": string;
            "properties": {
                "occurrencesChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TableCellProperties": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "tableCellBackgroundFill": {
                    "$ref": string;
                    "description": string;
                };
                "contentAlignment": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
        };
        "Outline": {
            "description": string;
            "type": string;
            "properties": {
                "outlineFill": {
                    "description": string;
                    "$ref": string;
                };
                "weight": {
                    "description": string;
                    "$ref": string;
                };
                "dashStyle": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "propertyState": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
            };
            "id": string;
        };
        "RefreshSheetsChartRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ShapeProperties": {
            "description": string;
            "type": string;
            "properties": {
                "outline": {
                    "description": string;
                    "$ref": string;
                };
                "shapeBackgroundFill": {
                    "$ref": string;
                    "description": string;
                };
                "shadow": {
                    "$ref": string;
                    "description": string;
                };
                "contentAlignment": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "TableColumnProperties": {
            "description": string;
            "type": string;
            "properties": {
                "columnWidth": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "NotesProperties": {
            "type": string;
            "properties": {
                "speakerNotesObjectId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "TableRow": {
            "properties": {
                "tableRowProperties": {
                    "$ref": string;
                    "description": string;
                };
                "rowHeight": {
                    "description": string;
                    "$ref": string;
                };
                "tableCells": {
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
        "ReplaceImageRequest": {
            "properties": {
                "imageReplaceMethod": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "imageObjectId": {
                    "description": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UpdateTableCellPropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "tableRange": {
                    "$ref": string;
                    "description": string;
                };
                "tableCellProperties": {
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
        "CreateSlideRequest": {
            "properties": {
                "insertionIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "placeholderIdMappings": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "slideLayoutReference": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "TableRowProperties": {
            "description": string;
            "type": string;
            "properties": {
                "minRowHeight": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "BatchUpdatePresentationRequest": {
            "properties": {
                "requests": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "writeControl": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "GroupObjectsResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TableBorderProperties": {
            "description": string;
            "type": string;
            "properties": {
                "weight": {
                    "$ref": string;
                    "description": string;
                };
                "tableBorderFill": {
                    "description": string;
                    "$ref": string;
                };
                "dashStyle": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "TableBorderCell": {
            "type": string;
            "properties": {
                "tableBorderProperties": {
                    "$ref": string;
                    "description": string;
                };
                "location": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "TextContent": {
            "properties": {
                "textElements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lists": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateSheetsChartResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "WriteControl": {
            "description": string;
            "type": string;
            "properties": {
                "requiredRevisionId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteParagraphBulletsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "cellLocation": {
                    "description": string;
                    "$ref": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "textRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "ParagraphMarker": {
            "description": string;
            "type": string;
            "properties": {
                "style": {
                    "description": string;
                    "$ref": string;
                };
                "bullet": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "InsertTableColumnsRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "number": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
                "insertRight": {
                    "description": string;
                    "type": string;
                };
                "tableObjectId": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Thumbnail": {
            "type": string;
            "properties": {
                "height": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "contentUrl": {
                    "description": string;
                    "type": string;
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
        "LayoutPlaceholderIdMapping": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "layoutPlaceholder": {
                    "$ref": string;
                    "description": string;
                };
                "layoutPlaceholderObjectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateTableBorderPropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "tableRange": {
                    "description": string;
                    "$ref": string;
                };
                "tableBorderProperties": {
                    "$ref": string;
                    "description": string;
                };
                "borderPosition": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateShapePropertiesRequest": {
            "description": string;
            "type": string;
            "properties": {
                "shapeProperties": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "WordArt": {
            "type": string;
            "properties": {
                "renderedText": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "UpdateTableColumnPropertiesRequest": {
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "columnIndices": {
                    "description": string;
                    "type": string;
                    "items": {
                        "format": string;
                        "type": string;
                    };
                };
                "tableColumnProperties": {
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
            "description": string;
        };
        "Recolor": {
            "description": string;
            "type": string;
            "properties": {
                "recolorStops": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "name": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "Link": {
            "description": string;
            "type": string;
            "properties": {
                "pageObjectId": {
                    "description": string;
                    "type": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "relativeLink": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "slideIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "RgbColor": {
            "description": string;
            "type": string;
            "properties": {
                "red": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
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
            };
            "id": string;
        };
        "CreateShapeResponse": {
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "CreateLineRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "elementProperties": {
                    "description": string;
                    "$ref": string;
                };
                "lineCategory": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
        };
        "CreateSlideResponse": {
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateShapeRequest": {
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "shapeType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "elementProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Video": {
            "properties": {
                "source": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
                "videoProperties": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PageProperties": {
            "type": string;
            "properties": {
                "pageBackgroundFill": {
                    "$ref": string;
                    "description": string;
                };
                "colorScheme": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
        };
        "NestingLevel": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "bulletStyle": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TableCell": {
            "description": string;
            "type": string;
            "properties": {
                "location": {
                    "$ref": string;
                    "description": string;
                };
                "rowSpan": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnSpan": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "$ref": string;
                };
                "tableCellProperties": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "UpdatePageElementAltTextRequest": {
            "description": string;
            "type": string;
            "properties": {
                "title": {
                    "description": string;
                    "type": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdateLinePropertiesRequest": {
            "type": string;
            "properties": {
                "lineProperties": {
                    "description": string;
                    "$ref": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "TableCellBackgroundFill": {
            "properties": {
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
                "propertyState": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UpdateSlidesPositionRequest": {
            "description": string;
            "type": string;
            "properties": {
                "slideObjectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "insertionIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "UpdatePagePropertiesRequest": {
            "properties": {
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "pageProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "Group": {
            "properties": {
                "children": {
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
        "Placeholder": {
            "description": string;
            "type": string;
            "properties": {
                "index": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "parentObjectId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "DuplicateObjectRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectIds": {
                    "additionalProperties": {
                        "type": string;
                    };
                    "description": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ReplaceAllTextRequest": {
            "description": string;
            "type": string;
            "properties": {
                "replaceText": {
                    "description": string;
                    "type": string;
                };
                "pageObjectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "containsText": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "UnmergeTableCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "tableRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Page": {
            "properties": {
                "layoutProperties": {
                    "$ref": string;
                    "description": string;
                };
                "pageElements": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "pageType": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "notesProperties": {
                    "description": string;
                    "$ref": string;
                };
                "slideProperties": {
                    "description": string;
                    "$ref": string;
                };
                "pageProperties": {
                    "$ref": string;
                    "description": string;
                };
                "masterProperties": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "revisionId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ShapeBackgroundFill": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "propertyState": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
            };
        };
        "CropProperties": {
            "properties": {
                "topOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "leftOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "rightOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bottomOffset": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "angle": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "ReplaceAllShapesWithSheetsChartRequest": {
            "description": string;
            "type": string;
            "properties": {
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "linkingMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "containsText": {
                    "$ref": string;
                    "description": string;
                };
                "chartId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "pageObjectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "ColorStop": {
            "description": string;
            "type": string;
            "properties": {
                "alpha": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "position": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "color": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Range": {
            "description": string;
            "type": string;
            "properties": {
                "type": {
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
        "CreateVideoRequest": {
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "source": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "elementProperties": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "DuplicateObjectResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ReplaceAllShapesWithImageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "containsText": {
                    "$ref": string;
                    "description": string;
                };
                "pageObjectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
                "imageReplaceMethod": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
                "imageUrl": {
                    "description": string;
                    "type": string;
                };
                "replaceMethod": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "MergeTableCellsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "tableRange": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UngroupObjectsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "Shadow": {
            "description": string;
            "type": string;
            "properties": {
                "alpha": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "description": string;
                    "$ref": string;
                };
                "rotateWithShape": {
                    "type": string;
                    "description": string;
                };
                "propertyState": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "blurRadius": {
                    "description": string;
                    "$ref": string;
                };
                "type": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "transform": {
                    "description": string;
                    "$ref": string;
                };
                "alignment": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "DeleteTableRowRequest": {
            "description": string;
            "type": string;
            "properties": {
                "tableObjectId": {
                    "description": string;
                    "type": string;
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "Bullet": {
            "properties": {
                "listId": {
                    "description": string;
                    "type": string;
                };
                "glyph": {
                    "description": string;
                    "type": string;
                };
                "nestingLevel": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "bulletStyle": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OutlineFill": {
            "properties": {
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateLineResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TableCellLocation": {
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
            };
            "id": string;
            "description": string;
        };
        "ReplaceAllTextResponse": {
            "description": string;
            "type": string;
            "properties": {
                "occurrencesChanged": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
        };
        "TableBorderFill": {
            "type": string;
            "properties": {
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "UpdateParagraphStyleRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "textRange": {
                    "$ref": string;
                    "description": string;
                };
                "cellLocation": {
                    "description": string;
                    "$ref": string;
                };
                "style": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "ColorScheme": {
            "properties": {
                "colors": {
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
        "Shape": {
            "type": string;
            "properties": {
                "shapeType": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "text": {
                    "$ref": string;
                    "description": string;
                };
                "placeholder": {
                    "$ref": string;
                    "description": string;
                };
                "shapeProperties": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Image": {
            "description": string;
            "type": string;
            "properties": {
                "imageProperties": {
                    "$ref": string;
                    "description": string;
                };
                "contentUrl": {
                    "description": string;
                    "type": string;
                };
                "sourceUrl": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "AffineTransform": {
            "properties": {
                "unit": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "scaleX": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "shearX": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "scaleY": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "translateY": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "translateX": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "shearY": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "InsertTextRequest": {
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "text": {
                    "description": string;
                    "type": string;
                };
                "insertionIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "AutoText": {
            "description": string;
            "type": string;
            "properties": {
                "style": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "content": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateVideoResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "UpdatePageElementTransformRequest": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "type": string;
                    "description": string;
                };
                "transform": {
                    "description": string;
                    "$ref": string;
                };
                "applyMode": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "DeleteTextRequest": {
            "description": string;
            "type": string;
            "properties": {
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "textRange": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "DeleteObjectRequest": {
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "TextElement": {
            "type": string;
            "properties": {
                "textRun": {
                    "$ref": string;
                    "description": string;
                };
                "autoText": {
                    "description": string;
                    "$ref": string;
                };
                "paragraphMarker": {
                    "description": string;
                    "$ref": string;
                };
                "startIndex": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "endIndex": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Dimension": {
            "description": string;
            "type": string;
            "properties": {
                "magnitude": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "unit": {
                    "enum": string[];
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                };
            };
            "id": string;
        };
        "LineFill": {
            "description": string;
            "type": string;
            "properties": {
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "VideoProperties": {
            "description": string;
            "type": string;
            "properties": {
                "start": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "autoPlay": {
                    "description": string;
                    "type": string;
                };
                "end": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "outline": {
                    "$ref": string;
                    "description": string;
                };
                "mute": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "InsertTableRowsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "tableObjectId": {
                    "description": string;
                    "type": string;
                };
                "insertBelow": {
                    "description": string;
                    "type": string;
                };
                "number": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
        };
        "LayoutProperties": {
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
                "masterObjectId": {
                    "description": string;
                    "type": string;
                };
                "name": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LineProperties": {
            "description": string;
            "type": string;
            "properties": {
                "startArrow": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "endArrow": {
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                };
                "weight": {
                    "$ref": string;
                    "description": string;
                };
                "lineFill": {
                    "$ref": string;
                    "description": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
                "dashStyle": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "Presentation": {
            "properties": {
                "slides": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "revisionId": {
                    "description": string;
                    "type": string;
                };
                "notesMaster": {
                    "description": string;
                    "$ref": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "layouts": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "masters": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "locale": {
                    "description": string;
                    "type": string;
                };
                "pageSize": {
                    "$ref": string;
                    "description": string;
                };
                "presentationId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "OpaqueColor": {
            "description": string;
            "type": string;
            "properties": {
                "rgbColor": {
                    "description": string;
                    "$ref": string;
                };
                "themeColor": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "ImageProperties": {
            "description": string;
            "type": string;
            "properties": {
                "transparency": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "shadow": {
                    "$ref": string;
                    "description": string;
                };
                "link": {
                    "$ref": string;
                    "description": string;
                };
                "contrast": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "cropProperties": {
                    "$ref": string;
                    "description": string;
                };
                "recolor": {
                    "description": string;
                    "$ref": string;
                };
                "outline": {
                    "$ref": string;
                    "description": string;
                };
                "brightness": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "ReplaceAllShapesWithImageResponse": {
            "type": string;
            "properties": {
                "occurrencesChanged": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
        };
        "Line": {
            "properties": {
                "lineType": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
                "lineProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateSheetsChartRequest": {
            "properties": {
                "elementProperties": {
                    "$ref": string;
                    "description": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "linkingMode": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "chartId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "BatchUpdatePresentationResponse": {
            "description": string;
            "type": string;
            "properties": {
                "writeControl": {
                    "$ref": string;
                    "description": string;
                };
                "presentationId": {
                    "description": string;
                    "type": string;
                };
                "replies": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "CreateImageResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SlideProperties": {
            "description": string;
            "type": string;
            "properties": {
                "notesPage": {
                    "$ref": string;
                    "description": string;
                };
                "layoutObjectId": {
                    "description": string;
                    "type": string;
                };
                "masterObjectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "MasterProperties": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "displayName": {
                    "description": string;
                    "type": string;
                };
            };
        };
        "Response": {
            "properties": {
                "createSlide": {
                    "description": string;
                    "$ref": string;
                };
                "duplicateObject": {
                    "$ref": string;
                    "description": string;
                };
                "createLine": {
                    "description": string;
                    "$ref": string;
                };
                "createImage": {
                    "description": string;
                    "$ref": string;
                };
                "createVideo": {
                    "$ref": string;
                    "description": string;
                };
                "replaceAllShapesWithSheetsChart": {
                    "$ref": string;
                    "description": string;
                };
                "createSheetsChart": {
                    "description": string;
                    "$ref": string;
                };
                "groupObjects": {
                    "$ref": string;
                    "description": string;
                };
                "createShape": {
                    "$ref": string;
                    "description": string;
                };
                "replaceAllShapesWithImage": {
                    "description": string;
                    "$ref": string;
                };
                "createTable": {
                    "$ref": string;
                    "description": string;
                };
                "replaceAllText": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SubstringMatchCriteria": {
            "description": string;
            "type": string;
            "properties": {
                "text": {
                    "description": string;
                    "type": string;
                };
                "matchCase": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "LayoutReference": {
            "description": string;
            "type": string;
            "properties": {
                "layoutId": {
                    "description": string;
                    "type": string;
                };
                "predefinedLayout": {
                    "enumDescriptions": string[];
                    "enum": string[];
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TextRun": {
            "description": string;
            "type": string;
            "properties": {
                "style": {
                    "$ref": string;
                    "description": string;
                };
                "content": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "TableRange": {
            "description": string;
            "type": string;
            "properties": {
                "location": {
                    "description": string;
                    "$ref": string;
                };
                "rowSpan": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "columnSpan": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "CreateTableRequest": {
            "properties": {
                "rows": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "columns": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "elementProperties": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "CreateTableResponse": {
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "Table": {
            "description": string;
            "type": string;
            "properties": {
                "verticalBorderRows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "rows": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "tableColumns": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "columns": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "tableRows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "horizontalBorderRows": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "GroupObjectsRequest": {
            "description": string;
            "type": string;
            "properties": {
                "groupObjectId": {
                    "description": string;
                    "type": string;
                };
                "childrenObjectIds": {
                    "description": string;
                    "type": string;
                    "items": {
                        "type": string;
                    };
                };
            };
            "id": string;
        };
        "TableBorderRow": {
            "description": string;
            "type": string;
            "properties": {
                "tableBorderCells": {
                    "description": string;
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "id": string;
        };
        "PageBackgroundFill": {
            "description": string;
            "type": string;
            "properties": {
                "solidFill": {
                    "description": string;
                    "$ref": string;
                };
                "propertyState": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
                "stretchedPictureFill": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "SheetsChart": {
            "description": string;
            "type": string;
            "properties": {
                "sheetsChartProperties": {
                    "description": string;
                    "$ref": string;
                };
                "contentUrl": {
                    "description": string;
                    "type": string;
                };
                "spreadsheetId": {
                    "description": string;
                    "type": string;
                };
                "chartId": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
        };
        "SolidFill": {
            "type": string;
            "properties": {
                "alpha": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
                "color": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
        };
        "ThemeColorPair": {
            "description": string;
            "type": string;
            "properties": {
                "color": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "description": string;
                    "type": string;
                    "enumDescriptions": string[];
                    "enum": string[];
                };
            };
            "id": string;
        };
        "OptionalColor": {
            "description": string;
            "type": string;
            "properties": {
                "opaqueColor": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "PageElementProperties": {
            "properties": {
                "size": {
                    "description": string;
                    "$ref": string;
                };
                "transform": {
                    "$ref": string;
                    "description": string;
                };
                "pageObjectId": {
                    "type": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "SheetsChartProperties": {
            "properties": {
                "chartImageProperties": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "StretchedPictureFill": {
            "properties": {
                "contentUrl": {
                    "description": string;
                    "type": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "DeleteTableColumnRequest": {
            "properties": {
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
                "tableObjectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "UpdateTextStyleRequest": {
            "id": string;
            "description": string;
            "type": string;
            "properties": {
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "textRange": {
                    "$ref": string;
                    "description": string;
                };
                "cellLocation": {
                    "$ref": string;
                    "description": string;
                };
                "style": {
                    "$ref": string;
                    "description": string;
                };
                "fields": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
        };
        "List": {
            "properties": {
                "listId": {
                    "description": string;
                    "type": string;
                };
                "nestingLevel": {
                    "additionalProperties": {
                        "$ref": string;
                    };
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "WeightedFontFamily": {
            "properties": {
                "fontFamily": {
                    "description": string;
                    "type": string;
                };
                "weight": {
                    "description": string;
                    "format": string;
                    "type": string;
                };
            };
            "id": string;
            "description": string;
            "type": string;
        };
        "PageElement": {
            "description": string;
            "type": string;
            "properties": {
                "wordArt": {
                    "$ref": string;
                    "description": string;
                };
                "table": {
                    "description": string;
                    "$ref": string;
                };
                "transform": {
                    "$ref": string;
                    "description": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
                "shape": {
                    "description": string;
                    "$ref": string;
                };
                "line": {
                    "description": string;
                    "$ref": string;
                };
                "description": {
                    "description": string;
                    "type": string;
                };
                "elementGroup": {
                    "$ref": string;
                    "description": string;
                };
                "image": {
                    "$ref": string;
                    "description": string;
                };
                "size": {
                    "$ref": string;
                    "description": string;
                };
                "title": {
                    "description": string;
                    "type": string;
                };
                "sheetsChart": {
                    "$ref": string;
                    "description": string;
                };
                "video": {
                    "description": string;
                    "$ref": string;
                };
            };
            "id": string;
        };
        "CreateImageRequest": {
            "description": string;
            "type": string;
            "properties": {
                "elementProperties": {
                    "$ref": string;
                    "description": string;
                };
                "url": {
                    "description": string;
                    "type": string;
                };
                "objectId": {
                    "description": string;
                    "type": string;
                };
            };
            "id": string;
        };
    };
    "protocol": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "canonicalName": string;
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/presentations": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/presentations.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.file": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/spreadsheets.readonly": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/drive": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/spreadsheets": {
                    "description": string;
                };
            };
        };
    };
    "rootUrl": string;
};
export default _default;
//# sourceMappingURL=slides-v1.d.ts.map