import MainHero from "../../layouts/MainHero";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Content from "../../components/Content";
import { Img01, Img02, Img03 } from "../../assets/images/index";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />

      <MainHero />

      <div className="px-8 py-2">
        <div className="flex flex-col text-center justify-center text py-5 px-8">
          <span className="text-4xl font-mono font-bold">
            Etiam nulla lectus amet
          </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center py-8 w-auto">
          <Content
            contentClass="md:w-2/4 text-center text-sm py-2 md:py-0 md:text-left px-2 text-lg"
            contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia dolorem enim. Dicta, recusandae. Obcaecati quam nesciunt sint vel voluptatem iusto perspiciatis error sunt facilis asperiores, dolorem, dicta quaerat? Vitae?
          "
            imgClass="md:w-1/4"
            imgLink={Img01}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse justify-center py-8 w-auto">
          <Content
            contentClass="md:w-2/4 text-center text-sm py-2 md:py-0 md:text-left px-2 text-lg md:ml-5"
            contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia dolorem enim. Dicta, recusandae. Obcaecati quam nesciunt sint vel voluptatem iusto perspiciatis error sunt facilis asperiores, dolorem, dicta quaerat? Vitae?
          "
            imgClass="md:w-1/4"
            imgLink={Img02}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center py-8 w-auto">
          <Content
            contentClass="md:w-2/4 text-center text-sm py-2 md:py-0 md:text-left px-2 text-lg"
            contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia dolorem enim. Dicta, recusandae. Obcaecati quam nesciunt sint vel voluptatem iusto perspiciatis error sunt facilis asperiores, dolorem, dicta quaerat? Vitae?
          "
            imgClass="md:w-1/4"
            imgLink={Img03}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
