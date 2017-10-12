// import 'babel-polyfill'
// import React from 'react'
// import { render } from 'react-dom'
// import hashHistory from 'react-router/lib/hashHistory'
// import syncHistoryWithStore from 'react-router-redux/lib/sync'
// import Root from './src/modules/containers/Root'
// import configureStore from './src/store/configureStore'
//
// /* Import SCSS */
// import './src/assets/scss/ratchet.scss'
//
// const store = configureStore()
// const history = syncHistoryWithStore(hashHistory, store)
//
// render(
//   <Root store={store} history={history} />,
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import App from './src/App';
import registerServiceWorker from './src/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import recipesReducer from './src/reducers/recipesReducer'
import ingredientsReducer from './src/reducers/ingredientsReducer'
import userReducer from './src/reducers/userReducer'
import platformReducer from './src/reducers/platformReducer'

function addDeviceListener(props) {
  document.addEventListener("deviceready", callDeviceReady , false);
  function callDeviceReady(){
    props.changePlatform(device.platform)
  }
}

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  user: userReducer,
  platform: platformReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App onMounted={addDeviceListener}/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
