import {useState} from "react";
import {data} from "./data";
import './App.css';

function App() {
  const [showDogs, setShowDogs] = useState(0);
  const{number, puppyName, gender, month, description, price, image} = data[showDogs];

const nextDog = () => {
setShowDogs(showDogs => {
  showDogs++;
  if(showDogs > data.length-1) {
    showDogs=0
  }
  return showDogs;
})
}
const previousDog = () => {
setShowDogs((showDogs => {
  showDogs--;
  if(showDogs < 0) {
    return data.length-1;
  }
  return showDogs
}))
}

  return (
    <div>
      <div className="replace">
        <h1>Puppy's SHOP</h1>
        </div>
        <div className="replace"> 
        <h2>Find a friend!!</h2>
      </div>
<div className="replace">
  <img src={image} width="320px" height="300px" alt="puppy"/>
</div>
<div className="cont">
<div className="btn pr">
  <button onClick={previousDog}>Previous</button>
</div>
<div className="btn nx">
  <button onClick={nextDog}>Next</button>
</div>
</div>
<div className="replace">
<h3>Price: $ {price}</h3>
</div>
    <div className="replace">
      <h1>{number} - {puppyName}</h1>
    </div>
<div className="replace">
<p>Gender: {gender}, age: {month}</p>
</div>
<div className="replace">
<p>{description}</p>
</div>
    </div>
  );
}

export default App;
