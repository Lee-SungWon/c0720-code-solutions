import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counting: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.counting === false) {
      this.tick = setInterval(() => {
        this.setState(state => ({ count: this.state.count + 1 }));
      }, 1000);
      this.setState({
        counting: true
      });
    } else {
      clearInterval(this.tick);
      this.setState({
        counting: false
      });
    }
  }

  reset() {
    if (this.state.counting === false) {
      this.setState({
        count: 0,
        counting: false
      });
    }
  }

  render() {
    let img;
    if (this.state.counting === true) {
      img = 'pause';
    } else {
      img = 'play';
    }

    return (
      <>
        <div className={'circle'} onClick={this.reset}>
          <div className={'number'}>{this.state.count}</div>
        </div>
        <div>
          <i className={`icon fas fa-${img}`} onClick={this.handleClick}></i>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
