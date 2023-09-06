import { Link } from 'react-router-dom';
import { ChatIcon, CalendarIcon, MeetingIcon } from './svg/NavbarIcons';

export default function NavHouse() {
  return (
         <>
          <div>
              <span className="text-xs text-left">
              <Link 
                to="/ChatPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <ChatIcon />
               </Link>
                      Chat
                </span>
          </div>
          
          <div>
              <span className="text-xs text-left">
              <Link 
                to="/NotesPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <MeetingIcon />
               </Link>
                      Möten
                </span>
          </div>

          <div>
              <span className="text-xs text-left">

              <Link 
                  to="/CalendarPage" 
                  className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                    <CalendarIcon />
               </Link>
                      Kalender
                </span>
          </div>
          </>
  );
}

