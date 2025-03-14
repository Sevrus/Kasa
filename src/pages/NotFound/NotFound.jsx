import {NavLink} from "react-router";

/**
 * Renders a 404 error page when a user navigates to a non-existent route.
 * Displays an error message with a link to redirect the user back to the homepage.
 *
 * @returns {JSX.Element} The 404 error page with a message and navigation link.
 */

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
