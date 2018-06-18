import React from 'react';

const Navigation = ({onRouteChange, isSignedIn,children}) => {
        if (isSignedIn === true){
            return (
                <nav style={{display:'flex', justifyContent: 'flex-end',height:"50px"}}>
                    <p className='f6 green center dim pa1'>{children} </p>
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa1 pointer'>Sign Out </p>    
                </nav>
            );
        } else {
            return (
                <nav style={{display:'flex', justifyContent: 'flex-end',height:"50px"}}>
                    <p className='f6 green center dim pa1'>{children}</p>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa2 pointer'>Sign In </p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa2 pointer'>Register </p>
                </nav>
            );
        }
}

export default Navigation;