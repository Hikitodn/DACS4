import Hero from "../../layouts/MainHero";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Content from "../../components/Content";

const HomePage = () => {
    return(
        <div>
            <Header />

            <Hero />

            <Content content="container" img_link="asdasdasd" />

            <Footer />
        </div>
    )
}

export default HomePage;