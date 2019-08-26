import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Main from './Main'
import { lightTheme } from './theme/theme.light'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main/>
    </ThemeProvider>
  )
}

export default App
