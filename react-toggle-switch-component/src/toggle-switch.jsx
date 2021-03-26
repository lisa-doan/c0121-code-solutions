import React from "react"


class ToggleSwitch extends React.Component{
  constructor(props){
    super(props)
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  }

  render(){
    let isToggled = this.state.isToggled;
    if(isToggled) {
      return(
        <div class="container">
          <i onClick={this.handleClick} class="fas fa-toggle-on"></i>
          <h2>ON</h2>
        </div>
      )
    } else {
      return (
        <div class="container">
          <i onClick={this.handleClick} class="fas fa-toggle-off"></i>
          <h2>OFF</h2>
        </div>
      )
    }
  }
}

export default ToggleSwitch;
