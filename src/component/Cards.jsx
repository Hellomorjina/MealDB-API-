
import { NavLink } from 'react-router-dom';
import './Cards.css'

// eslint-disable-next-line react/prop-types
const Cards = ({ details }) => {
    console.log(details);

  return (
    <>
      <div className='meals'>
        {!details ? "" :details.map((curItem)=>{
          return(
            <div className='mealImg' key={curItem.strMealThumb}>
              <img src={curItem.strMealThumb}/>
              <p>{curItem.strMeal}</p>
              <NavLink to={`/${curItem.idMeal}`}>
                      <button>Recipe</button>
              </NavLink>
      

             </div>
          )
        })
        }

      </div>
    </>
  )
}

export default Cards


