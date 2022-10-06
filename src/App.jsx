import './App.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';
import New from './Components/New';
import List from './Components/List';
import Prieview from './Components/Prieview';
import Edit from './Components/Edit'

function App() {



let navigate = useNavigate();
const navigateToList = () => {
  // 👇️ navigate to /Create
  navigate('/');
};

const navigateToHome = () => {
  // 👇️ navigate to /
  navigate('/prieview');
};

const navigateToEdit = () => {
  // 👇️ navigate to /
  navigate('/edit');
};

const navigateToNew = () => {
  // 👇️ navigate to /
  navigate('/new');
};

  return (
    <div>
    <div className='centr'>
    <button onClick={navigateToHome}>HOME</button>
    <button onClick={navigateToList}>LIST</button>
    <button onClick={navigateToEdit}> EDIT</button>
    <button onClick={navigateToNew}>NEW</button>
    </div>
    <div>
    <Routes>
    <Route path="/" element={<List/>} /> 
    <Route path="/prieview" element={<Prieview />} /> 
    <Route path="/edit" element={<Edit />} />
    <Route path="/new" element={<New />} />
    </Routes> 
    </div>
    </div>
  );
}

export default App;
