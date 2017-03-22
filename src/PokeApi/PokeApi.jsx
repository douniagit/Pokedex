import React from 'react';
import Request from "superagent";

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[],
          evolution:[]
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
      //console.log(this.state.name);
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
            pokemon = {info.name}
            prevEvo = {info.prev_evolution.map(select(info,i)=>{
              return(<div{select.name}/>)
            })}
            nextEvo = {info.next_evolution.map(select(info,i)=>{
              return(<div{select.name}}
            </div>)
          });


      // const getInfo = this.state.evolution;
      // const referencement = getInfo.map((info, i) =>{
      // console.log(info);
      //     return (<div key={i}>
      //       pokemon = {info.species} <br/>
      //       </div>)
      //     });


    return (
      <div>
          {referencement}
        </div>

    );
  }
}

export default PokeApi;