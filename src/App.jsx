import { useState } from "react";
import Cards from "./assets/Components/Cards";
import Header from "./assets/Components/Header";
import Hero from "./assets/Components/Hero";
import Recipe from "./assets/Components/Recipe";
import Result from "./assets/Components/Result";

const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [prepare, setPrepare] = useState([])
  const [totalTime, setTime] = useState(0);
  const [totalCalories, setCalories] = useState(0);


  const mathTimeAndCalories = (time, calories)=>{
    setTime(totalTime + time)
    setCalories(totalCalories + calories)
  }

  const removePrepare = id =>{
    const removePrepare = recipe.find(prepare => prepare.id === id)
    const updatePrepare = recipe.filter(prepare => prepare.id !== id)
    setRecipe(updatePrepare)
    setPrepare([...prepare, removePrepare])
  }

  const handleRecipe = (food) => {
    const isFind = recipe.find((foodItem) => foodItem.id === food.id);
    if (!isFind) {
      setRecipe([...recipe, food]);
    } else {
      alert("already select the food");
    }
  };


  return (
    <div className="w-11/12 mx-auto py-8">
      {/* header container section here */}
      <Header></Header>
      {/* hero section here */}
      <Hero></Hero>
      {/* our chef container */}
      <Recipe></Recipe>
      {/* card container */}
      <section className="flex justify-between gap-6 mt-10">
        <Cards handleRecipe={handleRecipe}></Cards>
        <Result recipe={recipe} removePrepare={removePrepare} prepare={prepare} mathTimeAndCalories={mathTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></Result>
      </section>
    </div>
  );
};

export default App;
