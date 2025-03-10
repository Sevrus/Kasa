import {useRef, useState} from "react";
import styles from "./Collapse.module.scss";
import chevron from "../../assets/images/chevron.svg";

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.container__header}
                onClick={handleClick}
            >
                <span className={styles.container__header__title}>{title}</span>
                <img
                    className={`${styles.container__header__icon} ${!isOpen ? styles.container__header__iconRotate: ""}`}
                    src={chevron}
                    alt={`${isOpen ? "Chevron pointant vers le bas" : "Chevron pointant vers le haut"}`}
                />
            </div>
            <div
                className={styles.container__content}
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : 0,
                    overflow: "hidden"
                }}
                ref={contentRef}
            >
                <div className={styles.container__content__inner}>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
