import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }


  handleMenuClick() {
    this.setState({ isVisible:true });
  }

  closeMenu() {
    this.setState({ isVisible:false });
  }


  render() {
    if(this.state.isVisible) {
    return (
      <div className="menu-container" onClick={this.closeMenu}>
        <div className="menu-content">
          <h2>Menu</h2>
          <a href="" onClick={this.handleClick}>About</a>
          <a href=""onClick={this.handleClick}>Get Started</a>
          <a href=""onClick={this.handleClick}>Sign in</a>
        </div>
      </div>
    )
  } else {
      return (
      <div className="container">
        <i className="fas fa-bars" onClick={this.handleMenuClick}></i>
      </div>
      )
    }
  }
}
