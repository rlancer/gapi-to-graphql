declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
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
                "https://www.googleapis.com/auth/fusiontables": {
                    "description": string;
                };
                "https://www.googleapis.com/auth/fusiontables.readonly": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Bucket": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "color": {
                    "type": string;
                    "description": string;
                };
                "icon": {
                    "type": string;
                    "description": string;
                };
                "max": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "min": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "opacity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "weight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Column": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "baseColumn": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "columnId": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "tableIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "columnId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "columnJsonSchema": {
                    "type": string;
                    "description": string;
                };
                "columnPropertiesJson": {
                    "type": string;
                    "description": string;
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "formatPattern": {
                    "type": string;
                    "description": string;
                };
                "graphPredicate": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "validValues": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "validateData": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ColumnList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Geometry": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "geometries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "geometry": {
                    "type": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Import": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "numRowsReceived": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Line": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "coordinates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                            "format": string;
                        };
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "LineStyle": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "strokeColor": {
                    "type": string;
                    "description": string;
                };
                "strokeColorStyler": {
                    "$ref": string;
                    "description": string;
                };
                "strokeOpacity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "strokeWeight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "strokeWeightStyler": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Point": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "coordinates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "format": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "PointStyle": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "iconName": {
                    "type": string;
                    "description": string;
                };
                "iconStyler": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Polygon": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "coordinates": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                            "items": {
                                "type": string;
                                "format": string;
                            };
                        };
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "PolygonStyle": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "fillColor": {
                    "type": string;
                    "description": string;
                };
                "fillColorStyler": {
                    "$ref": string;
                    "description": string;
                };
                "fillOpacity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "strokeColor": {
                    "type": string;
                    "description": string;
                };
                "strokeColorStyler": {
                    "$ref": string;
                    "description": string;
                };
                "strokeOpacity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "strokeWeight": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "strokeWeightStyler": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Sqlresponse": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "columns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "rows": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
            };
        };
        "StyleFunction": {
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
                "columnName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gradient": {
                    "type": string;
                    "description": string;
                    "properties": {
                        "colors": {
                            "type": string;
                            "description": string;
                            "items": {
                                "type": string;
                                "properties": {
                                    "color": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "opacity": {
                                        "type": string;
                                        "description": string;
                                        "format": string;
                                    };
                                };
                            };
                        };
                        "max": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                        "min": {
                            "type": string;
                            "description": string;
                            "format": string;
                        };
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "StyleSetting": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "markerOptions": {
                    "$ref": string;
                    "description": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "polygonOptions": {
                    "$ref": string;
                    "description": string;
                };
                "polylineOptions": {
                    "$ref": string;
                    "description": string;
                };
                "styleId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "tableId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "StyleSettingList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Table": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "attribution": {
                    "type": string;
                    "description": string;
                };
                "attributionLink": {
                    "type": string;
                    "description": string;
                };
                "baseTableIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "columnPropertiesJsonSchema": {
                    "type": string;
                    "description": string;
                };
                "columns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "description": {
                    "type": string;
                    "description": string;
                };
                "isExportable": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "sql": {
                    "type": string;
                    "description": string;
                };
                "tableId": {
                    "type": string;
                    "description": string;
                };
                "tablePropertiesJson": {
                    "type": string;
                    "description": string;
                };
                "tablePropertiesJsonSchema": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TableList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Task": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "progress": {
                    "type": string;
                    "description": string;
                };
                "started": {
                    "type": string;
                    "description": string;
                };
                "taskId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TaskList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "Template": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "automaticColumnNames": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "body": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "name": {
                    "type": string;
                    "description": string;
                };
                "tableId": {
                    "type": string;
                    "description": string;
                };
                "templateId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "TemplateList": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "items": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "totalItems": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
    };
    "resources": {
        "column": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "columnId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "columnId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                        "columnId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "columnId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "tableId": {
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
        "query": {
            "methods": {
                "sql": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hdrs": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sql": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "typed": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                    "useMediaDownloadService": boolean;
                };
                "sqlGet": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "hdrs": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "sql": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "typed": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                    "supportsMediaDownload": boolean;
                    "useMediaDownloadService": boolean;
                };
            };
        };
        "style": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "styleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "styleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                        "styleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "styleId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
        "table": {
            "methods": {
                "copy": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "copyPresentation": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
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
                "importRows": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "delimiter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "encoding": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "endLine": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "isStrict": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startLine": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "maxSize": string;
                        "protocols": {
                            "simple": {
                                "multipart": boolean;
                                "path": string;
                            };
                            "resumable": {
                                "multipart": boolean;
                                "path": string;
                            };
                        };
                    };
                };
                "importTable": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "delimiter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "encoding": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "name": {
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
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "maxSize": string;
                        "protocols": {
                            "simple": {
                                "multipart": boolean;
                                "path": string;
                            };
                            "resumable": {
                                "multipart": boolean;
                                "path": string;
                            };
                        };
                    };
                };
                "insert": {
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
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
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
                "patch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "replaceViewDefinition": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                "refetchSheet": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
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
                "replaceRows": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "delimiter": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "encoding": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "endLine": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "isStrict": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startLine": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
                    "supportsMediaUpload": boolean;
                    "mediaUpload": {
                        "accept": string[];
                        "maxSize": string;
                        "protocols": {
                            "simple": {
                                "multipart": boolean;
                                "path": string;
                            };
                            "resumable": {
                                "multipart": boolean;
                                "path": string;
                            };
                        };
                    };
                };
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "replaceViewDefinition": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
        "task": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "taskId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "taskId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "startIndex": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "tableId": {
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
        "template": {
            "methods": {
                "delete": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "templateId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "templateId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "insert": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
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
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "minimum": string;
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "tableId": {
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
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "templateId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
                "update": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "tableId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                        "templateId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
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
    };
};
export default _default;
//# sourceMappingURL=fusiontables-v2.d.ts.map