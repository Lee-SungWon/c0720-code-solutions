import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      on: !state.on
    }));
  }

  onOrOff() {
    const { on } = this.state;
    if (on) {
      return 'switch-on';
    } else {
      return 'switch-off';
    }
  }

  text() {
    const { on } = this.state;
    if (on) {
      return 'on';
    } else {
      return 'off';
    }
  }

  render() {
    const onOrOff = this.onOrOff();
    const text = this.text();
    return (
      <>
        <div className={'toggle-switch'}>
          <div className={onOrOff} onClick={this.handleClick}></div>
        </div> <span>{text}</span>
      </>
    );
  }
}
