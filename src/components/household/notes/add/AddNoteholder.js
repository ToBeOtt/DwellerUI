import { useState, useEffect } from 'react';
import baseUrl from '../../../../config/apiConfig';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddNoteholder() { 

    const [name, setName] = useState('');
    const [noteholderTag, setNoteholderTag] = useState(null);

    
    const location = useLocation();
    const noteholderExist = new URLSearchParams(location.search).get('noteholderId');
    const navigate = useNavigate();


    const HandleAddPoint = async () => {
        try {
          const response = await fetch(`${baseUrl}/notes/AddNoteholder`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                name,
                noteholderTag
            }),
          });
      
          if (response.ok) {
            navigate('/notePage?added=true');
    
          } else if(response.status === 401) {
            navigate('/loginPage');
          }
          else {
              navigate('/ErrorPage');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return (
    <>
    <div className="flex justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5" >
                {/* Name */}
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="title">
                Namn för anteckningssamling
                </label>
                <input 
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="title" 
                    type="text" 
                    placeholder="Rubrik" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
        
                {/* Status */}
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="noteholderTag">
                    Status
                </label>
                <select
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="noteholderTag"
                    value={noteholderTag}
                    onChange={(e) => setNoteholderTag(parseInt(e.target.value))}
                    >
                    <option value="0">Ej definerad</option>
                    <option value="1">Möte</option>
                    <option value="2">Projekt</option>
                    <option value="3">Todo</option>
                </select>
        
            <div className="flex items-center justify-between">
                <button
                    className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={HandleAddPoint}
                    >
                    Skapa anteckningshållare
                </button>
            </div>

        </form>
      </div>
    </>
  );  
}