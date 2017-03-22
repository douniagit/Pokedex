import React from 'react';
import Request from "superagent";

class PokeApi extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          name:[],
          power:[],
          evolution:[]
	    }
	   this.callingApi();
	  }

	callingApi(){
    const url=`http://pokeapi.co/api/v2/pokemon/`;
    Request.get(url).then((data)=>{
		 //console.log(JSON.parse(data.text));
			const pokeInfo=JSON.parse(data.text);
       // this.setState({stations:this.state.stations.concat([pokeInfo.response.informations.station])});
       // this.setState({line:this.state.line.concat([pokeInfo.response.informations])});
        this.setState({name:pokeInfo.forms});
       // this.setState({name:pokeInfo.forms.name});
		 //	console.log(this.state.stations);
		 });
	}

  
  render() {

	  	const getInfo = this.state.name;
	  	const situation = getInfo.map((info, i) =>{
	  	//console.log(info);
          return (<div>
            name = {this.state.name} <br/>
            name2 = {info.name} <br/>
            </div>)
          });

    return (
      <div>
          {situation}
        </div>

    );
  }
}

export default PokeApi;