function Lines  ({per, remove}) {
    return (
      
      <div className="box5" >
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
        width: 'auto'
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
        <button onClick={remove} style={{
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
</div>    
  

  
    )
} 

export default Lines