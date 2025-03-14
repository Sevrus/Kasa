import Banner from "../../components/Banner/Banner.jsx";
import image from "../../assets/images/home_banner.jpg";
import Card from "../../components/Card/Card.jsx";

/**
 * Renders the home page with a banner and a card section.
 * The banner includes an image and an overlay text message.
 *
 * @returns {JSX.Element} The home page content with a banner and card.
 */

const Home = () => {
    const textOverlay = `Chez vous, <span>partout et ailleurs</span>`;
    return (
        <>
            <Banner
                image={image}
                alt="Une côte escarpée plongeant dans une mer calme."
                text={textOverlay}
            />
            <Card />
        </>
    );
}

export default Home;
