import biryani from "./biryani.jpg";
import burger from "./burger.jpg";
import cart from "./cart.png";

import logo from "./food-delivery-logo.png";
import icecream from "./icecream.jpg";
import pizza from "./pizza.jpg";
import rolls from "./roll.jpg";
import salad from "./salad.jpg";
import cakes from "./strawberry.jpg";

import profile from './profile.png'
import delivery from './delivery-man.png'

export const categories = [
  {
    category: "Biryani",
    icon: biryani,
  },
  {
    category: "Burger",
    icon: burger,
  },
  {
    category: "Cake",
    icon: cakes,
  },
  {
    category: "Ice cream",
    icon: icecream,
  },
  {
    category: "Pizza",
    icon: pizza,
  },
  {
    category: "Rolls",
    icon: rolls,
  },
  {
    category: "Salad",
    icon: salad,
  },
];
//TODO: can import more categories

export const assets = {
  logo,
  cart,
  profile,
  delivery
};
