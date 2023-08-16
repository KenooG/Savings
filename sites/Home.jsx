import Header from "./components/Header.jsx";
import UnderHeader from "./components/UnderHeader.jsx";
import Offer from "./components/Offer.jsx";
import Footer from "./components/Footer.jsx";
const Home = () => {
    return <div className="Overlay">
      <Header/>
        <UnderHeader/>
        <Offer/>
        <Footer/>
    </div>;


};
export default Home;