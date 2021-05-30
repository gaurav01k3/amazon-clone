import React from "react";
import "./CSS/Home.css";
import Product from "./Product.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="283687275"
            title="Boya BYM1 Omnidirectional Lavalier Condenser Microphone with 20ft Audio Cable (Black)"
            price={10000}
            image="https://m.media-amazon.com/images/I/41UYenF+lnL._AC_SR250,230_.jpg"
            rating={5}
          />
          <Product
            id="283623275"
            title="Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/51yhH82KvZL._SL1280_.jpg"
            rating={5}
          />
          <Product
            id="283623275"
            title="Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/51yhH82KvZL._SL1280_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="28323275"
            title="Gaming chair
"
            price={10}
            image="https://images-eu.ssl-images-amazon.com/images/I/71KFirs5cWL._AC_UL200_SR150,200_.jpg"
            rating={5}
          />
          <Product
            id="223244275"
            title="DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg"
            rating={5}
          />
          <Product
            id="123324543"
            title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2323653435"
            title="Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA"
            price={10}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
            rating={5}
          />
          <Product
            id="223244275"
            title="DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg"
            rating={5}
          />
          <Product
            id="123324543"
            title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="223244275"
            title="DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg"
            rating={5}
          />
          <Product
            id="123324543"
            title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)"
            price={10}
            image="https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
