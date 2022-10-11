import { useEffect, useState } from "react";
import { create } from "../../Functions/localStorage";


function Createlist ({age, sex, height, weight, steps, remove, change, info}) {

    const [createDatas, setCreateDatas] = useState(null);
    const key = 'personal';
    useEffect(() => {
        if (null === createDatas) {
          return;
        }
        create(key, createDatas);
      }, [createDatas]);

    // const add = () => {
    //     let fav =  [];
    //     if(localStorage.getItem('favourite')){
    //       fav = JSON.parse(localStorage.getItem('favourite'))
    //     }
    //     fav.push(product, fat, carb, protein, calories, weight )
    //     localStorage.setItem('favourite', JSON.stringify(fav))
    //   };  

      const add = () => {
        setCreateDatas({
          age,
          sex,
          height,
          weight,
          steps,
          info
        });
        remove()
      };

    return (
        <div className="centr2">
    <div className="inside2">
    <div className="box4">{age}</div>
     <div className="box4">{sex}</div>
     <div className="box4">{weight}</div>
     <div className="box4">{height}</div>
     <div className="box4">{steps}</div>
     <div className="box4">{change}</div>
     <div>
        <button onClick={add} style={{
            position: 'absolute',
            top: '504px',
            left: '1190px',
            width: '200px',
            backgroundColor: 'red',
            height: '80px',
            cursor: 'pointer'
        }}>Add personal information</button>
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
    
    <div style={{
      display: 'flex',
      position: 'absolute',
      top: '650px',
      left: '1012px',
      weight: 'auto',
      height: '320px',
      backgroundColor: 'rgb(219, 210, 210)',
      borderRadius: '10px',
      flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black'
    }}> 
    <div>
      <h1>BODY MASS INDEX (BMI)</h1>
      </div> 
      <div style={{
        display: 'flex'
      }}>
      <div className="one">less 18.5 </div>
      <div className="two">18.6 - 24.9</div>
      <div className="three">25 - 29.9
      </div>
      <div className="four">30 - 34.9
     </div>
      <div className="five">35 - 39.9
      </div>
      <div className="six">more 40
    </div></div>
    <div style={{
      display: 'flex'
    }} > 
    <div className="one">underweight </div>
      <div className="two">normal</div>
      <div className="three">
      overweight</div>
      <div className="four">
      obese</div>
      <div className="five">
      big obese</div>
      <div className="six">
      huge obese</div>
    </div>
    <div className="add">{info}</div>
    </div>
    </div>
    )
}

export default Createlist