import React from 'react';
import Navigation from '../Navigation/Navigation';

class GameOver extends React.Component{
  componentDidMount(){
    // console.log(`http://localhost:3002/updatescore/${this.props.user.id}`);
    if(this.props.user.id){
        fetch(`http://localhost:3002/updatescore/${this.props.user.id}`, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                score:this.props.score
            })
            })
            .then(res => res.json())
            .then(console.log)
            .catch(console.log); 
    }
  }
    render(){
        const {isSignedIn, onContinue,onRouteChange,score,tries} = this.props;
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
                <div className="br3 ba b--black-10 mv4 w-150 w-50-m w-25-l mw6 center shadow-5">
                <h1> Game Over </h1>
                <p>Do you want to continue? </p>
                <input
                    onClick={onContinue} //Changing for testing. change to this.onSubmit later
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Yes" 
                    />
                
                <h1> Score: {score}  Tries: {tries} </h1> 
                </div>
            </div>
        );
    }

}

export default GameOver;