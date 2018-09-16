// Use any of the APIs included under the google_apis/ folder, or bring your own API descriptor
import YouTubeAPI from './google_apis/youtube-v3'
import gapiToGraphQL from './index'

// need this separate assignment when using nodes experimental modules feature
const schema = gapiToGraphQL({ gapiAsJsonSchema: YouTubeAPI })

console.log(schema)
