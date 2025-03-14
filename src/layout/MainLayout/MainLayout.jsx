import styles from './MainLayout.module.scss';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

/**
 * Defines the main layout structure for the application.
 * Includes a header, a footer, and a content area for nested components.
 *
 * @param {object} props - The properties passed to the component.
 * @param {JSX.Element} props.children - The content to be displayed within the layout.
 * @returns {JSX.Element} The main layout structure.
 */
const MainLayout = ({children}) => {
    return (
        <div className={styles["layoutContainer"]}>
            <Header />
            <main className={styles["layoutContainer__content"]}>{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;
