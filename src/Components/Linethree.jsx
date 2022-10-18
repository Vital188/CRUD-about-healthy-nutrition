function Linethree ({pr, setSelectProduct}) {


    // const selection = selectProduct1.find(selpr => Number(selpr) === selectedID)
    
    const remove2 = () => {
    setSelectProduct(previ=> previ.filter(el => el !== pr.id))
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
          <button onClick={remove2}
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
    
    export default Linethree