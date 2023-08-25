import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig'; 

export default function RegisterHouse() {
  const location  = useLocation();
  const email = new URLSearchParams(location.search).get('Email'); 

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/RegisterHouse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
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
    <div className="mx-auto l:w-3/5  l:w-3/5 xl:w-2/5">
        <form class="bg-white border-t-8 border-n shadow rounded p-10 m-10 xl:mt-5">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="housename">
              Hushållets namn
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="housename" 
              type="text" 
              placeholder="namn på hushåll" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
            
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="desc"
            >
              Beskrivning:
            </label>
            <textarea
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="desc"
              placeholder="valfritt"
              rows="7"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-n hover:bg-hover-n text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
              >
            Registrera hus
          </button>
          </div>
        </form>
      </div>
    </>
  );
}
