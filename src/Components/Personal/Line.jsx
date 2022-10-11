function Line  ({per}) {
    return (
      <div className="box6">
<div className="centr">
    <div className="box">
    <div className="box2">{per.age}</div>
     <div className="box2">{per.sex}</div>
     <div className="box2">{per.weight} </div>
     <div className="box2">{per.height}</div>
     <div className="box2">{per.steps}</div>
     <div className="box2">{per.height}/{per.weight}</div>
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