import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getTemperatureClass() {
    const { clickCount } = this.state;
    if (clickCount < 4) return 'purple';
    if (clickCount < 7) return 'light-purple';
    if (clickCount < 10) return 'red';
    if (clickCount < 13) return 'orange';
    if (clickCount < 16) return 'yellow';
    return 'white';
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const temperatureClass = this.getTemperatureClass();
    return (
      <button
        onClick={this.handleClick}
        className={temperatureClass}>
      Hot Button
      </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
