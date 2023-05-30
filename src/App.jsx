import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LayoutProvider } from './Contexts/LayoutContext/LayoutContext';
import { AuthProvider } from './Contexts/AuthContext/AuthContext';

import Header from './Components/Header/Header';

import Container from './Components/Container/Container';
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

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
                    <Container>
                      <Home />
                    </Container>
                  } />
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
