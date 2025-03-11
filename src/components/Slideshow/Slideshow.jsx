import {useState} from "react";
import styles from './Slideshow.module.scss';
import arrow from "../../assets/images/arrow_slideshow.svg";

const Slideshow = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    if (!pictures || pictures.length === 0) {
        return null;
    }
    if (pictures.length === 1) {
        return (
            <div className={styles.slideshow}>
                <img
                    src={pictures[0]}
                    alt=""
                    className={styles.slideshow__image}
                />
            </div>
        );
    }
    return (
        <div className={styles.slideshow}>
            <img
                src={pictures[currentIndex]}
                alt=""
                className={styles.slideshow__image}
            />
            <button
                className={`${styles.slideshow__button} ${styles.slideshow__button__prev}`}
                onClick={prevImage}
            >
                <img src={arrow} alt="Image précédente" className={styles.slideshow__icon} />
            </button>
            <button
                className={`${styles.slideshow__button} ${styles.slideshow__button__next}`}
                onClick={nextImage}
            >
                <img src={arrow} alt="Image suivante" className={styles.slideshow__icon} />
            </button>
            <div className={styles.slideshow__counter}>
                {currentIndex + 1} / {pictures.length}
            </div>

        </div>
    )
}

export default Slideshow;
