import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = useCallback(async () => {
        try {
            const api = await fetch(url);
            const data = await api.json();

            setState({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error
            });
        }
    }, [url]);

    useEffect(() => {
        getFetch();
    }, [getFetch]);

    return { ...state };
};
