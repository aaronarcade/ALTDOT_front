import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.render(
  
  <ThemeProvider theme={theme}>
   
  <App />
  </ThemeProvider>
,
  
  document.getElementById('root')
);
//sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
