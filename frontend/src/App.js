import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/common/Home'
import Navigator from './components/common/Navigator'
import CurrencyEdit from './components/currencies/CurrencyEdit'
import CurrencyIndex from './components/currencies/CurrencyIndex'
import CurrencyShow from './components/currencies/CurrencyShow'
const App = () => {

  return (

    <BrowserRouter>
      <Navigator />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/currencies/:id" component={CurrencyShow} />
        <Route path="/currencies" component={CurrencyEdit} />
        <Route path="/currencies" component={CurrencyIndex} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter> 
  )
}

export default App


