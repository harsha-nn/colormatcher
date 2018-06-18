import React from 'react';
import './RandomBox.css';

class RandomBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cord: 50
        }
    }

    componentDidMount=()=>{
        this.downfallId = setInterval(()=>{
            this.slowfall()
        }, 2000)
    }
    slowfall(){
           this.state.cord > 350? this.setState({cord:50}): this.setState({cord: this.state.cord+50})
    }
componentWillUnmount(){
    clearInterval(this.downfallId);
}

    render(){
        const {color, downfall,onRandomBoxClick} = this.props;
        const down=downfall + "px";
        const trans=this.state.cord + "px";
        return(        
            <div className="RandomBox"
             style={{backgroundColor: color, top: down, transform: `translateY(${trans})`,
                transition: "transform 0.5s"}} onClick={onRandomBoxClick}>
            </div>
        );
    }
}

export default RandomBox;

/*
           style={{backgroundColor: color, left: pos, top: down, transform: `translateY(${trans})`,
                transition: "transform 0.5s"}}>

*/

//At random interval the random Box component gets updated with color, position, type, downfall 