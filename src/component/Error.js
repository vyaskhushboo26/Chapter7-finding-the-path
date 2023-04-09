import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError();
    const { status, statusText, data } = err;
    return(
        <>
            <h1>Opps Something went wrong...🙁</h1>
            <h2>{status + ':' + statusText}</h2>
            <span>{data}</span>
        </>
    )
}

export default Error;