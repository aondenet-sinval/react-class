import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {codigo: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('codigo ', event.target.value);
      this.setState({codigo: event.target.value});
  }

  render() {
    return (<input type="text" onChange={this.handleChange} />);
  }
}

export default Form;
