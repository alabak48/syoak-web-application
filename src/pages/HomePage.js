import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, lazy, Suspense } from "react";
import SyoakLogoName from "../assets/SyoakLogoName.svg";
import "./HomePage.css";
import Arrow from "../assets/Arrow.svg";
import LoadingScreen from "../components/animation/LoadingScreen";
const NavigationBar = lazy(() => import("../components/navbar/NavigationBar"));
const HeroContainer = lazy(() => import("../components/herocontainer/HeroContainer"));
const Achievements = lazy(() => import("../components/achievements/Achievements"));
const ContactForm = lazy(() => import("../components/form/Form"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const BlogContainer = lazy(() => import("../components/blog/Blog"));

class HomePage extends Component {
    render() {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <div>
                    <div className="home-page">
                        <img src={SyoakLogoName} alt="Logo" className="logo" />
                        <div className="arrow"><img src={Arrow} alt="Arrow scroll down"></img></div>
                    </div>
                    <NavigationBar />
                    <HeroContainer />
                    <BlogContainer />
                    <Carousel />
                    <Achievements />
                    <ContactForm />
                    <Footer />
                </div>
            </Suspense>
        );
    }
}

export default HomePage;
