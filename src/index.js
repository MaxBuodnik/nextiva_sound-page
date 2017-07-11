import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import './index.css'
import {store} from './Store/Store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TestComponent from './Components/TestComponent'
import AlbumView from './Components/AlbumView'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/tadam" component={TestComponent}/>
        <Route path="/albumview" component={AlbumView}/>
        <Route render={() => <h3>Page is not found</h3>}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

