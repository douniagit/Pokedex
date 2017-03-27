import React from 'react';
import Request from "superagent";
import Input from '../Input/Input.jsx';
import './pok.css';

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[],
          pageActuelle: 1,
          nbPerPage:20
	    }
      this.handleClick = this.handleClick.bind(this);
      this.callingApi();
	  }

  callingApi(){
    const url=`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
    Request.get(url).then((data)=>{
     //console.log(JSON.parse(data.text));
      const pokeInfo=JSON.parse(data.text);
      this.setState({name:pokeInfo.pokemon});
      console.log(this.state.name);
     });
  }


  handleClick(event){
    this.setState({
      pageActuelle: Number(event.target.id)
    });
  }

  render() {

      const nbOnLastPage= this.state.pageActuelle*this.state.nbPerPage;
	  	const nbOnFirstPage= nbOnLastPage - this.state.nbPerPage;
      const getInfo = this.state.name.slice(nbOnFirstPage,nbOnLastPage);
	  	
      const referencement = getInfo.map((info, i) =>{
	  	//console.log(info);
          return (<div className='x' key={i}>
            <img src={info.img} alt="pok"/>
            {info.name}
            <br/>
            Number = {info.num}
            <br/>
            Type = {info.type+''}
           {/* {info.next_evolution.map((select, i) =>{
              return(<p key={i}>{select.name}</p>)
            })}*/}
            <br/>
          </div>)
        });

        //pour creer le numbre de pages
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.state.name.length / (this.state.nbPerPage)); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

    return (
        <div className='container'>
          <div className="header">
          </div>
          <div className="grid">
          <Input/>
            <div className="pokemon">
              {referencement}
            </div>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
          <div className="footer">
          </div>
        </div>

    );
  }
}

export default PokeApi;