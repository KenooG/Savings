import Header from './components/Header.jsx';
import UnderHeader from './components/UnderHeader.jsx';
import Offer from './components/Offer.jsx';
import Footer from './components/Footer.jsx';
import { useStoreState, useStoreActions } from 'easy-peasy';

import {useState} from "react";




const Home = () => {



  return (
    <div className="Overlay">
      <Header />
      <UnderHeader />
      <Offer />
      <Footer />
    </div>
  );
};
export default Home;
