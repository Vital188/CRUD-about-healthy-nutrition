import { useEffect, useState } from "react"


function Lines  ({per, setDeleteData}) {

const [pa, setPa] = useState('');
const [total, setTotal] = useState('');

  
useEffect (() =>   {
  if (per.steps < 5000) 
  {setPa(1)}
  if (per.steps > 5000 && per.steps < 10000) 
  {setPa(1.12)}
  if (per.steps > 10000 && per.steps < 15000) 
  {setPa(1.27)}
  if (per.steps > 15000) 
  {setPa(1.54)}
}, [per.steps])

useEffect (() => {
  if (per.sex === null)
  {setTotal(0)}
  if (per.sex === 'male')
  {setTotal((864 - 9.72 * per.age + pa * (14.2 * per.weight + 503 * per.height/100)).toFixed(2))}
  if (per.sex === 'female') 
  {setTotal((387 - 7.31 * per.age + pa * (10.9 * per.weight + 660.7 * per.height/100)).toFixed(2))}
}, [pa, per.age, per.height, per.sex, per.weight])

// const total3 = 864 - 9.72 * per.age + (pa * 14.2 * per.weight + 503 * per.height/100);
// // const total2 = 387 - 7.31 * per.age + pa * (10.9 * per.weight + 660.7 * per.height)
// console.log(total3)


const br = (total/100*30).toFixed(2);
const lun = (total/100*50).toFixed(2);
const dinner = (total/100*20).toFixed(2);
const br1 = (br/100*90).toFixed(2);
const lun1 = (lun/100*90).toFixed(2);
const dinner1 = (dinner/100*90).toFixed(2);


    return (
      <div style={{
        
      }}>
      <div className='box8' style={{
        padding: '30px',
        lineHeight: '150%',
        marginBottom: '50px',
        display: "flex",

       }} >Please, choose below you breakfast, lunch and dinner regarging our recomendation !
       In NEW PRODUCT field you can add you favorite food. All proposed meal product you can find in 
       PRODUCT LIST field.
    </div>
      <div className="box5" style={{
     display: 'flex',
     alignItems: 'center',
     flexDirection: 'column'
       }} >
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
        height: '650px',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1400px'
    }}>
    <h1>Yours personal information</h1>
    
    <div className="centr2" style={{
        alignItems: 'flexStart'
    }}>
        <div className="inside2">
 <div className="box4">Age</div>
 <div className="box4">Sex</div>
 <div className="box4">Weight</div>
 <div className="box4">Height</div>
 <div className="box4">Steps</div>
 <div className="box4">BMI</div>
 </div><div>
<div className="centr">
    <div className="box4">{per.age}</div>
     <div className="box4">{per.sex}</div>
     <div className="box4">{per.weight} </div>
     <div className="box4">{per.height}</div>
     <div className="box4">{per.steps}</div>
     <div className="box4">{(per.weight/(per.height*per.height/10000)).toFixed(2)}</div>
     </div>    
     <div style={{
      display: 'flex',
      weight: 'auto',
      height: '320px',
      backgroundColor: 'rgb(219, 210, 210)',
      borderRadius: '10px',
      flexDirection: 'column',
    alignItems: 'center',
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
    <div className="add" style={{
      padding: '10px'
    }}>{per.info}</div>
    <div>
        <button  style={{
            width: '200px',
            backgroundColor: 'red',
            height: '80px',
            cursor: 'pointer',
            margin: '23px'
        }}>EDIT</button>
        <button onClick={() => setDeleteData(per)} style={{
            width: '200px',
            backgroundColor: '#00bcd4',
            height: '80px',
            cursor: 'pointer',
            margin: '23px'
        }}>DELETE</button>
     </div>
    </div>
    </div>
    </div>    
  </div>
  </div>
  <div className="box7">
    <h1>Our proposal for you:</h1>
    <ul style={{
      fontSize: '25px'
    }}>
      <li>Comparing yours age, sex, physical activity, height and weight you need <b> {total} calories</b> per day;</li>
      <li>Our proposal for you: breakfast (30% of total) will be from <b>{br} calories</b>, lunch (50% of total)  from <b> {lun} calories</b>, dinner (20% of total)  from <b>{dinner} calories;</b></li>
      <li>If you have overweight it is will be better to eat not more than: breakfast <b> {br1} calories</b>, lunch <b>{lun1} calories</b>, dinner <b> {dinner1} calories</b>;</li>
      <li>Try to make at least<b> 10000 steps per day;</b></li>
      <li>And of course smile everyday 😊, becouse everything will be okey !</li>
    </ul>
  </div>
</div>    
  </div>

  
    )
} 

export default Lines