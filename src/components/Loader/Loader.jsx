import styles from './Loader.module.scss';

/**
 * Displays a loading spinner with a "Loading..." message, used as a visual feedback
 * during asynchronous operations.
 *
 * @returns {JSX.Element} A spinner and loading message.
 */
const Loader = () => {
    return (
        <div className={styles["loader-container"]}>
            <div className={styles["loader-container__spinner"]}></div>
            <p>Chargement...</p>
        </div>
    );
};

export default Loader;
