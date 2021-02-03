import React from 'react';
import { Provider } from 'react-redux';
import Root from './components/routes/Root';

import store from './redux';

import './css/global/main.css';

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
