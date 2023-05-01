import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("");
  const [data,setData]=useState(null);
  const[favorites,setFavorites]=useState([])

useEffect(()=>{
  const savedFavorites=JSON.parse(localStorage.getItem("favorites") )|| []
  setFavorites(savedFavorites);
},[])

const handlePackage=async ()=>{
  const response=await fetch(`https://registry.npmjs.org/${value}`);
  const data=await response.json();
  setData(data);
  setValue("")
  
};
const addFavorite=(data,description)=>{
  const favorite={name:data.name , description};
  setFavorites([...favorites,favorite])
}
useEffect(()=>{
  localStorage.setItem("favorites",JSON.stringify(favorites));
},[favorites])
  return (
    <div className='maincontainer' >
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handlePackage}>search</button>
      {data && (
      
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>

        <button onClick={()=>addFavorite(data,prompt("why do you like this package"))}>Favorite</button>
        </div>
        )}
 {favorites.length>0 && (
<div>
<h2>My favorites</h2>
<ol>
{favorites.map((favorite,index)=>(
  <li key={index}>
    <h3>{favorite.name}</h3>
    <p>{favorite.description}</p>
  </li>
))}

</ol>

</div>

)}
    </div>


  );
}

export default App;
