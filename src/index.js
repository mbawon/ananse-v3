import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

let persistore = persistStore(store);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <App />
    </PersistGate>
  </Provider>
)

serviceWorkerRegistration.register();