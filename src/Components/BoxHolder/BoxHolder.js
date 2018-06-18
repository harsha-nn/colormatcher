import React from 'react';
import './BoxHolder.css';
import RandomBox from '../RandomBox/RandomBox';

const ColorPool=["#000088","#0000cc","#1a1aff","#4d4dff","#8080ff","#b3b3ff","#e6e6ff"];
class BoxHolder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color: '',
            downfall:'',
            type:'',
        }
    } 

    componentWillMount (){
        setInterval(this.generateRandomBox.bind(this), Math.floor(Math.random()*7 + 1) *1000)
      }
      generateRandomBox = ()=>{
        // console.log("Generating Random Box every random secs");
            this.setState({
              color: ColorPool[Math.floor(Math.random()*7)],
              downfall:50,
              type:'friend'
            })
      }
      componentWillUnmount(){
        clearInterval(this.generateRandomBox);
      }
    render(){
         const {position} = this.props;
         const {color,downfall} = this.state;
        const pos=position + "px";
        return(
            <div className="BoxHolder" style={{left:pos}}>
                <RandomBox color={color} 
                downfall={downfall} 
                onRandomBoxClick={()=>this.props.updateScore(this.state.color)} />
            </div>
        );
     }
}

export default BoxHolder;