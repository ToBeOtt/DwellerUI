import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig'; // Adjust the path as needed

export default function CreateHouseMember() {
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
        navigate('/login');

      } else {
          navigate('/error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
    <div className="flex justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
          <div className="mb-4">
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
          </div>
            
          <div className="flex items-center justify-between">
          <button
            className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
            >
          Gåd med hushåll
        </button>
          </div>
        </form>
      </div>
    </>
  );
}
