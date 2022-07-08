import axios, { Axios } from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
})

type AxiosLike = Axios

interface IOptions {
  provider: AxiosLike
}

const defaultOptions = {
  provider: client
}

export class LaunchesRepository {
  
  provider
  
  constructor({ provider }: IOptions = defaultOptions) {
    this.provider = provider
  }
  
  async getAll() {
    try {
      const { data } = await this.provider.get('/launches')
      return data.launches
    } catch(e) {
      // Show toast
    }
  }
  
  async get(year: number|string) {
    try {
      const { data } = await this.provider.get(`/launches/${year}`)
      return data.launches
    } catch(e) {
      // Show toast
    }
  }
  
}
