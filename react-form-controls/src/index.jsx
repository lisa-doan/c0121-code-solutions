import React from 'react';
import ReactDom from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
   render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input type="text" value={this.state.email} onChange={this.handleChange}></input>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

ReactDom.render(
  <NewsletterForm />,
  document.querySelector('#root')
  );
