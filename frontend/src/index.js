import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {combineReducers} from 'redux'


// REDUCER 
const reducer = (state=true, action) => {
  switch(action.type) {
    case 'TRUE':
      state = true;
      return state;
    
    case 'FALSE':
      state = false;
      return state;

    default:
      return state;
  }
};

const noteReducer = (state="note", action) => {
  switch(action.type) {
    case 'NOTE_TITLE':
      return {
        ...state,
        payload: action.payload
      };

    default:
      return{
        ...state,
        payload: action.payload
      };
  }
};

const notebookReducer = (state="title", action) => {
  switch(action.type) {
    case 'NOTEBOOK_TITLE':
      return {
        ...state,
        payload: action.payload
      };

      default: 
      return {
        ...state,
        payload: action.payload
      };
  }
};

const allReducers = combineReducers({
  edit: reducer,
  note: noteReducer,
  notebook: notebookReducer
});


// STORE
const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
