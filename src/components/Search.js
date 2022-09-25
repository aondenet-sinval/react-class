import React from 'react';
import Form from './Form';

//read
class Search extends React.Component {
  render() {
    // console.log('props search', this.props.result);
    const result = this.props.result
    //Verificando se é array para correta aplicação da função map
    // console.log('result.produtos in Search is array? ',
    //               Array.isArray(result.produtos));
    // console.log('result.servicos in Search is array? ',
    //                             Array.isArray(result.servicos));
    const produtos = result.produtos.map((produto, index)=>
    <li key={index}>
      Código do produto: {produto.codigo}.<br />
      Nome: {produto.name}.<br />
      Preço: {produto.preco}.
    </li>)
    const servicos = result.servicos.map((servico, index)=>
    <li key={index}>
      Id do serviço: {servico.id}.<br />
      Nome: {servico.name}.<br />
      Preço: {servico.preco}.
    </li>)
    return (
      <div>
        <h1>Hello, world!</h1>
        <Form />
        <p>...</p>
        <h3>Produtos</h3>
        <ul>{produtos}</ul>
        <h3>Serviços</h3>
        <ul>{servicos}</ul>
      </div>
    );
  }
}

export default Search;
