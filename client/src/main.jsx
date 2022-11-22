import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionsProvider } from './context/TransactionContext';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers from "./reducers"
import { legacy_createStore, applyMiddleware, compose } from "redux";
import Index from '.';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
     <Provider store={store}>
      <App />
      
    </Provider>
  </TransactionsProvider>
  
)

{/* </React.StrictMode> */}