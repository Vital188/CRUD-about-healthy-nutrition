import { useEffect, useState } from "react";
import Line from "./Line";
import { read } from "../Functions/localStorage";
import { update } from "../Functions/localStorage";
import Edit from "./Edit";


function List() {

const [product, setProduct] = useState(null)
const [lastUpdate, setLastUpdate] = useState(Date.now());
const [modalData, setModalData] = useState(null);
const [editData, setEditData] = useState(null);
const key = 'product';

useEffect(() => {
    setProduct(read(key));
  }, [lastUpdate]);

useEffect(() => {
const k = localStorage.getItem("product");    if (null === k) {
setProduct([]);    } else {
setProduct(JSON.parse(k));    }  }, []);

useEffect(() => {
  if (null === editData) {
    return;
  }
  update(key, editData, editData.id);
  setLastUpdate(Date.now())
}, [editData]);

return (
    <>
    <div className="centr">
    <div className="box">
    <div className="box2">Product</div>
     <div className="box2">FAT</div>
     <div className="box2">Carb </div>
     <div className="box2">Protein </div>
     <div className="box2">Calories</div>
     <div className="box2">Weight</div>
     <div className="box2">Actyve</div>
    </div>
      </div>
      <div>
      {
        product?.map((pr) => (<Line  key={pr.id} pr={pr} setProduct={setLastUpdate} setModalData={setModalData}/>))
      }
      </div>
      <Edit modalData={modalData} setEditData={setEditData} setModalData={setModalData} />
      </>
)


}
export default List;

