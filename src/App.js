import React, { Component } from 'react';
import './App.css';

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

//read
class Search extends React.Component {
  render() {
    // console.log('props search', this.props.result);
    const result = this.props.result
    //Verificando se é array para correta aplicação da função map
    console.log('result.produtos in Search is array? ',
                  Array.isArray(result.produtos));
    const produtos = result.produtos.map((produto, index)=>
    <li key={index}>
      Código do produto: {produto.codigo}.
      Nome: {produto.name}.
      Preço: {produto.preco}.
    </li>)
    return (
      <div>
        <h1>Hello, world!</h1>
        <Form />
        <p>...</p>
        <ul>{produtos}</ul>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
  super(props);
  this.state = { produtos: []};//inicializando array de produtos vazio
}
componentDidMount() {
  fetch("/produtos")
    .then(res => res.json())
    .then(
      (result) => {
        //Verificando se o resultadodo fetch é um array...
        console.log('fetch produtos is array ', Array.isArray(result));
        //Setando resultado do fetch e atualizando com o
        //array de produtos recebidos
        this.setState({produtos: result});
      },
      // error
      (error) => {
        this.setState({
          produtos: "Sem retorno de produtos",
          error
        });
      }
    )
}

componentWillUnmount() {
}
  render() {
    const result = this.state
    return (
      <div className="App App-header">
        App...
        <Search result={result} />
      </div>
    );
  }
}

export default App;
