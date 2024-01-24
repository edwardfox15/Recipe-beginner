import { Link } from "react-router-dom"
import emptyPlate from "../assets/no-food-found.png"

export default function Error({ message , explanation}) {
    return (
        <div className="error-pag mt-5 d-flex flex-column mx-auto">
            <div className="not-found d-flex flex-column">
                <img className="not-found-image" src={emptyPlate} alt="error not found" />
                <h1>{message}</h1>
                <p>{explanation ? explanation : 'something went wrong'}</p>
            </div>
            <Link className="w-50 btn btn-danger" to="/">Go Back</Link>
        </div>
    )
}