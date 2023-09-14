import { useState, useEffect } from 'react';
import baseUrl from '../../../../config/apiConfig';
import { useNavigate } from 'react-router-dom';

export default function AddNote(props) { 

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [noteStatus, setNoteStatus] = useState(null);
    const [notePriority, setNotePriority] = useState(null);
    const [noteTags, setNoteTags] = useState(null);
    const [noteholderId, setNoteholderId] = useState(null);
    
    useEffect(() => {
      if (props.noteholderIdTag !== null) {
        setNoteholderId(props.noteholderIdTag);
      }
    }, []);


    const navigate = useNavigate();

    const HandleAddNote = async () => {
        try {
          const response = await fetch(`${baseUrl}/notes/AddNote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                name,
                desc,
                noteStatus,
                notePriority,
                noteTags,
                noteholderId
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
    <div className="">
          <form className="bg-white rounded pb-8 mb-4" >
            
              <label 
                  className="block text-gray-700 text-sm font-bold mb-2" 
                  htmlFor="title">
                Titel
              </label>
              <input 
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                id="title" 
                type="text" 
                placeholder="Rubrik" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
        
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="noteDesc"
            >
              Beskrivning:
            </label>
            <textarea
              className="mb-4shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="noteDesc"
              placeholder="Beskrivning"
              value={desc}
              rows="6"
              onChange={(e) => setDesc(e.target.value)}
            />
          
{/* Status */}
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="status">
                Status
            </label>
              <select
                className="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                value={noteStatus}
                onChange={(e) => setNoteStatus(parseInt(e.target.value))}
              >
                <option value="">Ej klar</option>
                <option value="0">Avvakta</option>
                <option value="1">Startad</option>
                <option value="2">Klar</option>
              </select>
 {/* Prio */}
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="prio">
                Prioritet
            </label>
              <select
                className="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="prio"
                value={notePriority}
                onChange={(e) => setNotePriority(parseInt(e.target.value))}
              >
                <option value="">Prioriteringsnivå</option>
                <option value="0">Låg</option>
                <option value="1">Normal</option>
                <option value="2">Akut</option>
              </select>
         

          <div className="flex items-center space-x-5 mt-3">
            <button
                className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={HandleAddNote}
                >
              Lägg till anteckning
            </button>

            <button
                className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
                >
              Avbryt
            </button>
          </div>

        </form>
      </div>
    </>
  );  
}