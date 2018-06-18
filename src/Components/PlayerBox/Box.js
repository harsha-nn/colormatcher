import React from 'react';
import './Box.css'

class Box extends React.Component {
    render(){ 
        const {onKey, movLeft, movTop,boxcolor} = this.props;
        const pos = movLeft + "px";
        const posTop = movTop + "px"; 
        // console.log(movLeft, movTop,boxcolor);
    return(   
        <div className="Box" onChange={onKey} tabIndex="0"  style={{left:pos, top:posTop, backgroundColor:boxcolor}}>
       
        </div>
    );
    }
}

export default Box;