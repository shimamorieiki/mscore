import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore, history } from './createStore';
export const store = configureStore();

function renderApp(store) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode >,
    document.getElementById('root')
  );
}
store.subscribe(() => renderApp(store));
renderApp(store)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
