import { Outlet } from "react-router-dom";


export default function NutritionInfo({instruction ,image }) {

    return(
        <div className="w-100 h-100 recipe-info d-flex flex-row">
            <Outlet context={{instruction}}/>
            <img className="recipe-img" src={image} alt="" />  
        </div>
    )   
}