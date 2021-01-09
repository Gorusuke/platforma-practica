import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';

// Redux
import {Provider} from 'react-redux';
import store from './Redux/store';
import { getAllSpecialities } from './Redux/Actions/specialiteAction';

store.dispatch(getAllSpecialities())

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
   		<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
