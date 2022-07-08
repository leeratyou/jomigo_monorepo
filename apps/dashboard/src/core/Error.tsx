import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

class ErrorBoundary extends Component<Props> {
  
  state = {
    hasError: false
  }
  
  constructor(props: any) {
    super(props)
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // some logging logic
  }
  
  componentWillUnmount() {
    this.setState({ hasError: false })
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary
