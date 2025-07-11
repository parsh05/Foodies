import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({category, searchText}) => {
  const { foodList } = useContext(StoreContext);
   
  // console.log(foodList);

  const filteredFoods = foodList.filter(food => (
    (category === 'All' || food.category === category) && food.name.toLowerCase().includes(searchText.toLowerCase())
  ));
  
  return (
    <div className="container mt-5">
      <div className="row">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
           <FoodItem key={index} name={food.name} description={food.description} price={food.price} id={food.id} imageUrl={food.imageUrl} />
           ) )
        ) : (
          <div className="text-center mt-4">
            <h4>No Food found</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
