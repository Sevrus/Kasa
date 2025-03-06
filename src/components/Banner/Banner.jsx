import styles from './Banner.module.scss';

const Banner = ({image, alt, text}) => {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__image} src={image} alt={alt}/>
            <div className={styles.banner__overlay}></div>
            <p
                className={styles.banner__text}
                dangerouslySetInnerHTML={{__html: text}}
            ></p>
        </div>
    );
}

export default Banner;
