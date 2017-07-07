import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'
import './css/index.css'
import './css/App.css'
// import registerServiceWorker from './registerServiceWorker';
import { addTodo } from './actions'

let store = createStore(todo);

store.dispatch(addTodo('Hello, React!!'))
store.dispatch(addTodo('Hello, Redux!!'))
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
