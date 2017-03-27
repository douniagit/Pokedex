import React from 'react';
import Request from "superagent";
import '../PokeApi/pok.css';

class Input extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[]
	    }
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

  render() {
        

    return (
        <div>
          <input list="suggestions" placeholder="look for your favorite pokemon..."/>
      <datalist>
            <option value={this.state.name.name}>{this.state.name.name}</option>
        </datalist>
        </div>

    );
  }
}

export default Input;