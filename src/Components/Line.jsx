function Line  ({pr}) {
    return (
      <div className="box6">
<div className="centr">
    <div className="box">
    <div className="box2">{pr.product}</div>
     <div className="box2">{pr.fat}</div>
     <div className="box2">{pr.carb} </div>
     <div className="box2">{pr.protein}</div>
     <div className="box2">{pr.calories}</div>
     <div className="box2">{pr.weight}</div>
      <div className="box2" >
        <input type="checkbox" style={{
          width: '50px',
          height: '50px'
        }} />
        </div> 
        
    </div>
      </div>
      <div style={{
        display: 'flex'
      }}>
       <button style={{
        height: '80px',
        width: '160px',
        backgroundColor: 'orangered',
        cursor: 'pointer',
        marginRight: '0'
      }}>EDIT</button> 
      <button style={{
        height: '80px',
        width: '160px',
        backgroundColor: '#00bcd4',
        cursor: 'pointer',
        marginLeft: '0'
      }}>DELETE</button>
      </div>
      </div>
    )
} 

export default Line