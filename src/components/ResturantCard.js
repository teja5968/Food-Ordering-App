
  import {CDN_URL} from "../utils/constants";
  const RestaurantCard = (props) => {
  
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info; 

    return (


      <div className="flex justify-between">
  
      <div className=' rounded-lg m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200'
      >
  
        <img className='rounded-lg' src = {CDN_URL+cloudinaryImageId} />
      
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4 >{avgRating} stars</h4>
      <h4 >{costForTwo}</h4>
      <h4 >{resData.info.sla.deliveryTime} minutes</h4>
  
      
     
     
      </div> </div>
    )
  
  }

 export  const withPromotedLabel =(RestaurantCard) =>{

    return (props) =>{

      return (

        <div>

          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;
  