import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./../../components/FoodDisplay/FoodDisplay";
import Header from "./../../components/Header/Header";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <main className="container" style={{ marginTop: "70px" }}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchText={""} />
    </main>
  );
};

export default Home;
