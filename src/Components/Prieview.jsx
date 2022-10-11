import Lines from "./Personal/Lines";
import Listas from "./Personal/Listas";

function Prieview() {

    return (
        <>
        <div className="centr2">
        <Listas />
        <h1 className="centr" style={{
            color: 'green',
            fontSize: '40px'
        }}>Make your meal not only taste, but and healthy 😏</h1>
     
    <h1>Your breakfast will be from:</h1>
    <div className="centr2">
     <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Calories</div>
      <div className="box2">Fat </div>
      <div className="box2">Carb </div>
      <div className="box2">Protein</div>
      <div className="box2">Healthy</div>
      <div className="box2" >Delete</div>
     </div>
     </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your lunch will be from:</h1>
    <div className="centr2">
     <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Calories</div>
      <div className="box2">Fat </div>
      <div className="box2">Carb </div>
      <div className="box2">Protein</div>
      <div className="box2">Healthy</div>
      <div className="box2">Delete</div>
     </div>
     </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your dinner will be from:</h1>
    <div className="centr2">
     <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Calories</div>
      <div className="box2">Fat </div>
      <div className="box2">Carb </div>
      <div className="box2">Protein</div>
      <div className="box2">Healthy</div>
      <div className="box2">Delete</div>
     </div>
     </div>
     </div>
     </>
    )
    }
    export default Prieview;
    
    