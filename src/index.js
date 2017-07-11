import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import './css/index.css'
import './css/App.css'
// import registerServiceWorker from './registerServiceWorker';
import { addTodo } from './actions'
import configureStore from './store/configureStore'

const store = configureStore();

store.dispatch(addTodo('Hello, React!!'))
store.dispatch(addTodo('Hello, Redux!!'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
