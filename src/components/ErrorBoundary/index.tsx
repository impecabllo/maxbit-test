import React from "react"

import Catch from "./catch"

type Props = {
  fallbackComponent: React.FC
  children: React.ReactNode
}

const ErrorBoundaryCallBack = (props: Props, error?: Error) => {
  if (error) {
    return React.createElement(props.fallbackComponent)
  }
  return props.children
}

const ErrorBoundary = Catch(ErrorBoundaryCallBack)

export default ErrorBoundary
