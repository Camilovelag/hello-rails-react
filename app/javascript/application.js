// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { getGreetings } from './redux/greetings/greetingsSlice';

store.dispatch( getGreetings() );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
</React.StrictMode>,
  document.getElementById('root'),
);