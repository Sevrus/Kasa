import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import RentalDetails from "../pages/RentalDetails/RentalDetails.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

/**
 * Configures and manages the application's routing.
 * Defines routes for the homepage, "About" page, rental details, and a 404 page.
 * Wraps all routes with the main layout.
 *
 * @returns {JSX.Element} The router with defined routes.
 */
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <About />
                        </MainLayout>
                    }
                />
                <Route
                    path="/rental/:id"
                    element={
                        <MainLayout>
                            <RentalDetails />
                        </MainLayout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <NotFound />
                        </MainLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
