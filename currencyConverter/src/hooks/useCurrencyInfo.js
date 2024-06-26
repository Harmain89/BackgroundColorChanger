import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;


        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();

    }, [currency])

    if (error) {
        console.error("Error fetching currency data:", error);
    }

    // console.log(data);
    return data;
}

export default useCurrencyInfo;
