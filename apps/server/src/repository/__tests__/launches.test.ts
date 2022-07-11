import LaunchesRepository from '../launches'
import { IDataProvider } from 'services/api'

const data = {
  findAll: jest.fn(),
  find: jest.fn()
} as unknown as IDataProvider

describe('LaunchesRepository', () => {
  
  it('should be defined', () => {
    expect(LaunchesRepository).toBeDefined()
  })
  
  describe('methods test', () => {
    
    let repo: LaunchesRepository
    
    beforeEach(() => {
      repo = new LaunchesRepository({ data })
    })
    
    describe('findAll tests', () => {
      it('should call data provider method', () => {
        repo.getAllLaunches()
    
        expect(data.findAll).toBeCalled()
      })
    })
  })
})
