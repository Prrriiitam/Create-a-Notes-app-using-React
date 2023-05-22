import React from "react";
import logo from "./components/Images/logo.png"
const Header=()=>{
   return(
    <>
        <div className="header">
           <img src={logo} width="70" height="50"></img>
           <h1> Pritam keep</h1>
        </div>
    </>
   );
};
export default Header
;
