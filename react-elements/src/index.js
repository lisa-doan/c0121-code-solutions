import React from 'react';
import ReactDOM from 'react-dom';

const reactH1Element = React.createElement(
  'h1',
  null,
  'Hello, React!'
)

ReactDOM.render(reactH1Element, document.querySelector('#root'));
