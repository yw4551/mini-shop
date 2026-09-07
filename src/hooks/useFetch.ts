import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                return res.json();
            })
            .then((data) => setData(data))
            .catch((err) =>
                setError(
                    err instanceof Error ? err.message : "Something went wrong",
                ),
            )
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
