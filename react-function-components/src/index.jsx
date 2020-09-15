import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button>click me!</button>;
};

const element = <CustomButton />;
const container = document.getElementById('root');

ReactDOM.render(
  element,
  container
);
