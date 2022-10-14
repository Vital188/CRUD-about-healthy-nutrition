import { useState } from "react";
import Createlist from "./Createlist";

function New() {

    const [product, setProduct] = useState('');
    const [fat, setFat] = useState('');
    const [carb, setCarb] = useState('');
    const [protein, setProtein] = useState('');
    const [calories, setCalories] = useState('');
    const [weight, setWeight] = useState('');


    const remove = () => {
        setCalories('');
        setCarb('');
        setFat('');
        setProduct('');
        setProtein('');
        setWeight('');
    }

    const handleEnter = (e) => {
        console.log(e.key)
        if (e.key === "Delete")
        {setProduct('')}
       }

    return (
     <>
     <div>
    <h1 className="centr">Please, add a new product into the list</h1>
    </div>
    <div className="middle">
    <div className="left">
        <h1>New product information</h1>
        <div className="inside">
        <label>Product name:</label>
        <input type='text' value={product} onKeyPress={ (e) => {
         handleEnter(e)}} onChange={(e) =>setProduct(e.target.value)} 
        placeholder="Please, write product name..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Fat (g):</label>
        <input type='text' value={fat}  onChange={(e) => setFat(e.target.value)}
        placeholder="Please, write fat weight..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Carb (g):</label>
        <input type='number' value={carb}  onChange={(e) => setCarb(e.target.value)} 
        placeholder="Please, write carb weight..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Protein (g):</label>
        <input type='number' value={protein}  onChange={(e) => setProtein(e.target.value)}
        placeholder="Please, write protein weight..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Calories:</label>
        <input type='number' value={calories}  onChange={(e) => setCalories(e.target.value)}
        placeholder="Please, write calories quantity..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Weight:</label>
        <input type='number' value={weight}  onChange={(e) => setWeight(e.target.value)}
        placeholder="Please, write product weight..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="number" style={{
            marginTop: '10px',
            marginBottom: '30px'
        }}></div>
        </div>
           <div className="box5" style={{
            marginLeft: '100px'
           }}>
     <div className="inside" style={{
        paddingTop: '0px'
     }}>
        <div style={{
            backgroundColor:   'rgb(219, 210, 210)',
            justifyContent: 'flexStart',
            border: '2px solid black',
            borderRadius: '10px',
            display: 'flex',
            paddingTop: '0px',
            height: '380px',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <h1>New product confirmation</h1>
        
        <div className="centr2" style={{
            alignItems: 'flexStart'
        }}>
            <div className="inside2">
     <div className="box4">Product</div>
     <div className="box4">Fat</div>
     <div className="box4">Carb </div>
     <div className="box4">Protein </div>
     <div className="box4">Calories</div>
     <div className="box4">Weight</div>
     </div><div>
     <Createlist remove={remove} product={product} fat={fat} protein={protein} carb={carb} weight={weight} calories={calories} />
     </div></div>
    </div></div>
    </div>
    </div>
     </>
    )
    }
    export default New;
    
    