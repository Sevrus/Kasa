import styles from './Banner.module.scss';

/**
 * Renders a banner component with an image, optional overlay, and optional text.
 * Allows customization of text visibility and overlay functionality.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the image to display in the banner.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.text=""] - Optional text to display on the banner. Supports HTML content.
 * @param {boolean} [props.showText=true] - Flag to control the visibility of the text.
 * @param {boolean} [props.showOverlay=true] - Flag to control the visibility of the overlay.
 * @returns {JSX.Element} The banner component.
 */
const Banner = ({image, alt, text= "", showText = true, showOverlay = true}) => {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__image} src={image} alt={alt}/>
            {showOverlay && <div className={styles["banner__overlay"]}></div>}
            {showText && text && (
                <p
                    className={styles["banner__text"]}
                    dangerouslySetInnerHTML={{__html: text}}
                ></p>
            )}
        </div>
    );
}

export default Banner;
