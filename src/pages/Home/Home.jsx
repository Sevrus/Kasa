import Banner from "../../components/Banner/Banner.jsx";
import image from "../../assets/images/home_banner.jpg";
import Card from "../../components/Card/Card.jsx";

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
