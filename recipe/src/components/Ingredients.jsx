import { Link, useParams } from "react-router-dom";

export default function Ingredients() {
    const { id } = useParams()

    return(
        <div className="w-100 recipe-info-container d-flex flex-column">
            <Link to={`/recipe/${id}/instructions`}>Instructions</Link>
            <div className="w-100 h-100 recipe-info-header">
                <h3>INGREDIENTS</h3>
            </div>
        </div>
    )
}