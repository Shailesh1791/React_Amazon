import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url: any) {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getOrder = async () => {
            const response = await axios.get(url);
            setData(response);
            setLoading(false);
        }
        getOrder();
    }, [url]);
    return [data, loading];
}

export default React.memo(useFetch);