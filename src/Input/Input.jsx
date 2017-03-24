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

      const getInfo = this.state.name;
      const referencement = getInfo.map((info, i) =>{
	  	//console.log(info);
          return (<div key={i}>
            <input list="suggestions" placeholder="look for your favorite pokemon..."/>
				<datalist>
				    <option value={info.name}/>
				</datalist>

          </div>)
        });

    return (
        <div>
          {referencement}
        </div>

    );
  }
}

export default Input;