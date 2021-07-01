import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

const promise = axios.get('http://localhost:3001/notes');
console.log(promise);

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2);


ReactDOM.render(<App />, document.getElementById('root')
);
