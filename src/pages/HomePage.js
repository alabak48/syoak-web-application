import NavigationBar from "../components/navbar/NavigationBar";
import 'bootstrap/dist/css/bootstrap.css';
import HeroContainer from "../components/herocontainer/HeroContainer";
import {Component} from "react";
import Achievements from "../components/achievements/Achievements";
import ContactForm from "../components/form/Form";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import BlogContainer from "../components/blog/Blog";


class HomePage extends Component {
    render() {
        return (
            <>

                <NavigationBar/>
                <HeroContainer/>
                <BlogContainer />
                <Carousel />
                <Achievements />
                <ContactForm />
                <Footer />

            </>
        )
    }
}

export default HomePage