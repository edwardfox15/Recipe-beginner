import { Link, useOutletContext, useParams } from "react-router-dom";

export default function Instructions() {
    const { id } = useParams()
    const { instruction } = useOutletContext();

    return(
        <div className="w-100 recipe-info-container d-flex flex-column">
            <div className="w-100 h-100 recipe-info-header">
                <h3>INSTRUCTIONS</h3>
                <Link to={`/recipe/${id}/ingredients`} className="recipe-info-link">
                    Ingredients
                </Link>
            </div>
            {instruction.map(({display_text, position}) => (
                <div className="recipe-info-content-container" key={position}>
                    <p className="recipe-step">{position}</p>
                    <p className="recipe-text">{display_text}</p>
                </div>
            ))}
        </div>
    )
}