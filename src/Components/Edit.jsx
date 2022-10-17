import { useEffect, useState } from "react";

function Edit({modalData, setEditData, setModalData}) {

const [pr, setPr] = useState("");
const [fat, setFat] = useState("");
const [carb, setCarb] = useState("");
const [protein, setProtein] = useState("");
const [calories, setCalories] = useState("");
const [weight, setWeight] = useState("");


    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setPr(modalData.product);
        setWeight(modalData.weight);
        setCarb(modalData.carb);
        setFat(modalData.fat);
        setProtein(modalData.protein);
        setCalories(modalData.calories);
    }, [modalData]);
    
      if (null === modalData) {
        return null;
      }
     
      const save = () => {
        setEditData({
            pr,
            weight,
            carb,
            fat,
            protein,
            calories,
            id: modalData.id
        });
        setModalData(null);}    

    return ( 
    <div>
      <div className="middle" style={{
        justifyContent: 'flex-end',
        marginRight: '434px',
        marginTop: '40px'
      }}>
      <div className="left">
          <h1>EDIT PRODUCT</h1>
          <div className="inside">
          <label>Product name:</label>
          <input type='text' value={pr}   
          placeholder="Please, write product name..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}/>
          </div>
          <div className="inside">
          <label>Fat (g):</label>
          <input type='text' value={fat}  onChange={(e) => setFat(e.target.value)}
          placeholder="Please, write fat weight..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}></input>
          </div>
          <div className="inside">
          <label>Carb (g):</label>
          <input type='number' value={carb}  onChange={(e) => setCarb(e.target.value)} 
          placeholder="Please, write carb weight..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}></input>
          </div>
          <div className="inside">
          <label>Protein (g):</label>
          <input type='number' value={protein}  onChange={(e) => setProtein(e.target.value)}
          placeholder="Please, write protein weight..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}></input>
          </div>
          <div className="inside">
          <label>Calories:</label>
          <input type='number' value={calories}  onChange={(e) => setCalories(e.target.value)}
          placeholder="Please, write calories quantity..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}></input>
          </div>
          <div className="inside">
          <label>Weight:</label>
          <input type='number' value={weight}  onChange={(e) => setWeight(e.target.value)}
          placeholder="Please, write product weight..."
          style={{
              width: '400px',
              height: '50px',
              borderRadius: '5px',
              fontSize: '20px'
          }}></input>
          </div>
            <button onClick={save} style={{
                // position: 'absolute',
                // top: '504px',
                // left: '1190px',
                width: '200px',
                backgroundColor: 'orange',
                height: '80px',
                cursor: 'pointer'
            }}>Save chagment</button>
            
            </div>
     </div>  
     </div>
    )
    }

    
    export default Edit;
    
   