import React from 'react';
class Gato extends React.Component{
    constructor(props){
        super(props)
        this.setIdade(this.props.idade)
        this.breed = this.props.breed
        this.color = this.props.color

        this.setNome(this.props.nome) //usando get e set exclui o this.name = this.props.name
    }

    getIdade(){
        return this.idade
    }

    setIdade(idade){
        return this.idade = idade
    }

    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    miar(){
        return 'Miau'
    }

    ronronar(){
        return 'Rurururururur'
    }
    atualizarIdade(){
        let newIdade = document.getElementById('number').value
        let caixa = document.getElementById('caixaIdade')
        caixa.innerText = newIdade

    }
//
    render(){
        return <div>
            {this.getNome()}  <br/>
            {this.idade} <br/>
            {this.breed} <br/>
            {this.color} <br/>
            {this.miar()} <br />
            {this.ronronar()}   <br />
            <label>Idade do gato:</label>
            <input onChange={this.atualizarIdade} type="number" id="number" />
            <p id='caixaIdade'>{this.idade}</p>

        </div>
    }
}

export default Gato;
