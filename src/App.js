import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import SpreadOpe from './Components/SpreadOpe';
import TodosList from './Components/Elements/TodosList';
function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
    <Route index path='home' element={<Home/>} />
    <Route  path='SpreadOperator' element={<SpreadOpe/>} />
    <Route  path='TodosList' element={<TodosList/>} />

   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
