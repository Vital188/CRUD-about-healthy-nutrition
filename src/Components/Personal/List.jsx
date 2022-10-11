import { useEffect, useState } from "react";
import Line from "./Line";
import { read } from "../../Functions/localStorage";

function List() {

const [personal, setPersonal] = useState(null)
const [lastUpdate, setLastUpdate] = useState(Date.now());
const key = 'personal';

useEffect(() => {
    setPersonal(read(key));
  }, [lastUpdate]);

useEffect(() => {
const k = localStorage.getItem("personal");    if (null === k) {
setPersonal([]);    } else {
setPersonal(JSON.parse(k));    }  }, []);

return (
    <>
    <div className="centr">
    <div className="box">
    <div className="box2">Age</div>
     <div className="box2">Sex</div>
     <div className="box2">Height </div>
     <div className="box2">Weight </div>
     <div className="box2">Steps per day</div>
     <div className="box2">KMI</div>
     <div className="box2">Actyve</div>
    </div>
      </div>
      <div>
      {
        personal?.map((per) => (<Line key={per.id} per={per}/>))
      }
      </div>
      </>
)


}
export default List;

