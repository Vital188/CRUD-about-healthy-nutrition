import { useEffect, useState } from "react";
import { create } from "../Functions/localStorage";


function Createlist ({protein, fat, weight, carb, calories, remove, product}) {

    const [createData, setCreateData] = useState(null);
    const key = 'product';
    useEffect(() => {
        if (null === createData) {
          return;
        }
        create(key, createData);
      }, [createData]);

    // const add = () => {
    //     let fav =  [];
    //     if(localStorage.getItem('favourite')){
    //       fav = JSON.parse(localStorage.getItem('favourite'))
    //     }
    //     fav.push(product, fat, carb, protein, calories, weight )
    //     localStorage.setItem('favourite', JSON.stringify(fav))
    //   };  

      const add = () => {
        setCreateData({
          product: JSON.stringify(product),
          fat: parseFloat(fat),
          weight,
          carb,
          calories,
          protein
        });
        remove()
      };

    return (
        <div className="centr2">
    <div className="inside2">
    <div className="box4">{product}</div>
     <div className="box4">{fat}</div>
     <div className="box4">{carb}</div>
     <div className="box4">{protein}</div>
     <div className="box4">{calories}</div>
     <div className="box4">{weight}</div>
     <div>
        <button onClick={add} style={{
            position: 'absolute',
            top: '504px',
            left: '1190px',
            width: '200px',
            backgroundColor: 'red',
            height: '80px',
            cursor: 'pointer'
        }}>Add to product list</button>
        <button onClick={remove} style={{
            position: 'absolute',
            top: '504px',
            left: '1500px',
            width: '200px',
            backgroundColor: '#00bcd4',
            height: '80px',
            cursor: 'pointer'
        }}>DELETE</button>
     </div>
    </div>
    </div>
    )
}

export default Createlist