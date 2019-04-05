import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  // console.log(props.ingredients);
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  // console.log(transformedIngredients);

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
