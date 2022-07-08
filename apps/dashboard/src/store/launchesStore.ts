import { makeAutoObservable, reaction, toJS } from 'mobx'
import { LaunchesRepository } from 'services/api'
import { LaunchRecord } from 'types/models'

interface IStoreOptions {
  repository: typeof LaunchesRepository
}

interface IFilters {
  year: number|string|undefined
}

export class LaunchesStore {
  
  repository
  
  constructor({ repository }: IStoreOptions) {
    this.repository = new repository()
    makeAutoObservable(this, { repository: false })
  
    reaction(
      () => this.filters.year,
      () => this.loadLaunches(),
      { fireImmediately: true }
    )
  }
  
  filters: IFilters = {
    year: undefined
  }
  
  _launches: LaunchRecord[] = []
  
  _loading: boolean[] = []
  
  get isLoading() {
    return this._loading.length > 0
  }
  
  get launches() {
    return toJS(this._launches)
  }
  
  setFilter = (type: keyof IFilters, value: any) => this.filters[type] = value
  
  loadLaunches() {
    if (this.filters.year) {
      this.fetchLaunches(this.filters.year)
    } else {
      this.fetchAllLaunches()
    }
  }
  
  async fetchAllLaunches() {
    this._loading.push(true)
    
    const result = await this.repository.getAll()
    
    this._launches = result
    this._loading.pop()
  }
  
  async fetchLaunches(year: string|number) {
    this._loading.push(true)
    
    const result = await this.repository.get(year)
    
    this._launches = result
    this._loading.pop()
  }
  
  onClear() {}
  
}

const launchesStore = new LaunchesStore({ repository: LaunchesRepository })
export default launchesStore
