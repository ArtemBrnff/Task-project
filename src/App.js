import Header from './Components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Analytics from './Components/Pages/Analytics';
import Gradebooks from './Components/Pages/Gradebooks';
import Tests from './Components/Pages/Tests';
import Teachers from './Components/Pages/Teachers';
import Archive from './Components/Pages/Archive';
import Students from './Components/Pages/Students';

function App() {
  return (
    <Router>
      <div className="App" style={{width: '1495px', margin: '0 auto'}}>
        <Header />
        <Routes>
        <Route path='/' element={<Students/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/gradebooks' element={<Gradebooks/>}/>
          <Route path='/tests' element={<Tests/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/teachers' element={<Teachers/>}/>
          <Route path='/archive' element={<Archive/>}/>
        </Routes>
      </div>
    </Router>

  );
}
export default App;
