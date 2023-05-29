import NavigationBar from "../components/Navbar/NavigationBar";
import 'bootstrap/dist/css/bootstrap.css';
import MainContainer from "../components/MainContainer/MainContainer";
import {Component} from "react";
import TextImageComponent from "../components/HeadingTextImage/HeadingTextImage";
import Image1 from "../assets/img_1.svg"
import Image2 from "../assets/img_2.svg"
import Image3 from "../assets/img_3.svg"
import Achievements from "../components/Achievements/Achievements";
import ContactForm from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import "../styles.css"
import Carousel from "../components/Carousel/Carousel";

class HomePage extends Component {
    render() {
        return (
            <>

                <NavigationBar/>
                <MainContainer/>
                <TextImageComponent
                    h5="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
                    h5ClassName="info-one__heading"
                    p="We have a long and proud history giving emphasis to environment social and economic
            outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    image={Image1}
                    reverse={false}
                    className="info-one"
                />
                <TextImageComponent
                    h5="Our business takes the industry of oil and gass to a new level."
                    h5ClassName="info-two__heading"
                    p="We have a long and proud history emphasizing environment social and economic
            outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    image={Image2}
                    reverse={true}
                    className="info-two"
                />
                <TextImageComponent
                    h5="Syoak serves more than 2,500 petrol stations globally"
                    h5ClassName="info-three__heading"
                    p="We have a long and proud history giving emphasis to environment social and economic outcomes
                    to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    image={Image3}
                    reverse={false}
                    className="info-three"
                />
                <Achievements />
                <ContactForm />
                <Footer />

            </>
        )
    }
}

export default HomePage