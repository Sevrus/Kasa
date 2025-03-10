import Banner from "../../components/Banner/Banner.jsx";
import image from "../../assets/images/about_banner.jpg";
import Collapse from "../../components/Collapse/Collapse.jsx";
import collapseData from "../../data/collapseData.js";

const About = () => {
    return (
        <>
            <Banner
                image={image}
                alt="Un paysage de montagnes, boisées au premier plan et eneigées au loin."
                showOverlay={false}
                showText={false}
            />
            <div className="collapse-container">
            {collapseData.map((item, index) => (
                <Collapse key={index} {...item} />
            ))}
            </div>
        </>
    );
}

export default About;
