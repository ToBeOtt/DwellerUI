import { Link } from 'react-router-dom';
import { useContext } from 'react'; 
import { AuthContext } from '../../App';
import SubMenu from '../layout/SubMenu';


export default function HeaderNav() {
    const [loggedIn, setLoggedIn] = useContext(AuthContext);

    return (
    <div className="grid grid-cols-1 bg-[#313131] py-2 w-full lg:px-16 lg:grid grid-cols-2">   

        {/* Logo */}
        <div className="lg:col-span-1">
            <h1 className="font-logoText text-4xl text-[#0E7A60] mx-5 relative z-10">
            dwellers
            </h1>
        </div>

        {/* Logged in / Logged out */}
        <div className="lg:col-span-1 flex justify-end py-1 mx-5 text-stone-500 space-x-5">
        {loggedIn ? (
                <>
                <Link
                    to="/loginPage" 
                    className="text-sm font-semibold leading-6 no-underline"
                    onClick={() => {
                    console.log('logging out');
                    setLoggedIn(false);
                    localStorage.clear(); 
                    }}
                    >
                        Log out <span aria-hidden="true">&rarr;</span>
                </Link>  
                </> 
            ) : (
                <>
                <Link 
                    to="/loginPage" 
                    className="text-sm font-semibold hover:text-hover-n no-underline">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link  
                    to="/registerPage" 
                    className="text-sm font-semibold no-underline hover:text-hover-n">
                    Register
                </Link>
                </>
            )}
        </div>
    </div>
    )
}
