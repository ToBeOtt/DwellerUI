import './App.css';
import Header from './components/layout/Navbar.js';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import RegisterHousePage from './pages/authentication/RegisterHousePage';
import RegisterHouseMemberPage from './pages/authentication/RegisterHouseMemberPage';
import MeetingPage from './pages/household/meetings/MeetingPage';
import Dashboard from './pages/household/dashboard/DashboardPage';
import ErrorPage from './pages/errorhandling/ErrorPage';
import AddMeetingPointPage from './pages/household/meetings/AddMeetingPointPage'

function App() {
  return (
      <BrowserRouter>
      <div className="DwellerApp bg-dweller-gray min-h-screen">
        <Header />
          <Routes>
            <Route path='/MeetingPage/' element={<MainLayout><MeetingPage /></MainLayout>} />
            
            <Route path='/AddMeetingPointPage/' element={<MainLayout><AddMeetingPointPage /></MainLayout>} />

            <Route path='/DashboardPage' element={<MainLayout><Dashboard /></MainLayout>} />  
    
            <Route path='/LoginPage' element={ <MainLayout><LoginPage /> </MainLayout>} />

            <Route path='/RegisterPage' element={ <MainLayout><RegisterPage /> </MainLayout>} />

            <Route path='/RegisterHousePage' element={ <MainLayout><RegisterHousePage /> </MainLayout>} />

            <Route path='/RegisterHouseMemberPage' element={ <MainLayout><RegisterHouseMemberPage /> </MainLayout>} />
            
            <Route path='/ErrorPage' element={ <MainLayout> <ErrorPage /> </MainLayout>} />
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

