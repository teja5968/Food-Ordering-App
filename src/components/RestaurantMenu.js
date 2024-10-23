
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";


import RestaurantCategory from "./RestaurantCategory";

import { useState } from "react";


const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    const[showItems,setShowItems] = useState(false);

    const[showIndex,setShowIndex] = useState(null);

    if(resInfo===null) return <Shimmer/>

    // console.log(resInfo?.cards[2]?.card?.card?.info.name)



    


    
 

  const  {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

//   console.log(categories)

     
    return(

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name} </h1>

            <p className="font-bold text-lg">
                {cuisines.join(",")}---{costForTwoMessage}
                
            </p>

            {
                categories.map((category,index)=>{

                   return  <RestaurantCategory key = {category?.card?.card?.title} data = {category?.card?.card}
                   
                   showItems ={index===showIndex ? true : false}

                   setShowIndex={()=>setShowIndex(index)}
                   />
                })
            }




            {/* <h2>Menu</h2>
            <ul>

                {itemCards.map((item)=>{
                    return <li key ={item.card.info.id}>{item.card.info.name}--{"Rs"}-{item.card.info.price/100}</li>
                })} */}


             {/* {itemCards.map((item)=>(
                     <li key ={item.card.info.id}>{item.card.info.name}--{"Rs"}-{item.card.info.price/100}</li>
               ) )} */}
                
                
               
            

        </div>
    )
}
export default RestaurantMenu;