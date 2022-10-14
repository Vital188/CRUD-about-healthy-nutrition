import { useState } from "react";

function Linetwo ({pr, sl, sal}) {

 const [deletePr, setDeletePr] = useState(false);
// const key = 'product';
// useEffect(() => {
//   remove(pr.id);
// }, [setDeletePr]);

// const remove = () => {
//   setDeletePr(true);
//   // eslint-disable-next-line no-lone-blocks
//  sl([]);
// }

   if (pr === null) {
     return;
   }



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
        <input type="checkbox"
        checked={deletePr} onChange={setDeletePr}
        style={{
          width: '50px',
          height: '50px'
        }}></input>
        </div> 
        </div>
        </div>
        </div>



  </>     
      
    )
}

export default Linetwo