/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { ImPower } from "react-icons/im";
const Cards = ({ handleRecipe }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="w-2/3">
      <div className="grid grid-cols-2 gap-12">
        {foods.map((food) => (
          <div key={food.id} className="card bg-base-100 border-2">
            <figure>
              <img src={food.food_img} alt="food" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{food.food_name}</h2>
              <p>{food.title}</p>
              <h4 className="font-bold text-xl">
                ingredients : {food.ingredients.length}
              </h4>
              <ul className="ml-8">
                {food.ingredients.map((li, id) => (
                  <li key={id} className="list-disc">
                    {li}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-1 items-center">
                  <IoMdTimer></IoMdTimer>
                  <p>{food.cook_time} minute</p>
                </div>
                <div className="flex gap-1 items-center">
                  <ImPower></ImPower>
                  <p>{food.calories} calories</p>
                </div>
              </div>
              <button
                onClick={() => handleRecipe(food)}
                className="btn btn-accent mt-4"
              >
                Want To Cook{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
