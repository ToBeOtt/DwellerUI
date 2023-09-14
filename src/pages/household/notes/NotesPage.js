import NotesNav from '../../../components/household/notes/NotesNav';
import AllNoteholders from '../../../components/household/notes/display/AllNoteholders';
import AllNotes from '../../../components/household/notes/display/AllNotes';
import ProjectNotes from '../../../components/household/notes/display/ProjectNotes';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import AddNote from '../../../components/household/notes/add/AddNote';
import AddNoteholder from '../../../components/household/notes/add/AddNoteholder';

export default function NotesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const added = new URLSearchParams(location.search).get('added');

    //Navigation
    const [activeView, setActiveView] = useState('allNotes');

  const handleNewNoteholder = () => {
    setActiveView('newNoteholder');
  };

  const handleNewNote = () => {
    setActiveView('newNote');
  };

  const handleNotesByProject = () => {
    setActiveView('projectNotes');
  };


  
    return (
    <main className="grid grid-cols-6 w-5/6 mx-auto xl:mt-5">

        <section className="col-span-1"></section> 
        <section className="col-span-1 mt-4">
    <>
        <input type="text" 
            className="pr-2 pl-2 text-sm rounded z-0 focus:shadow focus:outline-none bg-stone-200 w-20" 
            placeholder="Sök.."/>
            
        <div>
            <button
                className="text-sm text-stone-500 px-2 rounded"
                onClick={handleNewNote}               
                    >
                Ny anteckning
            </button>
        </div>

        <div>
            <button
                className="text-sm text-stone-500 px-2 rounded" 
                onClick={handleNewNoteholder}            
                >
                Ny anteckningsbok
            </button>
        </div>

        <div>
            <Link
                to="/AddNotePage"
                className="text-sm text-stone-500 px-2 rounded"
                type="button"              
                >
                Arkiv
            </Link>
        </div>

         
        <div className="text-sm text-stone-500 font-bold py-1 px-2 rounded mt-5">
            <h1>Kategorier</h1>
        </div>

        <div>
            <button
                to="/AddNotePage"
                className="text-sm text-stone-500 px-2 rounded"
                type="button"              
                >
                Husmöten
            </button>
        </div>

        <div>
            <button
                to="/AddNotePage"
                className="text-sm text-stone-500 px-2 rounded"
                type="button"              
                >
                Kalender
            </button>
        </div>

        <div>
            <button
                className="text-sm text-stone-500 px-2 rounded"
                onClick={handleNotesByProject}                 
                >
                Projekt
            </button>
        </div>

        <div>
            <button
                className="text-sm text-stone-500 px-2 rounded"
                type="button"              
                >
                Att göra
            </button>
        </div>
        </>
        </section> 
        
        <section className="col-span-3 w-full h-auto rounded p-2 m-2 flex justify-start">
        {activeView === 'newNoteholder' ? (
          <AddNoteholder />
        ) : activeView === 'newNote' ? (
          <AddNote />
        ) : activeView === 'projectNotes' ? (
            <ProjectNotes />
          )
        : (
          <AllNotes />
        )}
      </section>
        <section className="col-span-1"></section> 
    </main>
            
    );
}