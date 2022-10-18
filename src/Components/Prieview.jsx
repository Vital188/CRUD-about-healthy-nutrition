import Listas from "./Personal/Listas";
import { useState, useEffect } from "react";
import { read} from '../Functions/localStorage';
import Linetwo from "./Linetwo";
import Linethree from "./Linethree";
import Linefour from "./Linefour";



function Prieview() {


const [selectProduct1, setSelectProduct1] = useState([])
const [selectProduct, setSelectProduct] = useState([])
const [selectProduct2, setSelectProduct2] = useState([])
const [product, setProduct] = useState(null)
const [lastUpdate, setLastUpdate] = useState(Date.now());
const [deletePr, setDeletePr] = useState(false);
const key = 'product';



useEffect(() => {
    setProduct(read(key));
  }, [lastUpdate]);

useEffect(() => {
const k = localStorage.getItem("product");    if (null === k) {
setProduct([]);    } else {
setProduct(JSON.parse(k));    }  }, []);

const remove = () => {
  setDeletePr(true);
  // eslint-disable-next-line no-lone-blocks
 setSelectProduct1([]);
}

const remove1 = () => {
  setDeletePr(true);
  // eslint-disable-next-line no-lone-blocks
 setSelectProduct([]);
}

const remove2 = () => {
  setDeletePr(true);
  // eslint-disable-next-line no-lone-blocks
 setSelectProduct2([]);
}

useEffect(() => {
 if (deletePr === true) {
 setDeletePr(false)}
}, [deletePr]);

    return (
        <>
        
        <div className="centr2">
         <h1 className="centr" style={{
            color: 'crimson',
            fontSize: '40px'
        }}>Make your meal not only taste, but and healthy 😏</h1> 
        <Listas /> 

       
     
    <h1>Your breakfast will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
    }}>
    <select value={selectProduct1}  onChange={(e) => setSelectProduct1(prevVal => [...prevVal, Number(e.target.value)])} 
       style={{
           width: '1300px',
           height: '50px',
           borderRadius: '5px',
           fontSize: '20px'
       }}>
            <option  value={0} >
            Please, choose your product from product list...
           </option >
         {
          product?.map((pr) => (<option  key={pr.id} value={pr.id}>{pr.product}</option>))
         } 
           </select>   
       </div>
       <div className="box">
    <div className="box2">Product</div>
     <div className="box2">Fat</div>
     <div className="box2">Carb  </div>
     <div className="box2">Protein </div>
     <div className="box2">Calories</div>
     <div className="box2">Weight</div>
     <div className="box2">Delete</div>
    </div>
         {
         selectProduct1.length > 0 && selectProduct1?.map(selectedID => product.filter(pr =>  pr.id === selectedID).map(pra => <Linetwo key={pra.id} pr={pra} setSelectProduct1={setSelectProduct1} selectProduct1={selectProduct1} prod={setProduct} selectedID={selectedID} setProduct={setProduct}/>))
        }
    </div>

    <div className="box6" style={{
  marginLeft: '0',
  marginTop: '0',
  marginBottom: '0'
}}>
<div className="centr">
<div className="box">
<div className="box2"><b>TOTAL</b></div>
<div className="box2">
  {
   selectProduct1.length > 0 && selectProduct1?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.fat), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct1.length > 0 && selectProduct1?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.carb), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
   </div>
