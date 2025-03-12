import {useParams} from "react-router";
import {useEffect, useState} from "react";
import fetchData from "../../services/fetchData.js";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";

const RentalDetails = () => {
    const {id} = useParams();
    const [rental, setRental] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const url = "/data/rentals.json";

    useEffect(() => {
        fetchData(url, setIsLoading, setError)
            .then((data) => {
                const foundRental = data.find((item) => item.id === id);
                if (foundRental) {
                    setRental(foundRental);
                } else {
                    setError("Appartement introuvable.");
                }
            })
            .catch((err) => {
                console.error("Erreur pendant la récupération :", err.message || err);
            });
    }, [id]);

    if (isLoading) return <p>Chargement des détails...</p>;
    if (error) return <p>Erreur : {error}</p>;


    return (
        <>
            <Slideshow pictures={rental["pictures"]} />

            <div className="rental-container">
                <section className="rental-container__details">
                    <h1 className="rental-container__details__title">{rental["title"]}</h1>
                    <p className="rental-container__details__location">{rental["location"]}</p>
                    <div className={"rental-container__details__tags"}>
                        {rental["tags"].map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </section>
                <div>

                </div>
            </div>
        </>
    );
}

export default RentalDetails;
