import {NavLink} from "react-router";
import styles from './Header.module.scss';
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt="Le logo su site"/>
            </div>
            <nav className={styles.header__nav}>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/about" end>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
