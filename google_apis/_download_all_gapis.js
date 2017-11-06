const axios = require('axios')
const fs = require('fs')
const gapiToGraphL = require('../dist/index')
const idToFilename = id => `${id.replace(":", "-").replace('.', '~')}.js`
const gql = require('graphql')

const downloadAllAPIs = async () => {

  try {

    const {data} = await axios({
      url: 'https://www.googleapis.com/discovery/v1/apis'
    })

    const sucsesfulApis = []

    data.items.forEach(async item => {
      const {name, id, version, discoveryRestUrl} = item

      try {

        const {data: itemData} = await axios({
          url: discoveryRestUrl
        })

        gapiToGraphL({
          gapiAsJsonSchema: itemData,
          graphQLModule: gql
        })

        const ws = fs.createWriteStream(idToFilename(id))
        ws.write(`module.exports = ${JSON.stringify(itemData)};`)
        ws.end()

        sucsesfulApis.push(item)

      } catch (err) {
        console.warn('Error processing ', id, err)
      }
    })


    const wsList = fs.createWriteStream(`_api_list.js`)
    wsList.write(`module.exports = ${JSON.stringify(sucsesfulApis.map(({name, id, version}) => ({
      module: idToFilename(id),
      name,
      id
    })))};`)
    wsList.end()


    console.log('Available APIs', sucsesfulApis.map(({name, id, version}) => `|${name} | ${version} | require('gapi-to-graphql/google_apis/${idToFilename(id)}') |`).join('\n'))
  }
  catch (err) {
    console.error(err)
    throw err.response.data.error.message
  }
}


downloadAllAPIs()