import React from "react"


class ToggleSwitch extends React.Component{
  constructor(props){
    super(props)
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks +1})
  }

  render(){
    const click = this.state.clicks;
    if(click % 2 === 0) {
      return(
        <div class="container">
          <i onClick={this.handleClick} class="fas fa-toggle-off"></i>
          <h2>OFF</h2>
        </div>
      )
    }
    if (click % 2 === 1){
      return (
        <div class="container">
          <i onClick={this.handleClick} class="fas fa-toggle-on"></i>
          <h2>ON</h2>
        </div>
      )
    }
  }
}

export default ToggleSwitch;
