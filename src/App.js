import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = { produtos: [], servicos: []};//inicializando array de produtos vazio
}
componentDidMount() {
  fetch("/produtos")
    .then(res => res.json())
    .then(
      (resultProdutos) => {
        //Verificando se o resultadodo fetch é um array...
        console.log('fetch produtos is array ', Array.isArray(resultProdutos));
        //Setando resultado do fetch e atualizando com o
        //array de produtos recebidos
        console.log('result in fetch ', resultProdutos);
        this.setState({produtos: resultProdutos});
      },
      // error
      (error) => {
        this.setState({
          produtos: "Sem retorno de produtos",
          error
        });
      }
    )
  fetch("/servicos")
    .then(res => res.json())
    .then(
      (resultServicos) => {
        //Verificando se o resultadodo fetch é um array...
        console.log('fetch produtos is array ', Array.isArray(resultServicos));
        //Setando resultado do fetch e atualizando com o
        //array de produtos recebidos
        console.log('result in fetch ', resultServicos);
        this.setState({servicos: resultServicos});
      },
      // error
      (error) => {
        this.setState({
          servicos: "Sem retorno de servicos",
          error
        });
      }
    )
}

componentWillUnmount() {
}
  render() {
    const result = this.state//Result recebe os dois arrays(produtos/servicos)
    return (
      <div className="App App-header">
        App...
        <Search result={result} />
      </div>
    );
  }
}

export default App;
