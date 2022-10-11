import './App.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';
import New from './Components/New';
import List from './Components/List';
import Prieview from './Components/Prieview';
import Edit from './Components/Edit'
import New2 from './Components/Personal/New2';

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
  navigate('/new2');
};

const navigateToNew = () => {
  // 👇️ navigate to /
  navigate('/new');
};

  return (
    <div>
    <div className='centr'>
    <button onClick={navigateToHome}>HOME</button>
    <button onClick={navigateToList}>PRODUCTS LIST</button>
    <button onClick={navigateToNew}>NEW PRODUCT</button>
    <button onClick={navigateToEdit}>Personal information</button>
    </div>
    <div>
    <Routes>
    <Route path="/" element={<List/>} /> 
    <Route path="/prieview" element={<Prieview />} /> 
    <Route path="/new2" element={<New2 />} />
    <Route path="/new" element={<New />} />
    </Routes> 
    </div>
    </div>
  );
}

export default App;
