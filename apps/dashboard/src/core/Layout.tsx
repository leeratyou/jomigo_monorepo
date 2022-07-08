import React, { FC, ReactNode } from 'react'
import Appbar from 'core/Appbar'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  )
}

export default Layout
