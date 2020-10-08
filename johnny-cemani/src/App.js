import React from 'react';
import './App.css';
import HeaderBar from './components/headerBar';
import Main from './components/main';

import { useTheme, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// https://stackoverflow.com/questions/58168798/add-custom-theme-variable-object-to-createmuitheme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#616161',
      main: '#424242',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    body1: {
      fontFamily: "Comic Sans"
    }
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <HeaderBar />
        <Main />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
