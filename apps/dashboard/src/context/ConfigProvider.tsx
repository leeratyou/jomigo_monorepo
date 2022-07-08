import React, { FC, createContext, useState, useContext, ReactNode } from 'react'

export interface IConfig {
  someConfig:{
    key: string
  }
}

const init = {
  someConfig:{
    key: 'value'
  }
}

const ConfigContext = createContext<IConfig>(init)
export default ConfigContext

interface Props {
  children?: ReactNode
}

export const ConfigProvider: FC<Props> = ({ children }) => {
  const [ config ] = useState(init)
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfigContext() {
  return useContext(ConfigContext)
}
