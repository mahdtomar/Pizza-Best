import React from "react";
import Meal from "./Meal";
import mealOne from "../images/pasta/good-looking-pasta.jpeg";
import mealTwo from "../images/pizza/good-looking-pizza.jpeg";
import whitePasta from "../images/pasta/white pasta.jpeg";
import mealthree from "../images/pizza/grey-bg-pizza.jpeg";
import redDotDessert from "../images/dessert/red-dotted-dessert.jpeg";
import stuffedPizza from "../images/pizza/stuffed-pizza.jpeg";
import "../sass/slider.css";
const SalesSlider = () => {
  return (
    <div className="container sales special">
      <h2>Best Sellers</h2>
      <div
        className="slider"
        // style={{ width: sliderWidth}}
      >
        <div className="meals f-2">
        <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />

          <Meal
            image={redDotDessert}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={stuffedPizza}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealTwo}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={whitePasta}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
                    <Meal
            image={mealthree}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />

          <Meal
            image={redDotDessert}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={stuffedPizza}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealOne}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={mealTwo}
            name="first meal"
            price="89.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />
          <Meal
            image={whitePasta}
            name="third meal"
            price="68.99EGB"
            details="(meat, cheese, mozarella, souce)"
          />

        </div>
      </div>
    </div>
  );
};

export default SalesSlider;
