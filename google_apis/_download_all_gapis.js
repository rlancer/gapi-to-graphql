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


    const processApis = () => {
      return new Promise((resolve, reject) => {


        data.items.forEach(async (item, index) => {
          const {name, id, version, discoveryRestUrl} = item

          try {

            const {data: itemData} = await axios({
              url: discoveryRestUrl
            })

            gapiToGraphL({
              gapiAsJsonSchema: itemData,
              graphQLModule: gql
            })

            console.log('ushing api', item)
            sucsesfulApis.push(item)

            const ws = fs.createWriteStream(idToFilename(id))
            ws.write(`module.exports = ${JSON.stringify(itemData)};`)
            ws.end()


          } catch (err) {
            console.warn('Error processing ', id, err)
          }
          finally {
            if (index === data.items.length - 1)
              resolve()
          }
        })
      })
    }

    await processApis()

    console.log(sucsesfulApis.length)
    console.log(sucsesfulApis.length)
    console.log(sucsesfulApis)

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