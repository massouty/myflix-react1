import React from 'react';

 class Header extends React.Component{
    render(){
        return(
            <div className="navbar bg-primary">
                <img src="./banner.gif"  alt="banner" style={{minWidth:"200px", maxWidth:"1500px",margin:"10px"}}></img>
                <button className="Login"><link href='./components/Login/login'>Log in</link></button>
                <button className="Register"><link href='./components/Register/register'>Register</link></button>

            </div>
        )
    }
}

export default Header;


