/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const emailElement = document.querySelector('#email');
    this.setState({
      email: emailElement.value
    });
  }

  handleChange() {

  }

  handleSubmit() {

    console.log(this.state);
  }

  render() {

    return (
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"></input>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
