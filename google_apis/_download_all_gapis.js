const axios = require('axios')
const fs = require('fs')
const gapiToGraphL = require('../dist/index')
const idToFilename = id => `${id.replace(":", "-").replace('.', '~')}.js`
const gql = require('graphql')

const {GraphQLSchema, GraphQLObjectType} = gql

const downloadAllAPIs = async () => {

  try {

    const {data} = await axios({
      url: 'https://www.googleapis.com/discovery/v1/apis'
    })

    const sucsesfulApis = []


    const processApis = () => {
      return new Promise((resolve, reject) => {

        let processed = 0

        data.items.forEach(async (item, index) => {
          const {name, id, version, discoveryRestUrl} = item

          try {

            const {data: itemData} = await axios({
              url: discoveryRestUrl
            })


            new gql.GraphQLSchema({
              query: new GraphQLObjectType({
                name: 'RootQueryType',
                fields: gapiToGraphL({
                  gapiAsJsonSchema: itemData,
                  graphQLModule: gql
                })
              })
            })


            sucsesfulApis.push(item)

            const ws = fs.createWriteStream(idToFilename(id))
            ws.write(`module.exports = ${JSON.stringify(itemData)};`)
            ws.end()

            if (++processed === data.items.length)
              resolve()

          } catch (err) {
            console.warn('Error processing ', id, err)


            if (++processed === data.items.length)
              resolve()
          }
          finally {

          }
        })
      })
    }

    console.log('Processing ...')
    await processApis()

    console.log('Done!')


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