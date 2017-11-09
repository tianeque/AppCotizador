import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
// import App from './App';
import CalculadoraDeCorte from './Components/CalculadoraDeCorte/CalculadoraDeCorte'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CalculadoraDeCorte />, document.getElementById('root'));
registerServiceWorker();
