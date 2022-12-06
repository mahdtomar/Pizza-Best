import React from "react";
import Meal from "./Meal";
import mealOne from "../images/pasta/red pasta.jpeg";
import mealthree from "../images/pasta/white pasta.jpeg";
import "../sass/slider.css";

const PastaSlider = () => {
  return (
    <div className="container pasta ">
      <h2>Pasta</h2>
      <div className="slider">
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

export default PastaSlider;
