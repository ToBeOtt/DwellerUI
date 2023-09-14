import { Link } from 'react-router-dom';

export default function NotesNav() {
    return (
    <>
        <input type="text" 
            className="pr-2 pl-2 text-xs rounded z-0 focus:shadow focus:outline-none" 
            placeholder="Sök.."/>
            
        <div>
            <Link
            to="/AddNotePage"
                    className="text-xs text-stone-500 font-bold py-2 px-2 rounded"
                    type="button"              
                    >
                Ny anteckning
            </Link>
        </div>

        <div>
            <Link
                to="/AddNoteholderPage"
                className="text-xs text-stone-500 font-bold py-2 px-2 rounded"
                type="button"              
                >
                Ny anteckningsbok
            </Link>
        </div>

        <div>
            <Link
                to="/AddNotePage"
                className="text-xs text-stone-500 font-bold py-2 px-2 rounded"
                type="button"              
                >
                Arkiv
            </Link>
        </div>

         
        <div className="text-xs text-stone-500 font-bold py-2 px-2 rounded mt-5">
            <h1>Kategorier</h1>
        </div>

        <div>
            <Link
                to="/AddNotePage"
                className="text-xs text-stone-500 px-2 rounded"
                type="button"              
                >
                Husmöten
            </Link>
        </div>
        <div>
            <Link
                to="/AddNotePage"
                className="text-xs text-stone-500 px-2 rounded"
                type="button"              
                >
                Projekt
            </Link>
        </div>

        <div>
            <Link
                to="/AddNotePage"
                className="text-xs text-stone-500 px-2 rounded"
                type="button"              
                >
                Att göra
            </Link>
        </div>

    </>
    )}
