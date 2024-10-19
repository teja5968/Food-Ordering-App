import burger from '../burger.png';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import  useOnlineStatus from '../utils/useOnlineStatus';
const Header = () =>{


    const[btnNameReact,setBtnNameReact] = useState("login")

    const onlineStatus = useOnlineStatus();


    // if no dependency array => useeffect is called on every render
    //if dependency array is empty =[] => use effect is called on initial render(just once)

    //if dependency array is [btnNameReact] => called everytime btnNameReact is called 


    useEffect(()=>{

  console.log("useeffect is called")
    },[])



    return (
    
    <div className ="flex justify-between" >
      <div className = "logo-container">
        <img className = "w-56" src = {burger} alt ="burger image"/>
     
      </div>
  
      <div className = "nav-items">
        <ul className = "flex p-4 m-4" >

          <li >Online Status {onlineStatus? " ✅" : "🔴"}</li>
         
          <li> <Link to = "/">Home </Link> </li> 
          <li> <Link to= "/about">About Us </Link></li>
          <li> <Link to= "/contact">Contact </Link> </li>
          <li> <Link to= "/grocery">Grocery</Link> </li>
          <li> <Link to= "/cart">Cart </Link> </li>

        
        </ul>
  
     
      <button onClick={()=>{
         btnNameReact=== 'login' ? setBtnNameReact("logout")
         :setBtnNameReact("login");
         
         }}
         >
        
        {btnNameReact}</button>
        </div>
  
    </div>
    )
  }
  export default Header;