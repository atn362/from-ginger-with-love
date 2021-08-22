import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              className="candle"
              src="images/candle.jpg"
              text="Homemade artisenal candles with numerous scents"
              label="Candles"
              path="/products"
            />
            <CardItem
              src="images/cedar-wicks.jpg"
              text="Homemade cedar wicks sourced locally in Minnesota"
              label="Cedar Wicks"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
