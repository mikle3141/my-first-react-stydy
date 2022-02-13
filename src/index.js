import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('button', {
        disabled: true
    }, 'Нажми меня!'),
  document.getElementById('root')
);
