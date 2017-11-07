import axios from 'axios'
import {keys} from './utils'

export default async ({definitions, args, baseUrl, path, httpMethod}) => {

  const params = {}
  keys(args).forEach(key => {
      const {type, location} = definitions[key]

      if (location === 'query')
        params[key] = args[key]
    }
  )

  console.log('make api req', path, baseUrl, params)
  try {
    const {data} = await axios({
      url: path,
      method: httpMethod,
      params,
      baseURL: baseUrl
    })
    return data
  }
  catch (err) {
    console.error(err)
    throw err.response.data.error.message
  }


}