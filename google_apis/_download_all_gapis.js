const axios = require('axios')
const fs = require('fs')

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


      const ws = fs.createWriteStream(`${id.replace(":", "-").replace('.', '~')}.js`)
      ws.write(`module.exports = ${JSON.stringify(itemData)};`)
      ws.end()
    })


  }
  catch (err) {
    console.error(err)
    throw err.response.data.error.message
  }


}


downloadAllAPIs()