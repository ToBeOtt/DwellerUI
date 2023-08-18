import './App.css';
import Header from './components/layout/Navbar.js';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import RegisterHouse from './pages/authentication/RegisterHouse';
import RegisterHouseMember from './pages/authentication/RegisterHouseMember';
import Meetings from './pages/household/Meetings';
import Index from './pages/household/index';
import Error from './pages/errorhandling/Error';

function App() {
  return (
    <BrowserRouter>
    <div className="DwellerApp bg-dweller-gray min-h-screen">
      <Header />
        <Routes>
          <Route path='/Meetings/' element={<MainLayout><Meetings /></MainLayout>} />
          
          <Route path='/household/index' element={<MainLayout><Index /></MainLayout>} />                             

          <Route path='/Login' element={ <MainLayout><Login /> </MainLayout>} />

          <Route path='/Register' element={ <MainLayout><Register /> </MainLayout>} />

          <Route path='/RegisterHouse' element={ <MainLayout><RegisterHouse /> </MainLayout>} />

          <Route path='/RegisterHouseMember' element={ <MainLayout><RegisterHouseMember /> </MainLayout>} />
          
          <Route path='/error' element={ <MainLayout><Error /> </MainLayout>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

