import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import FormAdd from './components/FormAdd';
import Citas from './components/Citas';
import './styles/index.css';


ReactDOM.render(
  <Provider store={store}>
    <div style={{backgroundColor: 'navy', margin: 0, padding: 0, minHeight: '100vh'}}>
      <FormAdd />
      <Citas />
    </div>
  </Provider>,

  document.getElementById('root')
);
