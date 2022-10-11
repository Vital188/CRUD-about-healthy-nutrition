import { useEffect, useState } from "react";
import { read } from "../../Functions/localStorage";
import Lines from "./Lines"

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
   
   
      <div>
      {
        personal?.map((per) => (<Lines key={per.id} per={per} remove={remove}/>))
      }
      </div>
      </>
)


}
export default Listas;

