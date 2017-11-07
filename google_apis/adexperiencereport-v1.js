module.exports = {"schemas":{"ViolatingSitesResponse":{"description":"Response message for ListViolatingSites.","type":"object","properties":{"violatingSites":{"description":"A list of summaries of violating sites.","items":{"$ref":"SiteSummaryResponse"},"type":"array"}},"id":"ViolatingSitesResponse"},"SiteSummaryResponse":{"description":"Response message for GetSiteSummary.","type":"object","properties":{"mobileSummary":{"description":"Summary for the mobile review of the site.","$ref":"PlatformSummary"},"reviewedSite":{"description":"The name of the site reviewed.","type":"string"},"desktopSummary":{"$ref":"PlatformSummary","description":"Summary for the desktop review of the site."}},"id":"SiteSummaryResponse"},"PlatformSummary":{"id":"PlatformSummary","description":"Summary of the ad experience rating of a site for a specific platform.","type":"object","properties":{"enforcementTime":{"type":"string","format":"google-datetime","description":"The date on which ad filtering begins."},"region":{"items":{"enum":["REGION_UNKNOWN","REGION_A","REGION_B"],"type":"string"},"type":"array","enumDescriptions":["Ad standard not yet defined for your region.","Region A.","Region B."],"description":"The assigned regions for the site and platform."},"filterStatus":{"enumDescriptions":["N/A.","Ad filtering is on.","Ad filtering is off.","Ad filtering is paused.","Ad filtering is pending."],"enum":["UNKNOWN","ON","OFF","PAUSED","PENDING"],"description":"The ad filtering status of the site.","type":"string"},"underReview":{"description":"Whether the site is currently under review.","type":"boolean"},"reportUrl":{"description":"A link that leads to a full ad experience report.","type":"string"},"lastChangeTime":{"format":"google-datetime","description":"The last time that the site changed status.","type":"string"},"betterAdsStatus":{"description":"The status of the site reviewed for the Better Ads Standards.","type":"string","enumDescriptions":["Not reviewed.","Passing.","Warning.","Failing."],"enum":["UNKNOWN","PASSING","WARNING","FAILING"]}}}},"icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"protocol":"rest","canonicalName":"Ad Experience Report","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/xapi.zoo":{"description":"Test scope for access to the Zoo service"}}}},"rootUrl":"https://adexperiencereport.googleapis.com/","ownerDomain":"google.com","name":"adexperiencereport","batchPath":"batch","title":"Google Ad Experience Report API","ownerName":"Google","resources":{"sites":{"methods":{"get":{"description":"Gets a summary of the ad experience rating of a site.","response":{"$ref":"SiteSummaryResponse"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/xapi.zoo"],"parameters":{"name":{"type":"string","required":true,"pattern":"^sites/[^/]+$","location":"path","description":"The required site name. It should be the site property whose ad experiences\nmay have been reviewed, and it should be URL-encoded. For example,\nsites/https%3A%2F%2Fwww.google.com. The server will return an error of\nBAD_REQUEST if this field is not filled in. Note that if the site property\nis not yet verified in Search Console, the reportUrl field returned by the\nAPI will lead to the verification page, prompting the user to go through\nthat process before they can gain access to the Ad Experience Report."}},"flatPath":"v1/sites/{sitesId}","id":"adexperiencereport.sites.get","path":"v1/{+name}"}}},"violatingSites":{"methods":{"list":{"httpMethod":"GET","parameterOrder":[],"response":{"$ref":"ViolatingSitesResponse"},"scopes":["https://www.googleapis.com/auth/xapi.zoo"],"parameters":{},"flatPath":"v1/violatingSites","path":"v1/violatingSites","id":"adexperiencereport.violatingSites.list","description":"Lists sites with Ad Experience Report statuses of \"Failing\" or \"Warning\"."}}}},"parameters":{"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"type":"string","location":"query","description":"Selector specifying which fields to include in a partial response."},"$.xgafv":{"type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format."},"callback":{"description":"JSONP","type":"string","location":"query"},"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"description":"OAuth 2.0 token for the current user.","type":"string","location":"query"},"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"}},"version":"v1","baseUrl":"https://adexperiencereport.googleapis.com/","kind":"discovery#restDescription","description":"View Ad Experience Report data, and get a list of sites that have a significant number of annoying ads.","servicePath":"","basePath":"","id":"adexperiencereport:v1","revision":"20171002","documentationLink":"https://developers.google.com/ad-experience-report/","discoveryVersion":"v1","version_module":true};