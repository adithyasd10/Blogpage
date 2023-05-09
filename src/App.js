
import './App.css';
import CourseView from './components/CourseView';
import Header from './components/Header';
import Add from './components/Add';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route  path='/' element={<CourseView />}></Route>
      <Route  path='/add' element={<Add />}></Route>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
