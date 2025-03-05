import Banner from "../../components/Banner/Banner.jsx";
import image from "../../assets/images/home_banner.jpg";

const Home = () => {
    return (
        <>
            <Banner
                image={image}
                alt="Une côte escarpée plongeant dans une mer calme."
            />
        </>
    );
}

export default Home;
