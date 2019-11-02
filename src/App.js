import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Main from './Main'
import lightTheme from './theme/theme.light'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
