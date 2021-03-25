import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks +1})
  }

  render() {
    let count = this.state.clicks;
    let className = "cold";
    if(count >= 3) {
      className = "cool";
    }
    if(count >= 6) {
      className = "tepid";
    }
    if(count >= 9) {
      className = "warm";
    }
    if(count >= 12) {
      className = "hot";
    }
    if(count >= 15) {
      className = "nuclear";
    }
    return (
      <button onClick={this.handleClick} className={className}>Hot Button</button>
    )
  }
}

export default HotButton;
