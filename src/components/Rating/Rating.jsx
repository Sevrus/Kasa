import redStar from "../../assets/images/redStar.svg";
import grayStar from "../../assets/images/grayStar.svg";
import styles from './Rating.module.scss';

/**
 * Renders a rating component with a visual representation of stars.
 * Displays red stars for the given rating and gray stars for the remaining ones.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.rating - The rating value (0-5) representing the number of red stars.
 * @returns {JSX.Element} The rating component with stars.
 */
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
