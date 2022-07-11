import axios from 'axios'
import querystring from 'query-string'


export interface IDataProvider {
  findAll: () => any
  find: (query: any) => any
}

interface IProvider {
  get: (url: string) => { data: any }
}

interface IOptions {
  provider: IProvider
}

class SpaceXApiAdapter implements IDataProvider {
  
  url = 'https://api.spacexdata.com/v3/launches'
  
  provider
  
  constructor({ provider }: IOptions) {
    this.provider = provider
  }
  
  findAll = async () => {
    try {
      const { data } = await this.provider.get(this.url)
      return data
    } catch(e) {}
  }
  
  find = async (query: any) => {
    try {
      const queryparams = querystring.stringify(query)
      const url = `${this.url}?${queryparams}`
      console.log('--- api.ts -> find -> url', url)
      const { data } = await this.provider.get(url)
      console.log('--- api.ts -> find -> data', data)
      return data
    } catch(e) {}
  }
}

// @ts-ignore
const api = new SpaceXApiAdapter({ provider: axios })

export default api
