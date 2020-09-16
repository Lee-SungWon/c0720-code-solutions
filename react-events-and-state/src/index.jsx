import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
