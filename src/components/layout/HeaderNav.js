import { HouseholdIcon, NeighbourhoodIcon } from './svg/NavbarIcons';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'; 
import NavHouse from './NavHouse';
import NavNeighbourhood from './NavNeighbourhood';
import { AuthContext } from '../../App';


export default function HeaderNav() {
  const [openHouseholdNav, setOpenHouseholdNav] = useState(false);
  const [openNeighbourhoodNav, setOpenNeighbourhoodNav] = useState(false);

  const [loggedIn, setLoggedIn] = useContext(AuthContext);

  const handleHouseholdNav = () => {
      setOpenHouseholdNav(true);
      setOpenNeighbourhoodNav(false);
  };
  const handleNeighbourhoodNav = () => {
    setOpenNeighbourhoodNav(true);
    setOpenHouseholdNav(false);
  };
    return (
        
    <>
    <div className="grid grid-rows-3 w-full bg-[#F5F5F5] pb-4">
        <div className="row-span-3 bg-[#F5F5F5]">
            <div className="grid grid-cols-1 xl:grid-cols-3 w-full text-center">
            
            {/* Empty grid-div */}
            <div>
                </div> 
            
            <div className="flex items-end justify-center py-4 border-b-2 border-stone-500"> 
                <div className="">
                        <button
                            className="text-sm font-semibold leading-6 text-[#000000] hover:text-hh no-underline"
                            onClick={handleHouseholdNav}
                            >
                            <HouseholdIcon />
                        </button>
                    </div>
                    {openNeighbourhoodNav && 
                    <>
                    <div>
                        <h1 className="font-logoText text-6xl text-[#E17961] mx-5">
                            dwellers
                        </h1>
                        <span className="font-logoText text-md text-[#E17961] mx-5">
                            grannskap 
                        </span>  
                    </div>
                    </> }

                    {openHouseholdNav && 
                    <>
                    <div>
                        <h1 className="font-logoText text-6xl text-[#279A88] mx-5">
                            dwellers
                        </h1>
                        <span className="font-logoText text-md text-[#279A88] mx-5">
                            hushåll
                        </span>  
                    </div>
                    </>
                    }

                    {!openHouseholdNav && !openNeighbourhoodNav && (
                        <>
                        <div>
                            <h1 className="font-logoText text-6xl text-[#E49A3C] mx-5">
                                dwellers
                            </h1>
                            <span className="font-logoText text-md text-[#E49A3C] mx-5">
                              
                            </span>  
                        </div>
                        </> )}
                    
                    <div className="">
                            <button
                                href="#" 
                                className="text-sm font-semibold leading-6 text-[#000000] hover:text-nbh no-underline"
                                onClick={handleNeighbourhoodNav}>
                                <NeighbourhoodIcon />
                            </button>
                        </div>
                    </div>

            <div className="flex justify-center xl:justify-start items-center">
                {loggedIn ? (
                    <>
                   <Link
                        to="/loginPage" 
                        className="py-3 mx-5 text-sm font-semibold leading-6 text-n no-underline mx-3"
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
    </div>
        <div className="row-span-3 h-10 bg-[#F5F5F5] my-3 pb-5 space-y-4">
            <>
            <nav className="flex flex-row bg-[#F5F5F5] justify-center items-center">
                <div className="flex space-x-4 justify-center border-b-2 border-[#F5F5F5] w-1/5"> 
                    
                    {/* OTHERWISE A LOGO? */}
                    {openHouseholdNav && <NavHouse />}
                    {openNeighbourhoodNav && <NavNeighbourhood />}
                </div>
                
            </nav> 
            </>
        </div>
    </div>
    </>
    )
}
