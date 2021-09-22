import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import data from './rick-and-morty.json'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './GlobalStyles'
import { Route, Switch, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App data={data} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
