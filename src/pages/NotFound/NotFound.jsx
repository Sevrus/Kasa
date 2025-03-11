import {NavLink} from "react-router";

const NotFound = () => {
    return (
        <main className="notFound-container">
            <h1 className="notFound-container__title">404</h1>
            <p className="notFound-container__message">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="notFound-container__link" to="/" end>Retourner sur la page d’accueil</NavLink>
        </main>
    );
}

export default NotFound;
