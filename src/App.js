import React, { Component } from 'react';
import './App.css';
import Box from './Components/PlayerBox/Box';
import BoxHolder from './Components/BoxHolder/BoxHolder';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import GameOver from './Components/GameOver/GameOver';

const ColorPool=["#000088","#0000cc","#1a1aff","#4d4dff","#8080ff","#b3b3ff","#e6e6ff"];
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movLeft:350,
      movTop:400,
      score:0,
      time:'',
      boxcolor:"#000088",
      tries:0,
      route:"signin",
      isSignedIn:false,
      gameOver: false,
      user: {
        id:'',
        name: "",
        email: "",
        score: 0,
        best:0,
        joined: ''
      }
    }
  }
  loadUser = (data) => {
    // console.log("data="+data);
    this.setState({user:{
      id:data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      score: 0,
      best:data.score
    }})
    // console.log("load user="+this.state.user.best);
  }
  // componentDidMount(){
  //   fetch("http://localhost:3002/")
  //   .then(response => response.json())
  //   .then(console.log);
  // }


   updateScore=(color)=>{
      // console.log("color is "+color + "Box color is" + this.state.boxcolor);
      this.state.boxcolor === color? this.setState({score: this.state.score + 1})
      :(this.state.tries === 3 ?this.setState({gameOver:true}):this.setState({tries:this.state.tries+1}))

      this.setState({boxcolor:ColorPool[Math.floor(Math.random()*7)]});
    }
   


  componentWillMount (){
    document.addEventListener("keydown", this.onKey.bind(this));
  }
  onKey = (event) =>{
    switch(event.keyCode){
      case 37 :this.setState({movLeft : this.state.movLeft - 15});break; //left
      case 65:this.setState({movLeft : this.state.movLeft - 15});break; //left a
      case 39: this.setState({movLeft: this.state.movLeft + 15});break; //right
      case 68: this.setState({movLeft: this.state.movLeft + 15});break; //right d
      case 38:this.setState({movTop: this.state.movTop - 15});break; //up
      case 87:this.setState({movTop: this.state.movTop - 15});break; //up w
      case 40:this.setState({movTop: this.state.movTop + 15});break; //down
      case 83:this.setState({movTop: this.state.movTop + 15});break; //down s
      default:this.setState({movLeft:this.state.movLeft, movTop:this.state.movTop});
    }
 }
onRouteChange = (route) =>{
  if( route ==='signout'){
    this.setState({isSignedIn: false})
  }else if(route === 'home'){
    this.setState({isSignedIn: true})
  } else if(route === 'guest'){
    this.setState({isSignedIn: false})
  } 
  this.setState({route: route});
}

onContinue=()=>{
  // console.log("state in continue:"+this.state.route);
  if(this.state.score>this.state.user.best){
    this.setState({user:{
      best:this.state.score}
    })
  }
  this.setState({gameOver:false, tries:0,score:0})
}

  render() {
    const {gameOver,score,tries,movLeft,movTop,boxcolor,isSignedIn,route} = this.state;
    
      if(gameOver){
        return (          
         <GameOver isSignedIn={isSignedIn} score={score} tries={tries}
         onRouteChange={this.onRouteChange} onContinue={this.onContinue} 
          user={this.state.user}   />
        );
      } else {
        return (
          <div className="App">
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}>
            <h1>Best:{this.state.user.best} Score: {score}  Tries: {tries}</h1>  
            </Navigation>
            {(route === "home")
            ?       <div className="Container"> 
                               
                    <BoxHolder position="0" updateScore={this.updateScore} />
                    <BoxHolder position="100" updateScore={this.updateScore}/>
                    <BoxHolder position="200" updateScore={this.updateScore}/>
                    <BoxHolder position="300" updateScore={this.updateScore} />
                    <BoxHolder position="400" updateScore={this.updateScore}/>
                    <BoxHolder position="500" updateScore={this.updateScore}/>
                    <BoxHolder position="600" updateScore={this.updateScore}/>
                    <BoxHolder position="700" updateScore={this.updateScore} />       
                    <Box onKey = {this.onKey} movLeft={movLeft} movTop={movTop} boxcolor={boxcolor} />                 
                  </div>                      
            :(  route==='signin'
                ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              )
            }     
          </div>
        );

      }
    
    
  }
}

export default App;
