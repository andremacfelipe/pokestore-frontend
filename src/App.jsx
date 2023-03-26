import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LayoutProvider } from './Contexts/LayoutContext/LayoutContext';

import Container from './Components/Container/Container';
import Header from './Components/Header/Header';


import Home from './Pages/Home/Home';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
        <LayoutProvider>
          <Router>
            <Routes>
              <Route path='/'
              element={<Header/>
              }>
                <Route 
                index 
                element={
                  <Home/>
                } />
              </Route>
              <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
          </Router>
        </LayoutProvider>
    </div>
  );
}

export default App;
