import {useEffect, useState} from "react";
import fetchData from "../../services/fetchData.js";
import styles from './Card.module.scss';

const Card = () => {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const url = "/data/rentals.json";

    useEffect(() => {
        setIsLoading(true);
        fetchData(url)
            .then((jsonData) => setDatas(jsonData))
            .catch((err) => {
                console.error("Error fetching data: ", err);
                setError(`Failed to load data: ${err.message || 'Unexpected error'}`);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div className={styles.container}>
            {datas &&
                datas.map((item) => (
                    <figure className={styles.container__card} key={item.id}>
                        <img className={styles.container__card__image} src={item.cover} alt={item.title} />
                        <figcaption className={styles.container__card__text}>{item.title}</figcaption>
                    </figure>
                ))}
        </div>
    );
}

export default Card;
