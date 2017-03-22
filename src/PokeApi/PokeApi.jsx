import React from 'react';
import Request from "superagent";

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[],
          evolutionP:[],
          evolutionN:[]
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
        //this.setState({evolutionP:pokeInfo.pokemon.prev_evolution});
       // this.setState({evolutionN:pokeInfo.pokemon.next_evolution});
      //console.log(this.state.evolutionN);
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
          return (<div key={i}>
            <img src={info.img}alt="pok"/>
            {info.name}
             prevEvo = {this.state.evolutionP.map((select, i) =>{
              console.log(select);
               return(<div>{select.name}</div>)
             })};
            nextEvo = {this.state.evolutionN.map((select1, i) =>{
              return(<div>{select1.name}</div>)
            })} 
          </div>)
        });

    return (
        <div>
         {referencement}
        </div>

    );
  }
}

export default PokeApi;