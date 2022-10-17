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
        <div className="centr">
        <div className="miskas">
        <div className="four">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change product name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={pr}
                    onChange={(e) => setPr(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="box2">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change weight (grams):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="box2">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change carb (grams):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={carb}
                    onChange={(e) => setCarb(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="box2">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change fat (grams):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="box2">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change protein (grams):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="box2">
                  <label
                    for="exampleInputPassword1"
                    
                  >
                    Change calories:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
            <button onClick={save} style={{
                position: 'absolute',
                top: '504px',
                left: '1190px',
                width: '200px',
                backgroundColor: 'red',
                height: '80px',
                cursor: 'pointer'
            }}>Save</button>
         </div>
        </div>
    )
    }

    
    export default Edit;
    
   