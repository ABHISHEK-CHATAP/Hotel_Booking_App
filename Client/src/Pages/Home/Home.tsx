import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import Features from "../../Components/feactured/Feactured";
import FeatureProperties from "../../Components/feturedProperties/FeatureProperties";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeatureProperties />
        <MailList/>
        <Footer/>
      </div>

    </>
  );
};

export default Home;
