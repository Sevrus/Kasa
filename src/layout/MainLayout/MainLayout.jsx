import styles from './MainLayout.module.scss';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

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
