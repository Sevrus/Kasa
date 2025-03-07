const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        // console.log("Response status: ", response.status);
        // const text = await response.text();
        // console.log("Response raw text: ", text);
        // return JSON.parse(text);

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default fetchData;
