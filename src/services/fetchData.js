const fetchData = async (url, setLoading, setError) => {
    if (setLoading) setLoading(true);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMessage = `Erreur ${response.status}: ${response.statusText || 'Requête échouée'}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();

        if (setError) setError(null);

        return data;
    } catch (error) {
        console.error("Erreur dans fetchData :", error.message || error);

        throw error;
    } finally {
        if (setLoading) setLoading(false);
    }
};

export default fetchData;
