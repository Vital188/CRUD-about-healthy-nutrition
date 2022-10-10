import { useEffect, useState } from "react";
import Line from "./Line";
import { read } from "../Functions/localStorage";

function List() {

const [product, setProduct] = useState(null)
const [lastUpdate, setLastUpdate] = useState(Date.now());
const key = 'product';

useEffect(() => {
    setProduct(read(key));
  }, [lastUpdate]);

useEffect(() => {
const k = localStorage.getItem("product");    if (null === k) {
setProduct([]);    } else {
setProduct(JSON.parse(k));    }  }, []);

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
        product?.map((pr) => (<Line key={pr.id} pr={pr}/>))
      }
      </div>
      </>
)


}
export default List;

