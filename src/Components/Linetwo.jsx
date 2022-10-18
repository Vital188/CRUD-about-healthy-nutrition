

function Linetwo ({pr, setSelectProduct1}) {


// const selection = selectProduct1.find(selpr => Number(selpr) === selectedID)

const remove = () => {
setSelectProduct1(prev=> prev.filter(el => el !== pr.id))
};





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
      <button onClick={remove}
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