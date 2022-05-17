import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorPage from './layouts/ErrorBoundaryPage'
import Routes from './Routes'

import './index.css'

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorPage}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}>
    <Routes />
  </ErrorBoundary>
)

export default App
