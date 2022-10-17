import { useState, useEffect } from "react";
import { destroy } from "../Functions/localStorage";

function Linetwo ({pr, sal, sl, prod}) {

// const [produc, setProduc] = useState(pr);
// key = 'product'

// const remove = () => {
// prod('')
// }

console.log(prod)


    return (
<>
      <div className="box6" style={{
        marginLeft: '0',
        marginTop: '0',
        marginBottom: '0'
      }}>
<div className="centr">
    <div className="box">
    <div className="box2">{pr.product}</div>
     <div className="box2">{pr.fat}</div>
     <div className="box2">{pr.carb} </div>
     <div className="box2">{pr.protein}</div>
     <div className="box2">{pr.calories}</div>
     <div className="box2">{pr.weight}</div>
      <div className="box2" >
      <button 
   style={{
    width: '143px',
    height: '50px',
    fontSize: '16px',
    margin: '27px',
    backgroundColor: 'green',
    bordeRradius: '10px',
  }}>Remove from list</button>
        </div> 
        </div>
        </div>
        </div>



  </>     
      
    )
}

export default Linetwo