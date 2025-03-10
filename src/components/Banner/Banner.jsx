import styles from './Banner.module.scss';

const Banner = ({image, alt, text= "", showText = true, showOverlay = true}) => {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__image} src={image} alt={alt}/>
            {showOverlay && <div className={styles.banner__overlay}></div>}
            {showText && text && (
                <p
                    className={styles.banner__text}
                    dangerouslySetInnerHTML={{__html: text}}
                ></p>
            )}
        </div>
    );
}

export default Banner;
