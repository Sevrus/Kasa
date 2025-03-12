import logo from "../../assets/images/logo_footer.svg";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__logo"]}>
                <img src={logo} alt="Le logo du site"/>
            </div>
            <p className={styles.footer__copyright}>© 2020 Kasa. All<span>rights reserved</span></p>
        </footer>
    );
}

export default Footer;
