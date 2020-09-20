import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <i className={'fas fa-bars'} onClick={this.handleClick}></i>
      );
    }
    return (
      <>
        <div className={'menu-area'}>
          <h1 onClick={this.handleClick}>Menu</h1>
          <h2 onClick={this.handleClick}>About</h2>
          <h2 onClick={this.handleClick}>Get Started</h2>
          <h2 onClick={this.handleClick}>Sign In</h2>
        </div>
        <div className={'gray-area'} onClick={this.handleClick}></div>
      </>
    );
  }

}
