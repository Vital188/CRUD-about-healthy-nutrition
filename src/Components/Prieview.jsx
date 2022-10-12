import Listas from "./Personal/Listas";
import { useState, useEffect } from "react";
import { read} from '../Functions/localStorage';
import Line from "./Line";


function Prieview() {

const [meal, setMeal] = useState('')

const [product, setProduct] = useState(null)
const [lastUpdate, setLastUpdate] = useState(Date.now());
const key = 'product';

useEffect(() => {
    setProduct(read(key));
  }, [lastUpdate]);

useEffect(() => {
const k = localStorage.getItem("product");    if (null === k) {
setProduct([]);    } else {
setProduct(JSON.parse(k));    }  }, []);

    return (
        <>
        
        <div className="centr2">
         <h1 className="centr" style={{
            color: 'crimson',
            fontSize: '40px'
        }}>Make your meal not only taste, but and healthy 😏</h1> 
        <Listas /> 

       
     
    <h1>Your breakfast will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
     }}>
     <select value={meal} onChange={(e) => setMeal(e.target.value)} 
        style={{
            width: '1300px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}>
             <option value={0} >
            Please, choose your product from product list...
            </option>
                    <option value="male">male</option>
        </select>
        </div>
        <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Fat</div>
      <div className="box2">Carb </div>
      <div className="box2">Protein </div>
      <div className="box2">Calories</div>
      <div className="box2">Weight</div>
      <div className="box2" >Delete</div>
     </div>
     </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your lunch will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
     }}>
     <select value={meal} onChange={(e) => setMeal(e.target.value)} 
        style={{
            width: '1300px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}>
             <option value={0} >
             Please, choose your product from product list...
            </option>
                    <option value="male">
                    {
                     product?.map((pr) => (<div Line key={pr.id} pr={pr}>{pr.product}</div>))
                    }
                    </option>
        </select>
        </div>
        <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Fat</div>
      <div className="box2">Carb  </div>
      <div className="box2">Protein </div>
      <div className="box2">Calories</div>
      <div className="box2">Weight</div>
      <div className="box2">Delete</div>
     </div>
     </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your dinner will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
     }}>
     <select value={meal} onChange={(e) => setMeal(e.target.value)} 
        style={{
            width: '1300px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}>
             <option value={0} >
             Please, choose your product from product list...
            </option>
                    <option value="male">male</option>
        </select>
        </div>
        <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Fat</div>
      <div className="box2">Carb </div>
      <div className="box2">Protein</div>
      <div className="box2">Calories</div>
      <div className="box2">Weight</div>
      <div className="box2">Delete</div>
     </div>
     </div>
     </div>
    
     </>
    )
    }
    export default Prieview;
    
    