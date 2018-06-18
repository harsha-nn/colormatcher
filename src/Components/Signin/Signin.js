import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            signInEmail:'',
            signInPassword:''
        }
    }

    onEmailChange = (event) =>{
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }
    onSubmit = () => {
        fetch('http://localhost:3002/signin', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
          if(user.id){
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
        })
    }


    render(){
        const {onRouteChange} = this.props;
        return (
            <div>
            <div className="br3 ba b--black-10 mv4 w-150 w-50-m w-45-l mw6 center shadow-5">
                 <ol > Rules:
                 <li> Click the box with the matching color of the circle to get a point</li>
                 <li> You can miss only 3 times</li>
                 <li> You can move the circle with arrow keys or aswd keys</li>
              </ol>
              </div>
           <div className="br3 ba b--black-10 mv4 w-150 w-50-m w-25-l mw6 center shadow-5 Signin">
                <main className="pa4 black-80">
                <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address" 
                    onChange={this.onEmailChange}
                    />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" 
                    onChange={this.onPasswordChange}
                    />
                    </div>
                </fieldset>
                <div className="">
                    <input
                    onClick={this.onSubmit} //Changing for testing. change to this.onSubmit later
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                </div>
                <div className="lh-copy mt3">
                    <input
                    onClick={()=>onRouteChange('home')} //Changing for testing. change to this.onSubmit later
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Play as guest" 
                    />
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f3 link dim black db">Register</p>
                 </div>
                </div>
                 </main>
                 
            </div>   
            
            </div>         
        );
    }
}
    



export default Signin;