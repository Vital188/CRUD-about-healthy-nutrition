import { useEffect, useState } from "react";
import { read } from "../../Functions/localStorage";
import Lines from "./Lines";
import { destroy } from "../../Functions/localStorage";


function Listas() {

const [personal, setPersonal] = useState(null)
const [lastUpdates, setLastUpdates] = useState(Date.now());
const [deleteData, setDeleteData] = useState(null);
const key = 'personal';

useEffect(() => {
    setPersonal(read(key));
  }, [lastUpdates]);

useEffect(() => {
const b = localStorage.getItem("personal");    if (null === b) {
setPersonal([]);    } else {
setPersonal(JSON.parse(b));    }  }, []);

useEffect(() => {
    if (null === deleteData) {
      return;
    }
  destroy(key, deleteData.id);
  setPersonal();
}, [deleteData]);

return (
    <>
   
   {personal?.length === 0 && <div className='box8' style={{
    padding: '30px',
    lineHeight: '150%'
   }} >Please, fill up the form in the PERSONAL INFORMATION field.
  It's help us to give you better recomendation !
  Or you can start choose below you breakfast, lunch and dinner without our recomendation !
</div>}
      <div>
      {
        personal?.map((per) => (<Lines key={per.id} per={per} setDeleteData={setDeleteData}/>))
      }
      </div>
      </>
)


}
export default Listas;

