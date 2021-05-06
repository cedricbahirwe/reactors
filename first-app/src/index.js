import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement("ul",
   { style: { color: "blue"}},
    React.createElement("li", null, "Leo"),
    React.createElement("li", null, "Kesho"),
    React.createElement("li", null, "Yake"),
    ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
