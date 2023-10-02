import { Link } from 'react-router-dom';
import { useState } from 'react';
import AllNotes from '../../../components/household/notes/display/notes/AllNotes';
import ProjectNotes from '../../../components/household/notes/display/notes/ProjectNotes';
import TodoNotes from '../../../components/household/notes/display/notes/TodoNotes';
import MeetingNotes from '../../../components/household/notes/display/notes/MeetingNotes';
import AddNote from '../../../components/household/notes/add/AddNote';
import AddNoteholder from '../../../components/household/notes/add/AddNoteholder';
import SubMenu from '../../../components/layout/SubMenu';
import ContentLayout from '../../../components/layout/ContentLayout'

export default function NotesPage() {
  //Navigation
  const [activeView, setActiveView] = useState('allNotes');

  const handleShowAllNotes = () => {
    setActiveView('allNotes');
  };

  const handleNewNoteholder = () => {
    setActiveView('newNoteholder');
  };

  const handleNewNote = () => {
    setActiveView('newNote');
  };

  const handleNotesByMeeting = () => {
    setActiveView('meetingNotes');
  };

  const handleNotesByProject = () => {
    setActiveView('projectNotes');
  };

  const handleNotesByTodo = () => {
    setActiveView('todoNotes');
  };



  
  
return (
<>
<SubMenu> 
    <div className="text-xs font-titleFont text-stone-500 py-2 rounded border-x-2 border-stone-500 px-5">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">kategorier</h1>

        <button
            className="block p-0.5"
            onClick={() => {
                handleShowAllNotes(); 

              }}
            >
            Alla
        </button>

        <button
            className="block p-0.5"
            onClick={() => {
                handleNotesByMeeting(); 
       
              }}                
            >
            Husmöten
        </button>
    
        <button
            to="/AddNotePage"
            className="block p-0.5"
  
            >
            Kalender
        </button>

        <button
            className="block p-0.5"
            onClick={() => {
                handleNotesByProject(); 
 
              }}              
            >
            Projekt
        </button>
    
        <button
            className="block p-0.5"
            onClick={() => {
                handleNotesByTodo(); 
            
              }}                        
            >
            Att göra
        </button>
    </div>

    <div className="text-xs font-titleFont text-stone-500 py-2 rounded border-x-2 border-stone-500 px-3">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">
            anteckningar
        </h1>

        
        <button
            className="block p-0.5"
            onClick={() => {
                handleNewNote(); 
        
              }}           
                >
            Ny anteckning
        </button>

        <button
            className="block p-0.5" 
            onClick={() => {
                handleNewNoteholder(); 
           
              }}         
            >
            Ny anteckningsbok
        </button>

        <Link
            to="/AddNotePage"
            className="block p-0.5"
            onClick={() => {
        
              }}               
            >
            Arkiv
        </Link>
    </div>

    <div  className="text-xs font-titleFont text-stone-500 px-3 py-2">        
            <input type="text" 
                className="pr-2 pl-2 text-sm rounded focus:shadow focus:outline-none 
                rounded border-x-2 border-stone-500 py-2 h-6" 
                placeholder="Sök.."/>
         </div>
</SubMenu>

<ContentLayout> 
    <div className="">
        {activeView === 'newNoteholder' ? (
        <AddNoteholder />
        ): 
            activeView === 'allNotes' ? (
            <AllNotes />
        ):
            activeView === 'newNote' ? (
            <AddNote />
        ): 
            activeView === 'meetingNotes' ? (
            <MeetingNotes />
        ): 
            activeView === 'projectNotes' ? (
            <ProjectNotes />
        ): 
            activeView === 'todoNotes' ? (
            <TodoNotes />
        )
        : (
        <AllNotes />
        )}
    </div>
</ContentLayout> 
 </>    
    );
}