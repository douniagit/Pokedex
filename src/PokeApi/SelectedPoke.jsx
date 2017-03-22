import React from 'react';
import Request from "superagent";

class SelectedPoke.jsx extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          chosenOne:""  //${this.state.metroLine}
	    }
	   this.callingApi();
	  }

	callingApi(){
    const url=`http://pokeapi.co/api/v2/${this.state.chosenOne}/`;
     Request.get(url).then((data)=>{
     //console.log(JSON.parse(data.text));
      const pokeInfo=JSON.parse(data.text);
        this.setState({name:pokeInfo.results});
      //console.log(this.state.name);
     });
  }

  handleChange(key, event ) {
    console.log(key)
   this.setState({[key]: event.target.value.substring(0,30)})
  }


	// componentDidMount(){
	// this.refresh = setInterval(
 //      ()=>this.callingApi(), 10000);
 //  }

  // stationName(){
  //        return this.state.stations.map((info, i) =>{
  //           return (<div>
  //             station Actuelle = {info.name}
  //             </div>)
  //           });
  //         }

  // lineName(){
  //       return this.state.line.map((info, i) =>{
  //           return (<div>
  //             metro = {info.line}
  //             </div>)
  //           });
  //         }

  render() {

	  	const getInfo = this.state.time;
	  	const situation = getInfo.map((info, i) =>{
	  	//console.log(info);
          return (<div>
            <br/>
            metro = {this.state.metroLine} <br/>
            position ={this.state.position} <br/>
            direction = {info.destination} <br/>
           <div style={{color:"red"}}> temps d attente = {info.message}</div>
            <br/>
            </div>)
          });

    return (
      <div>
        <input type="text" value={this.state.chosenOne} onChange={this.handleChange.bind(this,'chosenOne')} placeholder="trouves ton pokemon..."/>
          <br/>
          <br/>
          {situation}
        </div>

    );
  }
}

export default SelectedPoke.jsx;