import {useEffect, useState} from "react";
import fetchData from "../../services/fetchData.js";
import styles from './Card.module.scss';
import {useNavigate} from "react-router";

const Card = () => {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const url = "/data/rentals.json";

    useEffect(() => {
        fetchData(url, setIsLoading, setError)
            .then((jsonData) => {
                setDatas(jsonData);
            })
            .catch((err) => {
                console.error("Erreur pendant le fetch dans Card :", err.message || err);
                setError("Une erreur est survenue lors du chargement des données. Réessayez ultérieurement.");
            });

    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleCardClick = (rentalId) => {
        navigate(`/rental/${rentalId}`);
    }


    return (
        <div className={styles.container}>
            {datas &&
                datas.map((item) => (
                    <figure
                        className={styles.container__card}
                        key={item.id}
                        onClick={() => handleCardClick(item.id)}
                    >
                        <img
                            className={styles.container__card__image}
                            src={item.cover}
                            alt={item.title}
                        />
                        <figcaption
                            className={styles.container__card__text}>{item.title}
                        </figcaption>
                    </figure>
                ))}
        </div>
    );
}

export default Card;
