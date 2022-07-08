import { createContext, useContext, FC, ReactNode } from 'react'
import launchesStore from './launchesStore'

export const stores = {
  launchesStore,
}

export function clearStores() {
  Object.values(stores).forEach(store => {
    if ('onClear' in store) {
      store.onClear()
    }
  })
}

const StoresContext = createContext(stores)

export const StoresProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoresContext.Provider value={stores}>
      {children}
    </StoresContext.Provider>
  )
}

export function useStore() {
  const stores = useContext(StoresContext)
  return stores
}

export interface Store {
  onClear: () => void
}
