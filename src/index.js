import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    fontFamily: 'Arial, sans-serif',
    color: '#ff6f61',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center'
};

const element = React.createElement('h1', { style: styles }, "I \u2764 You");
ReactDOM.render(element, document.getElementById('root'));
