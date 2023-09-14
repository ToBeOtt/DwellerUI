import { Link } from 'react-router-dom';
import { useContext } from 'react'; 
import { AuthContext } from '../../App';


export default function HeaderNav() {
    const [loggedIn, setLoggedIn] = useContext(AuthContext);

    return (
    <div className="grid grid-cols-3 w-full text-center bg-[#ffffff]">
        <div className="col-span-1"></div>

        <div className="bg-[#ffffff] flex justify-center col-span-1">
            <h1 className="font-logoText text-6xl text-[#134840] mx-5">
                dwellers
            </h1>
        </div>
        <div className="col-span-1 flex justify-start">
        {loggedIn ? (
                <>
                <Link
                    to="/loginPage" 
                    className="py-3 mx-5 text-sm font-semibold leading-6 text-black no-underline mx-3"
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
                    className="py-3 text-sm font-semibold text-black no-underline hover:text-hover-n mx-3">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link  
                    to="/registerPage" 
                    className="py-3 text-sm font-semibold text-black no-underline hover:text-hover-n mx-3">
                    Register
                </Link>
                </>
            )}
        </div>
    </div>
    )
}
