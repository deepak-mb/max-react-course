import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
