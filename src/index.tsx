import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './utils/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <App />
      </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

