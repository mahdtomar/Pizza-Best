import React from "react";
import Meal from "./Meal";
import mealOne from "../images/pizza/mealOne.jpeg";
// import mealTwo from "../images/mealTwo.jpeg";
import mealthree from "../images/mealthree.jpeg";
// import mealfour from "../images/mealfour.jpeg";
import mealfive from "../images/mealfive.jpeg";
import "../sass/bestdeals.css";
const BestDeals = () => {
  return (
    <div className="best-deals grid-3 container">
      <h2 className="title">Best Deals</h2>
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
      {/* <Meal image={mealTwo} name='second meal' price='78.99EGB' details='(meat, cheese, mozarella, souce)' /> */}
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
        image={mealfive}
        name="fifth meal"
        price="119.99EGB"
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
        image={mealfive}
        name="fifth meal"
        price="119.99EGB"
        details="(meat, cheese, mozarella, souce)"
      />
      {/* <Meal image={mealfour} name='4th meal' price='99.99EGB' details='(meat, cheese, mozarella, souce)' /> */}
      <Meal
        image={mealfive}
        name="fifth meal"
        price="119.99EGB"
        details="(meat, cheese, mozarella, souce)"
      />
      <Meal
        image={mealthree}
        name="third meal"
        price="68.99EGB"
        details="(meat, cheese, mozarella, souce)"
      />
      <Meal
        image={mealfive}
        name="fifth meal"
        price="119.99EGB"
        details="(meat, cheese, mozarella, souce)"
      />
    </div>
  );
};

export default BestDeals;
