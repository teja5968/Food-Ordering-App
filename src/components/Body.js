import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./ResturantCard";

import { useState, useContext, } from 'react';
import React from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";


import UserContext from "../utils/UserContext";


const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState([])

  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchtext, setSearchtext] = useState("")


  const ResturantCardPromoted = withPromotedLabel(RestaurantCard)






  const [title, setTitle] = useState(" ")

  // whenver state variable updates react triggers a reconciliation cycle (re-renders the the component)

  useEffect(() => {

    fetchData();


  }, [])

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()

    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log("body data", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }




  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)

    return (
      <h1> pls check ur internet connection</h1>
    );


  // const handler=()=>{

  //     const filterdList = listOfRestaurants.filter(

  //         (res)=>res.info.avgRating>4.2);

  //     setlistOfRestaurants(filterdList)


  // }


  // const { loggedInUser , setUserName } = useContext(UserContext)





  return listOfRestaurants.length === 0 ? (

    <Shimmer />

  ) : (

    <div className="body">

      <div className='flex'>

        <div className=" search m-4 p-7">
          <input type="text"  data-testid="searchInput" className=" border border-solid border-black"
            value={searchtext} onChange={(e) => {

              setSearchtext(e.target.value);

            }} />



          <button  className="px-4 py-1 rounded-lg bg-green-400 m-4" onClick={() => {

            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

            setFilteredRestaurants(filteredRestaurants)

           

          }}>Search</button>


        </div>

        <div className=" search m-4 p-4  flex items-center">

          <button className="px-4 py-2 rounded-lg bg-gray-100"

            onClick={() => {

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5);

              setFilteredRestaurants(filteredList)


            }}

          >
            Top Rated Resturants</button>

        </div>








      </div>



      <div className='flex flex-wrap'>

        {

          filteredRestaurants.map((restaurant) => (

            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>


              <RestaurantCard resData={restaurant} />



              {/* {restaurant.data.promoted ? (
            <ResturantCardPromoted resData={restaurant}/>
          ):(
              <RestaurantCard  resData = {restaurant}   />
            )} */}

            </Link>

            //if the restaurant  is promoted then add a promoted label to it






          ))}




      </div>







    </div>
  )
}

export default Body;