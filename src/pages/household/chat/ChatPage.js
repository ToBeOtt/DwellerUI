import {useState} from 'react';

export default function ChatPage() { 
    const [activeView, setActiveView] = useState('chat');

    const handleNewNoteholder = () => {
        setActiveView('newNoteholder');
    };

    const handleNewNote = () => {
        setActiveView('newNote');
    };

    return (
    <main className="grid grid-cols-6 w-5/6 mx-auto xl:mt-5">

        <section className="col-span-1"></section> 
        <section className="col-span-1 mt-4">
    <> 
    <div>
        <button
            className="text-xs text-stone-500 py-2 px-2 rounded"
            onClick={handleNewNote}               
                >
            Hushåll
        </button>
    </div>

    <div className="text-xs text-stone-500 font-bold pt-4 px-2 rounded">
        Pågående
    </div>
    <div>
        <button
            className="text-xs text-stone-500  py-2 px-2 rounded" 
            onClick={handleNewNoteholder}            
            >
            Ny anteckningsbok
        </button>
    </div>

    </>
    </section> 
        
    <section className="col-span-3 w-full h-auto rounded p-2 m-2 flex justify-start">
        {/* {activeView === 'newNoteholder' ? (
          <AddNoteholder />
        ) : activeView === 'newNote' ? (
          <AddNote />
        ) : (
          <AllNotes />
        )} */}
        <p className="text-breadFont mr-4 pr-4"> Contrary to popular belief, Lorem Ipsum  is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>

    </section>

    <section className="col-span-1"></section> 
    </main>
            
    );
}