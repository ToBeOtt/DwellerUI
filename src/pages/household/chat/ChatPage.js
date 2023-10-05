import { useState } from 'react';
import AddNewConversation from '../../../components/household/chat/AddNewConversation';
import SubMenu from '../../../components/layout/SubMenu'
import ContentLayout from '../../../components/layout/ContentLayout'
import ViewConversation from '../../../components/household/chat/ViewConversation';

export default function ChatPage() { 
    const [activeView, setActiveView] = useState('chat');


    const handleNewChat = () => {
        setActiveView('newChat');
    };
  
return (
<>
  <SubMenu> 
    <div className="text-xs font-titleFont text-stone-600 rounded border-x-2 border-stone-500 px-3">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">Konversationer</h1>

        <button
            to="/AddNotePage"
            className="block px-2"         
            >
            + ny konversation
        </button>
      </div>
  </SubMenu>
 

  <ContentLayout>    
        <ViewConversation />
  </ContentLayout>  
 
   
    </>           
    );
}