<div className="box2">
{
   selectProduct1.length > 0 && selectProduct1?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.protein), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct1.length > 0 && selectProduct1?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.calories), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct1.length > 0 && selectProduct1?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.weight), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2" >
   <button onClick={remove}
   style={{
    width: '143px',
    height: '50px',
    fontSize: '16px',
    margin: '27px',
    backgroundColor: 'orange',
    bordeRradius: '10px',
  }}>DELETE ALL</button> 
  </div> 
  </div>
  </div>
  </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your lunch will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
     }}>
     <select value={product}  onChange={(e) => setSelectProduct(prevVal => [...prevVal, Number(e.target.value)])}  
        style={{
            width: '1300px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '20px'
        }}>
             <option  value={0} >
             Please, choose your product from product list...
            </option >
          {
           product?.map((pr) => (<option  key={pr.id} value={pr.id}>{pr.product}</option>))
          } 
            </select>   
        </div>
        <div className="box">
     <div className="box2">Product</div>
      <div className="box2">Fat</div>
      <div className="box2">Carb  </div>
      <div className="box2">Protein </div>
      <div className="box2">Calories</div>
      <div className="box2">Weight</div>
      <div className="box2">Delete</div>
     </div>
        {   
         //selectProduct1.length > 0 && product?.filter(pr => selectProduct1.includes(pr.id))?.map((pr) => (<Linetwo key={pr.id} pr={pr}/>)) 
         selectProduct.length > 0 && selectProduct?.map(selectedID => product.filter(pr =>  pr.id === selectedID).map(pra => <Linethree key={pra.id} pr={pra} setSelectProduct={setSelectProduct}/>))
        } 
     </div>
     <div className="box6" style={{
  marginLeft: '0',
  marginTop: '0',
  marginBottom: '0'
}}>
<div className="centr">
<div className="box">
<div className="box2"><b>TOTAL</b></div>
<div className="box2">
  {
   selectProduct.length > 0 && selectProduct?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.fat), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct.length > 0 && selectProduct?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.carb), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
   </div>
<div className="box2">
{
   selectProduct.length > 0 && selectProduct?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.protein), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct.length > 0 && selectProduct?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.calories), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct.length > 0 && selectProduct?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.weight), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2" >
   <button onClick={remove1}
   style={{
    width: '143px',
    height: '50px',
    fontSize: '16px',
    margin: '27px',
    backgroundColor: 'orange',
    bordeRradius: '10px',
  }}>DELETE ALL</button>
  </div> 
  </div>
  </div>
  </div>

     <h1 style={{
        marginTop: '100px'
      }}>Your dinner will be from:</h1>
    <div className="centr2">
     <div className="box" style={{
      border: '1px solid black',
      justifyContent: 'center'
    }}>
    <select value={product}  onChange={(e) => setSelectProduct2(prevVal => [...prevVal, Number(e.target.value)])} 
       style={{
           width: '1300px',
           height: '50px',
           borderRadius: '5px',
           fontSize: '20px'
       }}>
            <option  value={0} >
            Please, choose your product from product list...
           </option >
         {
          product?.map((pr) => (<option  key={pr.id} value={pr.id}>{pr.product}</option>))
         } 
           </select>   
       </div>
       <div className="box">
    <div className="box2">Product</div>
     <div className="box2">Fat</div>
     <div className="box2">Carb  </div>
     <div className="box2">Protein </div>
     <div className="box2">Calories</div>
     <div className="box2">Weight</div>
     <div className="box2">Delete</div>
    </div>
        {   
         //selectProduct1.length > 0 && product?.filter(pr => selectProduct1.includes(pr.id))?.map((pr) => (<Linetwo key={pr.id} pr={pr}/>)) 
         selectProduct2.length > 0 && selectProduct2?.map(selectedID => product.filter(pr =>  pr.id === selectedID).map(pra => <Linefour key={pra.id} pr={pra} setSelectProduct2={setSelectProduct2}/>))
        }  
    </div>
    <div className="box6" style={{
  marginLeft: '0',
  marginTop: '0',
  marginBottom: '0'
}}>
<div className="centr">
<div className="box">
<div className="box2"><b>TOTAL</b></div>
<div className="box2">
  {
   selectProduct2.length > 0 && selectProduct2?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.fat), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct2.length > 0 && selectProduct2?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.carb), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
   </div>
<div className="box2">
{
   selectProduct2.length > 0 && selectProduct2?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.protein), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct2.length > 0 && selectProduct2?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.calories), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2">
{
   selectProduct2.length > 0 && selectProduct2?.map(selectedID => product?.filter(pr =>  pr.id === selectedID).reduce((previous, current) => Number(previous) + Number(current.weight), 0)).reduce((previousValue, currentValue) => previousValue + currentValue,0)
  }
</div>
<div className="box2" >
   <button onClick={remove2}
   style={{
    width: '143px',
    height: '50px',
    fontSize: '16px',
    margin: '27px',
    backgroundColor: 'orange',
    fontSize: '16px',
    bordeRradius: '10px',
  }}>DELETE ALL</button>
  </div> 
  </div>
  </div>
  </div>
     </div>
    
    </>
    )
    }
    export default Prieview;
    
    