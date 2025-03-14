import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles["loader-container"]}>
            <div className={styles["loader-container__spinner"]}></div>
            <p>Chargement...</p>
        </div>
    );
};

export default Loader;
