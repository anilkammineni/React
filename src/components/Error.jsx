import { useRouteError } from "react-router";

export default function Error() {

    const err = useRouteError();

    console.log("Error: ", err);
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}