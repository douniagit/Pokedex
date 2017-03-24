import React from 'react';
import Request from "superagent";
import './pok.css';

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[]
	    }
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
  
  render() {

	  	const getInfo = this.state.name;
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

    return (
        <div className='container'>
          <div className="header">
          </div>
          <div className="grid">
          <input type="text" placeholder="look for your favorite pokemon..."/>
            <div className="pokemon">
              {referencement}
            </div>
          </div>
          <div className="footer">
          </div>
        </div>

    );
  }
}

export default PokeApi;