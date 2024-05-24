import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     try {
            
    //         fetch("https://api.github.com/users/Harmain89")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(data.followers);
    //             setData(data)
    //         })

    //     } catch (error) {
    //         setError(error.message);
    //     }


    //     if (error) {
    //         console.error("Error fetching currency data:", error);
    //     }
        
    // }, [])
    
    return (
        <>
            <div className="bg-gray-600 text-white text-center text-3xl m-4 p-4 rounded-2xl">

                <div className="flex justify-center my-4">
                    <img src={data?.avatar_url} className="rounded-full" alt="Git Picture" width={300} />
                </div>

                <h2 className="mb-1">
                    Github Followers : {data?.followers}
                </h2>
                <br />
                <h2 className="mb-1">
                    Github Following : {data?.following}
                </h2>
            </div>
        </>
    );
}

export default Github;



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harmain89');

    return response.json();
}