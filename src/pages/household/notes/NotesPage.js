import NotesNav from '../../../components/household/notes/NotesNav';
import AllNoteholders from '../../../components/household/notes/display/AllNoteholders';
import AllNotes from '../../../components/household/notes/display/AllNotes';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NotesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const added = new URLSearchParams(location.search).get('added');

    // useEffect(() => {
    //     if (localStorage.getItem('token') === null) {
    //         navigate('/LoginPage');
    //     }

    //     if (added === 'true') {
    //       console.log('updating notes..')
    //     }
    // }, [added, navigate]);

    return (
    <main className="grid grid-cols-1 w-5/6 mx-auto xl:mt-5 xl:grid-cols-4 xl:w-4/6">

         <section className="col-span-4 p-2">
            <NotesNav />
        </section> 
        
        <section className="col-span-1 justify-content-start">  
            
        </section> 

        <section className="col-span-1 justify-content-start">
            <AllNoteholders /> 
        </section>  
        
        <section className="col-span-1 justify-content-start">  
            <AllNotes />
        </section>  
        
        <section className="col-span-1 justify-content-start">  

        </section> 
        
    </main>
            
    );
     
    }