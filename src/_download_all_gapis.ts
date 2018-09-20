import axios from 'axios'
import fs from 'fs'
import gapiToGraphL from './index'
import path from 'path'
import * as gql from 'graphql'

const idToFilename = (id: string) => `${id.replace(':', '-').replace('.', '~')}.ts`

const { GraphQLSchema, GraphQLObjectType } = gql

const downloadAllAPIs = async () => {
  try {
    const { data } = await axios({
      url: 'https://www.googleapis.com/discovery/v1/apis'
    })

    const sucsesfulApis: Array<any> = []

    const processApis = () => {
      return new Promise((resolve, reject) => {
        let processed = 0

        data.items.forEach(async (item, index) => {
          const { name, id, version, discoveryRestUrl } = item

          try {
            const { data: itemData } = await axios({
              url: discoveryRestUrl
            })


            sucsesfulApis.push(item)

            const ws = fs.createWriteStream(path.resolve(__dirname, './google_apis', idToFilename(id)))
            ws.write(`export default ${JSON.stringify(itemData)};`)
            ws.end()

            if (++processed === data.items.length) resolve()
          } catch (err) {
            console.warn('Error processing ', id, err)

            if (++processed === data.items.length) resolve()
          } finally {
          }
        })
      })
    }

    console.log('Processing ...')
    await processApis()

    console.log('Done!')

    const wsList = fs.createWriteStream(path.resolve(__dirname, './google_apis', `_api_list.js`))
    wsList.write(
      `export default ${JSON.stringify(
        sucsesfulApis.map(({ name, id, version }) => ({
          module: idToFilename(id),
          name,
          id
        }))
      )};`
    )
    wsList.end()

    console.log(
      'Available APIs',
      sucsesfulApis
        .map(
          ({ name, id, version }) =>
            `|${name} | ${version} | require('gapi-to-graphql/google_apis/${idToFilename(id)}') |`
        )
        .join('\n')
    )
  } catch (err) {
    console.error(err)
    throw err.response.data.error.message
  }
}

downloadAllAPIs()
