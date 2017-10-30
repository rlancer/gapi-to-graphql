# Gapi to GraphQL 

Converts any Google Data API to a GraphQL API via the [Google API Discovery Service](https://developers.google.com/discovery/)

## Usage

```bash

# npm users
npm i gapi-to-graphql --save

# yarn users 
yarn add gapi-to-graphql 
``` 

```javascript
import gql from 'graphql'
import graphqlHTTP from 'express-graphql'
import express from 'express'
import gapiToGraphQL from 'gapi-to-graphql'
// bring your own api descriptor
import YouTubeAPI from 'gapi-to-graphql/google_apis/youtube-v3'

const app = express()

const {GraphQLObjectType, GraphQLSchema} = gql

app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {...gapiToGraphQL({gapiAsJsonSchema: YouTubeAPI, graphQLModule: gql})}
      })
    }),
    graphiql: true
  })
)


const port = 4000
app.listen(port)
console.log('Listing on port ', port)
```

## Limitations 

* Read only (for now)
* Downloads are not implemented 

## Available APIs

|Name                     | Version | Module File Name |
|-------------------------|---------|------------------|
|acceleratedmobilepageurl | v1 | acceleratedmobilepageurl-v1 | 
|adexchangebuyer | v1.2 | adexchangebuyer-v1~2 | 
|adexchangebuyer | v1.3 | adexchangebuyer-v1~3 | 
|adexchangebuyer | v1.4 | adexchangebuyer-v1~4 | 
|adexchangebuyer2 | v2beta1 | adexchangebuyer2-v2beta1 | 
|adexchangeseller | v1 | adexchangeseller-v1 | 
|adexchangeseller | v1.1 | adexchangeseller-v1~1 | 
|adexchangeseller | v2.0 | adexchangeseller-v2~0 | 
|adexperiencereport | v1 | adexperiencereport-v1 | 
|admin | datatransfer_v1 | admin-datatransfer_v1 | 
|admin | directory_v1 | admin-directory_v1 | 
|admin | reports_v1 | admin-reports_v1 | 
|adsense | v1.4 | adsense-v1~4 | 
|adsensehost | v4.1 | adsensehost-v4~1 | 
|analytics | v2.4 | analytics-v2~4 | 
|analytics | v3 | analytics-v3 | 
|analyticsreporting | v4 | analyticsreporting-v4 | 
|androiddeviceprovisioning | v1 | androiddeviceprovisioning-v1 | 
|androidenterprise | v1 | androidenterprise-v1 | 
|androidmanagement | v1 | androidmanagement-v1 | 
|androidpublisher | v1 | androidpublisher-v1 | 
|androidpublisher | v1.1 | androidpublisher-v1~1 | 
|androidpublisher | v2 | androidpublisher-v2 | 
|appengine | v1alpha | appengine-v1alpha | 
|appengine | v1beta | appengine-v1beta | 
|appengine | v1 | appengine-v1 | 
|appengine | v1beta4 | appengine-v1beta4 | 
|appengine | v1beta5 | appengine-v1beta5 | 
|appsactivity | v1 | appsactivity-v1 | 
|appstate | v1 | appstate-v1 | 
|bigquery | v2 | bigquery-v2 | 
|bigquerydatatransfer | v1 | bigquerydatatransfer-v1 | 
|blogger | v2 | blogger-v2 | 
|blogger | v3 | blogger-v3 | 
|books | v1 | books-v1 | 
|calendar | v3 | calendar-v3 | 
|civicinfo | v2 | civicinfo-v2 | 
|classroom | v1 | classroom-v1 | 
|cloudbilling | v1 | cloudbilling-v1 | 
|cloudbuild | v1 | cloudbuild-v1 | 
|clouddebugger | v2 | clouddebugger-v2 | 
|clouderrorreporting | v1beta1 | clouderrorreporting-v1beta1 | 
|cloudfunctions | v1 | cloudfunctions-v1 | 
|cloudfunctions | v1beta2 | cloudfunctions-v1beta2 | 
|cloudiot | v1 | cloudiot-v1 | 
|cloudiot | v1beta1 | cloudiot-v1beta1 | 
|cloudkms | v1 | cloudkms-v1 | 
|cloudmonitoring | v2beta2 | cloudmonitoring-v2beta2 | 
|cloudresourcemanager | v1 | cloudresourcemanager-v1 | 
|cloudresourcemanager | v1beta1 | cloudresourcemanager-v1beta1 | 
|cloudresourcemanager | v2beta1 | cloudresourcemanager-v2beta1 | 
|cloudtasks | v2beta2 | cloudtasks-v2beta2 | 
|cloudtrace | v1 | cloudtrace-v1 | 
|cloudtrace | v2 | cloudtrace-v2 | 
|clouduseraccounts | alpha | clouduseraccounts-alpha | 
|clouduseraccounts | beta | clouduseraccounts-beta | 
|clouduseraccounts | vm_alpha | clouduseraccounts-vm_alpha | 
|clouduseraccounts | vm_beta | clouduseraccounts-vm_beta | 
|compute | alpha | compute-alpha | 
|compute | beta | compute-beta | 
|compute | v1 | compute-v1 | 
|consumersurveys | v2 | consumersurveys-v2 | 
|container | v1 | container-v1 | 
|container | v1beta1 | container-v1beta1 | 
|content | v2sandbox | content-v2sandbox | 
|content | v2 | content-v2 | 
|customsearch | v1 | customsearch-v1 | 
|dataflow | v1b3 | dataflow-v1b3 | 
|dataproc | v1 | dataproc-v1 | 
|dataproc | v1beta2 | dataproc-v1beta2 | 
|datastore | v1 | datastore-v1 | 
|datastore | v1beta1 | datastore-v1beta1 | 
|datastore | v1beta3 | datastore-v1beta3 | 
|deploymentmanager | alpha | deploymentmanager-alpha | 
|deploymentmanager | v2beta | deploymentmanager-v2beta | 
|deploymentmanager | v2 | deploymentmanager-v2 | 
|dfareporting | v2.7 | dfareporting-v2~7 | 
|dfareporting | v2.8 | dfareporting-v2~8 | 
|discovery | v1 | discovery-v1 | 
|dlp | v2beta1 | dlp-v2beta1 | 
|dns | v1 | dns-v1 | 
|dns | v1beta2 | dns-v1beta2 | 
|dns | v2beta1 | dns-v2beta1 | 
|doubleclickbidmanager | v1 | doubleclickbidmanager-v1 | 
|doubleclicksearch | v2 | doubleclicksearch-v2 | 
|drive | v2 | drive-v2 | 
|drive | v3 | drive-v3 | 
|firebasedynamiclinks | v1 | firebasedynamiclinks-v1 | 
|firebaseremoteconfig | v1 | firebaseremoteconfig-v1 | 
|firebaserules | v1 | firebaserules-v1 | 
|firestore | v1beta1 | firestore-v1beta1 | 
|fitness | v1 | fitness-v1 | 
|fusiontables | v1 | fusiontables-v1 | 
|fusiontables | v2 | fusiontables-v2 | 
|games | v1 | games-v1 | 
|gamesConfiguration | v1configuration | gamesConfiguration-v1configuration | 
|gamesManagement | v1management | gamesManagement-v1management | 
|genomics | v1alpha2 | genomics-v1alpha2 | 
|genomics | v1 | genomics-v1 | 
|gmail | v1 | gmail-v1 | 
|groupsmigration | v1 | groupsmigration-v1 | 
|groupssettings | v1 | groupssettings-v1 | 
|iam | v1 | iam-v1 | 
|identitytoolkit | v3 | identitytoolkit-v3 | 
|kgsearch | v1 | kgsearch-v1 | 
|language | v1 | language-v1 | 
|language | v1beta1 | language-v1beta1 | 
|language | v1beta2 | language-v1beta2 | 
|licensing | v1 | licensing-v1 | 
|logging | v2 | logging-v2 | 
|logging | v2beta1 | logging-v2beta1 | 
|manufacturers | v1 | manufacturers-v1 | 
|mirror | v1 | mirror-v1 | 
|ml | v1 | ml-v1 | 
|monitoring | v3 | monitoring-v3 | 
|oauth2 | v1 | oauth2-v1 | 
|oauth2 | v2 | oauth2-v2 | 
|oslogin | v1alpha | oslogin-v1alpha | 
|oslogin | v1beta | oslogin-v1beta | 
|pagespeedonline | v1 | pagespeedonline-v1 | 
|pagespeedonline | v2 | pagespeedonline-v2 | 
|partners | v2 | partners-v2 | 
|people | v1 | people-v1 | 
|playcustomapp | v1 | playcustomapp-v1 | 
|playmoviespartner | v1 | playmoviespartner-v1 | 
|plus | v1 | plus-v1 | 
|plusDomains | v1 | plusDomains-v1 | 
|prediction | v1.2 | prediction-v1~2 | 
|prediction | v1.3 | prediction-v1~3 | 
|prediction | v1.4 | prediction-v1~4 | 
|prediction | v1.5 | prediction-v1~5 | 
|prediction | v1.6 | prediction-v1~6 | 
|proximitybeacon | v1beta1 | proximitybeacon-v1beta1 | 
|pubsub | v1beta1a | pubsub-v1beta1a | 
|pubsub | v1 | pubsub-v1 | 
|pubsub | v1beta2 | pubsub-v1beta2 | 
|replicapool | v1beta1 | replicapool-v1beta1 | 
|replicapool | v1beta2 | replicapool-v1beta2 | 
|replicapoolupdater | v1beta1 | replicapoolupdater-v1beta1 | 
|reseller | v1 | reseller-v1 | 
|resourceviews | v1beta1 | resourceviews-v1beta1 | 
|resourceviews | v1beta2 | resourceviews-v1beta2 | 
|runtimeconfig | v1 | runtimeconfig-v1 | 
|runtimeconfig | v1beta1 | runtimeconfig-v1beta1 | 
|safebrowsing | v4 | safebrowsing-v4 | 
|script | v1 | script-v1 | 
|searchconsole | v1 | searchconsole-v1 | 
|servicecontrol | v1 | servicecontrol-v1 | 
|servicemanagement | v1 | servicemanagement-v1 | 
|serviceuser | v1 | serviceuser-v1 | 
|sheets | v4 | sheets-v4 | 
|siteVerification | v1 | siteVerification-v1 | 
|slides | v1 | slides-v1 | 
|sourcerepo | v1 | sourcerepo-v1 | 
|spanner | v1 | spanner-v1 | 
|spectrum | v1explorer | spectrum-v1explorer | 
|speech | v1 | speech-v1 | 
|speech | v1beta1 | speech-v1beta1 | 
|sqladmin | v1beta3 | sqladmin-v1beta3 | 
|sqladmin | v1beta4 | sqladmin-v1beta4 | 
|storage | v1 | storage-v1 | 
|storage | v1beta1 | storage-v1beta1 | 
|storage | v1beta2 | storage-v1beta2 | 
|storagetransfer | v1 | storagetransfer-v1 | 
|streetviewpublish | v1 | streetviewpublish-v1 | 
|surveys | v2 | surveys-v2 | 
|tagmanager | v1 | tagmanager-v1 | 
|tagmanager | v2 | tagmanager-v2 | 
|taskqueue | v1beta1 | taskqueue-v1beta1 | 
|taskqueue | v1beta2 | taskqueue-v1beta2 | 
|tasks | v1 | tasks-v1 | 
|testing | v1 | testing-v1 | 
|toolresults | v1beta3 | toolresults-v1beta3 | 
|translate | v2 | translate-v2 | 
|urlshortener | v1 | urlshortener-v1 | 
|vault | v1 | vault-v1 | 
|videointelligence | v1beta1 | videointelligence-v1beta1 | 
|vision | v1 | vision-v1 | 
|webfonts | v1 | webfonts-v1 | 
|webmasters | v3 | webmasters-v3 | 
|youtube | v3 | youtube-v3 | 
|youtubeAnalytics | v1 | youtubeAnalytics-v1 | 
|youtubeAnalytics | v1beta1 | youtubeAnalytics-v1beta1 | 
|youtubereporting | v1 | youtubereporting-v1 | 
 

## Contributors 

Pull requests welcome!
Join project on Collaborizm 

