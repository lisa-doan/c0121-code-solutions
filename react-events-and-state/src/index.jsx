import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true })
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <button onClick={this.handleClick}>
        { isClicked ? 'Thanks!' : 'Click Me!' }
      </button>
    )
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
