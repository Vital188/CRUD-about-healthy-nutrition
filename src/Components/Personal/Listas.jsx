import { useEffect, useState } from "react";
import { read } from "../../Functions/localStorage";
import Lines from "./Lines";


function Listas() {

const [personal, setPersonal] = useState(null)
const [lastUpdates, setLastUpdates] = useState(Date.now());
const key = 'personal';

useEffect(() => {
    setPersonal(read(key));
  }, [lastUpdates]);

useEffect(() => {
const b = localStorage.getItem("personal");    if (null === b) {
setPersonal([]);    } else {
setPersonal(JSON.parse(b));    }  }, []);

const remove = () => {
  setPersonal()
}

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
        personal?.map((per) => (<Lines key={per.id} per={per} remove={remove}/>))
      }
      </div>
      </>
)


}
export default Listas;

