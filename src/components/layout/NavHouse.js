import { Link } from 'react-router-dom';
import { ChatIcon, HouseholdIcon, NeighbourhoodIcon } from './svg/NavbarIcons';

export default function NavHouse() {
  return (
         <>
          <div>
              <span className="text-xs text-left text-stone-400">
              <Link 
                to="/NotesPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <HouseholdIcon />
               </Link>
                      Hushåll
                </span>
          </div>

          <div>
              <span className="text-xs text-left text-stone-400">
              <Link 
                to="/ChatPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <ChatIcon />
               </Link>
                      Chat
                </span>
          </div>

          <div>
              <span className="text-xs text-left text-stone-400">

              <Link 
                  to="/CalendarPage" 
                  className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                    <NeighbourhoodIcon />
               </Link>
                      Grannskap
                </span>
          </div>
          </>
  );
}
