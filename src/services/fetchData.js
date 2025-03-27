/**
 * Fetches data from the given URL and handles loading and error states.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {function} [setLoading] - Optional function to set the loading state.
 * @param {function} [setError] - Optional function to handle error state.
 * @returns {Promise<object>} The fetched data.
 * @throws Will throw an error if the fetch request fails.
 */
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
        console.error("Erreur dans fetchData :", error.message || error);

        throw error;
    } finally {
        if (setLoading) setLoading(false);
    }
};

export default fetchData;
