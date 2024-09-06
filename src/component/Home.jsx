import { useState } from 'react'
import './main.css'
import Cards from './Cards'

const Home = () => {
  const [data, setdata] = useState();
  const [Search, setSearch] = useState("");
  const [msg, setmsg] = useState("")

      const handleInput = (event) => {
          setSearch(event.target.value)
      }
    const myFun = async () => {
      if (Search === "") {
          setmsg("Please Enter The Food Recipe Name")
      }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
        const jsonDeta = await get.json();

        setdata(jsonDeta.meals)
        setmsg("")
     }
 
      }
 
  return (
    <>
    <h1 className='header'>FOOD RECIPE APP</h1>
      <div className='Container'>
           <div className='SearchBar'>
               <input id='search' type='text' placeholder='Enter Dishe' onChange={handleInput}/>
               <input onClick={myFun} id='mainBtn' type='button' value='Search'/>
         
           </div>
  
           <h3 className='erro'>{msg}</h3>
           <div>
              <Cards details={data}/>
           </div>
            <Cards/>

      </div>

    </>
  )
}

export default Home