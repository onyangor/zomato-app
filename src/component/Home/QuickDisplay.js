import React, { Component } from 'react'
import {Link} from "react-router-dom"



export const QuickDisplay = (props) =>{

    const listMeal = ({mealData}) => {
        console.log(mealData)
        if(mealData){
            return mealData.map((item) =>{
                return(
                    <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
                    <div className="card">
                        <img className="titleItem" src={item.meal_image} alt={item.mealtype} />
                    <div>
                        <h3 className="titleheading">{item.mealtype}</h3>
                        <p>
                            {item.content }
                        </p>
                    </div>
                     </div>
                    
                    
                    </Link>

                     

                    
                   
                    
                )
            

            })
        }

    }
    return(
        <>
        <div className="mainCard">
            {listMeal(props)}
        
        </div>
        </>
    )

      

}
    

