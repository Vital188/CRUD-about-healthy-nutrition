import { useState, useEffect } from "react";
import Createlist from "./Createlist2";

function New() {

    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [steps, setSteps] = useState('');
    const [kmi, setKmi] = useState('');
    // const [indeks, setIndeks] = useState('')
    const [info, setInfo] = useState('')


    const change  =  isNaN((weight/(height*height/10000)).toFixed(2)) || !isFinite((weight/(height*height/10000)).toFixed(2)) ? '' : (weight/(height*height/10000)).toFixed(2)
    
          console.log(typeof(change))

    useEffect (() => {
      if (change === null )
      {setInfo()}
      if (change < 18.5 && change > 5) 
      {setInfo('You have underweight. You need to improve yours diet. Everything will be ok 😊')}
      if (change > 18.5 && change < 24.9)
      {setInfo('Yours weight is perfect. Keep your diet and activity as always. 😊')}
      if (change > 25 && change < 29.9)
      {setInfo('Your have little bit overweight. Improve yours diet and everything will be ok 😊')}
      if (change > 30 && change < 34.9)
      {setInfo('Your have overweight. Increase yours physical activity and improve yours diet and everything will be ok 😊')}
      if (change > 35 && change < 39.9)
      {setInfo('Your need seriuosly improve yours physical activity and diet and everything will be ok 😊')}
      if (change > 40 )
      {setInfo('Your need seriuosly improve yours physical activity and diet and everything will be ok 😊')}
    }, [change])



    const remove = () => {
        setAge('');
        setSex('');
        setWeight('');
        setHeight('');
        setSteps('');
        setKmi('');
        setInfo('');
    }

    const handleEnter = (e) => {
        console.log(e.key)
        if (e.key === "Delete")
        {setAge('')}
       }

    return (
     <div className="photo">
     <div>
    <h1 className="centr">Please, fill up the table below:</h1>
    </div>
    <div className="middle">
    <div className="left">
        <h1>Personal information</h1>
        <div className="inside">
        <label>Your age:</label>
        <input type='number' value={age} onKeyPress={ (e) => {
         handleEnter(e)}} onChange={(e) =>setAge(e.target.value)} 
        placeholder="Please, write yours age..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Sex:</label>
        <input type='text' value={sex}  onChange={(e) => setSex(e.target.value)}
        placeholder="Please, write yours sex..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Weight (kg):</label>
        <input type='number' value={weight}  onChange={(e) => setWeight(e.target.value)} 
        placeholder="Please, write yours weight in kg..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Height (sm):</label>
        <input type='number' value={height}  onChange={(e) => setHeight(e.target.value)}
        placeholder="Please, write height weight in sm..."
        style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}></input>
        </div>
        <div className="inside">
        <label>Walk steps per day:</label>
        <input type='number' value={steps}  onChange={(e) => setSteps(e.target.value)}
        placeholder="Please, write yours walking steps per day..."
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
     <Createlist remove={remove} age={age} sex={sex} weight={weight} height={height} steps={steps} change={change} info={info}/>
     </div></div>
    </div></div>
    </div>
    </div>
     </div>
    )
    }
    export default New;
    
    