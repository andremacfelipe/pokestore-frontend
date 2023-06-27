import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LayoutProvider } from './Contexts/LayoutContext/LayoutContext';
import { AuthProvider } from './Contexts/AuthContext/AuthContext';

import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import StorePage from './Pages/StorePage/StorePage';
import CasePage from './Pages/CasePage/CasePage';
import InventoryPage from './Pages/InventoryPage/InventoryPage';

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path='/'
                element={<Header />
                }>
                <Route
                  index
                  element={
                    <Home />
                  } 
                />

                <Route
                  path='/store'
                  element={
                    <StorePage/>
                  }
                />
                <Route
                  path='/store/:id'
                  element={
                    <CasePage/>
                  }
                />

                <Route
                  path='/profile/:id/inventory'
                  element={
                    <InventoryPage/>
                  }
                />
              </Route>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </LayoutProvider>
    </div>
  );
}

export default App;
