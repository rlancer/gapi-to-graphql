const axios = require('axios')
const fs = require('fs')

const idToFilename = id => `${id.replace(":", "-").replace('.', '~')}.js`

const downloadAllAPIs = async () => {

  try {

    const {data} = await axios({
      url: 'https://www.googleapis.com/discovery/v1/apis'
    })


    data.items.forEach(async item => {

      const {name, id, version, discoveryRestUrl} = item

      const {data: itemData} = await axios({
        url: discoveryRestUrl
      })

      const ws = fs.createWriteStream(idToFilename(id))
      ws.write(`module.exports = ${JSON.stringify(itemData)};`)
      ws.end()
    })


    const wsList = fs.createWriteStream(`_api_list.js`)
    wsList.write(`module.exports = ${JSON.stringify(data.items.map(({name, id, version}) => ({
      module: idToFilename(id),
      name,
      id
    })))};`)
    wsList.end()


    console.log('Available APIs', data.items.map(({name, id, version}) => `|${name} | ${version} | require('gapi-to-graphql/google_apis/${idToFilename(id)}') |`).join('\n'))
  }
  catch (err) {
    console.error(err)
    throw err.response.data.error.message
  }
}


downloadAllAPIs()