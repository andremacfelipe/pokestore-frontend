import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LayoutProvider } from './Contexts/LayoutContext/LayoutContext';

import Header from './Components/Header/Header';


import Home from './Pages/Home/Home';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

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
              <Route path='/login' element={<LoginPage/>}/>
            </Routes>
          </Router>
        </LayoutProvider>
    </div>
  );
}

export default App;
