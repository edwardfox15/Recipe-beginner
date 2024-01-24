import { useRouteError } from "react-router-dom";
import Error from "./Error";


export default function ErrorPage () {
    const error = useRouteError()

    console.log(error)
    return(
        <div className="w-100 error-page d-flex mx-auto">
            <Error message={error.statusText} explanation={error.status}/>
        </div>
    )
}