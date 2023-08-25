import {Link} from 'react-router-dom';
import { ChatIcon, ProfileIcon } from './svg/NavbarIcons';

export default function NavNeighbourhood() {
  return (
      <>
   
          <span className="text-xs text-left">
          <Link 
            to="/ChatPage"
            className="flex justify-center text-nbh hover:text-hover-nbh no-underline mr-6">
              <ChatIcon />
            </Link>
                  Chat
            </span>
     
          <span className="text-xs text-left">
              <Link 
                to="#"
                className="flex justify-center text-nbh hover:text-hover-nbh no-underline mr-6">
                  <ProfileIcon />
               </Link>
                  Möten
            </span>
     

    
      </>
  );
}

