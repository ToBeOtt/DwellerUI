import './App.css';
import { createContext, useState } from 'react';
import HeaderNav from './components/layout/HeaderNav.js';
import Footer from './components/layout/Footer.js';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import RegisterHousePage from './pages/authentication/RegisterHousePage';
import RegisterHouseMemberPage from './pages/authentication/RegisterHouseMemberPage';
import MeetingPage from './pages/household/meetings/MeetingPage';
import Dashboard from './pages/household/dashboard/DashboardPage';
import ChatPage from './pages/household/chat/ChatPage';
import CalendarPage from './pages/household/calendar/CalendarPage';
import ErrorPage from './pages/errorhandling/ErrorPage';
import AddMeetingPointPage from './pages/household/meetings/AddMeetingPointPage';


export const AuthContext = createContext();

function App() {
    
    const [loggedIn, setLoggedIn] = useState(
    localStorage.token ? true : false
    );

    function changeLoggedIn(value) {
      setLoggedIn(value);
      if (value === false) {
          localStorage.clear();
      }
    }


  return (
    <AuthContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
      <HeaderNav />  
      <MainLayout>
          <Routes>
              <Route path='/LoginPage' element={<LoginPage/>} />

              <Route path='/RegisterPage' element={<RegisterPage/>} />

              <Route path='/RegisterHousePage' element={<RegisterHousePage/>}/>

              <Route path='/RegisterHouseMemberPage' element={ <RegisterHouseMemberPage />} />

              <Route path='/DashboardPage' element={<Dashboard/>} />

              <Route path='/MeetingPage' element={ <MeetingPage /> } />
              
              <Route path='/AddMeetingPointPage' element={<AddMeetingPointPage /> } />

              <Route path='/ChatPage' element={<ChatPage /> } />

              <Route path='/CalendarPage' element={<CalendarPage /> } />

              <Route path='/ErrorPage' element={<ErrorPage/>}/>
          </Routes>
      </MainLayout>
      <Footer />
      </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;

