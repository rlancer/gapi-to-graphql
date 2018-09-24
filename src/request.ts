import axios from 'axios'
import { keys } from './utils'
import { debugResovers } from './debugger'

export default async ({ definitions, args, baseUrl, path, httpMethod }) => {
  const params = {}
  keys(args).forEach(key => {
    const { type, location } = definitions[key]

    switch (location) {
      case 'query':
        params[key] = args[key]
        break
      case 'path':
        path = path.replace('{' + key + '}', args[key])
        break
    }
  })

  try {
    debugResovers('Making %s request to %s with params %j', httpMethod, baseUrl, params)
    const { data } = await axios({
      url: path,
      method: httpMethod,
      params,
      baseURL: baseUrl
    })

    return data
  } catch (err) {
    throw err.response.data.error.message
  }
}
