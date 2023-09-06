import { Link } from 'react-router-dom';

export default function NotesNav() {
    return (
    <>
    <div className="row-span-1 flex justify-center space-x-4">
            
        <input type="text" class="pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="#hashtag"/>
        <div class="absolute top-4 right-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>

        <Link
        to="/AddNotePage"
                className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"              
                >
            Ny anteckning
        </Link>

        <Link
            to="/AddNoteholderPage"
            className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"              
            >
            Ny anteckningsbok
        </Link>

        <Link
            to="/AddNotePage"
            className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"              
            >
            Arkiv
        </Link>
    </div>
    </>
    )}
