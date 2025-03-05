import styles from './Banner.module.scss';

const Banner = ({image, alt}) => {
    return (
        <div className={styles.banner}>
            <img src={image} alt={alt}/>
        </div>
    );
}

export default Banner;
