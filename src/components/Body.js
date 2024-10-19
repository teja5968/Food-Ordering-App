import resList from "../utils/mockData";
import RestaurantCard from "./ResturantCard";

import { useState } from 'react';
import React from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([])

    const[filteredRestaurants,setFilteredRestaurants] = useState([])

    const[searchtext,setSearchtext] = useState("")

    const [title,setTitle] = useState(" ")

    // whenver state variable updates react triggers a reconciliation cycle (re-renders the the component)

    useEffect(()=>{

        fetchData();


    },[])

    const fetchData = async() => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       
        const json = await data.json()

      setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

     
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)

      return (
      <h1> pls check ur internet connection</h1>
      );


    // const handler=()=>{

    //     const filterdList = listOfRestaurants.filter(
            
    //         (res)=>res.info.avgRating>4.2);
   
    //     setlistOfRestaurants(filterdList)


    // }
    
     
    
   

   

     return listOfRestaurants.length===0 ? (
        
        <Shimmer />
        
     ): (

      <div className = "body">
  
        <div className='filter'>

            <div className="search">
                <input type ="text" className="search-box" 
                value={searchtext} onChange={(e)=>{
                    
                    setSearchtext(e.target.value);

                }}/>

              
                
                <button onClick={()=>{
                
               const filteredRestaurants= listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

                setFilteredRestaurants(filteredRestaurants)

                console.log(searchtext)

                }}>search</button>

         
            </div>

           

            <button className= "filter-btn" 
            
            onClick={()=>{

               const filteredList = listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.1);

                 setFilteredRestaurants(filteredList)
               
                
            }}
              

            
            

           
            >
            Top Rated Resturants</button>
       

                        
          
        </div>
  
        <div className='res-container'>
  
        
       
        
        {
        
        filteredRestaurants.map((restaurant)=> (
        
        <Link key={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}><RestaurantCard  resData = {restaurant}/></Link>
        
  
  
        ))}
        
       
        
  
        </div>
  
  
     
       
  
  
  
      </div>
    )
  }

  export default Body;