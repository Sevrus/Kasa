import Banner from "../../components/Banner/Banner.jsx";
import image from "../../assets/images/about_banner.jpg";

const About = () => {
    return (
        <>
            <Banner
                image={image}
                alt="Un paysage de montagnes, boisés au premier plan et eneigées au loin."
            />
        </>
    );
}

export default About;
