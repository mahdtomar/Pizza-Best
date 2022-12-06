import React from "react";
import Meal from "./Meal";
import mealOne from "../images/pizza/mealOne.jpeg";
import mealthree from "../images/mealthree.jpeg";
import "../sass/slider.css";
import { useEffect, useState } from "react";
const Slider = () => {
  // let sliderWidth='1440px'
  const [sliderWidth,setSliderWidth] = useState('1440px');
  useEffect(() => {
    let slider = document.querySelector(".meals");
     setState(state =>({sliderWidth,}))
    return sliderWidth
  });
  return (
    <div className="container special">
      <h2>Pizza</h2>
      <div
        className="slider"
        style={{ width: sliderWidth}}
      >
        <div className="meals f-2">
          <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
