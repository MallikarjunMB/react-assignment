import React from 'react';
import './App.css';
import Personal from './components/personal'
import Home from './components/home'
import Educational  from './components/educational'
import Company from './components/company'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/redux/store'

function App() {
  return (
    <Provider store={ store }>
    <BrowserRouter>
    <div className="App">
      <Home />
        <Route exact path="/" component={Personal} />
        <Route path="/personal" component={Personal} />
        <Route path="/educational" component={Educational} />
        <Route path="/company" component={Company} />
      
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
