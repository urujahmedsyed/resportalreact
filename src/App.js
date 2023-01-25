import Homep1 from './components/Homep1';
import Research from './components/Research';
import Login from './components/Login';
import Adash from './components/Adash';
import Analysis from './components/Analysis';
import Profile from './components/Profile';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homep1/>}/>
      <Route path='research' element={<Research/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='adash' element={<Adash/>}/>
      <Route path='analysis' element={<Analysis/>}/>
      <Route path='profile' element={<Profile/>}/>
      {/* <Route path='*' element={<ErrorPage/>}/> */}
    </Routes> 
  );
}

export default App;
