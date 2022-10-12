import Hero from "../../layouts/MainHero";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Content from "../../components/Content";
import ContentImg from "../../assets/images/content.jpg";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Hero />

      <Content
        contentClass=""
        contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        imgClass=""
        imgLink={ContentImg}
      />
      <Content contentClass="" contentText="" imgClass="" imgLink="" />
      <Content contentClass="" contentText="" imgClass="" imgLink="" />

      <Footer />
    </div>
  );
};

export default HomePage;
