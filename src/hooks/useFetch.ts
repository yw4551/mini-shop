import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                return res.json();
            })
            .then((data) => {
                if (!ignore) setData(data);
            })
            .catch((err) => {
                if (!ignore)
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Something went wrong",
                    );
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading, error };
}
