import React from 'react';
import Request from "superagent";
import './pok.css';

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[],
          currentPage: 1,
          toDoPerPage:20
	    }
      this.handleClick = this.handleClick.bind(this);
	   this.callingApi();
     //this.evolutionApi();
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

	// callingApi(){
 //    const url=`http://pokeapi.co/api/v2/pokemon/?limit=720`;
 //    Request.get(url).then((data)=>{
	// 	 //console.log(JSON.parse(data.text));
	// 		const pokeInfo=JSON.parse(data.text);
 //        this.setState({name:pokeInfo.results});
	// 	 	//console.log(this.state.name);
	// 	 });
	// }
  

  handleClick(event){
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
      const nbOnLastPage=this.state.currentPage*this.state.toDoPerPage;
	  	const nbOnFirstPage=nbOnLastPage - this.state.toDoPerPage;
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
          </div>)
        });

        // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.state.name.length / (this.state.toDoPerPage)); i++) {
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
          <input type="text" placeholder="look for your favorite pokemon..."/>
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