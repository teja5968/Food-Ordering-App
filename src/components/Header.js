import burger from '../burger.png';

import { useEffect, useState,useContext } from 'react';

import { Link } from 'react-router-dom';

import  useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () =>{


    const[btnNameReact,setBtnNameReact] = useState("login")

    const onlineStatus = useOnlineStatus();


    const data = useContext(UserContext)

    console.log(data.loggedInUser)


    //subscribing to the store using a Selector

    const cartItems  = useSelector((state)=>state.cart.items)
    console.log(cartItems)


    // if no dependency array => useeffect is called on every render
    //if dependency array is empty =[] => use effect is called on initial render(just once)

    //if dependency array is [btnNameReact] => called everytime btnNameReact is called 


    useEffect(()=>{

  console.log("useeffect is called")
    },[])



    return (
    
    <div className ="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50" >
      <div className = "logo-container">
        <img className = "w-56" src = {burger} alt ="burger image "/>
     
      </div>
  
      <div className = "flex items-center">
        <ul className = "flex p-4 m-4" >

          <li className='px-4' >Online Status {onlineStatus? " ✅" : "🔴"}</li>
         
          <li className='px-4' > <Link to = "/">Home </Link> </li> 
          <li className='px-4' > <Link to= "/about">About Us </Link></li>
          <li className='px-4' > <Link to= "/contact">Contact </Link> </li>
          <li className='px-4' > <Link to= "/grocery">Grocery</Link> </li>
          <li className='px-3 font-bold text-xl'> <Link to= "/cart"> Cart-( {cartItems.length})</Link> </li>
          <button onClick={()=>{
         btnNameReact=== 'login' ? setBtnNameReact("logout")
         :setBtnNameReact("login");
         
         }}
         >
        
        {btnNameReact}</button>

        <li className='px-4 font-bold'> {data.loggedInUser} </li>

        
        </ul>
  
     
      
        </div>
  
    </div>
    )
  }
  export default Header;