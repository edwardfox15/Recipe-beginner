

export default function NutritionInfo({instruction ,image }) {

    return(
        <div className="w-100 h-100 recipe-info d-flex flex-row justify-content-between">
            <div className="w-100 recipe-info-container d-flex flex-column">
                <div className="w-100 h-100 recipe-info-header">
                    <h3>INSTRUCTIONS</h3>
                </div>
                {instruction.map(({display_text, position}) => (
                    <div className="recipe-info-content-container" key={position}>
                        <p className="recipe-step">{position}</p>
                        <p className="recipe-text">{display_text}</p>
                    </div>
                ))}
            </div>
            <img className="recipe-img" src={image} alt="" />  

        </div>
    )
}