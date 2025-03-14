import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import fetchData from "../../services/fetchData.js";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Loader from "../../components/Loader/Loader.jsx";

/**
 * Retrieves and displays detailed information about a specific rental.
 * Includes a slideshow, ratings, host details, tags, description, and equipment.
 * Handles loading state, errors, and redirects to a 404 page if the rental is not found.
 *
 * @returns {JSX.Element} The detailed rental page.
 */
const RentalDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
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
                    navigate("/404");
                }
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des données :", err.message || err);
                setError("Impossible de charger les détails du logement. Réessayez ultérieurement.");
            });
    }, [id, navigate]);

    if (isLoading) return <Loader />;
    if (error) return <p>Erreur : {error}</p>;


    return (
        <>
            <Slideshow pictures={rental["pictures"]} />

            <div className="rental-container">
                <section className="rental-container__details">
                    <h1 className="rental-container__details__title">{rental["title"]}</h1>
                    <h2 className="rental-container__details__location">{rental["location"]}</h2>
                    <div className={"rental-container__details__tags"}>
                        {rental["tags"].map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </section>
                <div className={"rental-container__rating-agent"}>
                    <Rating rating={rental["rating"] || 0}/>
                    <div className="rental-container__rating-agent__agent">
                        <h3>{rental["host"]["name"]}</h3>
                        <img src={rental["host"]["picture"]} alt={rental["detail"]}/>
                    </div>
                </div>
            </div>
            <div className="collapse-rental">
                <Collapse title="Description" content={rental["description"]} />
                <Collapse title="Équipements" content={rental["equipments"]} />
            </div>
        </>
    );
}

export default RentalDetails;
