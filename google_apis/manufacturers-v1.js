module.exports = {"canonicalName":"Manufacturer Center","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/manufacturercenter":{"description":"Manage your product listings for Google Manufacturer Center"}}}},"rootUrl":"https://manufacturers.googleapis.com/","ownerDomain":"google.com","name":"manufacturers","batchPath":"batch","title":"Manufacturer Center API","ownerName":"Google","resources":{"accounts":{"resources":{"products":{"methods":{"get":{"description":"Gets the product from a Manufacturer Center account, including product\nissues.\n\nA recently updated product takes around 15 minutes to process. Changes are\nonly visible after it has been processed. While some issues may be\navailable once the product has been processed, other issues may take days\nto appear.","httpMethod":"GET","parameterOrder":["parent","name"],"response":{"$ref":"Product"},"parameters":{"name":{"type":"string","required":true,"pattern":"^[^/]+$","location":"path","description":"Name in the format `{target_country}:{content_language}:{product_id}`.\n\n`target_country`   - The target country of the product as a CLDR territory\n                     code (for example, US).\n\n`content_language` - The content language of the product as a two-letter\n                     ISO 639-1 language code (for example, en).\n\n`product_id`     -   The ID of the product. For more information, see\n                     https://support.google.com/manufacturers/answer/6124116#id."},"parent":{"location":"path","description":"Parent ID in the format `accounts/{account_id}`.\n\n`account_id` - The ID of the Manufacturer Center account.","type":"string","required":true,"pattern":"^accounts/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/manufacturercenter"],"flatPath":"v1/accounts/{accountsId}/products/{productsId}","path":"v1/{+parent}/products/{+name}","id":"manufacturers.accounts.products.get"},"list":{"description":"Lists all the products in a Manufacturer Center account.","httpMethod":"GET","response":{"$ref":"ListProductsResponse"},"parameterOrder":["parent"],"parameters":{"pageToken":{"location":"query","description":"The token returned by the previous request.","type":"string"},"pageSize":{"format":"int32","description":"Maximum number of product statuses to return in the response, used for\npaging.","type":"integer","location":"query"},"parent":{"location":"path","description":"Parent ID in the format `accounts/{account_id}`.\n\n`account_id` - The ID of the Manufacturer Center account.","type":"string","required":true,"pattern":"^accounts/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/manufacturercenter"],"flatPath":"v1/accounts/{accountsId}/products","path":"v1/{+parent}/products","id":"manufacturers.accounts.products.list"},"update":{"response":{"$ref":"Product"},"parameterOrder":["parent","name"],"httpMethod":"PUT","parameters":{"name":{"description":"Name in the format `{target_country}:{content_language}:{product_id}`.\n\n`target_country`   - The target country of the product as a CLDR territory\n                     code (for example, US).\n\n`content_language` - The content language of the product as a two-letter\n                     ISO 639-1 language code (for example, en).\n\n`product_id`     -   The ID of the product. For more information, see\n                     https://support.google.com/manufacturers/answer/6124116#id.","type":"string","required":true,"pattern":"^[^/]+$","location":"path"},"parent":{"type":"string","required":true,"pattern":"^accounts/[^/]+$","location":"path","description":"Parent ID in the format `accounts/{account_id}`.\n\n`account_id` - The ID of the Manufacturer Center account."}},"scopes":["https://www.googleapis.com/auth/manufacturercenter"],"flatPath":"v1/accounts/{accountsId}/products/{productsId}","id":"manufacturers.accounts.products.update","path":"v1/{+parent}/products/{+name}","description":"Inserts or updates the product in a Manufacturer Center account.\n\nThe checks at upload time are minimal. All required attributes need to be\npresent for a product to be valid. Issues may show up later\nafter the API has accepted an update for a product and it is possible to\noverwrite an existing valid product with an invalid product. To detect\nthis, you should retrieve the product and check it for issues once the\nupdated version is available.\n\nInserted or updated products first need to be processed before they can be\nretrieved. Until then, new products will be unavailable, and retrieval\nof updated products will return the original state of the product.","request":{"$ref":"Product"}},"delete":{"description":"Deletes the product from a Manufacturer Center account.","response":{"$ref":"Empty"},"parameterOrder":["parent","name"],"httpMethod":"DELETE","scopes":["https://www.googleapis.com/auth/manufacturercenter"],"parameters":{"name":{"pattern":"^[^/]+$","location":"path","description":"Name in the format `{target_country}:{content_language}:{product_id}`.\n\n`target_country`   - The target country of the product as a CLDR territory\n                     code (for example, US).\n\n`content_language` - The content language of the product as a two-letter\n                     ISO 639-1 language code (for example, en).\n\n`product_id`     -   The ID of the product. For more information, see\n                     https://support.google.com/manufacturers/answer/6124116#id.","type":"string","required":true},"parent":{"description":"Parent ID in the format `accounts/{account_id}`.\n\n`account_id` - The ID of the Manufacturer Center account.","type":"string","required":true,"pattern":"^accounts/[^/]+$","location":"path"}},"flatPath":"v1/accounts/{accountsId}/products/{productsId}","id":"manufacturers.accounts.products.delete","path":"v1/{+parent}/products/{+name}"}}}}}},"parameters":{"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"$.xgafv":{"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"]},"callback":{"type":"string","location":"query","description":"JSONP"},"alt":{"enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"default":"true","type":"boolean","location":"query","description":"Pretty-print response."},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"upload_protocol":{"type":"string","location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\")."},"prettyPrint":{"default":"true","type":"boolean","location":"query","description":"Returns response with indentations and line breaks."}},"version":"v1","baseUrl":"https://manufacturers.googleapis.com/","kind":"discovery#restDescription","description":"Public API for managing Manufacturer Center related data.","servicePath":"","basePath":"","id":"manufacturers:v1","documentationLink":"https://developers.google.com/manufacturers/","revision":"20171011","discoveryVersion":"v1","version_module":true,"schemas":{"Count":{"description":"The number of products in a single package. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#count.","type":"object","properties":{"unit":{"description":"The unit in which these products are counted.","type":"string"},"value":{"format":"int64","description":"The numeric value of the number of products in a package.","type":"string"}},"id":"Count"},"Product":{"type":"object","properties":{"manuallyDeletedAttributes":{"description":"Names of the attributes of the product deleted manually via the\nManufacturer Center UI.\n@OutputOnly","items":{"type":"string"},"type":"array"},"issues":{"items":{"$ref":"Issue"},"type":"array","description":"A server-generated list of issues associated with the product.\n@OutputOnly"},"finalAttributes":{"$ref":"Attributes","description":"Final attributes of the product. The final attributes are obtained by\noverriding the uploaded attributes with the manually provided and deleted\nattributes. Google systems only process, evaluate, review, and/or use final\nattributes.\n@OutputOnly"},"productId":{"description":"The ID of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#id.\n@OutputOnly","type":"string"},"uploadedAttributes":{"$ref":"Attributes","description":"Attributes of the product uploaded via the Manufacturer Center API or via\nfeeds."},"parent":{"description":"Parent ID in the format `accounts/{account_id}`.\n\n`account_id` - The ID of the Manufacturer Center account.\n@OutputOnly","type":"string"},"manuallyProvidedAttributes":{"description":"Attributes of the product provided manually via the Manufacturer Center UI.\n@OutputOnly","$ref":"Attributes"},"contentLanguage":{"type":"string","description":"The content language of the product as a two-letter ISO 639-1 language code\n(for example, en).\n@OutputOnly"},"targetCountry":{"description":"The target country of the product as a CLDR territory code (for example,\nUS).\n@OutputOnly","type":"string"},"name":{"description":"Name in the format `{target_country}:{content_language}:{product_id}`.\n\n`target_country`   - The target country of the product as a CLDR territory\n                     code (for example, US).\n\n`content_language` - The content language of the product as a two-letter\n                     ISO 639-1 language code (for example, en).\n\n`product_id`     -   The ID of the product. For more information, see\n                     https://support.google.com/manufacturers/answer/6124116#id.\n@OutputOnly","type":"string"}},"id":"Product","description":"Product data."},"Capacity":{"description":"The capacity of a product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#capacity.","type":"object","properties":{"unit":{"description":"The unit of the capacity, i.e., MB, GB, or TB.","type":"string"},"value":{"format":"int64","description":"The numeric value of the capacity.","type":"string"}},"id":"Capacity"},"ListProductsResponse":{"id":"ListProductsResponse","type":"object","properties":{"products":{"description":"List of the products.","items":{"$ref":"Product"},"type":"array"},"nextPageToken":{"description":"The token for the retrieval of the next page of product statuses.","type":"string"}}},"ProductDetail":{"type":"object","properties":{"attributeValue":{"description":"The value of the attribute.","type":"string"},"sectionName":{"description":"A short section name that can be reused between multiple product details.","type":"string"},"attributeName":{"type":"string","description":"The name of the attribute."}},"id":"ProductDetail","description":"A product detail of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#productdetail."},"Issue":{"description":"Product issue.","type":"object","properties":{"attribute":{"description":"If present, the attribute that triggered the issue. For more information\nabout attributes, see\nhttps://support.google.com/manufacturers/answer/6124116.","type":"string"},"timestamp":{"format":"google-datetime","description":"The timestamp when this issue appeared.","type":"string"},"severity":{"enumDescriptions":["Unspecified severity, never used.","Error severity. The issue prevents the usage of the whole item.","Warning severity. The issue is either one that prevents the usage of the\nattribute that triggered it or one that will soon prevent the usage of\nthe whole item.","Info severity. The issue is one that doesn't require immediate attention.\nIt is, for example, used to communicate which attributes are still\npending review."],"enum":["SEVERITY_UNSPECIFIED","ERROR","WARNING","INFO"],"description":"The severity of the issue.","type":"string"},"description":{"description":"Description of the issue.","type":"string"},"type":{"description":"The server-generated type of the issue, for example,\n“INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.","type":"string"}},"id":"Issue"},"FeatureDescription":{"description":"A feature description of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#featuredesc.","type":"object","properties":{"image":{"description":"An optional image describing the feature.","$ref":"Image"},"headline":{"description":"A short description of the feature.","type":"string"},"text":{"description":"A detailed description of the feature.","type":"string"}},"id":"FeatureDescription"},"Empty":{"type":"object","properties":{},"id":"Empty","description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`."},"Price":{"description":"A price.","type":"object","properties":{"currency":{"type":"string","description":"The currency in which the price is denoted."},"amount":{"description":"The numeric value of the price.","type":"string"}},"id":"Price"},"Image":{"type":"object","properties":{"type":{"enum":["TYPE_UNSPECIFIED","CRAWLED","UPLOADED"],"description":"The type of the image, i.e., crawled or uploaded.\n@OutputOnly","type":"string","enumDescriptions":["Type is unspecified. Should not be used.","The image was crawled from a provided URL.","The image was uploaded."]},"imageUrl":{"type":"string","description":"The URL of the image. For crawled images, this is the provided URL. For\nuploaded images, this is a serving URL from Google if the image has been\nprocessed successfully."},"status":{"enum":["STATUS_UNSPECIFIED","PENDING_PROCESSING","PENDING_CRAWL","OK","ROBOTED","XROBOTED","CRAWL_ERROR","PROCESSING_ERROR","DECODING_ERROR","TOO_BIG","CRAWL_SKIPPED","HOSTLOADED","HTTP_404"],"description":"The status of the image.\n@OutputOnly","type":"string","enumDescriptions":["The image status is unspecified. Should not be used.","The image was uploaded and is being processed.","The image crawl is still pending.","The image was processed and it meets the requirements.","The image URL is protected by robots.txt file and cannot be crawled.","The image URL is protected by X-Robots-Tag and cannot be crawled.","There was an error while crawling the image.","The image cannot be processed.","The image cannot be decoded.","The image is too big.","The image was manually overridden and will not be crawled.","The image crawl was postponed to avoid overloading the host.","The image URL returned a \"404 Not Found\" error."]}},"id":"Image","description":"An image."},"Attributes":{"description":"Attributes of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116.","type":"object","properties":{"productType":{"description":"The type or category of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#producttype.","items":{"type":"string"},"type":"array"},"format":{"description":"The format of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#format.","type":"string"},"additionalImageLink":{"description":"The additional images of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#addlimage.","items":{"$ref":"Image"},"type":"array"},"videoLink":{"description":"The videos of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#video.","items":{"type":"string"},"type":"array"},"color":{"description":"The color of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#color.","type":"string"},"productName":{"description":"The canonical name of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#productname.","type":"string"},"sizeType":{"description":"The size type of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#sizetype.","type":"string"},"suggestedRetailPrice":{"$ref":"Price","description":"The suggested retail price (MSRP) of the product. For more information,\nsee https://support.google.com/manufacturers/answer/6124116#price."},"featureDescription":{"description":"The rich format description of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#featuredesc.","items":{"$ref":"FeatureDescription"},"type":"array"},"size":{"description":"The size of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#size.","type":"string"},"title":{"description":"The title of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#title.","type":"string"},"count":{"description":"The count of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#count.","$ref":"Count"},"brand":{"type":"string","description":"The brand name of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#brand."},"material":{"type":"string","description":"The material of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#material."},"disclosureDate":{"description":"The disclosure date of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#disclosure.","type":"string"},"scent":{"description":"The scent of the product. For more information, see\n https://support.google.com/manufacturers/answer/6124116#scent.","type":"string"},"ageGroup":{"type":"string","description":"The target age group of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#agegroup."},"productDetail":{"description":"The details of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#productdetail.","items":{"$ref":"ProductDetail"},"type":"array"},"flavor":{"description":"The flavor of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#flavor.","type":"string"},"mpn":{"type":"string","description":"The Manufacturer Part Number (MPN) of the product. For more information,\nsee https://support.google.com/manufacturers/answer/6124116#mpn."},"productPageUrl":{"type":"string","description":"The URL of the detail page of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#productpage."},"releaseDate":{"description":"The release date of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#release.","type":"string"},"gtin":{"items":{"type":"string"},"type":"array","description":"The Global Trade Item Number (GTIN) of the product. For more information,\nsee https://support.google.com/manufacturers/answer/6124116#gtin."},"itemGroupId":{"description":"The item group id of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#itemgroupid.","type":"string"},"productLine":{"description":"The name of the group of products related to the product. For more\ninformation, see\nhttps://support.google.com/manufacturers/answer/6124116#productline.","type":"string"},"capacity":{"description":"The capacity of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#capacity.","$ref":"Capacity"},"description":{"type":"string","description":"The description of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#description."},"gender":{"description":"The target gender of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#gender.","type":"string"},"sizeSystem":{"description":"The size system of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#sizesystem.","type":"string"},"theme":{"description":"The theme of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#theme.","type":"string"},"targetClientId":{"description":"The target client id. Should only be used in the accounts of the data\npartners.","type":"string"},"pattern":{"description":"The pattern of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#pattern.","type":"string"},"imageLink":{"$ref":"Image","description":"The image of the product. For more information, see\nhttps://support.google.com/manufacturers/answer/6124116#image."}},"id":"Attributes"}},"protocol":"rest","icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"}};