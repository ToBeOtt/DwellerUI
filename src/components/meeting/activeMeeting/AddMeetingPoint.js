import { useState } from 'react';
import baseUrl from '../../../config/apiConfig';
import { useNavigate } from 'react-router-dom';

export default function AddMeetingPoint() { 

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();

    const HandleAddPoint = async () => {
        try {
          const response = await fetch(`${baseUrl}/meeting/AddMeetingPoint`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                title,
                desc
            }),
          });
      
          if (response.ok) {
            navigate('/MeetingPage');
    
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
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5" >
          <div className="mb-4">
            <label 
                className="block text-gray-700 text-sm font-bold mb-2" 
                htmlFor="meetingPointTitle">
              Titel för mötespunkt
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="meetingPointTitle" 
              type="text" 
              placeholder="Rubrik" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
            
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="meetingDesc"
            >
              Beskrivning:
            </label>
            <textarea
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="meetingDesc"
              placeholder="Beskrivning"
              value={desc}
              rows="6"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
          <button
            className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={HandleAddPoint}
            >
          Lägg till mötespunkt
        </button>
          </div>
        </form>
      </div>
    </>
  );  
}