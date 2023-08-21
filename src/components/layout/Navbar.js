import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') !== null
  );

  useEffect(() => {
    setLoggedIn(localStorage.getItem('token') !== null);
  }, []);

  return (
    <header className="bg-dweller-gray w-full shadow-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="flex justify-center space-x-4">
            <a href="/DashboardPage" className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-700">
              Hushåll
            </a>
            <a href="/MeetingPage" className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-700">
              Möten
            </a>
          </div>
          {loggedIn ? (
            <>
              <a
                href="/loginPage"
                className="mx-5 text-sm font-semibold leading-6 text-white no-underline"
                onClick={() => {
                  console.log('logging out');
                  setLoggedIn(false);
                  localStorage.removeItem('token'); 
                }}
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </a>
            </>
          ) : (
            <>
              <a 
                href="/loginPage" 
                className="mx-5 text-sm font-semibold leading-6 text-stone-300 no-underline hover:text-stone-400">
                  Log in <span aria-hidden="true">&rarr;</span>
              </a>
              <a 
                href="/registerPage" 
                className="text-sm font-semibold leading-6 text-stone-300 no-underline hover:text-stone-400">
                  Register
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
