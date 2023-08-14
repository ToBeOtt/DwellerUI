import './App.css';
import Header from './components/layout/Navbar.js';
import MainLayout from './components/layout/MainLayout';
import Employees from './pages/practicePages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Meetings from './pages/household/Meetings';
import Dictionary from './pages/practicePages/Dictionary';
import Definition from './pages/practicePages/Definition';
import Index from './pages/household/index';
import Error from './pages/errorhandling/Error';

function App() {
  const user = localStorage.getItem('token');

  return (
    <BrowserRouter>
    <div className="DwellerApp bg-dweller-gray min-h-screen">
      <Header />
        <Routes>
          <Route path='/Meetings/' element={<MainLayout><Meetings /></MainLayout>} />
          
          <Route path='/household/index' element={<MainLayout><Index /></MainLayout>} />´

          <Route path='/Dictionary' element={<MainLayout><Dictionary/></MainLayout>} />

          <Route path='/definition/:search' element={<MainLayout><Definition/></MainLayout>} />                                 

          <Route path='/Employees' element={<MainLayout><Employees /></MainLayout>} />

          <Route path='/Login' element={ <MainLayout><Login /> </MainLayout>} />

          <Route path='/Register' element={ <MainLayout><Register /> </MainLayout>} />

          <Route path='/error' element={ <MainLayout><Error /> </MainLayout>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

