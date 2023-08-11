import './App.css';
import Header from './components/Core/Header.js';
import MainLayout from './components/Core/MainLayout';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Meetings from './pages/household/Meetings';

function App() {
  return (
    <div className="DwellerApp bg-dweller-gray min-h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path='/Meetings' element={<MainLayout>
                                      <Meetings />
                                  </MainLayout>} />
          <Route path='/Employees' element={<MainLayout>
                                      <Employees />
                                  </MainLayout>} />
          <Route path='/Login' element={ <MainLayout>
                                            <Login /> 
                                        </MainLayout>} />

          <Route path='/Register' element={ <MainLayout>
                                                <Register /> 
                                            </MainLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

