import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Cards.css";
const Info = () => {
  const { Mealid } = useParams();
  const [Info, setInfo] = useState();
  console.log(Mealid);

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`
    );
    const jsonDeta = await get.json();
    console.log(jsonDeta.meals[0]);
    setInfo(jsonDeta.meals[0]);
  };
  if (Info != "") {
    getInfo();
  }
  return (
    <>
      {!Info ? (
        "Data is not Found "
      ) : (
        <div className="mealInfo">
          <img src={Info.strMealThumb }/>
          <div className="Info">
            <h1>Recipe Detail</h1>
            <button>{Info.strMeal}</button>
            <h3>Instruction&apos;s</h3>
            <p>{Info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
