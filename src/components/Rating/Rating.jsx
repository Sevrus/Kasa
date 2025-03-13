import redStar from "../../assets/images/redStar.svg";
import grayStar from "../../assets/images/grayStar.svg";
import styles from './Rating.module.scss';

const Rating = ({rating}) => {
    const stars = Array.from({length: 5}, (_, index) => index < rating);

    return (
        <div className={styles["rating"]}>
            {stars.map((isRed, index) => (
                <img
                    key={index}
                    src={isRed ? redStar : grayStar}
                    alt={isRed ? "Étoile rouge" : "Étoile grise"}
                    className={styles["rating__star"]}
                />
            ))}
        </div>
    )
}

export default Rating;
