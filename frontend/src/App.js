import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
// import CurrencyIndex from './currencies/CurrencyIndex'
// import Login from './components/auth/Login'
import CurrencyIndex from './components/currencies/CurrencyIndex'
// import CurrencyShow from './components/currencies/CurrencyShow'

const App = () => {

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path="/currencies" component={CurrencyIndex} />
        <Route path="/currencies/:id" component={CurrencyShow} /> */}
        {/* <Route path="/Login" component={Login} /> */}
        {/* <Route path="/#currencies" component={CurrencyIndex} />
        <Route path="/" component={Home} /> */}
        <Route path="/currencies">
          <CurrencyIndex />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App


