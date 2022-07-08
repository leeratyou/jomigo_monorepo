import Api, { IDataProvider } from '../services/api'

interface IOptions {
  data: IDataProvider
}

const defaultOptions: IOptions = {
  data: Api
}

export default class LaunchesRepository {
  
  data: IDataProvider
  
  constructor({ data } = defaultOptions) {
    this.data = data
  }
  
  async getAllLaunches() {
    return this.data.findAll()
  }
  
  async getLaunches(year: string|number) {
    const query = { launch_year: year }
    return this.data.find(query)
  }
  
}
