import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ class: '' });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    if(event.target.className === this.state.class){
      this.setState({ class: '' })
    } else {
    this.setState({ class: event.target.className });
    }
  }

  render() {
    return (
    <div className='container'>
      {
      this.props.languages.map(language => (
      <div className='content' key={language.id}>
        <h2 className={language.id} onClick={this.handleClick}>{language.title}</h2>
        <div className={this.state.class === language.id ? 'details' : 'details hidden'}>{language.details}</div>
      </div>
      ))}
      </div>
    )
  }
}
