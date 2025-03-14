import {useRef, useState} from "react";
import styles from "./Collapse.module.scss";
import chevron from "../../assets/images/chevron.svg";

/**
 * Renders a collapse/accordion component with a title and expandable content.
 * Allows toggling visibility of the content when the header is clicked.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title displayed on the collapse header.
 * @param {string|string[]} props.content - The content to display when the collapse is open. Can be a string or an array of strings.
 * @returns {JSX.Element} The collapse component.
 */
const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const renderContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        }
        return content;
    };

    return (
        <div className={styles["container"]}>
            <div
                className={styles["container__header"]}
                onClick={handleClick}
            >
                <span className={styles["container__header__title"]}>{title}</span>
                <img
                    className={`${styles["container__header__icon"]} ${!isOpen ? styles["container__header__iconRotate"]: ""}`}
                    src={chevron}
                    alt={`${isOpen ? "Chevron pointant vers le bas" : "Chevron pointant vers le haut"}`}
                />
            </div>
            <div
                className={styles["container__content"]}
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : 0,
                    overflow: "hidden"
                }}
                ref={contentRef}
            >
                <div className={styles["container__content__inner"]}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
