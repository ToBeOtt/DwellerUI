import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig';

export default function RegisterHouseMember() {
  const location  = useLocation();
  const email = new URLSearchParams(location.search).get('Email'); 

  const [invitation, setInvitation] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/RegisterMemberToHouse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invitation,
          email,
        }),
      });
  
      if (response.ok) {
        navigate('/loginPage');

      } else {
          navigate('/ErrorPage');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className="mx-auto">
        <form class="bg-white border-t-8 border-n shadow rounded p-10 m-10 xl:mt-5">
          <section className="mb-4">
            
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invitationCode">
              Inbjudningskod
            </label>
            
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="invitationCode" 
              type="text" 
              placeholder="inbjudningskod" 
              value={invitation}
              onChange={(e) => setInvitation(e.target.value)}
            />
          </section>
          
          <button
              className="bg-n hover:bg-hover-n text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
              >
            Gåd med hushåll
          </button>
        </form>
      </div>
    </>
  );
}
