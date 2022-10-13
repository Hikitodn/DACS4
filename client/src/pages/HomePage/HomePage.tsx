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

      <div className="px-8">
        <div className="flex flex-col text-center justify-center py-5 px-8">
          <span className="text-4xl font-mono font-bold">
            Etiam nulla lectus amet
          </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>

        <Content
          contentClass="w-2/4"
          contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minus! Eum, expedita?
        "
          imgClass="w-1/4"
          imgLink={ContentImg}
        />
        <Content
          contentClass="w-2/4"
          contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minus! Eum, expedita?
          
        "
          imgClass="w-1/4"
          imgLink={ContentImg}
        />
        <Content
          contentClass="w-2/4"
          contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minus! Eum, expedita?
        "
          imgClass="w-1/4"
          imgLink={ContentImg}
        />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
